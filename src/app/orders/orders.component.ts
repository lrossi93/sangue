import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Order, OrderRow } from 'src/environments/environment';
import { defaultColDef, gridConfigOrders } from 'src/environments/grid-configs';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order!: Order; //sample general purpose order
  orders: any = [
    {
      id: "1",
      anno: "2020",
      username: "sangueasl",
      d_ordine: "20/02/2020",
      n_ordine: 12,
      b_urgente: false,
      b_extra: true,
      b_validato: true,
      d_validato: "21/02/2020",
      note: "Note bellissime 1"
    },
    {
      id: "2",
      anno: "2021",
      username: "sangueasl2",
      d_ordine: "21/03/2020",
      n_ordine: 13,
      b_urgente: true,
      b_extra: false,
      b_validato: false,
      d_validato: "22/03/2020",
      note: "Note bellissime 2"
    },
    {
      id: "3",
      anno: "2022",
      username: "sangueaslno",
      d_ordine: "23/04/2020",
      n_ordine: 14,
      b_urgente: false,
      b_extra: true,
      b_validato: false,
      d_validato: "24/04/2020",
      note: "Note bellissime 3333"
    }
  ];
  orderRows: any = [];
  year: any;
  dialogRef: any;

  loginService!: LoginService;
  ordersService!: OrdersService;

  //agGrid config
  ordersGridConfig: any = gridConfigOrders;
  defaultColDef: any = defaultColDef;
  gridOptions: any;

  //agGrid API handles
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  api: any;

  constructor(
    loginService: LoginService,
    ordersService: OrdersService
  ) { 
    this.loginService = loginService;
    this.ordersService = ordersService;
    //this.ordersService.listOrders("");
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
    console.log("listOrders: year: " + year);
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
    console.log("listOrders: orderId: " + orderId);
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
  
