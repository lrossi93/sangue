import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/environments/environment';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';
import { PharmaRegistryComponent } from '../pharma-registry/pharma-registry.component';

@Component({
  selector: 'app-pharma-registry-active-checkbox',
  templateUrl: './pharma-registry-active-checkbox.component.html',
  styleUrls: ['./pharma-registry-active-checkbox.component.css']
})
export class PharmaRegistryActiveCheckboxComponent extends CellCheckboxComponent implements OnInit {

  constructor(
    private pharmaRegistry: PharmaRegistryComponent,
    snackbar: MatSnackBar
  ) {
    super(snackbar);
  }

  ngOnInit(): void {
  }

  override toggleCheckbox(event: any): void {
    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
    //console.log("current checkbox value: " + this.currentValue);
    
    let newProduct: Product = {
      id: this.data.id,
      cod: this.data.cod,
      des: this.data.des,
      unita: this.data.unita,
      confezionamento: this.data.confezionamento,
      multiplo_confezionamento: this.data.multiplo_confezionamento,
      multiplo_imballo: this.data.multiplo_imballo,
      attivo: this.currentValue,
      extra: this.data.extra,
      min_ord: this.data.min_ord,
      valido_da: this.data.valido_da,
      valido_a: this.data.valido_a,
      ord: this.data.ord
    }

    this.pharmaRegistry.setProduct(newProduct, false);
  }
}
