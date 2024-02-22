import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, CellValueChangedEvent, ColumnState, ColumnStateParams, GetRowIdFunc, GetRowIdParams, GridApi } from 'ag-grid-community';
import { environment, Forecast, LoanGridRowData, Order, OrderRow, OrderStatus, Product, User } from 'src/environments/environment';
import { AG_GRID_LOCALE_EN, AG_GRID_LOCALE_IT, defaultColDef, gridConfigLoans210, gridConfigLoans220 } from 'src/environments/grid-configs';
import { AddLoanDialogComponent } from '../add-loan-dialog/add-loan-dialog.component';
import { ForecastService } from '../forecast.service';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';
import { PharmaRegistryService } from '../pharma-registry.service';
import { SnackbarService } from '../snackbar.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  order: Order = {
    id: "",
    anno: 0,
    mese: 0,
    username: "",
    d_ordine: "", 
    n_ordine: 0,
    b_urgente: false,
    b_extra: false,
    b_validato: false,
    d_validato: "",
    status: "",
    note: "",
    d_consegna_prevista: "",
    n_ddt: "",
    d_ddt: "",
    note_consegna: "",
    b_prestito: false,
    id_ordine_prestito: "",
    username_prestito_a: "",
    username_prestito_da: ""
  }

  dataCount = 0;

  year: string = new Date().getFullYear().toString();
  products: Product[] = [];
  users: User[] = [];
  forecasts: Forecast[] = [];
  orders: Order[] = [];
  loans: Order[] = [];
  loanGridRowData: LoanGridRowData[] = [];

  dialogRef: any;
  dialog: any;

  isLoading: boolean = false;

  userCode = "";

  localeText = (environment.currentLanguage == 'it' ? AG_GRID_LOCALE_IT : AG_GRID_LOCALE_EN);

  //agGrid config
  ordersGridConfig!: any;
  defaultColDef: any = defaultColDef;
  gridOptions: any;

  //agGrid API handles
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  gridApi!: GridApi;
  api: any;
  columnApi: any;
  loginService!: LoginService;
  
  public getRowId: GetRowIdFunc = (params: GetRowIdParams) => {
    return params.data.id;
  };
  
  constructor(
    loginService: LoginService,
    private pharmaRegistryService: PharmaRegistryService,
    private usersService: UsersService,
    private forecastService: ForecastService,
    private ordersService: OrdersService,
    dialog: MatDialog,
    private router: Router,
    private snackbarService: SnackbarService
  ) { 
    this.loginService = loginService;
    this.dialog = dialog;
    //this.getData();
    this.loginService.getCurrentUserSync();

    this.userCode = this.loginService.getUserCode()!;

    if(this.loginService.getUserCode() == "210") {
      this.ordersGridConfig = gridConfigLoans210;
    }
    if(this.loginService.getUserCode() == "220") {
      this.ordersGridConfig = gridConfigLoans220;
    }
    //gridOptions
    this.gridOptions = {
      onCellClicked: (event: CellClickedEvent) => {
        //console.log(event);
      },
      onCellValueChanged: (event: CellValueChangedEvent) => {                
        //console.log("Changed from " + event.oldValue + " to " + event.newValue);
        //if row is not locked and an update is received, perform update
        this.order.id = event.data.id;
        this.order.anno = event.data.anno;
        this.order.username = event.data.username;
        this.order.d_ordine = event.data.d_ordine;
        this.order.n_ordine = event.data.n_ordine;
        this.order.b_urgente = event.data.b_urgente;
        this.order.b_extra = event.data.b_extra;
        this.order.b_validato = event.data.b_validato;
        this.order.d_validato = event.data.d_validato;
        this.order.n_ddt = event.data.n_ddt;
        this.order.d_ddt = event.data.d_ddt;
        this.order.d_consegna_prevista = event.data.d_consegna_prevista;
        this.order.note = event.data.note;   
        this.order.note_consegna = event.data.note_consegna
        
        //not adding but editing
        let isAdding = false;
        let orderStatus = {
          id: "0",
          username: localStorage.getItem('sangue_username')!,
          id_order: event.data.id,
          d_status: this.getFormattedDate(new Date()),
          status: "prestito",
          note: "Prestito richiesto da " + localStorage.getItem('sangue_username'),
          b_sto: false
        }
      }
    }
  }

  onGridReady = (params: { api: any; columnApi: any; }) => {
    this.api = params.api;
    //console.log(this.api);
    this.columnApi = params.columnApi;
    //this.api.sizeColumnsToFit();
    //this.autoSizeColumns(false);
    this.getData();
  }

  autoSizeColumns(skipHeader: boolean) {
    const allColumnIds: string[] = [];
    this.columnApi.getColumns()!.forEach((column: { getId: () => string; }) => {
      allColumnIds.push(column.getId());
    });
    this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  onFirstDataRendered = (event: any) => {
    this.retrieveColumnState();
  }
  
  retrieveColumnState() {
    const localColumnState = localStorage.getItem("loansColumnState");
    //console.log("Column state:");
    //console.log(localColumnState);
    if(localColumnState != null) {
      console.log(JSON.parse(localColumnState));
      this.columnApi.applyColumnState({state: JSON.parse(localColumnState), applyOrder: true});
    }
  }

  saveColumnState() {
    const allState = this.columnApi.getColumnState();
    const localColumnState = allState.map(
      (state: any) => ({
          colId: state.colId,
          sort: state.sort,
          sortIndex: state.sortIndex,
          aggFunc: state.aggFunc,
          flex: state.flex,
          pinned: state.pinned,
          pivot: state.pivot,
          pivotIndex: state.pivotIndex,
          rowGroup: state.rowGroup,
          rowGroupIndex: state.rowGroupIndex,
          width: state.width
        }));
    
   /*
    let localColumnState = this.columnApi.getColumnState();
    for(let i = 0; i < localColumnState.length; ++i) {
      localColumnState[i].sortIndex = i;
    }
    */
    console.log(localColumnState);
    localStorage.setItem("loansColumnState", JSON.stringify(localColumnState));
  }

  ngOnInit(): void {
  }

  getData() {
    this.isLoading = true;
    this.dataCount = 0;
    if(environment.globalUsers.length == 0) {
      //console.log("Getting users...");
      this.getUsersGlobally();
    }
    else {
      this.users = environment.globalUsers;
      this.dataCount++;
      this.createLoanGridRowData();
    }

    if(environment.globalProducts.length == 0) {
      //console.log("Getting products...");
      this.getProductsGlobally();
    }
    else {
      this.products = environment.globalProducts;
      this.dataCount++;
      this.createLoanGridRowData();
    }

    if(environment.globalForecasts.length == 0) {
      //console.log("Getting forecasts...");
      this.getForecastsGlobally(this.year);
    }
    else {
      this.forecasts = environment.globalForecasts;
      this.dataCount++;
      this.createLoanGridRowData();
    }

    if(environment.globalOrders.length == 0 || environment.globalOrders.length != this.orders.length) {
      //console.log("Getting loans...");
      this.getLoansGlobally(this.year);
    }
    else {
      this.orders = environment.globalOrders;
      this.filterLoans();
      this.dataCount++;
      this.createLoanGridRowData();
    }
  }

  listLoans(year: string) {
    this.ordersService.listOrdersPromise(year).subscribe(
      res => {
        if(res[0] != "KO") {
          this.orders = res[1];
          this.filterLoans();
          this.createLoanGridRowData();
          //this.getAllOrderStatusRec(this.orders, 0);
        }
        else {
          this.loginService.logoutPromise().subscribe(
            res => {
              this.router.navigate([""]);
            }
          )
        }
      }
    );
  }

  getUsersGlobally() {
    this.usersService.listUsersPromise('210').subscribe(
      res => {
        if(res[0] == "OK") {
          ////console.log(res[1]);
          this.users = res[1];
          environment.globalUsers = res[1];
          this.dataCount++;
          this.createLoanGridRowData();
          this.loginService.getCurrentUser(this.users);
          //this.removeCurrentUserFromUsers();
        }
        else {
          console.error("Error retrieving users globally!");
        }
      }
    );
  }

  //useless here
  removeCurrentUserFromUsers() {
    for(var i = 0; i < this.users.length; ++i) {
      if(this.users[i].id == this.loginService.currentUser.id) {
        this.users.splice(i, 1);
      }
    }
  }

  getProductsGlobally() {
    this.pharmaRegistryService.listProductsPromise().subscribe(
      res => {
        if(res[0] == "OK") {
          //console.log(res[1]);
          this.products = res[1];
          environment.globalProducts = res[1];
          this.dataCount++;
          this.createLoanGridRowData();
        }
        else {
          console.error("Error retrieving products globally!");
        }
      }
    );
  }

  getForecastsGlobally(year: string) {
    this.forecastService.listForecastsPromise(year).subscribe(
      res => {
        if(res[0] == "OK") {
          //console.log(res[1]);
          this.forecasts = res[1];
          environment.globalForecasts = res[1];
          this.dataCount++;
          this.createLoanGridRowData();
        }
        else {
          console.error("Error retrieving forecasts globally");
        }
      }
    );
  }

  getLoansGlobally(year: string) {
    this.ordersService.listOrdersPromise(year).subscribe(
      res => {
        if(res[0] == "OK") {
          console.log(res[1]);
          this.orders = res[1];
          environment.globalOrders = res[1];
          this.filterLoans();
          this.dataCount++;
          this.createLoanGridRowData();
        }
        else {
          console.error("Error retrieving orders globally!");
        }
      }
    );
  }

  filterLoans() {
    this.loans = [];
    for(var i = 0; i < this.orders.length; ++i) {      
      if(this.orders[i].status == "prestito") {
        //if user 220 add all
        //if user 210 add only given and received
        if(this.loginService.getUserCode() == "220"){
          this.loans.push(this.orders[i]);
        }
        if(this.loginService.getUserCode() == "210"){
          if(this.orders[i].username == localStorage.getItem("sangue_username") || this.orders[i].username_prestito_a == localStorage.getItem("sangue_username")) {
            this.loans.push(this.orders[i]);
          }
        }
      }
    }
    console.log(this.loans);
  }

  openAddLoanDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      users: this.users,
      products: this.products,
      forecasts: this.forecasts,
    }

    dialogConfig.width = "95%";
    dialogConfig.maxHeight = "500px";
        
    this.dialogRef = this.dialog.open(
      AddLoanDialogComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { 
        newLoanReq: Order, 
        newLoanRes: Order, 
        newLoanRowReq: OrderRow, 
        newLoanRowRes: OrderRow, 
        isSubmitted: boolean 
      }) => {
        if(result !== undefined){
          if(result.isSubmitted){
            
            //console.log(result.newLoanReq);
            //console.log(result.newLoanRowReq);
            //console.log(result.newLoanRes);
            //console.log(result.newLoanRowRes);
            
            this.setLoan(result.newLoanReq, result.newLoanRowReq, result.newLoanRes, result.newLoanRowRes, true);
          }
        }
      }
    );
  }

  getFormattedDate(date: Date): string {
    let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
    
    let day = splitDate[0];
    let month = splitDate[1];
    let year = splitDate[2];

    if(day.length == 1){
      day = "0" + day;
    }
    if(month.length == 1){
      month = "0" + month;
    }
    return year + "-" + month + "-" + day;  
  }

  setLoan(loanReq: Order, loanRowReq: OrderRow, loanRes: Order, loanRowRes: OrderRow, isAdding: boolean) {
    console.log(loanReq);
    //loanReq.b_prestito
    this.ordersService.setOrderPromise(loanReq, isAdding).subscribe(
      res1 => {
        if(res1[0] == "OK") {
          //loanReq missing fields
          loanReq.id = res1[1][0];
          loanReq.id_ordine_prestito = res1[1][0];
          loanReq.n_ordine = res1[1][1];

          //console.log("update>>>loanReq");
          //console.log(loanReq);
          loanRes.id_ordine_prestito = res1[1][0];
          this.ordersService.setOrderPromise(loanReq, !isAdding).subscribe(
            res11 => {
              if(res11[0] == "OK") {

              }
              else {
                console.error("Error setting loan!");
              }
            }
          );
          
          ////console.log(loanRes);
          this.ordersService.setOrderPromise(loanRes, isAdding).subscribe(
            res2 => {
              if(res2[0] == "OK") {
                loanRes.id = res2[1][0];
                loanRes.n_ordine = res2[1][1];
                loanRes.id_ordine_prestito = res1[1][0];
                loanRowRes.id_ordine = res2[1][0];
                //console.log("update>>>loanRes");
                //console.log(loanRes);
                
                //loanRows
                loanRowReq.id_ordine = loanReq.id;
                loanRowRes.id_ordine = loanRes.id;
                //console.log(loanRowReq);

                this.ordersService.setOrderRowPromise(loanRowReq, isAdding).subscribe(
                  resLrReq => {
                    if(resLrReq[0] == "OK") {
                      loanRowReq.id = resLrReq[1];
                      this.setLoanLocally(loanReq);
                      //console.log("update>>>loanRowReq");
                      //console.log(loanRowReq);
                    }
                    else {
                      //console.error("Error setting loan row request!");
                    }
                  }
                );

                loanRowRes.id_ordine = res2[1][0];
                //console.log(loanRowRes);
                this.ordersService.setOrderRowPromise(loanRowRes, isAdding).subscribe(
                  resLrRes => {
                    if(resLrRes[0] == "OK") {
                      loanRowRes.id = resLrRes[1];
                      //console.log("update>>>loanRowRes");
                      //console.log(loanRowRes);
                    }
                    else {
                      console.error("Error setting loan row response!");
                    }
                  }
                );

                let orderStatusReq: OrderStatus = {
                  id: "0",
                  username: loanReq.username,
                  id_order: loanReq.id,
                  d_status: loanReq.d_ordine,           
                  status: "prestito",
                  note: loanReq.username + " concede prestito a " + loanRes.username,
                  b_sto: false
                }

                let orderStatusRes: OrderStatus = {
                  id: "0",
                  username: loanRes.username,
                  id_order: loanRes.id,
                  d_status: loanRes.d_ordine,           
                  status: "prestito",
                  note: loanRes.username + " riceve prestito da " + loanReq.username,
                  b_sto: false
                }

                this.ordersService.setOrderStatusPromise(orderStatusReq).subscribe(
                  res3 => {
                    if(res3[0] == "OK") {
                      //this.setLoanLocally();
                    }
                    else {
                      console.error("Error setting loanReq!");
                    }
                  }
                );

                this.ordersService.setOrderStatusPromise(orderStatusRes).subscribe(
                  res3 => {
                    if(res3[0] == "OK") {
                      //this.setLoanLocally();
                    }
                    else {
                      //console.error("Error setting loanReq!");
                    }
                  }
                );
              }
              else {
                console.error("Error setting loanRes!");
              }
            }
          );
        }
        else {
          console.error("Error setting loanReq!");
        }
      }
    );
  }

  setLoanLocally(loan: Order){
    console.log("sangue-username: " + loan.username_prestito_da)
    console.log("full-username: " + this.getClientByUsername(loan.username_prestito_da))
    let newLoanGridRowData = {
      id: loan.id,
      anno: loan.anno,
      mese: loan.mese,
      username: loan.username,
      full_username_from: this.getClientByUsername(loan.username_prestito_da)!,
      full_username_to: this.getClientByUsername(loan.username_prestito_a)!,
      d_ordine: loan.d_ordine,
      n_ordine: loan.n_ordine,
      note: loan.note,
      b_prestito: loan.b_prestito,
      id_ordine_prestito: loan.id_ordine_prestito
    }

    this.loanGridRowData.push(newLoanGridRowData);
    //this.orders.push(loan);
    this.api.applyTransaction({
      add: [{
        id: loan.id,
      anno: loan.anno,
      mese: loan.mese,
      username: loan.username,
      full_username_from: localStorage.getItem("sangue_client")!,//this.getClientByUsername(loan.username_prestito_da)!,
      full_username_to: this.getClientByUsername(loan.username_prestito_a)!,
      d_ordine: loan.d_ordine,
      n_ordine: loan.n_ordine,
      note: loan.note,
      b_prestito: loan.b_prestito,
      id_ordine_prestito: loan.id_ordine_prestito
      }]
    });
    this.orders.push(loan);
    //this.api.ensureIndexVisible(this.orderGridRowData.length - 1);
    //this.createOrderGridRowData();
    this.snackbarService.onCreate();
  }

  createLoanGridRowData() {
    console.log(this.dataCount);
    
    if(this.dataCount == 4) {
      this.dataCount = 0;
      this.loanGridRowData = [];
      //n_ordine, d_ordine, username_from, username_to?, note, buttonLoanDetails...
      console.log(this.loans);
      for(var i = 0; i < this.loans.length; ++i) {
        if(this.loans[i].status == "prestito" && this.loans[i].anno.toString() == this.year) {
          //console.log(this.loans[i]);
          let newLoanGridRowData = {
            id: this.loans[i].id,
            anno: this.loans[i].anno,
            mese: this.loans[i].mese,
            username: this.loans[i].username,
            full_username_from: this.getClientByUsername(this.loans[i].username_prestito_da)!,
            full_username_to: this.getClientByUsername(this.loans[i].username_prestito_a)!,
            d_ordine: this.loans[i].d_ordine,
            n_ordine: this.loans[i].n_ordine,
            note: this.loans[i].note,
            b_prestito: this.loans[i].b_prestito,
            id_ordine_prestito: this.loans[i].id_ordine_prestito
          }
          this.loanGridRowData.push(newLoanGridRowData);
        }
      }
      this.isLoading = false;
      console.log(this.loanGridRowData);
      //this.api.setRowData(this.loanGridRowData);
    }
  }

  getClientByUsername(username: string): string | null {
    for(var i = 0; i < this.users.length; ++i) {
      console.log(this.users[i].username);
      if(this.users[i].username == username) {
        //console.log(this.users[i].username);
        return this.users[i].client;
      }
    }
    return null;
  }

  getToClientByIdAndIdOrdinePrestito(id: string): string | null {
    //console.log("id: " + id);
    //console.log("id_p: " + id_ordine_prestito);
    
    for(var i = 0; i < this.loans.length; ++i) {
      if(this.loans[i].id_ordine_prestito == id) {
        console.log(this.loans[i]);
        return this.getClientByUsername(this.loans[i].username);
      }
    }
    return null;
  }
}
