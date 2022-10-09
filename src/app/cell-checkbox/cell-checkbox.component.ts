import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community'
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
    private pharmaRegistryService: PharmaRegistryService
  ) {

  }

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    this.currentValue = params.value;
    this.headerName = params.colDef?.headerName;
    
    if(this.currentValue == 1)
      this.checked = true;
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

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
        console.log("Extraaaaaaaaaa");
        break;

      case "Urgente":
        //#TODO: set the value of the field b_urgente in an Order
        console.log("Urgente");
        break;
      
      //TODO: CAREFUL!!! this is the b_extra field of an Order!!!
      //TODO: CAREFUL!!! this is the b_extra field of an Order!!!
      //TODO: CAREFUL!!! this is the b_extra field of an Order!!!
      case "Extra":
        //#TODO: set the value of the field b_urgente in an Order
        //if product, do something
        //if order, do something else
        console.log("Extra");
        break;

      case "Validato":
        //#TODO: set the value of the field b_validato in an Order
        console.log("Validato");
        break;
    }
  }
}
