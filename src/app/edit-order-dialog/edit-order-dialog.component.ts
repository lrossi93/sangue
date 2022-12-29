import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Forecast, Order, OrderRow, OrderStatus } from 'src/environments/environment';
import { AddOrderRowComponent } from '../add-order-row/add-order-row.component';
import { AreYouSureOrderRowComponent } from '../are-you-sure-order-row/are-you-sure-order-row.component';
import { AreYouSureOrderComponent } from '../are-you-sure-order/are-you-sure-order.component';
import { EditOrderRowComponent } from '../edit-order-row/edit-order-row.component';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-edit-order-dialog',
  templateUrl: './edit-order-dialog.component.html',
  styleUrls: ['./edit-order-dialog.component.css']
})
export class EditOrderDialogComponent implements OnInit {

  annoFormControl!: UntypedFormControl;
  dOrdineFormControl!: UntypedFormControl;
  nOrdineFormControl!: UntypedFormControl;
  urgenteFormControl!: UntypedFormControl;
  extraFormControl!: UntypedFormControl;
  validatoFormControl!: UntypedFormControl;
  dValidatoFormControl!: UntypedFormControl;
  noteFormControl!: UntypedFormControl;

  order!: Order;
  orderRows: OrderRow[] = [];
  users: any = [];
  products: any = [];
  forecasts: Forecast[] = [];

  dialogRef!: any;
  dialog!: MatDialog;

  isLocked!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      order: Order,
      orderRows: OrderRow[],
      users: any,
      products: any,
      isLocked: boolean,
      forecasts: Forecast[]
    },
    private _builder: UntypedFormBuilder,
    dialog: MatDialog,
    private thisDialogRef: MatDialogRef<AreYouSureOrderComponent>,
    private ordersService: OrdersService
  ) { 
    this.annoFormControl = _builder.control(data.order.anno, Validators.required);
    this.dOrdineFormControl = _builder.control(data.order.d_ordine, Validators.required);
    this.nOrdineFormControl = _builder.control(data.order.n_ordine, Validators.required);
    this.urgenteFormControl = _builder.control(data.order.b_urgente, Validators.required);
    this.extraFormControl = _builder.control(data.order.b_extra, Validators.required);
    this.validatoFormControl = _builder.control(data.order.b_validato, Validators.required);
    this.dValidatoFormControl = _builder.control(data.order.d_validato, Validators.required);
    this.noteFormControl = _builder.control(data.order.note); //not required
    this.order = data.order;
    this.orderRows = data.orderRows;
    this.dialog = dialog;
    this.users = data.users;
    this.products = data.products;
    this.isLocked = data.isLocked;
    this.forecasts = data.forecasts;
  }

  ngOnInit(): void { }

  deleteOrderRowById(id: string) {
    for(let i = 0; i < this.orderRows.length; ++i){
      if(this.orderRows[i].id == id){
        this.orderRows.splice(i, 1);
        this.ordersService.rmOrderRow(id);
        return;
      }
    }
  }

  getOrderRowById(id: string): OrderRow | undefined {
    for(let i = 0; i < this.orderRows.length; ++i){
      if(id == this.orderRows[i].id){
        console.log(this.orderRows[i]);
        return this.orderRows[i];
      }
    }
    return undefined;
  }

  openAreYouSureOrderRowDialog(id: string) {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.autoFocus = true;
    dialogConfig.data = { 
      id: id
    }
        
    this.dialogRef = this.dialog.open(
      AreYouSureOrderRowComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        this.deleteOrderRowById(id);
        
        let orderStatus: OrderStatus = {
          id: "0",
          username: localStorage.getItem('sangue_username')!,
          id_order: this.order.id,
          d_status: this.getFormattedDate(new Date()),
          status: "inviato",
          note: "eliminazione riga d'ordine",
          b_sto: false
        }

        this.setOrderStatus(orderStatus);
      }
    });
  }

  //works both for adding and for editing an orderRow
  openEditOrderRowDialog(id: string, isAdding: boolean) {
    const dialogConfig = new MatDialogConfig();
    
    //if id is not specified, create a new orderRow
    if(id == "") {
      let newOrderRow = {
        id: "",
        id_ordine: this.data.order.id,
        username: this.data.order.username,
        n_riga: "",
        id_prd: "",
        qta: 0,
        motivazione: "",
        qta_validata: 0,
        note: ""
      }
      dialogConfig.data = {
        orderRow: newOrderRow,
        users: this.users,
        products: this.products,
        forecasts: this.forecasts
      }
    }
    else {
      let editedOrderRow = this.getOrderRowById(id);
      editedOrderRow!.username = this.data.order.username;       
   
      dialogConfig.data = {
        orderRow: this.getOrderRowById(id),
        users: this.users,
        products: this.products,
        forecasts: this.forecasts
      }
    }
          
    this.dialogRef = this.dialog.open(
      EditOrderRowComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { 
        orderRow: OrderRow, 
        isSubmitted: boolean
      }) => {
        //confirm edits
        if(result !== undefined && result.isSubmitted){
          console.log(result);
          this.ordersService
            .setOrderRowPromise(result.orderRow, isAdding)
            .subscribe(
              res => {
                if(res[0] != "KO"){
                  //console.log(res);
                  let newOrderRow = result.orderRow;
                  if(newOrderRow.id == "") {
                    newOrderRow.id = res[1];
                    this.orderRows.push(newOrderRow);
                  }

                  let orderStatus: OrderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username')!,
                    id_order: result.orderRow.id_ordine,
                    d_status: this.getFormattedDate(new Date()),
                    status: "inviato",
                    note: "modifica riga d'ordine",
                    b_sto: false
                  }
          
                  this.setOrderStatus(orderStatus);
                }
                else {
                  console.error("Error setting orderRow!");
                }
              }
            );
        }
    });
  }

  /*
  openAddOrderRowDialog() {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.autoFocus = true;
    dialogConfig.data = {
      order: this.data.order,
      orderRows: this.orderRows, //array di orderRows
      forecasts: this.forecasts 
    }
        
    this.dialogRef = this.dialog.open(
      AddOrderRowComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        console.log(result);
      }
    });
  }
  */

  openAreYouSureOrderDialog(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id: id }
        
    this.dialogRef = this.dialog.open(
      AreYouSureOrderComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { order: Order, orderRows: OrderRow[], isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        this.thisDialogRef.close({
          orderId: id, 
          orderRows: this.orderRows, 
          isSubmitted: result.isSubmitted
        });
      }
    });
  }

  productIdToDes(id: string): string {
    for(var i = 0; i < this.products.length; ++i){
      if(id == this.products[i].id) {
        return this.products[i].des;
      }
    }
    return "";
  }

  usernameToClient(username: string): string {    
    for(var i = 0; i < this.users.length; ++i){
      if(username == this.users[i].username) {
        return this.users[i].client;
      }
    }
    return "";
  }

  onClose(id: string) {
    if(this.orderRows.length == 0){
      this.thisDialogRef.close({
        isClosing: true,
        deleteOrder: true
      });
    }
    else {
      this.thisDialogRef.close();
    }
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

  setOrderStatus(orderStatus: OrderStatus) {
    this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
      res => {
        if(res[0] == "OK") {
          console.log("Status for order " + orderStatus.id_order + " successfully set!");
        }
        else {
          console.error("Error setting status for order " + orderStatus.id_order);
        }
      }
    );
  }
}
