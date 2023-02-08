import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Order } from 'src/environments/environment';
import { EditOrderDialogComponent } from '../edit-order-dialog/edit-order-dialog.component';
import { OrdersService } from '../orders.service';
import { PharmaRegistryService } from '../pharma-registry.service';
import { SuppliesComponent } from '../supplies/supplies.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-button-supply-details',
  templateUrl: './button-supply-details.component.html',
  styleUrls: ['./button-supply-details.component.css']
})
export class ButtonSupplyDetailsComponent implements OnInit, ICellRendererAngularComp{
  data: any;
  orderRows: any = [];
  users: any = [];
  products: any = [];
  dialogRef: any;
  dialog: MatDialog;

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
    note: '',
    d_consegna_prevista: "0000-00-00",
    n_ddt: "",
    d_ddt: "",
    note_consegna: "",

  };

  constructor(
    dialog: MatDialog,
    private usersService: UsersService,
    private pharmaRegistryService: PharmaRegistryService,
    private ordersService: OrdersService,
    private suppliesComponent: SuppliesComponent
  ) {
    this.dialog = dialog;
   }

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    this.listOrderRows(this.data.id);
    this.listProducts();
    this.listUsers();
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
    
  }

  listOrderRows(id: string) {
    this.ordersService.listOrderRowsPromise(id).subscribe(
      res => {
        if(res[0] == "OK") {
          this.orderRows = res[1];
        }
        else {
          console.error("Error retrieving OrderRows!");
        }
      }
    );
  }


  listProducts() {
    this.pharmaRegistryService.listProductsPromise().subscribe(
      res => {
        if(res[0] == "OK") {
          this.products = res[1];
        }
        else {
          console.error("Error retrieving products!");
        }
      }
    );
  }

  listUsers() {
    this.usersService.listUsersPromise("210").subscribe(
      res => {
        if(res[0] == "OK") {
          this.users = res[1];
        }
        else {
          console.error("Error retrieving users!");
        }
      }
    );
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

  openEditOrderDialog(event: Event) {
    this.assignOrderData();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      order: this.currentOrder,
      orderRows: this.orderRows,
      users: this.users,
      products: this.products,
      isLocked: true
    }
    dialogConfig.disableClose = false;
    this.dialogRef = this.dialog.open(
      EditOrderDialogComponent, 
      dialogConfig
    );
  }
}
