import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ForecastComponent } from '../forecast/forecast.component';

@Component({
  selector: 'app-button-delete-forecast',
  template: `
    <button color="primary" style="width: 100%;" (click)="onClickOpenDialog($event)">Delete</button>
  `,
  styleUrls: ['./button-delete-forecast.component.css']
})
export class ButtonDeleteForecastComponent implements ICellRendererAngularComp {
  
  data: any;
  
  constructor(private forecastComponent: ForecastComponent) { }

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    //default return
    return false;
  }

  onClickOpenDialog(event: any){
    this.forecastComponent.setId(this.data.id);
    this.forecastComponent.openAreYouSureDialog();
  }
}
