import { Component, OnInit } from '@angular/core';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-extra-checkbox',
  templateUrl: './orders-extra-checkbox.component.html',
  styleUrls: ['./orders-extra-checkbox.component.css']
})
export class OrdersExtraCheckboxComponent extends CellCheckboxComponent implements OnInit {

  constructor(
    private ordersService: OrdersService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  override toggleCheckbox(event: any): void {
    //console.log(event);
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
    this.ordersService.setOrder(orderExtra, false);
  }
}
