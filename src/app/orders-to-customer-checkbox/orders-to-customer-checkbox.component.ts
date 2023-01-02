import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  ) {
    super();
    this.dialog = dialog;
  }

  ngOnInit(): void {
    if(this.data.status == "inviato al cliente" || this.data.status == "ricevuto"){
      this.isLocked = true;
    }
   }

  override toggleCheckbox(event: any): void {
    this.openSendToSupplierDialog();
  }

  openSendToSupplierDialog() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
      orderId: this.data.id,
    }

    this.dialogRef = this.dialog.open(
      SendToCustomerDialogComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: any) => {
        
        if(result !== undefined){
          if(result.isSubmitted !== undefined && result.isSubmitted){
          this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
          /*
          let orderSent = {
            id: this.data.id,
            anno: this.data.anno,
            username: this.data.username,
            d_ordine: this.data.d_ordine,
            n_ordine: this.data.n_ordine,
            b_urgente: this.data.b_urgente,
            b_extra: this.data.b_extra, 
            b_validato: this.data.b_validato,
            d_validato: this.data.d_validato,
            note: this.data.note
          }
          */
          let orderStatus = {
            id: "0",
            username: localStorage.getItem('sangue_username')!,
            id_order: this.data.id,
            d_status: this.getFormattedDate(new Date()),           
            status: "inviato al cliente",
            note: "ordine inviato a " + this.data.username + " da " + localStorage.getItem('sangue_username'),
            b_sto: false
          }
          
          //non serve, basta solo un cambio di stato ed un conseguente aggiornamento della view
          //this.ordersComponent.setOrder(orderSent, orderStatus, false);
          this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
            res => {
              if(res[0] == "OK"){
                //update suppliesGridRowData
                for(var i = 0; i < this.suppliesComponent.orderStatusArr.length; ++i) {
                  if(this.data.id == this.suppliesComponent.orderStatusArr[i].id_order) {
                    this.suppliesComponent.orderStatusArr[i].status = "inviato al cliente";
                    break;
                  }
                }
                this.suppliesComponent.createSupplyGridRowData();
              }
              else {
                console.error("Error setting orderStatus!");
              }
            }
          );
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
