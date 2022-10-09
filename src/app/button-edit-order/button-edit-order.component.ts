import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Order, OrderRow } from 'src/environments/environment';
import { EditOrderDialogComponent } from '../edit-order-dialog/edit-order-dialog.component';

@Component({
  selector: 'app-button-edit-order',
  templateUrl: './button-edit-order.component.html',
  styleUrls: ['./button-edit-order.component.css']
})
export class ButtonEditOrderComponent implements OnInit, ICellRendererAngularComp {

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
  orderRows: OrderRow[] | undefined;
  dialogRef: any;
  dialog: MatDialog;

  constructor(
    dialog: MatDialog
  ) { 
    this.dialog = dialog;
  }
  
  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;   
  }
  
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
    //this.assignOrderData();
  }

  openEditOrderDialog(event: any) {
    console.log("openEditOrderDialog()");

    console.log(this.data);
    
    this.assignOrderData();
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      order: this.currentOrder,
      orderRows: this.orderRows //array di orderRows 
    }
        
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
