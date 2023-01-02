import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, CellValueChangedEvent, GridApi, ILoadingCellRendererParams } from 'ag-grid-community';
import { Forecast, Order, OrderGridRowData, OrderRow, OrderStatus } from 'src/environments/environment';
import { defaultColDef, gridConfigOrders210, gridConfigOrders210Locked, gridConfigOrders220, gridConfigOrders220Locked } from 'src/environments/grid-configs';
import { AddOrderDialogComponent } from '../add-order-dialog/add-order-dialog.component';
import { DatepickerProductsDialogComponent } from '../datepicker-products-dialog/datepicker-products-dialog.component';
import { ForecastService } from '../forecast.service';
import { LoadingCellRendererComponent } from '../loading-cell-renderer/loading-cell-renderer.component';
import { LoginService } from '../login.service';
import { OrderablePeriodService } from '../orderable-period.service';
import { OrdersService } from '../orders.service';
import { PharmaRegistryService } from '../pharma-registry.service';
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
    d_ordine: "", //data di piazzamento dell'ordine
    n_ordine: 0, //numero dell'ordine
    b_urgente: false,
    b_extra: false, //ordine in più rispetto a quello dell'anno corrente
    b_validato: false,
    d_validato: "", //data di validazione dell'ordine
    note: ""
  }
  orders: any = [];
  orderGridRowData: OrderGridRowData[] = [];
  orderRows: any = [];
  users: any = [];
  products: any = [];
  forecasts: Forecast[] = [];
  orderStatusArr: any[] = []; //array di array di orderStatus

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
    //loadingCellRenderer: LoadingCellRendererComponent
  ) {    
    //this.ordersService = ordersService;
    //this.usersService = usersService;
    //this.pharmaRegistryService = pharmaRegistryService;
    //
    //this.usersService.listUsers("210"); //get all customer asl users
    this.dialog = dialog;

    /*
    this.loadingCellRenderer = new LoadingCellRendererComponent();
    this.loadingCellRendererParams = this.loadingCellRenderer.params;
    */

    this.loading = true;


    //gridOptions
    this.gridOptions = {
      onCellClicked: (event: CellClickedEvent) => {
        //console.log(event);
        //this.api.ensureIndexVisible(event.rowIndex, "top");
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
          this.api.ensureIndexVisible(event.rowIndex, "middle");
        }
        this.updateGrid();
      }
    }
  }

  onGridReady = (params: { api: any; columnApi: any; }) => {
    console.log("onGridReady================");
    
    this.api = params.api;
    this.columnApi = params.columnApi;
    console.log(this.api);
    this.listForecasts(this.year);
    this.listProducts();
    /*
    this.api.ensureIndexVisible(this.visibleIndex);
    console.log("visible index: " + this.visibleIndex);
    this.updateGrid();
    this.visibleIndex = 0;
    */
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
    console.log("newOrder");
    console.log(newOrder);
    console.log("newOrderRows");
    console.log(newOrderRows);
    this.ordersService.setOrderPromise(newOrder, true).subscribe(
      res => {
        if(res[0] == "OK") {
          newOrder.id = res[1];
          //set order status
          let orderStatus = {
            id: "0",
            username: localStorage.getItem('sangue_username')!,
            id_order: newOrder.id,
            d_status: newOrder.d_ordine,           
            status: "inviato",          //order has just been created
            note: "ordine appena creato",
            b_sto: false
          }
          
          //set orderId and username for all orderRows before submitting
          for(var i = 0; i < newOrderRows.length; ++i) {
            newOrderRows[i].id_ordine = res[1];
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
      console.log("Exiting setOrderRowRec()");
      return;
    }
    else {
      this.ordersService.setOrderRowPromise(newOrderRows[index], true).subscribe(
        res => {
          if(res[0] == "OK") {
            console.log("You saved the following orderRow:");
            console.log(newOrderRows[index]);
            this.setOrderRowRec(newOrderRows, index + 1);
          }
          else {
            console.error("Error saving orderRow!");
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

  rmOrderRow(id: string){
    this.ordersService.rmOrderRow(id);
  }

  setOrder(order: Order, orderStatus: OrderStatus, isAdding: boolean) {
    //set order status
    //this.loading = true;
    this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
      res => {
        if(res[0] == "KO")
          console.error("Error setting order status for order " + order.id);
        
        this.ordersService.setOrderPromise(order, isAdding).subscribe(
          res2 => {
            if(res2 == "KO") 
              console.error("Error setting order with id " + order.id);
              this.setOrderLocally(order, orderStatus, isAdding);
          }
        );
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
          this.createOrderGridRowData();
          this.logAPI();
          this.visibleIndex = i;
          this.updateGrid(i);
          console.log("index: " + i);
          console.log("row index: " + this.api.getDisplayedRowAtIndex(i).rowIndex);
          this.api.ensureIndexVisible(this.api.getDisplayedRowAtIndex(i).rowIndex, "middle");
          //this.makeRowVisible(i, "top");
          return;
        }
      }
    }
    else {  
      //if the id is not present, append the new element
      this.orders.push(order);
      this.createOrderGridRowData();
    }
    //update order grid
    this.updateGrid();
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
        b_extra: this.orders[i].b_extra,
        b_validato: this.orders[i].b_validato,
        b_to_supplier: toSupplierCondition,
        d_validato: this.orders[i].d_validato,
        status: this.orderStatusArr[i].status,
        note: this.orders[i].note,
        isRowLocked: lock
      };
      this.orderGridRowData.push(newOrderGridRowData);    
      this.visibleIndex = i;  
    }
    console.log(this.orderGridRowData);
    this.loading = false;
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
        this.createOrderGridRowData();
        this.updateGrid();
        this.api.ensureIndexVisible(visible);
        return;
      }
    }
    alert("Order ID " + id + " not found, order not deleted!");
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

  setOrderRowLocally(orderRow: OrderRow, isAdding: boolean) {
    if(!isAdding) {
      for(let i = 0; i < this.orders.length; ++i) {
        if(orderRow.id == this.orderRows[i].id) {
          this.orderRows[i].id_ordine = orderRow.id_ordine;
          this.orderRows[i].username = orderRow.username;
          this.orderRows[i].n_riga = orderRow.n_riga;
          this.orderRows[i].motivazione = orderRow.motivazione;
          this.orderRows[i].id_prd = orderRow.id_prd;
          this.orderRows[i].qta = orderRow.qta;
          this.orderRows[i].qta_validata = orderRow.qta_validata;
          this.orderRows[i].note = orderRow.note;
          //no need to update grid here
          //this.updateGrid();
          return;
        }
      }
    }
    else {  
      //if the id is not present, append the new element
      this.orders.push(orderRow);
    }
  }
  
  openAddOrderDialog() {
    //this.logAPI();
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
      users: this.users,
      products: this.products,
      forecasts: this.forecasts,
      gg_min: this.gg_min,
      gg_max: this.gg_max
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
        //console.log("received date: " + result.date);
        //console.log("formatted date: " + new Date(result.date).toLocaleString('it-IT', {timeZone: 'UTC'}).split(",")[0]);
        
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
          orderStatus.status = "inviato"
          orderStatus.note = "Data ordine modificata da " + localStorage.getItem('sangue_username');
          console.log("setting: " + this.order.d_ordine);
          this.setOrder(this.order, orderStatus, false);
        }

        //when setting a validation date, automatically validate order
        else if(result.isValidationDate) {
          this.order.d_validato = result.date;
          this.order.b_validato = true;
          orderStatus.status = "confermato";
          orderStatus.note = "Ordine confermato da " + localStorage.getItem('sangue_username');
          console.log("setting: " + this.order.d_validato);
          this.setOrder(this.order, orderStatus, false);
        }
        
        this.updateGrid();
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
          //console.log(this.forecasts);
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
          console.log(this.orderStatusArr);
          
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
  
