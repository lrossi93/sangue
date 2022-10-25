import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { Order, OrderRow, User } from 'src/environments/environment';
import { defaultColDef, gridConfigOrders } from 'src/environments/grid-configs';
import { AddOrderDialogComponent } from '../add-order-dialog/add-order-dialog.component';
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
  order!: Order; //sample general purpose order
  orders: any = [];
  orderRows: any = [];

  year: string = "2022";
  dialogRef: any;
  dialog: any;

  loginService!: LoginService;
  ordersService!: OrdersService;
  usersService!: UsersService;
  pharmaRegistryService!: PharmaRegistryService;

  //agGrid config
  ordersGridConfig: any = gridConfigOrders;
  defaultColDef: any = defaultColDef;
  gridOptions: any;

  //agGrid API handles
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  api: any;

  constructor(
    loginService: LoginService,
    ordersService: OrdersService,
    usersService: UsersService,
    pharmaRegistryService: PharmaRegistryService,
    dialog: MatDialog,
  ) { 
    this.loginService = loginService;
    this.ordersService = ordersService;
    this.usersService = usersService;
    this.pharmaRegistryService = pharmaRegistryService;
    this.pharmaRegistryService.getProducts();
    this.usersService.listUsers("210"); //get all customer asl users
    this.dialog = dialog;
    this.ordersService.listOrders("");
    this.orders = this.ordersService.orders;
    console.log(this.orders);
    console.log(this.pharmaRegistryService.products);
  }

  ngOnInit(): void {
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
    this.ordersService.listOrders(year);
    this.orders = this.ordersService.orders;
    this.updateGrid();
  }

  setOrder(order: Order, isAdding: boolean) {
    this.ordersService.setOrder(order, isAdding);
    this.setOrderLocally(order, isAdding);
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
  
  //TODO: dialog for adding a new order
  openAddOrderDialog() {
    console.log("openAddOrderDialog()");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      users: this.usersService.users,
      products: this.pharmaRegistryService.products
    }
    dialogConfig.width = "95%";
    dialogConfig.maxHeight = "500px";
        
    this.dialogRef = this.dialog.open(
      AddOrderDialogComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        console.log("submitted!");
      }
    });
    
  }

  //TODO: dialog for editing an existing order
  openEditOrderDialog() {
    console.log("openEditOrderDialog()");
  }

  /*
  
        GRID UPDATES ===========================

  */
  updateGrid() {
    this.api.setRowData(this.orders);
  }
}
  
