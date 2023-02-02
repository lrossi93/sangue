import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';
import { LoginService } from '../login.service';
import { MarkAsReceivedDialogComponent } from '../mark-as-received-dialog/mark-as-received-dialog.component';
import { OrdersService } from '../orders.service';
import { OrdersComponent } from '../orders/orders.component';

@Component({
  selector: 'app-orders-received-checkbox',
  templateUrl: './orders-received-checkbox.component.html',
  styleUrls: ['./orders-received-checkbox.component.css']
})
export class OrdersReceivedCheckboxComponent extends CellCheckboxComponent implements OnInit {
  userCode!: string;
  dialogRef: any;
  constructor(
    private ordersService: OrdersService,
    private ordersComponent: OrdersComponent,
    private loginService: LoginService,
    private dialog: MatDialog,
    snackbar: MatSnackBar
  ) {
    super(snackbar);
    this.loginService = loginService;
  }

  ngOnInit(): void {
    this.userCode = this.loginService.getUserCode()!;
    this.checked = (this.data.status == "ricevuto");
    this.isLocked = (this.data.status != "inviato al cliente");
  }

  override toggleCheckbox(event: any): void {
    this.openMarkAsReceivedDialog();
  }

  openMarkAsReceivedDialog() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
      orderId: this.data.id,
    }

    dialogConfig.disableClose = true;

    this.dialogRef = this.dialog.open(
      MarkAsReceivedDialogComponent, 
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
            status: "ricevuto",
            note: "ordine ricevuto da " + localStorage.getItem('sangue_username'),
            b_sto: false
          }
          
          //non serve, basta solo un cambio di stato ed un conseguente aggiornamento della view
          //this.ordersComponent.setOrder(orderSent, orderStatus, false);
          this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
            res => {
              if(res[0] == "OK"){
                //update suppliesGridRowData
                for(var i = 0; i < this.ordersComponent.orderStatusArr.length; ++i) {
                  if(this.data.id == this.ordersComponent.orderStatusArr[i].id_order) {
                    this.ordersComponent.orderStatusArr[i].status = "ricevuto";
                    break;
                  }
                }
                this.ordersComponent.createOrderGridRowData();
              }
              else {
                console.error("Error setting orderStatus!");
              }
            }
          );
          this.checked = true;
          this.isLocked = true;
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
