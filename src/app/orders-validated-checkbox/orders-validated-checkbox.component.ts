import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';
import { OrdersComponent } from '../orders/orders.component';

@Component({
  selector: 'app-orders-validated-checkbox',
  templateUrl: './orders-validated-checkbox.component.html',
  styleUrls: ['./orders-validated-checkbox.component.css']
})
export class OrdersValidatedCheckboxComponent extends CellCheckboxComponent implements OnInit {
  //loginService!: LoginService
  loading = false;
  userCode!: string;
  constructor(
    private ordersService: OrdersService,
    private ordersComponent: OrdersComponent,
    private loginService: LoginService,
    snackbar: MatSnackBar
  ) {
    super(snackbar);
    this.loginService = loginService;
  }

  ngOnInit(): void {
    this.userCode = this.loginService.getUserCode()!;
    //console.log(this.data);
    /*
    if(this.data.b_to_supplier){
      this.isLocked = true;
    }
    */
   //ALWAYS LOCKED: you can change its value ONLY from the "edit orderRows" dialog
   this.isLocked = true;
  }

  override toggleCheckbox(event: any): void {
    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
    console.log("current checkbox value: " + this.currentValue);
    
    let orderValidated = {
      id: this.data.id,
      anno: this.data.anno,
      mese: this.data.mese,
      username: this.data.username,
      d_ordine: this.data.d_ordine,
      n_ordine: this.data.n_ordine,
      b_urgente: this.data.b_urgente,
      b_extra: this.data.b_extra, 
      b_validato: this.currentValue,
      d_validato: this.data.d_validato,
      note: this.data.note,
      status: this.data.status,
      d_consegna_prevista: this.data.d_consegna_prevista,
      n_ddt: this.data.n_ddt,
      d_ddt: this.data.d_ddt,
      note_consegna: this.data.note_consegna,
      b_prestito: this.data.b_prestito,
      id_ordine_prestito: this.data.id_ordine_prestito,
      username_prestito_a: this.data.username_prestito_a,
      username_prestito_da: this.data.username_prestito_da
    }

    let orderStatus = {
      id: "0",
      username: localStorage.getItem('sangue_username')!,
      id_order: this.data.id,
      d_status: this.getFormattedDate(new Date()),
      status: this.data.status,
      note: this.data.b_validato ? "segnato come extra da " + localStorage.getItem('sangue_username') : "segnato come non extra da" + localStorage.getItem('sangue_username'),
      b_sto: false
    };
    this.ordersService.setOrderPromise(orderValidated, false).subscribe(
      res => {
        if(res[0] == "OK"){
          this.loading = false;
          this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
            res2 => {
              if(res2[0] == "OK"){
                this.loading = false;
                console.log("OrderStatus set");
                this.openSnackbar();
              }
              else {
                console.error("Error setting order!");
                this.loading = false;
              }
            }
          );
        }
        else {
          console.error("Error setting order!");
          this.loading = false;
          this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
        }
      }
    );
  }
}
