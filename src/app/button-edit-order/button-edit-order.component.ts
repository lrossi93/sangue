import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { environment, Order, OrderRow } from 'src/environments/environment';
import { EditOrderDialogComponent } from '../edit-order-dialog/edit-order-dialog.component';
import { OrdersService } from '../orders.service';
import { OrdersComponent } from '../orders/orders.component';
import { PharmaRegistryService } from '../pharma-registry.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-button-edit-order',
  templateUrl: './button-edit-order.component.html',
  styleUrls: ['./button-edit-order.component.css']
})
export class ButtonEditOrderComponent implements OnInit, ICellRendererAngularComp {
  url = environment.basePath + "order.php";
  data: any;
  isLocked!: boolean;
  currentOrder: Order = {
    id: '',
    anno: 0,
    username: '',
    d_ordine: '',
    n_ordine: 0,
    b_urgente: false,
    b_extra: false,
    b_validato: false,
    d_validato: 'string', //data di validazione dell'ordine
    note: ''
  };
  
  orderRows: any = [];
  
  users: any = [];
  products: any = [];

  dialogRef: any;
  dialog: MatDialog;


  constructor(
    dialog: MatDialog,
    private ordersService: OrdersService,
    private usersService: UsersService,
    private pharmaRegistryService: PharmaRegistryService,
    private ordersComponent: OrdersComponent
  ) { 
    this.dialog = dialog;
    this.ordersService = ordersService; 
  }
  
  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    this.isLocked = this.data.isRowLocked;
    this.listOrderRows(this.data.id);
  }
  
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
    this.listProducts();
    this.listUsers();
  }

  listOrderRows(id: string) {
    this.ordersService.listOrderRowsPromise(id).subscribe(
      res => {
        if(res[0] == "KO") {
          console.error("Error retrieving OrderRows!")
        }
        else {
          this.orderRows = res[1];
          //console.log(this.orderRows);
        }
      }
    );
  }

  openEditOrderDialog(event: any) {  
    this.assignOrderData();
    //console.log(this.orderRows);
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      order: this.currentOrder,
      orderRows: this.orderRows, //array di orderRows 
      users: this.users,
      products: this.products,
      isLocked: this.isLocked
    }
    dialogConfig.width = "60%";
    dialogConfig.minWidth = "60%";
    dialogConfig.disableClose = true;
    
    this.dialogRef = this.dialog.open(
      EditOrderDialogComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: {
        order: Order,
        orderRows: OrderRow[],
        isSubmitted: boolean,
        isClosing: boolean,
        deleteOrder: boolean
    }) => {
      if(result !== undefined && result.isSubmitted){
        console.log(result);
        this.rmOrderAndOrderRows(this.data.id, result.orderRows);
      }
      if(result !== undefined && result.isClosing) {       
        if(result.deleteOrder){
          this.ordersComponent.rmOrder(this.currentOrder.id);
        }
      }
    });
  }

  rmOrderAndOrderRows(orderId: string, orderRows: OrderRow[]) {
    this.ordersComponent.rmOrderAndOrderRows(orderId, orderRows);
  }

  assignOrderData() {
    this.currentOrder.id = this.data.id;
    this.currentOrder.anno = this.data.anno;
    this.currentOrder.b_extra = this.data.extra;
    this.currentOrder.b_urgente = this.data.b_urgente;
    this.currentOrder.b_validato = this.data.b_validato;
    this.currentOrder.d_ordine = this.data.d_ordine;
    this.currentOrder.d_validato = this.data.d_validato;
    this.currentOrder.n_ordine = this.data.n_ordine;
    this.currentOrder.note = this.data.note;
    this.currentOrder.username = this.data.username;
  }

  listUsers() {
    this.usersService.listUsersPromise("210").subscribe(
      res => {
        if(res[0] == "KO") {
          //alert("Error retrieving users!");
        }
        else {
          this.users = res[1];
          //console.log(this.users);
        }
      }
    );
  }

  listProducts() {
    this.pharmaRegistryService.listProductsPromise().subscribe(
      res => {
        if(res[0] == "KO") {
          //alert("Error retrieving products!");
        }
        else {
          this.products = res[1];
          //console.log(this.products);
        }
      }
    );
  }
}
