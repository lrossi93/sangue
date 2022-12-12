import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order, OrderRow } from 'src/environments/environment';
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

  dialogRef!: any;
  dialog!: MatDialog;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      order: Order,
      orderRows: OrderRow[],
      users: any,
      products: any
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
    
    //console.log(data.users);
    //console.log(data.products);
    //console.log(this.users);
    //console.log(this.products);
  }

  ngOnInit(): void {
  }

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
    dialogConfig.data = { id: id }
        
    this.dialogRef = this.dialog.open(
      AreYouSureOrderRowComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        this.deleteOrderRowById(id);
      }
    });
  }

  //works both for adding and for editing an orderRow
  openEditOrderRowDialog(id: string, isAdding: boolean) {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.autoFocus = true;
    console.log(this.data.order.id);
    console.log("OpenEditOrderRowDialog()================");
    
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
      //console.log(this.users);
      //console.log(this.products);
      dialogConfig.data = {
        orderRow: newOrderRow,
        users: this.users,
        products: this.products
      }
    }
    else {
      console.log("orderRowID: " + id);
      console.log(this.data.order.username);
      console.log(this.getOrderRowById(id));
      let editedOrderRow = this.getOrderRowById(id);
      editedOrderRow!.username = this.data.order.username;   
   
      dialogConfig.data = {
        orderRow: this.getOrderRowById(id),
        users: this.users,
        products: this.products
      }
    }
          
    this.dialogRef = this.dialog.open(
      EditOrderRowComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { orderRow: OrderRow, isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        console.log(result);
        this.ordersService
          .setOrderRowPromise(result.orderRow, isAdding)
          .subscribe(
            res => {
              if(res[0] != "KO"){
                console.log(res);
                let newOrderRow = result.orderRow;
                if(newOrderRow.id == "") {
                  newOrderRow.id = res[1];
                  this.orderRows.push(newOrderRow);
                }
              }
              else {
                console.log(res[0]);
              }
            }
          );
      }
    });
  }

  openAddOrderRowDialog() {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.autoFocus = true;
    dialogConfig.data = {
      order: this.data.order,
      orderRows: this.orderRows //array di orderRows 
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
        this.thisDialogRef.close({orderId: id, orderRows: this.orderRows, isSubmitted: result.isSubmitted});
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
}
