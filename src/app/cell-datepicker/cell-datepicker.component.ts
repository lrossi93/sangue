import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community'

@Component({
  selector: 'app-cell-datepicker',
  templateUrl: './cell-datepicker.component.html',
  styleUrls: ['./cell-datepicker.component.css']
})
export class CellDatepickerComponent implements ICellRendererAngularComp {
  data: any;
  date!: UntypedFormGroup;
  constructor() {

  }
  
  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    console.log(this.data.valido_da);
    this.date = new UntypedFormGroup({
      selectedDate: new UntypedFormControl(this.data.valido_a)
    });
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

}
