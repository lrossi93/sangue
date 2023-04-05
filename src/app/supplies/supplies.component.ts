import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, CellValueChangedEvent, GetRowIdFunc, GetRowIdParams, GridApi } from 'ag-grid-community';
import { environment, Forecast, Order, OrderStatus, Product, SupplyGridRowData, User } from 'src/environments/environment';
import { AG_GRID_LOCALE_EN, AG_GRID_LOCALE_IT, defaultColDef, gridConfigSupplies } from 'src/environments/grid-configs';
import { DatepickerProductsDialogComponent } from '../datepicker-products-dialog/datepicker-products-dialog.component';
import { ForecastService } from '../forecast.service';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';
import { PharmaRegistryService } from '../pharma-registry.service';
import { SnackbarService } from '../snackbar.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {

  year: string = new Date().getFullYear().toString();
  dialogRef: any;
  dialog: any;

  users: User[] = [];
  products: Product[] = [];
  orders: Order[] = [];
  orderStatusArr: any[] = [];
  forecasts: Forecast[] = [];
  supplyGridRowData: SupplyGridRowData[] = [];

  suppliesGridConfig: any;

  //agGrid config
  ordersGridConfig!: any;
  defaultColDef: any = defaultColDef;
  gridOptions: any;

  //agGrid API handles
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  gridApi!: GridApi;
  api: any;
  columnApi: any;

  //spinner boolean
  //isLoading = true;//qui mostra lo spinner senza caricare nulla
  isLoading = false;

  public getRowId: GetRowIdFunc = (params: GetRowIdParams) => {
    return params.data.id;
  };

  localeText = (environment.currentLanguage == 'it' ? AG_GRID_LOCALE_IT : AG_GRID_LOCALE_EN);

  loginService!: LoginService
  constructor(
    private ordersService: OrdersService,
    private pharmaRegistryService: PharmaRegistryService,
    private usersService: UsersService,
    private forecastService: ForecastService,
    private snackbarService: SnackbarService,
    loginService: LoginService,
    dialog: MatDialog,
  ) { 
    this.loginService = loginService;
    this.dialog = dialog;

    this.loginService.getCurrentUserSync();

    if(environment.globalUsers.length == 0) {
      this.usersService.getUsersGlobally();
    }

    if(environment.globalProducts.length == 0) {
      this.pharmaRegistryService.getProductsGlobally();
    }    

    this.suppliesGridConfig = gridConfigSupplies;

    this.gridOptions = {
      onCellClicked: (event: CellClickedEvent) => {
        if(event.column.getColId() == "d_consegna_prevista" && event.data.status == "inviato al fornitore") {
          this.openEditDateDialog(event);
        }
      },
      onCellValueChanged: (event: CellValueChangedEvent) => {                
        //console.log("Changed from " + event.oldValue + " to " + event.newValue);
        var order: Order = {
          id: event.data.id,
          anno: event.data.anno,
          username: event.data.username,
          d_ordine: event.data.d_ordine,
          n_ordine: event.data.n_ordine,
          b_urgente: event.data.b_urgente,
          b_extra: event.data.b_extra,
          b_validato: event.data.b_validato,
          d_validato: event.data.d_validato,
          note: event.data.note,
          status: event.data.status,
          d_consegna_prevista: event.data.d_consegna_prevista,
          n_ddt: event.data.n_ddt,
          d_ddt: event.data.d_ddt,
          note_consegna: event.data.note_consegna,
          b_prestito: event.data.b_prestito,
          id_ordine_prestito: event.data.id_ordine_prestito,
          username_prestito_a: event.data.username_prestito_a,
          username_prestito_da: event.data.username_prestito_da
        }
          
        let orderStatus = {
          id: "0",
          username: localStorage.getItem('sangue_username')!,
          id_order: event.data.id,
          d_status: this.getFormattedDate(new Date()),
          status: event.data.status,
          note: "Fornitura modificata da " + localStorage.getItem('sangue_username'),
          b_sto: false
        }

        this.setOrder(order, orderStatus);
      }
    }
  }

  onFirstDataRendered = (event: any) => {
    this.retrieveColumnState();
  }
  
  retrieveColumnState() {
    let localColumnState = localStorage.getItem("suppliesColumnState");
    console.log(localStorage.getItem("suppliesColumnState"));
    if(localColumnState != null) {
      this.columnApi.applyColumnState({state: JSON.parse(localColumnState)});
    }
  }

  saveColumnState() {
    console.log("column state saved!")
    localStorage.setItem("suppliesColumnState", JSON.stringify(this.columnApi.getColumnState()));
  }

  ngOnInit(): void {}

  autoSizeColumns(skipHeader: boolean) {
    const allColumnIds: string[] = [];
    this.columnApi.getColumns()!.forEach((column: { getId: () => string; }) => {
      allColumnIds.push(column.getId());
    });
    this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  onGridReady = (params: { api: any; columnApi: any; }) => {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.getAllData();
    this.listProducts();
    this.listOrders(this.year);
    this.autoSizeColumns(false);
  }

  getAllData() {
    this.ordersService.listOrdersPromise(this.year).subscribe(
      res => {
        if(res[0] == "OK") {
          this.orders = res[1];
          this.orderStatusArr = [];
          this.getAllOrderStatusRec(this.orders, 0);
        }
        else {
          console.error("Error retrieving orders!");
        }
      }
    );
  }

  getAllOrderStatusRec(orders: Order[], i: number) {
    if(i >= orders.length) {
      this.listUsers();
      return;
    }
    this.ordersService.getOrderStatusPromise(orders[i].id).subscribe(
      res => {
        if(res[0] == "OK") {
          this.orderStatusArr.push(res[1][res[1].length - 1]);
          this.getAllOrderStatusRec(orders, i + 1);
        }
        else {
          console.error("Error retrieving orderStatus for order " + orders[i].id);
        }
      }
    );
  }

  listOrders(year: string) {
    this.ordersService.listOrdersPromise(year).subscribe(
      res => {
        if(res[0] == "OK") {
          this.orders = res[1];
        }
        else {
          console.error("Error retrieving orders!");
        }
      }
    );
  }

  listProducts() {
    this.pharmaRegistryService.listProductsPromise().subscribe(
      res => {
        if(res[0] == "OK"){
          this.products = res[1];
        }
        else {
          console.error("Error retrieving products!");
        }
      }
    );
  }

  listUsers() {
    //this.isLoading = true;//qui continua a scaricare dati
    this.usersService.listUsersPromise('210').subscribe(
      res => {
        this.isLoading = true;//QUI FUNZIONAAAAAAAAAAAAAAAAAAAAAA
        if(res[0] == "OK") {
          this.users = res[1];
          this.createSupplyGridRowData();
        }
        else {
          console.error("Error retrieving users!");
        }
      }
    );
  }

  createSupplyGridRowData() {
    this.supplyGridRowData = [];
    for(var i = 0; i < this.orders.length; ++i) {
      //aggiungo solo gli ordini con stato "inviato al fornitore" o "inviato al cliente"
      var lock: boolean = false;
      let toCustomerCondition = false;

      switch(this.orderStatusArr[i].status){
        case "inviato al fornitore":
          toCustomerCondition = false;
          break;
        default:
          toCustomerCondition = true;
          lock = true;
        break;
      }

      var newSupplyGridRowData = {
        id: this.orders[i].id,
        anno: this.orders[i].anno,
        username: this.orders[i].username,
        full_username: this.getFullUsernameById(this.orders[i].username), //per permettere di filtrare sullo username (client)
        d_ordine: this.orders[i].d_ordine,
        n_ordine: this.orders[i].n_ordine,
        b_urgente: this.orders[i].b_urgente,
        b_extra: this.orders[i].b_extra,
        b_validato: this.orders[i].b_validato,
        //prossimo campo non presente in orderGridRowData... sistemare
        b_to_customer: toCustomerCondition,
        d_validato: this.orders[i].d_validato,
        status: this.orderStatusArr[i].status,
        note: this.orders[i].note,
        d_consegna_prevista: this.orders[i].d_consegna_prevista,
        n_ddt: this.orders[i].n_ddt,
        d_ddt: this.orders[i].d_ddt,
        note_consegna: this.orders[i].note_consegna,
        isRowLocked: lock
      };
      this.supplyGridRowData.push(newSupplyGridRowData);
    }
    //console.log(this.supplyGridRowData);
    this.isLoading = false;
  }

  getFullUsernameById(id: string): string {
    for(var i = 0; i < this.users.length; ++i) {
      if(this.users[i].username == id) {
        return this.users[i].client;
      }
    }
    return "";
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

  getSupplyGridRowDataById(id: string): SupplyGridRowData | null {
    for(var i = 0; i < this.supplyGridRowData.length; ++i) {
      if(this.supplyGridRowData[i].id == id){
        return this.supplyGridRowData[i];
      }
    }
    console.error("ID " + id + " not found!");
    return null;
  }

  updateRow(id: string) {
    const toBeUpdated: any = [];
    const rowNodes: any = [];
    const supply = this.getSupplyGridRowDataById(id)!;
    this.api.forEachNodeAfterFilterAndSort(function (rowNode: { data: any; }) {
      if (rowNode.data.id != supply.id) {
        return;
      }
      const data = rowNode.data;
      data.b_to_customer = true;
      data.status = "inviato al cliente";
      data.isRowLocked = true;
      
      toBeUpdated.push(data);
      rowNodes.push(rowNode);
    });

    const res = this.api.applyTransaction({ update: toBeUpdated})!;
    this.snackbarService.onUpdate();
  }

  openEditDateDialog(event: CellClickedEvent) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      date: event.value//data.d_consegna_prevista,
    }

    this.dialogRef = this.dialog.open(
      DatepickerProductsDialogComponent, //TODO: generic datepicker dialog
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe( (result: {date: string, isOrderDate: boolean, isValidationDate: boolean, isSubmitted: boolean}) => {
      if(result !== undefined && result.isSubmitted){
        let order = {
          id: event.data.id,
          anno: event.data.anno,
          username: event.data.username,
          d_ordine: event.data.d_ordine,
          n_ordine: event.data.n_ordine,
          b_urgente: event.data.b_urgente,
          b_extra: event.data.b_extra,
          b_validato: event.data.b_validato,
          d_validato: event.data.d_validato,
          note: event.data.note,
          status: event.data.status,
          d_consegna_prevista: result.date, //here the date gets updated
          n_ddt: event.data.n_ddt,
          d_ddt: event.data.d_ddt,
          note_consegna: event.data.note_consegna,
          b_prestito: event.data.b_prestito,
          id_ordine_prestito: event.data.id_ordine_prestito,
          username_prestito_a: event.data.username_prestito_a,
          username_prestito_da: event.data.username_prestito_da
        }

        let orderStatus = {
          id: "0",
          username: localStorage.getItem('sangue_username')!,
          id_order: event.data.id,
          d_status: this.getFormattedDate(new Date()),
          status: "",
          note: "",
          b_sto: false
        }

        //when setting order date, just set order date
        order.d_consegna_prevista = result.date;
        orderStatus.status = event.data.status; //keep existing status
        orderStatus.note = "Data di consegna prevista impostata a " + order.d_consegna_prevista + " da " + localStorage.getItem('sangue_username');
        this.setOrder(order, orderStatus);
      }
    });
  }
  
  setOrder(order: Order, orderStatus: OrderStatus) {
    this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
      res => {
        if(res[0] == "KO"){
          console.error("Error setting order status for order " + order.id);
        }
        else{
          this.ordersService.setOrderPromise(order, false).subscribe(
            res2 => {
              if(res2 == "KO"){
                console.error("Error setting order with id " + order.id);
              }
              else{  
                this.setOrderLocally(order, orderStatus);
              }
            }
          );
        }
      }
    );
  }

  setOrderLocally(order: Order, orderStatus: OrderStatus) {    
    for(let i = 0; i < this.orders.length; ++i) {
      if(order.id == this.orders[i].id) {
        this.orders[i].anno = order.anno;
        this.orders[i].username = order.username;
        this.orders[i].d_ordine = order.d_ordine;
        this.orders[i].b_urgente = order.b_urgente;
        this.orders[i].b_extra = order.b_extra;
        this.orders[i].b_validato = order.b_validato;
        this.orders[i].d_validato = order.d_validato;
        this.orders[i].note = order.note;
        this.orders[i].d_consegna_prevista = order.d_consegna_prevista;
        this.orders[i].n_ddt = order.n_ddt;
        this.orders[i].d_ddt = order.d_ddt;
        this.orders[i].note_consegna = order.note_consegna;
        this.orderStatusArr[i].status = orderStatus.status;

        let isLockedCondition: boolean;
        if(this.loginService.getUserCode() == "210") {
          isLockedCondition = orderStatus.status != "inviato";
        }
        if(this.loginService.getUserCode() == "220") {
          isLockedCondition = !(orderStatus.status == "inviato" || orderStatus.status == "confermato");
        }

        this.supplyGridRowData[i].id = order.id;
        this.supplyGridRowData[i].anno = order.anno;
        this.supplyGridRowData[i].username = order.username;
        this.supplyGridRowData[i].full_username = this.getFullUsernameById(order.username);
        this.supplyGridRowData[i].d_ordine = order.d_ordine;
        this.supplyGridRowData[i].n_ordine = order.n_ordine;
        this.supplyGridRowData[i].b_urgente = order.b_urgente;
        this.supplyGridRowData[i].b_extra = order.b_extra;
        this.supplyGridRowData[i].b_validato = order.b_validato;
        this.supplyGridRowData[i].d_validato = order.d_validato;
        this.supplyGridRowData[i].status = orderStatus.status;
        this.supplyGridRowData[i].note = order.note;
        this.supplyGridRowData[i].d_consegna_prevista = order.d_consegna_prevista;
        this.supplyGridRowData[i].n_ddt = order.n_ddt;
        this.supplyGridRowData[i].d_ddt = order.d_ddt;
        this.supplyGridRowData[i].note_consegna = order.note_consegna;
        this.supplyGridRowData[i].isRowLocked = isLockedCondition!; 
        
        this.updateRow(this.supplyGridRowData[i].id);
        this.snackbarService.onUpdate();
        return;
      }
    }
  }
}