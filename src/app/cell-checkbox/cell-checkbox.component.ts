import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community'
import { OrdersService } from '../orders.service';
import { PharmaRegistryService } from '../pharma-registry.service';

@Component({
  selector: 'app-cell-checkbox',
  templateUrl: './cell-checkbox.component.html',
  styleUrls: ['./cell-checkbox.component.css']
})
export class CellCheckboxComponent implements ICellRendererAngularComp {
  data: any;
  currentValue: any;
  headerName: string | undefined = '';
  checked: boolean = false;

  constructor(
    //private pharmaRegistryService: PharmaRegistryService,
    //private ordersService: OrdersService,
  ) {

  }

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    this.currentValue = params.value;
    this.headerName = params.colDef?.headerName;
    //console.log(params);
    if(this.currentValue == 1)
      this.checked = true;
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  toggleCheckbox(event: any): void {
    console.log("To be implemented!");
  }
/*
  toggleCheckbox(event: any) {
    console.log(event);
    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
    console.log("current checkbox value: " + this.currentValue);
    
    switch(this.headerName){
      case "Attivo":
        this.pharmaRegistryService.setProduct(
          this.data.id,
          this.data.cod,
          this.data.des,
          this.data.unita,
          this.data.confezionamento,
          this.data.multiplo_confezionamento,
          this.data.multiplo_imballo,
          this.currentValue,  //set the current value of the checkbox
          this.data.extra,
          this.data.min_ord,
          this.data.valido_da,
          this.data.valido_a,
          this.data.isAdding,
        );
        console.log("Attivooooooooo");
        break;

      case "Extra":
        this.pharmaRegistryService.setProduct(
          this.data.id,
          this.data.cod,
          this.data.des,
          this.data.unita,
          this.data.confezionamento,
          this.data.multiplo_confezionamento,
          this.data.multiplo_imballo,
          this.data.attivo,
          this.currentValue,  //set the current value of the checkbox
          this.data.min_ord,
          this.data.valido_da,
          this.data.valido_a,
          this.data.isAdding,
        );
        break;

      case "Ordine urgente":
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
        break;
      
      case "Ordine extra":
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
        break;

      case "Ordine validato":
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
        break;
    }
  }
  */
}
