import { Component, OnInit } from '@angular/core';
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
    private ordersService: OrdersService
  ) {
    super();
  }

  ngOnInit(): void {
    /*
    if(this.data.status != "inviato" && localStorage.getItem("id_profile") != '220') {
      this.isLocked = true;
    }
    */

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
    this.loading = true;
    console.log(event);
    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
    console.log("current checkbox value: " + this.currentValue);

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
      note: this.data.note
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
                console.log("OrderStatus set");
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
