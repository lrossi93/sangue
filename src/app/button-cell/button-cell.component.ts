import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { CellClickedEvent, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-button-cell',
  template: `
    <button (click)="buttonClicked($event)">delete</button>
  `
})
export class ButtonCellComponent implements ICellRendererAngularComp {
  data: any;
  constructor() { }

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    //this should be set to false by default
    return false;
  }

  buttonClicked(event: any){
    console.log("ID: " + this.data.id);
  }
}
