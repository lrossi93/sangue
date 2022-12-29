import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-button-delete-order',
  template: `
  <button mat-raised-button color="primary" style="width: 100%;" (click)="openDeleteOrderDialog()">{{ 'Delete' | translate }}</button>
`,
  styleUrls: ['./button-delete-order.component.css']
})
export class ButtonDeleteOrderComponent implements OnInit, ICellRendererAngularComp {

  data: any;

  constructor() { }
  
  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

  openDeleteOrderDialog() {
    console.log("openDeleteOrderDialog()");
    //TODO
    /*
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
    */
  }
}
