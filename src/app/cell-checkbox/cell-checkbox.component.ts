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
  isLocked!: boolean;

  constructor( ) { }

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    this.currentValue = params.value;
    this.headerName = params.colDef?.headerName;
    this.isLocked = params.data.isRowLocked;
    
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
}
