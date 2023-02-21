import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-extra-checkbox',
  templateUrl: './orders-extra-checkbox.component.html',
  styleUrls: ['./orders-extra-checkbox.component.css']
})
export class OrdersExtraCheckboxComponent extends CellCheckboxComponent implements OnInit {
  loading = false;
  constructor(
    private ordersService: OrdersService,
    snackbar: MatSnackBar
  ) {
    super(snackbar);
  }

  ngOnInit(): void {
    switch(localStorage.getItem("id_profile")) {
      case '220':
        this.isLocked = this.data.b_to_supplier;
        break;
      case '210':
        this.isLocked = (this.data.status != "inviato" );
        break;
      case '230':
        this.isLocked = true;
        break;
      default:
        break;
    }
    /*
    if(this.data.b_to_supplier){
      this.isLocked = true;
    }
    */
  }

  override toggleCheckbox(event: any): void {
    this.loading = true;
    //console.log(event);
    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
    //console.log("current checkbox value: " + this.currentValue);

    let orderExtra = {
      id: this.data.id,
      anno: this.data.anno,
      username: this.data.username,
      d_ordine: this.data.d_ordine,
      n_ordine: this.data.n_ordine,
      b_urgente: this.data.b_urgente,
      b_extra: this.currentValue, 
      b_validato: this.data.b_validato,
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
      note: this.data.b_extra ? "segnato come extra da " + localStorage.getItem('sangue_username') : "segnato come non extra da" + localStorage.getItem('sangue_username'),
      b_sto: false
    };

    this.ordersService.setOrderPromise(orderExtra, false).subscribe(
      res => {
        if(res[0] == "OK"){
          this.loading = false;
          this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
            res2 => {
              if(res2[0] == "OK"){
                this.loading = false;
                this.openSnackbar();
                //console.log("OrderStatus set");
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
