import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { PharmaRegistryComponent } from '../pharma-registry/pharma-registry.component';

@Component({
  selector: 'app-button-cell',
  template: `
    <button mat-raised-button color="primary" style="width: 100%" (click)="onClickOpenDialog($event)">{{ 'Delete' | translate }}</button>
  `
})
export class ButtonDeleteProductComponent implements ICellRendererAngularComp {
  data: any;
  constructor(private pharmaRegistryComponent: PharmaRegistryComponent) { }

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    //this should be set to false by default
    return false;
  }

  onClickOpenDialog(event: any){
    this.pharmaRegistryComponent.setId(this.data.id);
    this.pharmaRegistryComponent.openAreYouSureDialog();
  }
}
