import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { environment, Order, OrderRow } from 'src/environments/environment';
import { EditOrderDialogComponent } from '../edit-order-dialog/edit-order-dialog.component';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-button-edit-order',
  templateUrl: './button-edit-order.component.html',
  styleUrls: ['./button-edit-order.component.css']
})
export class ButtonEditOrderComponent implements OnInit, ICellRendererAngularComp {
  url = environment.basePath + "order.php";
  data: any;
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
  dialogRef: any;
  dialog: MatDialog;
  ordersService!: OrdersService;

  constructor(
    dialog: MatDialog,
    ordersService: OrdersService,
    private http: HttpClient,
    private loginService: LoginService
  ) { 
    this.dialog = dialog;
    this.ordersService = ordersService; 
  }
  
  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    this.listOrderRows(this.data.id);
  }
  
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
    //this.assignOrderData();
  }

  //usarla sempre perchè asincrona...
  listOrderRows(id: string) {
    let path = this.url + '?request=listOrderRows&id_session=' + this.loginService.getSession() + '&id_order=' + id;
    console.log(path);
    
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      if(res[0] == "KO"){
        alert("Error retrieving orders!");
        return null;
      }
      else{ 
        this.orderRows = res[1];
        return this.orderRows;
      }
    });
  }

  openEditOrderDialog(event: any) {  
    this.assignOrderData();
        
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      order: this.currentOrder,
      orderRows: this.orderRows //array di orderRows 
    }
    dialogConfig.width = "60%";
    dialogConfig.minWidth = "60%";
        
    this.dialogRef = this.dialog.open(
      EditOrderDialogComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: {
        order: Order,
        orderRows: OrderRow[],
        isSubmitted: boolean
    }) => {
      if(result !== undefined && result.isSubmitted){
        console.log(result);
      }
    });
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
}
