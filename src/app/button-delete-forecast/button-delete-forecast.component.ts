import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ForecastComponent } from '../forecast/forecast.component';

@Component({
  selector: 'app-button-delete-forecast',
  template: `
    <button 
    mat-mini-fab 
    class="mat-elevation-z0"
    disabled="{{isApproved}}"
    color="warn"
    matTooltip="{{ 'Delete' | translate }}" 
    (click)="onClickOpenDialog($event)">
      <i class="material-icons">delete</i>
    </button>
  `,
  styleUrls: ['./button-delete-forecast.component.css']
})
export class ButtonDeleteForecastComponent implements ICellRendererAngularComp {
  isApproved: boolean = false;
  data: any;
  
  constructor(private forecastComponent: ForecastComponent) { }

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    if(this.data.qta_approvata > 0) {
      this.isApproved = true;
    }
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    //default return
    return false;
  }

  onClickOpenDialog(event: any){
    this.forecastComponent.setId(this.data.id);
    this.forecastComponent.openAreYouSureDialog();
  }

  //TODO
/*
  openAreYouSureDialog(){
    this.dialogRef = this.dialog.open(
      AreYouSureForecastComponent,
      {
        data:{
          id: this.id
        }
      });
    this.dialogRef.afterClosed().subscribe((result: {id: string, isSubmitted: boolean}) =>{
      if(result !== undefined && result.isSubmitted){
        this.rmForecast(result.id);
        this.updateGrid();
      }
    });
  }
*/
}
