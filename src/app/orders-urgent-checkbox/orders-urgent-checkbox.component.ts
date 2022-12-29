import { Component, OnInit } from '@angular/core';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-urgent-checkbox',
  templateUrl: './orders-urgent-checkbox.component.html',
  styleUrls: ['./orders-urgent-checkbox.component.css']
})
export class OrdersUrgentCheckboxComponent extends CellCheckboxComponent implements OnInit {

  constructor(
    private ordersService: OrdersService
  ) {
    super();
  }

  ngOnInit(): void {
    if(this.data.status != "inviato" && localStorage.getItem("id_profile") != '220') {
      this.isLocked = true;
    }
  }

  override toggleCheckbox(event: any): void {
    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
    console.log("current checkbox value: " + this.currentValue);
    
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
      note: this.data.note
    }
    this.ordersService.setOrder(orderUrgent, false);
  }
}
