import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderRow, Product } from 'src/environments/environment';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-loan-details-dialog',
  templateUrl: './loan-details-dialog.component.html',
  styleUrls: ['./loan-details-dialog.component.css']
})
export class LoanDetailsDialogComponent implements OnInit {

  orderRow: OrderRow = {
    id: "",
    id_ordine: "",
    n_riga: 0,
    id_prd: "",
    username: "",
    qta: 0,
    motivazione: "",
    qta_validata: 0,
    qta_ricevuta: 0,
    note: ""
  };
  products: Product[] = [];
  productName = "";
  productQty = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      data: any,
      orderRow: OrderRow,
      products: Product[],
    },
    private ordersService: OrdersService
  ) { 
    console.log(this.data.orderRow);
    this.products = this.data.products;
  }

  ngOnInit(): void {
  }

  productIdToDes(id: string): string {
    console.log(id);
    for(var i = 0; i < this.data.products.length; ++i){
      console.log(this.data.products[i].des);
      if(id == this.data.products[i].id) {
        return this.data.products[i].des;
      }
    }
    return "";
  }
}
