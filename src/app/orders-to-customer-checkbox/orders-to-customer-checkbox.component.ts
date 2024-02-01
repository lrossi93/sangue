import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';
import { OrdersService } from '../orders.service';
import { SendToCustomerDialogComponent } from '../send-to-customer-dialog/send-to-customer-dialog.component';
import { SuppliesComponent } from '../supplies/supplies.component';

@Component({
  selector: 'app-orders-to-customer-checkbox',
  templateUrl: './orders-to-customer-checkbox.component.html',
  styleUrls: ['./orders-to-customer-checkbox.component.css']
})
export class OrdersToCustomerCheckboxComponent extends CellCheckboxComponent implements OnInit {
  dialogRef: any;

  constructor(
    private ordersService: OrdersService,
    private suppliesComponent: SuppliesComponent,
    private dialog: MatDialog,
    snackbar: MatSnackBar
  ) {
    super(snackbar);
    this.dialog = dialog;
  }

  ngOnInit(): void {
    if(this.data.status == "inviato al cliente" || this.data.status == "ricevuto"){
      this.currentValue = true;
    }
    else {
      this.currentValue = false;
    }
    this.isLocked = this.currentValue;
    //console.log("currentValue: " + this.currentValue);
   }

  override toggleCheckbox(event: any): void {
    this.openSendToSupplierDialog();
  }

  openSendToSupplierDialog() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
      orderId: this.data.id,
      orderNo: this.data.n_ordine,
      fullUsername: this.data.full_username
    }

    this.dialogRef = this.dialog.open(
      SendToCustomerDialogComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe((result: any) => {
        if(result !== undefined){
          if(result.isSubmitted !== undefined && result.isSubmitted){
          this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
          
          let orderSent = {           
            id: this.data.id,
            anno: this.data.anno,
            mese: this.data.mese,
            username: this.data.username,
            d_ordine: this.data.d_ordine,
            n_ordine: this.data.n_ordine,
            status: this.data.status,
            b_urgente: this.data.b_urgente,
            b_extra: this.data.b_extra,
            b_validato: this.data.b_validato,
            d_validato: this.data.d_validato,
            note: this.data.note,
            d_consegna_prevista: this.data.d_consegna_prevista,
            n_ddt: this.data.n_ddt,
            d_ddt: this.data.d_ddt,
            note_consegna: this.data.note_consegna,
            b_prestito: this.data.b_prestito,
            id_ordine_prestito: this.data.id_order,
            username_prestito_da: this.data.username_prestito_da,
            username_prestito_a: this.data.username_prestito_a,
          }

          let orderStatus = {
            id: "0",
            username: localStorage.getItem('sangue_username')!,
            id_order: this.data.id,
            d_status: this.getFormattedDate(new Date()),           
            status: "inviato al cliente",
            note: "ordine inviato a " + this.data.username + " da " + localStorage.getItem('sangue_username'),
            b_sto: false
          }
          
          this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
            res => {
              if(res[0] == "OK"){
                //update suppliesGridRowData
                for(var i = 0; i < this.suppliesComponent.orderStatusArr.length; ++i) {
                  if(this.data.id == this.suppliesComponent.orderStatusArr[i].id_order) {
                    this.suppliesComponent.orderStatusArr[i].status = "inviato al cliente";
                    this.openSnackbar();
                    break;
                  }
                }
                this.suppliesComponent.updateRow(this.data.id, this.suppliesComponent.orderStatusArr[i].status);
              }
              else {
                console.error("Error setting orderStatus!");
              }
            }
          );
          this.checked = true;
          this.currentValue = true;
        }
        if(result.isCancelled !== undefined && result.isCancelled){
          this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
          this.checked = false;
        }
      }
    });
  }
}
