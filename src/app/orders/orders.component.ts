import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, CellValueChangedEvent } from 'ag-grid-community';
import { Order, OrderGridRowData, OrderRow } from 'src/environments/environment';
import { defaultColDef, gridConfigOrders210, gridConfigOrders220 } from 'src/environments/grid-configs';
import { AddOrderDialogComponent } from '../add-order-dialog/add-order-dialog.component';
import { DatepickerProductsDialogComponent } from '../datepicker-products-dialog/datepicker-products-dialog.component';
import { LoginService } from '../login.service';
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

  year: string = new Date().getFullYear().toString();
  dialogRef: any;
  dialog: any;

  loginService!: LoginService;

  //agGrid config
  ordersGridConfig!: any;
  defaultColDef: any = defaultColDef;
  gridOptions: any;

  //agGrid API handles
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  api: any;

  constructor(
    loginService: LoginService,
    private ordersService: OrdersService,
    private usersService: UsersService,
    private pharmaRegistryService: PharmaRegistryService,
    dialog: MatDialog,
    private router: Router
  ) {
    if(loginService.getUserCode() == '210') {
      this.ordersGridConfig = gridConfigOrders210;
    } 
    if(loginService.getUserCode() == '220') {
      this.ordersGridConfig = gridConfigOrders220;
    }
    this.loginService = loginService;
    //this.ordersService = ordersService;
    //this.usersService = usersService;
    //this.pharmaRegistryService = pharmaRegistryService;
    //
    //this.usersService.listUsers("210"); //get all customer asl users
    this.dialog = dialog;

    //gridOptions
    this.gridOptions = {
      onCellClicked: (event: CellClickedEvent) => {
        if(event.column.getColId() == "d_ordine" || event.column.getColId() == "d_validato") {
          this.openEditDateDialog(event);
        }
      },
      onCellValueChanged: (event: CellValueChangedEvent) => {
        console.log("Changed from " + event.oldValue + " to " + event.newValue);
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
        this.setOrder(this.order, isAdding);
        this.updateGrid();
      }
    }
    //console.log(this.orders);
    //console.log(this.pharmaRegistryService.products);
  }

  ngOnInit(): void {
    this.loginService.checkPromise().subscribe(
      res => {
        if(res[0] == "KO"){
          this.router.navigate(['login']);
        }
      }
    );

    this.listOrders(this.year);
    this.listUsers('210');
    this.listProducts();
    //initialize Ag-Grid API
    setTimeout(
      () => {
        this.api = this.agGrid.api;
        this.logAPI();
      }, 300);
  }

  logAPI(){
    console.log(this.api);
  }

  /*
  
        ORDERS ===========================

  */  
  listOrders(year: string) {
    this.ordersService.listOrdersPromise(year).subscribe(
      res => {
        if(res[0] != "KO") {
          this.orders = res[1];
          console.log("received orders:");
          console.log(this.orders);
          this.createOrderGridRowData();
          this.updateGrid();
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

  createOrderGridRowData() {
    this.orderGridRowData = [];
    for(var i = 0; i < this.orders.length; ++i) {
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
        d_validato: this.orders[i].d_validato,
        note: this.orders[i].note
      };
      this.orderGridRowData.push(newOrderGridRowData);
    }
    console.log("forecastGridRowData");
    console.log(this.orderGridRowData);
  }

  getFullUsernameById(id: string): string {
    for(var i = 0; i < this.users.length; ++i) {
      if(this.users[i].username == id) {
        console.log("returning " + this.users[i].client);
        return this.users[i].client;
      }
    }
    return "";
  }

  addOrderAndOrderRows(newOrder: Order, newOrderRows: OrderRow[]) {
    //this.ordersService.setOrder(newOrder, true);
    this.ordersService.setOrderPromise(newOrder, true).subscribe(
      res => {
        if(res[0] == "OK") {
          newOrder.id = res[1];
          this.setOrderLocally(newOrder, true);
          
          //set orderId for all orderRows before submitting
          for(var i = 0; i < newOrderRows.length; ++i) {
            newOrderRows[i].id_ordine = res[1];
          }

          //then save all orderRows on db
          this.setOrderRowRec(newOrderRows, 0);
        }
      }
    );
  }

  setOrderRowRec(newOrderRows: OrderRow[], index: number) {
    if(index >= newOrderRows.length) {
      return;
    }
    else {
      this.ordersService.setOrderRowPromise(newOrderRows[index], true).subscribe(
        res => {
          if(res[0] == "OK") {
            this.setOrderRowRec(newOrderRows, ++index);
          }
        }
      );
    }
  }

  setOrder(order: Order, isAdding: boolean) {
    this.ordersService.setOrderPromise(order, isAdding).subscribe(
      res => {
        this.setOrderLocally(order, isAdding);
      }
    )
  }

  setOrderLocally(order: Order, isAdding: boolean) {
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
          this.createOrderGridRowData();
          this.updateGrid();
          return;
        }
      }
    }
    else {  
      //if the id is not present, append the new element
      this.orders.push(order);
    }
    //update order grid
    this.updateGrid();
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
    this.ordersService.listOrderRows(orderId);
    this.orderRows = this.ordersService.orderRows;
  }
  
  setOrderRow(orderRow: OrderRow, isAdding: boolean) {
    this.ordersService.setOrderRow(orderRow, isAdding);
    this.setOrderRowLocally(orderRow, isAdding);
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
          this.updateGrid();
          return;
        }
      }
    }
    else {  
      //if the id is not present, append the new element
      this.orders.push(orderRow);
    }
    //TODO: update orderRow locally
  }
  
  openAddOrderDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      users: this.users,
      products: this.products
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
          console.log(result);
          this.addOrderAndOrderRows(result.newOrder, result.newOrderRows);
        }
      }
    );
  }

  /*
  openEditOrderDialog() {
    console.log("openEditOrderDialog()");
  }
  */

  openEditDateDialog(event: CellClickedEvent) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    switch(event.colDef.headerName){
      case "Data ordine":
        dialogConfig.data = {
          date: event.data.d_ordine,
          isOrderDate: true,
        }
        break;

      case "Data validazione":
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

        if(result.isOrderDate){
          this.order.d_ordine = result.date;
          console.log("setting: " + this.order.d_ordine);
          this.setOrder(this.order, false);
        }
        else if(result.isValidationDate) {
          this.order.d_validato = result.date;
          console.log("setting: " + this.order.d_validato);
          this.setOrder(this.order, false);
        }
        
        this.updateGrid();
      }
    });
  }

  /*
  
        USERS ===========================

  */
  listUsers(userlevel: string) {
    this.usersService.listUsersPromise(userlevel).subscribe(
      res => {
        if(res[0] == "KO") {
          this.router.navigate(['login']);
        }
        else {
          this.users = res[1];
          console.log("users: ");
          console.log(this.users);
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
          console.log("products:");
          console.log(this.products);
        }
      }
    );
  }


  /*
  
        GRID UPDATES ===========================

  */
  updateGrid() {
    this.api.setRowData(this.orderGridRowData);
  }
}
  
