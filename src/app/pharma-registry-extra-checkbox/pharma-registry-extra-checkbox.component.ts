import { Component, OnInit } from '@angular/core';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';
import { PharmaRegistryService } from '../pharma-registry.service';

@Component({
  selector: 'app-pharma-registry-extra-checkbox',
  templateUrl: './pharma-registry-extra-checkbox.component.html',
  styleUrls: ['./pharma-registry-extra-checkbox.component.css']
})
export class PharmaRegistryExtraCheckboxComponent extends CellCheckboxComponent implements OnInit {

  constructor(
    private pharmaRegistryService: PharmaRegistryService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  override toggleCheckbox(event: any): void {
    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
    console.log("current checkbox value: " + this.currentValue);

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
  }
}
