import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, CellValueChangedEvent, GetRowIdFunc, GetRowIdParams, GridApi, ILoadingCellRendererParams } from 'ag-grid-community';
import { environment, Forecast, Order, OrderGridRowData, OrderRow, OrderStatus } from 'src/environments/environment';
import { AG_GRID_LOCALE_EN, AG_GRID_LOCALE_IT, defaultColDef, gridConfigOrders210, gridConfigOrders210Locked, gridConfigOrders220, gridConfigOrders220Locked } from 'src/environments/grid-configs';
import { AddOrderDialogComponent } from '../add-order-dialog/add-order-dialog.component';
import { DatepickerProductsDialogComponent } from '../datepicker-products-dialog/datepicker-products-dialog.component';
import { ForecastService } from '../forecast.service';
import { LoginService } from '../login.service';
import { OrderablePeriodService } from '../orderable-period.service';
import { OrdersService } from '../orders.service';
import { PharmaRegistryService } from '../pharma-registry.service';
import { SnackbarService } from '../snackbar.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  order: Order = {
    id: "",
    anno: 0,
    username: "",
    d_ordine: "", 
    n_ordine: 0,
    b_urgente: false,
    b_extra: false,
    b_validato: false,
    d_validato: "",
    note: "",
    d_consegna_prevista: "0000-00-00",
    n_ddt: "",
    d_ddt: "",
    note_consegna: "",
  }
  orders: any = [];
  orderGridRowData: OrderGridRowData[] = [];
  orderRows: any = [];
  users: any = [];
  products: any = [];
  forecasts: Forecast[] = [];
  orderStatusArr: any[] = [];

  day: number = parseInt(new Date().toLocaleString('it-IT').split(",", 2)[0].split("/", 2)[0]);
  gg_min!: number;
  gg_max!: number;
  isDateLocked!: boolean;

  year: string = new Date().getFullYear().toString();
  dialogRef: any;
  dialog: any;

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
  loading: boolean = true;
  visibleIndex: number = 0;
  
  //public domLayout: DomLayoutType = 'autoHeight';

  public getRowId: GetRowIdFunc = (params: GetRowIdParams) => {
    return params.data.id;
  };

  localeText = (environment.currentLanguage == 'it' ? AG_GRID_LOCALE_IT : AG_GRID_LOCALE_EN);

  //loading animation
  //loadingCellRenderer: LoadingCellRendererComponent;
  //loadingCellRendererParams: ILoadingCellRendererParams;

  constructor(
    public loginService: LoginService,
    private ordersService: OrdersService,
    private usersService: UsersService,
    private pharmaRegistryService: PharmaRegistryService,
    dialog: MatDialog,
    private router: Router,
    private orderablePeriodService: OrderablePeriodService,
    private forecastService: ForecastService,
    private snackbarService: SnackbarService
  ) {    
    this.dialog = dialog;
    this.loading = true;

    if(environment.globalUsers.length == 0) {
      //get users and populate globalUsers
      this.usersService.getUsersGlobally();
    }
    if(environment.globalProducts.length == 0) {
      this.pharmaRegistryService.getProductsGlobally();
    }    
    if(environment.globalForecasts.length == 0) {
      this.forecastService.getForecastsGlobally(this.year);
    }

    //gridOptions
    this.gridOptions = {
      onCellClicked: (event: CellClickedEvent) => {
        if(!event.node.data.isRowLocked) {
          if(event.column.getColId() == "d_ordine") {
              this.openEditDateDialog(event);
          }
          if(event.column.getColId() == "d_validato" && loginService.getUserCode() == "220") {
            this.openEditDateDialog(event);
          }
        }
      },
      onCellValueChanged: (event: CellValueChangedEvent) => {                
        //console.log("Changed from " + event.oldValue + " to " + event.newValue);
        //if row is not locked and an update is received, perform update
        //TODO: se imposto una data di validazione, deve essere MAGGIORE o UGUALE alla data dell'ordine
        console.log("isRowLocked: " + event.node.data.isRowLocked);
        console.log("isDateLocked: " + this.isDateLocked);
        
        if(!event.node.data.isRowLocked && !this.isDateLocked){
          console.log("the order was not locked, so I modify it!");
          
          this.order.id = event.data.id;
          this.order.anno = event.data.anno;
          this.order.username = event.data.username;
          this.order.d_ordine = event.data.d_ordine;
          this.order.n_ordine = event.data.n_ordine;
          this.order.b_urgente = event.data.b_urgente;
          this.order.b_extra = event.data.b_extra;
          this.order.b_validato = event.data.b_validato;
          this.order.d_validato = event.data.d_validato;
          this.order.note = event.data.note;   
          
          //not adding but editing
          let isAdding = false;
          let orderStatus = {
            id: "0",
            username: localStorage.getItem('sangue_username')!,
            id_order: event.data.id,
            d_status: this.getFormattedDate(new Date()),
            status: event.column.getColId() == 'd_validato' || event.column.getColId() == 'b_validato' ? "confermato" : "inviato",
            note: event.column.getColId() == 'd_validato' || event.column.getColId() == 'b_validato' ? "confermato da " + localStorage.getItem('sangue_username')! : "inviato",
            b_sto: false
          }

          this.setOrder(this.order, orderStatus, isAdding);
          //this.api.setFocusedCell(event.rowIndex, event.column.getColId(), "top");
        }
      }
    }
  }


  onGridReady = (params: { api: any; columnApi: any; }) => {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.listForecasts(this.year);
    this.listProducts();
    this.autoSizeColumns(false);
    this.api.setDomLayout('autoHeight');
  }

  autoSizeColumns(skipHeader: boolean) {
    const allColumnIds: string[] = [];
    this.columnApi.getColumns()!.forEach((column: { getId: () => string; }) => {
      allColumnIds.push(column.getId());
    });
    this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  ngOnInit(): void {
    this.loginService.checkPromise().subscribe(
      res => {
        if(res[0] == "KO"){
          this.router.navigate(['login']);
        }
      }
    );

    this.getAllData();
  }

  logAPI(){
    console.log(this.api);
  }

  /*
  
        ORDERS ===========================

  */  
  listOrders(year: string) {
    this.loading = true;
    this.ordersService.listOrdersPromise(year).subscribe(
      res => {
        if(res[0] != "KO") {
          this.orders = res[1];
          this.listUsersAndSetLock('210');
          this.getAllOrderStatusRec(this.orders, 0);
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

  listOrdersAndForecasts(year: string) {
    this.listOrders(year);
    this.listForecasts(year);
  }

  getFullUsernameById(id: string): string {
    for(var i = 0; i < this.users.length; ++i) {
      if(this.users[i].username == id) {
        return this.users[i].client;
      }
    }
    return "";
  }

  addOrderAndOrderRows(newOrder: Order, newOrderRows: OrderRow[]) {
    //this.ordersService.setOrder(newOrder, true);
    /*
    console.log("newOrder");
    console.log(newOrder);
    console.log("newOrderRows");
    console.log(newOrderRows);
    console.log("validato: "+ newOrder.b_validato ? "confermato" : "inviato");
    */
    this.ordersService.setOrderPromise(newOrder, true).subscribe(
      res => {
        if(res[0] == "OK") {
          newOrder.id = res[1][0];
          //set order status
          let orderStatus = {
            id: "0",
            username: localStorage.getItem('sangue_username')!,
            id_order: newOrder.id,
            d_status: newOrder.d_ordine,           
            status: newOrder.b_validato ? "confermato" : "inviato",          //order has just been created
            note: "ordine appena creato da " + localStorage.getItem('sangue_username'),
            b_sto: false
          }
          
          //set orderId and username for all orderRows before submitting
          for(var i = 0; i < newOrderRows.length; ++i) {
            newOrderRows[i].id_ordine = res[1][0];
            newOrderRows[i].username = newOrder.username;
          }

          //save status on db and locally
          this.setOrderStatus(orderStatus);
          this.orderStatusArr.push(orderStatus);

          //then save all orderRows on db
          this.setOrderRowRec(newOrderRows, 0);

          //update grid
          this.setOrderLocally(newOrder, orderStatus, true);
        }
      }
    );
  }

  setOrderRowRec(newOrderRows: OrderRow[], index: number) {
    if(index >= newOrderRows.length) {
      //console.log("Exiting setOrderRowRec()");
      this.snackbarService.onCreate();
      return;
    }
    else {
      this.ordersService.setOrderRowPromise(newOrderRows[index], true).subscribe(
        res => {
          if(res[0] == "OK") {
            //console.log("You saved the following orderRow:");
            //console.log(newOrderRows[index]);
            this.setOrderRowRec(newOrderRows, index + 1);
          }
          else {
            console.error("Error saving orderRow!");
          }
        }
      );
    }
  }

  validateOrderRowsRec(orderRows: OrderRow[], index: number) {
    if(index >= orderRows.length){
      //console.log("Exiting validateOrderRowsRec()");
      this.snackbarService.onValidate();
      return;
    }
    else {
      if(orderRows[index].qta_validata == 0){
        orderRows[index].qta_validata = orderRows[index].qta;
      }
      this.ordersService.setOrderRowPromise(orderRows[index], false).subscribe(
        res => {
          if(res[0] == "OK") {
            this.validateOrderRowsRec(orderRows, index + 1);
          }
          else {
            console.error("Error validating orderRow!");
          }
        }
      );
    }
  }

  confirmQtaRicevutaOrderRowsRec(orderRows: OrderRow[], index: number) {
    if(index >= orderRows.length){
      this.snackbarService.onUpdate();
      return;
    }
    else {
      if(orderRows[index].qta_ricevuta == 0){
        orderRows[index].qta_ricevuta == orderRows[index].qta_validata;
      }
      this.ordersService.setOrderRowPromise(orderRows[index], false).subscribe(
        res => {
          if(res[0] == "OK") {
            this.confirmQtaRicevutaOrderRowsRec(orderRows, index + 1);
          }
          else {
            console.error("Error confirming received quantity on orderRow!");
          }
        }
      );
    }
  }

  rmOrderAndOrderRows(orderId: string, orderRows: OrderRow[]) {
    this.ordersService.rmOrderPromise(orderId).subscribe(
      res => {
        if(res[0] == "OK") {
          this.rmOrderLocally(orderId);
          for(var i = 0; i < orderRows.length; ++i){
            this.rmOrderRow(orderRows[i].id);
          }
        }
      }
    );
  }

  rmOrder(orderId: string) {
    this.ordersService.rmOrderPromise(orderId).subscribe(
      res => {
        if (res[0] == "OK") {
          this.rmOrderLocally(orderId);
        }
        else {
          console.error("Error remiving order with ID: " + orderId);
        }
      }
    );
  }

  getOrderGridRowDataById(id: string): OrderGridRowData | null {
    for(var i = 0; i < this.orderGridRowData.length; ++i) {
      if(this.orderGridRowData[i].id == id){
        return this.orderGridRowData[i];
      }
    }
    console.error("ID " + id + " not found!");
    return null;
  }

  rmOrderLocally(id: string) {
    let visible = 0;
    for(let i = 0; i < this.orders.length; ++i) {
      if(id == this.orders[i].id){
        this.orders.splice(i, 1);
        if(this.orders.length == 0) {
          //no-op
        }
        else {
          //if it was the last index, make the current last index visible
          if(i == this.orders.length){
            visible = this.orders.length - 1;
          }
          //if it was not the last index, make the current i index visible
          else{
            visible = i;
          }
        }
        //this.createOrderGridRowData();
        //this.updateGrid();
        this.removeRow(this.getOrderGridRowDataById(id)!);
        //this.api.ensureIndexVisible(visible);
        this.snackbarService.onDelete();
        return;
      }
    }
    console.error("Order ID " + id + " not found: order not deleted!");
  }

  removeRow(order: OrderGridRowData) {
    const toBeRemoved: any = [];
    const rowNodes: any = [];
    this.api.forEachNodeAfterFilterAndSort(function (rowNode: { data: any; }) {
      if (rowNode.data.id != order.id) {
        return;
      }
      
      const data = rowNode.data;
      data.anno = order.anno;
      data.username = order.username;
      data.full_username = order.full_username;
      data.d_ordine = order.d_ordine;
      data.n_ordine = order.n_ordine;
      data.b_urgente = order.b_urgente;
      data.b_extra = order.b_extra;
      data.b_validato = order.b_validato;
      data.b_to_supplier = order.b_to_supplier;
      data.d_validato = order.d_validato;
      data.status = order.status;
      data.note = order.note;
      data.isRowLocked = order.isRowLocked;

      toBeRemoved.push(data);
      rowNodes.push(rowNode);
    });

    const res = this.api.applyTransaction({ remove: toBeRemoved})!;
    //this.api.redrawRows(rowNodes);
    console.log(res);
  }

  rmOrderRow(id: string){
    this.ordersService.rmOrderRow(id);
  }

  setOrder(order: Order, orderStatus: OrderStatus, isAdding: boolean) {
    console.log("Order:");
    console.log(order);

    this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
      res => {
        if(res[0] == "KO"){
          console.error("Error setting order status for order " + order.id);
        }
        else{
          this.ordersService.setOrderPromise(order, isAdding).subscribe(
            res2 => {
              if(res2 == "KO"){
                console.error("Error setting order with id " + order.id);
              }
              else{  
                this.setOrderLocally(order, orderStatus, isAdding);
              }
            }
          );
        }
      }
    );
  }

  setOrderLocally(order: Order, orderStatus: OrderStatus, isAdding: boolean) {    
    if(!isAdding) {
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
          this.orderStatusArr[i].status = orderStatus.status;

          let isLockedCondition: boolean;
          if(this.loginService.getUserCode() == "210") {
            isLockedCondition = orderStatus.status != "inviato";
          }
          if(this.loginService.getUserCode() == "220") {
            isLockedCondition = !(orderStatus.status == "inviato" || orderStatus.status == "confermato");
          }

          this.orderGridRowData[i].id = order.id;
          this.orderGridRowData[i].anno = order.anno;
          this.orderGridRowData[i].username = order.username;
          this.orderGridRowData[i].full_username = this.getFullUsernameById(order.username); //per permettere di filtrare sullo username (client)
          this.orderGridRowData[i].d_ordine = order.d_ordine;
          this.orderGridRowData[i].n_ordine = order.n_ordine;
          this.orderGridRowData[i].b_urgente = order.b_urgente;
          this.orderGridRowData[i].b_extra = order.b_extra;
          this.orderGridRowData[i].b_validato = order.b_validato;
          this.orderGridRowData[i].b_to_supplier = (orderStatus.status == "inviato al fornitore");
          this.orderGridRowData[i].d_validato = order.d_validato;
          this.orderGridRowData[i].status = orderStatus.status;
          this.orderGridRowData[i].note = order.note;
          this.orderGridRowData[i].isRowLocked = isLockedCondition!; 
          
          this.updateRow(this.orderGridRowData[i]);
          //this.api.ensureIndexVisible(i);
          this.snackbarService.onUpdate();
          return;
        }
      }
    }
    else {  
      //if the id is not present, append the new element
      let newOrderGridRowData = {
        id: order.id,
        anno: order.anno,
        username: order.username,
        full_username: this.getFullUsernameById(order.username), //per permettere di filtrare sullo username (client)
        d_ordine: order.d_ordine,
        n_ordine: order.n_ordine,
        b_urgente: order.b_urgente,
        b_extra: order.b_extra,
        b_validato: order.b_validato,
        b_to_supplier: (orderStatus.status == "inviato al fornitore"),
        d_validato: order.d_validato,
        status: orderStatus.status,
        note: order.note,
        d_consegna_prevista: "0000-00-00",
        n_ddt: "",
        d_ddt: "",
        note_consegna: "",  
        isRowLocked: false,
      }

      this.orderGridRowData.push(newOrderGridRowData);
      this.orders.push(order);
      this.api.applyTransaction({
        add: [{
          id: order.id,
          anno: order.anno,
          username: order.username,
          full_username: this.getFullUsernameById(order.username),
          d_ordine: order.d_ordine,
          n_ordine: order.n_ordine,
          b_urgente: order.b_urgente,
          b_extra: order.b_extra,
          b_validato: order.b_validato,
          b_to_supplier: false,
          d_validato: order.d_validato,
          status: newOrderGridRowData.status,
          note: order.note,
          isRowLocked: false
        }]
      });
      //this.api.ensureIndexVisible(this.orderGridRowData.length - 1);
      //this.createOrderGridRowData();
      this.snackbarService.onCreate();
    }
  }

  updateRow(order: OrderGridRowData) {
    const toBeUpdated: any = [];
    const rowNodes: any = [];
    var isSentToSupplier: boolean = false;
    this.api.forEachNodeAfterFilterAndSort(function (rowNode: { data: any; }) {
      if (rowNode.data.id != order.id) {
        return;
      }
      
      const data = rowNode.data;
      data.anno = order.anno;
      data.username = order.username;
      data.full_username = order.full_username;
      data.d_ordine = order.d_ordine;
      data.n_ordine = order.n_ordine;
      data.b_urgente = order.b_urgente;
      data.b_extra = order.b_extra;
      data.b_validato = order.b_validato;
      data.b_to_supplier = order.b_to_supplier;
      isSentToSupplier = order.b_to_supplier;
      data.d_validato = order.d_validato;
      data.status = order.status;
      data.note = order.note;
      data.isRowLocked = order.isRowLocked;

      toBeUpdated.push(data);
      rowNodes.push(rowNode);
    });

    const res = this.api.applyTransaction({ update: toBeUpdated})!;
    if(isSentToSupplier)
      this.api.redrawRows(rowNodes);//necessary to update checkboxes to "disabled"
    //console.log(res);
  }

  createOrderGridRowData() {
    this.orderGridRowData = [];
    for(var i = 0; i < this.orders.length; ++i) {
      var lock: boolean = false;

      //lock cells ONLY if customer!
      if(this.loginService.getUserCode() == "210"){
        //locked row conditions:
        //if date is locked, everything is locked
        if(this.isDateLocked == true){
          lock = true;
        }
        //if d_validato is set and != epoch, and if d_validato >= d_ordine the lock has been set
        if(
          (this.orders[i].d_validato != "0000-00-00" && this.orders[i].d_validato != "1970-01-01" && this.orders[i].d_validato >= this.orders[i].d_ordine) ||
          this.orderStatusArr[i].status == "inviato al fornitore") {
          lock = true;
        }
      }

      let toSupplierCondition = false;

      switch(this.orderStatusArr[i].status){
        case "inviato":
          toSupplierCondition = false;
          break;
        case "confermato":
          toSupplierCondition = false;
          break;
        default:
          toSupplierCondition = true;
          lock = true;
        break;
      }

      var newOrderGridRowData = {
        id: this.orders[i].id,
        anno: this.orders[i].anno,
        username: this.orders[i].username,
        full_username: this.getFullUsernameById(this.orders[i].username), //per permettere di filtrare sullo username (client)
        d_ordine: this.orders[i].d_ordine,
        n_ordine: this.orders[i].n_ordine,
        b_urgente: this.orders[i].b_urgente,
        b_extra: this.orders[i].b_extra,// === undefined || this.orders[i].b_extra == null || this.orders[i].b_extra == false ? false : true,
        b_validato: this.orders[i].b_validato,
        b_to_supplier: toSupplierCondition,
        d_validato: this.orders[i].d_validato,
        status: this.orderStatusArr[i].status,
        note: this.orders[i].note,
        d_consegna_prevista: "0000-00-00",
        n_ddt: "",
        d_ddt: "",
        note_consegna: "",  
        isRowLocked: lock
      };
      this.orderGridRowData.push(newOrderGridRowData);    
      this.visibleIndex = i;  
    }
    this.loading = false;
  }
  
  /*
  
        ORDERROWS ===========================

  */
  listOrderRows(orderId: string) {
    //console.log("listOrders: orderId: " + orderId);
    this.ordersService.listOrderRowsPromise(orderId).subscribe(
      res => {
        if(res[0] == "OK") {
          console.log(res[1][0]);
        }
      }
    );
  }
  
  openAddOrderDialog(isExtra: boolean) {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
      users: this.users,
      products: this.products,
      forecasts: this.forecasts,
      gg_min: this.gg_min,
      gg_max: this.gg_max,
      isExtra: isExtra
    }

    dialogConfig.width = "95%";
    dialogConfig.maxHeight = "500px";
        
    this.dialogRef = this.dialog.open(
      AddOrderDialogComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { newOrder: Order, newOrderRows: OrderRow[], isSubmitted: boolean }) => {
        if(result !== undefined && result.isSubmitted){
          let newOrder = result.newOrder;
          if(this.loginService.getUserCode() == "210") {
            newOrder.username = this.loginService.getUsername()!;
          }
          this.addOrderAndOrderRows(result.newOrder, result.newOrderRows);
        }
      }
    );
  }

  openEditDateDialog(event: CellClickedEvent) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    console.log(this.gg_min);
    console.log(this.gg_max);
    

    switch(event.colDef.field){
      case "d_ordine":
        dialogConfig.data = {
          date: event.data.d_ordine,
          isOrderDate: true,
          gg_min: this.gg_min,
          gg_max: this.gg_max
        }
        break;

      case "d_validato":
        dialogConfig.data = {
          date: event.data.d_validato,
          isValidationDate: true
        }
        break;
    }

    this.dialogRef = this.dialog.open(
      DatepickerProductsDialogComponent, //TODO: generic datepicker dialog
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe( (result: {date: string, isOrderDate: boolean, isValidationDate: boolean, isSubmitted: boolean}) => {
      if(result !== undefined && result.isSubmitted){
        
        this.order.id = event.data.id;
        this.order.anno = event.data.anno;
        this.order.username = event.data.username;
        this.order.d_ordine = event.data.d_ordine;
        this.order.n_ordine = event.data.n_ordine;
        this.order.b_urgente = event.data.b_urgente;
        this.order.b_extra = event.data.b_extra;
        this.order.b_validato = event.data.b_validato;
        this.order.d_validato = event.data.d_validato;
        this.order.note = event.data.note;   

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
        if(result.isOrderDate){
          this.order.d_ordine = result.date;
          orderStatus.status = event.data.status; //keep existing status
          orderStatus.note = "Data ordine modificata da " + localStorage.getItem('sangue_username');
          //console.log("setting: " + this.order.d_ordine);
          this.setOrder(this.order, orderStatus, false);
        }

        //when setting a validation date, automatically validate order
        else if(result.isValidationDate) {
          this.order.d_validato = result.date;
          this.order.b_validato = true;
          orderStatus.status = "confermato"; //confirm status
          orderStatus.note = "Ordine confermato da " + localStorage.getItem('sangue_username');
          //console.log("setting: " + this.order.d_validato);
          this.setOrder(this.order, orderStatus, false);
        }
      }
    });
  }

  /*
  
        USERS ===========================

  */
  listUsersAndSetLock(userlevel: string) {
    this.usersService.listUsersPromise(userlevel).subscribe(
      res => {
        if(res[0] == "KO") {
          console.error("Error retrieving users!");
          this.router.navigate(['login']);
        }
        else {
          this.users = res[1];
          this.setLock();
        }
      }
    );
  }

  /*
  
        PRODUCTS ===========================

  */
  listProducts() {
    this.pharmaRegistryService.listProductsPromise().subscribe(
      res => {
        if(res[0] == "KO") {
          this.router.navigate(['login']);
        }
        else {
          this.products = res[1];
        }
      }
    );
  }

  /*
  
        GRID UPDATES ===========================

  */
  updateGrid(visibleIndex?: number) {
    this.api.setRowData(this.orderGridRowData);
    if(visibleIndex !== undefined) {
      this.api.ensureIndexVisible(visibleIndex, "top");
    }
  }

  makeRowVisible(index: number, position: string) {
    console.log("index: " + index);
    
    this.api.ensureIndexVisible(index, position);
  }

  /*

        ORDER PERIOD ===========================

  */
  setLock() {
    this.orderablePeriodService.getOrderPeriodPromise().subscribe(
      res => {
        if(res[0] == "OK") {
          this.gg_min = parseInt(res[1].gg_min);
          this.gg_max = parseInt(res[1].gg_max);
          
          //lock cells according to the date
          if(this.gg_min < this.day && this.day > this.gg_max){
            this.isDateLocked = true;
          }
          else {
            this.isDateLocked = false;
          }

          //now set grid config
          if(this.loginService.getUserCode() == '210') {
            this.isDateLocked ? this.ordersGridConfig = gridConfigOrders210Locked : this.ordersGridConfig = gridConfigOrders210;
          } 
          if(this.loginService.getUserCode() == '220') {
            this.isDateLocked ? this.ordersGridConfig = gridConfigOrders220Locked : this.ordersGridConfig = gridConfigOrders220;
          }
          this.createOrderGridRowData();
        }
        else {
          console.error("Error in getOrderPeriodPromise()");
        }
      }
    );
  }

  /*

        FORECAST ===========================

  */
  listForecasts(year: string) {
    this.forecastService.listForecastsPromise(year).subscribe(
      res => {
        //console.log(res);
        if(res[0] == "OK") {
          this.forecasts = res[1];
          environment.globalForecasts = res[1];
          //this.forecastService.getForecastsGlobally(year);
          console.log(this.forecasts);
        }
        else {
          console.error("Error retrieving forecasts!");
        }
      }
    );
  }

  /**
   * 
   * ORDER STATUS MANAGEMENT
   * 
   */
  
  getOrderStatus(orderId: string) {
    this.ordersService.getOrderStatusPromise(orderId).subscribe(
      res => {        
        if(res[0] == "OK"){
          console.log("WS response:");
          console.log(res);
        }
        else{
          console.error("Error retrieving orderStatus for order " + orderId);
          console.error(res);
        }
      }
    );
  }

  setOrderStatus(orderStatus: OrderStatus) {
    this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
      res => {
        if(res[0] == "OK"){
          console.log("set:");
          console.log(orderStatus);
          console.log(res);
        }
        else {
          console.error("Error setting status for order with id " + orderStatus.id_order);
        }
      }
    );
  }

  //big function to be called at the very beginning, to retrieve everything we need
  getAllData() {
    //listOrders, then
    this.ordersService.listOrdersPromise(this.year).subscribe(
      res => {
        if(res[0] == "OK") {
          this.orders = res[1];
          this.getAllOrderStatusRec(this.orders, 0); 
        }
        else {
          console.error("Error retrieving orders!");
        }
      }
    );
    //getAllOrderStatus, then
    //setLock
  }

  getAllOrderStatusRec(orders: Order[], i: number) {
    //uscita
    if(i >= orders.length) {
      this.listUsersAndSetLock('210');
      return;
    }
    this.ordersService.getOrderStatusPromise(orders[i].id).subscribe(
      res => {
        if(res[0] == "OK") {
          //console.log(res[1][res[1].length - 1]);

          //check if all orders have a status
          if(res[1][res[1].length -1] === undefined) {
            let orderStatus = {
              id: "0",
              username: localStorage.getItem('sangue_username')!,
              id_order: orders[i].id,
              d_status: orders[i].d_ordine,           
              status: "inviato",
              note: "",
              b_sto: 0
            }
            this.orderStatusArr.push(orderStatus);
          }
          else{
            this.orderStatusArr.push(res[1][res[1].length - 1]);
          }
          this.getAllOrderStatusRec(orders, ++i);
        }
        else {
          console.error("Error retrieving orderStatus for order " + orders[i].id);
        }
      }
    );
  }

  getStatusByOrderId(orderId: string): string {
    for(var i = 0; i < this.orderStatusArr.length; ++i) {
      if(this.orderStatusArr[i].id_order == orderId) {
        return this.orderStatusArr[i].status;
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
}
  
