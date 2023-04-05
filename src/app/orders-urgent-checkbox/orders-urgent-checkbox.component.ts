import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';
import { OrdersService } from '../orders.service';
import { environment, translations } from 'src/environments/environment';
import { localeLang } from 'src/environments/grid-configs';

@Component({
  selector: 'app-orders-urgent-checkbox',
  templateUrl: './orders-urgent-checkbox.component.html',
  styleUrls: ['./orders-urgent-checkbox.component.css']
})
export class OrdersUrgentCheckboxComponent extends CellCheckboxComponent implements OnInit {
  loading = false;
  constructor(
    private ordersService: OrdersService,
    snackbar: MatSnackBar
  ) {
    super(snackbar);
  }

  ngOnInit(): void {
    /*
    if(this.data.status != "inviato" && localStorage.getItem("id_profile") != '220') {
      this.isLocked = true;
    }
    */
    //console.log(this.data.note);
    switch(localStorage.getItem("id_profile")) {
      case '220':
        this.isLocked = (this.data.status == "inviato al fornitore" || this.data.status == "inviato al cliente" || this.data.status == "ricevuto");
        break;
      case '210':
        this.isLocked = (this.data.status != "inviato");
        break;
      case '230':
        this.isLocked = true;
        break;
      default:
        break;
    }
  }

  override toggleCheckbox(event: any): void {
    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
    //console.log(navigator.language.split("-", 2)[0]);
    if(this.currentValue == 1 && (this.data.note == "") || (this.data.note == null) || (this.data.note === undefined)) {
      localeLang == 'it' ? alert(translations.it.PleaseProvideNotes) : alert(translations.en.PleaseProvideNotes);
    }

    let orderUrgent = {
      id: this.data.id,
      anno: this.data.anno,
      username: this.data.username,
      d_ordine: this.data.d_ordine,
      n_ordine: this.data.n_ordine,
      b_urgente: this.currentValue,
      b_extra: this.data.b_extra, 
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
    };

    let orderStatus = {
      id: "0",
      username: localStorage.getItem('sangue_username')!,
      id_order: this.data.id,
      d_status: this.getFormattedDate(new Date()),
      status: this.data.status,
      note: this.data.b_urgente ? "segnato come urgente da " + localStorage.getItem('sangue_username') : "segnato come non urgente da" + localStorage.getItem('sangue_username'),
      b_sto: false
    };
    
    this.ordersService.setOrderPromise(orderUrgent, false).subscribe(
      res => {
        if(res[0] == "OK"){
          console.log("Order set");
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
