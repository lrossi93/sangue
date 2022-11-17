import { Component, OnInit } from '@angular/core';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-validated-checkbox',
  templateUrl: './orders-validated-checkbox.component.html',
  styleUrls: ['./orders-validated-checkbox.component.css']
})
export class OrdersValidatedCheckboxComponent extends CellCheckboxComponent implements OnInit {

  constructor(
    private ordersService: OrdersService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  override toggleCheckbox(event: any): void {
    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
    console.log("current checkbox value: " + this.currentValue);
    
    let orderValidated = {
      id: this.data.id,
      anno: this.data.anno,
      username: this.data.username,
      d_ordine: this.data.d_ordine,
      n_ordine: this.data.n_ordine,
      b_urgente: this.data.b_urgente,
      b_extra: this.data.b_extra, 
      b_validato: this.currentValue,
      d_validato: this.data.d_validato,
      note: this.data.note
    }
    this.ordersService.setOrder(orderValidated, false);
  }
}
