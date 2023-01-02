import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';
import { OrdersService } from '../orders.service';
import { OrdersComponent } from '../orders/orders.component';
import { SendToSupplierDialogComponent } from '../send-to-supplier-dialog/send-to-supplier-dialog.component';


@Component({
  selector: 'app-orders-sent-checkbox',
  templateUrl: './orders-sent-checkbox.component.html',
  styleUrls: ['./orders-sent-checkbox.component.css']
})
export class OrdersSentCheckboxComponent extends CellCheckboxComponent implements OnInit {
  dialogRef: any;

  constructor(
    private ordersService: OrdersService,
    private ordersComponent: OrdersComponent,
    private dialog: MatDialog,
  ) {
    super();
    this.dialog = dialog;
  }

  ngOnInit(): void { }

  override toggleCheckbox(event: any): void {
    this.openSendToSupplierDialog();
  }

  openSendToSupplierDialog() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
      orderId: this.data.id,
      isValidated: this.data.b_validato
    }
    if(!this.data.b_validato)
      dialogConfig.disableClose = true;

    this.dialogRef = this.dialog.open(
      SendToSupplierDialogComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: any) => {
        
        if(result !== undefined){
          if(result.isSubmitted !== undefined && result.isSubmitted){
          this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
          
          let orderSent = {
            id: this.data.id,
            anno: this.data.anno,
            username: this.data.username,
            d_ordine: this.data.d_ordine,
            n_ordine: this.data.n_ordine,
            b_urgente: this.currentValue,
            b_extra: this.data.b_extra, 
            b_validato: this.data.b_validato,
            d_validato: this.data.d_validato,
            note: this.data.note
          }
      
          let orderStatus = {
            id: "0",
            username: localStorage.getItem('sangue_username')!,
            id_order: this.data.id,
            d_status: this.getFormattedDate(new Date()),           
            status: "inviato al fornitore",
            note: "ordine inviato al fornitore da " + localStorage.getItem('sangue_username'),
            b_sto: false
          }
          
          this.ordersComponent.setOrder(orderSent, orderStatus, false);
          this.checked = true;
        }
        if(result.isCancelled !== undefined && result.isCancelled){
          this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
          this.checked = false;
        }
      }
      }
    );
  }
}
