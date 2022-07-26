import { Component, OnInit } from '@angular/core';
import { CellValueChangedEvent } from 'ag-grid-community';
import { ButtonCellComponent } from '../button-cell/button-cell.component';
import { ForecastService } from '../forecast.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  //reference year
  year: string = '';

  //agGrid data
  forecasts: any;

  //agGrid configuration
  forecastGridConfig = [
    { headerName: 'ID', field: 'id'},
    { headerName: 'Year', field: 'anno', editable: true},
    { headerName: 'Username', field: 'username', editable: true},
    { headerName: 'Product ID', field: 'id_prd', editable: true},
    { headerName: 'Quantity', field: 'qta', editable: true},
    { headerName: 'Notes', field: 'note', editable: true},
    { headerName: '', cellRenderer: ButtonCellComponent}//change this to ButtonDeleteForecastComponent
  ];

  //agGrid default column definition
  defaultColDef = {
    sortable: true,
    filter: true,
  };

  //agGrid options
  gridOptions = {
    /*onCellClicked: (event: CellClickedEvent) => {
      console.log(event);
    },*/
    onCellValueChanged: (event: CellValueChangedEvent) => {
      console.log("Changed from " + event.oldValue + " to " + event.newValue);
      console.log("event.data.toString(): " + event.data.toString());
      this.setForecast(
        event.data.id,
        event.data.anno,
        event.data.username,
        event.data.id_prd,
        event.data.qta,
        event.data.note
      ); //edit forecast from grid
    },
  }

  constructor(
    public loginService: LoginService,
    private forecastService: ForecastService,
    ) { }

  ngOnInit(): void {
    this.loginService.check();
    this.year = new Date().getFullYear().toString();
    this.listForecasts();
  }

  listForecasts(): void {
    this.forecasts = this.forecastService.listForecasts(this.year);
    if(this.forecasts == null){
      alert("Received null instead of array of forecasts");
    }
  }

  setForecast(id: string, anno: string, username: string, id_prd: string, qta: string, note: string){
    let isAdding = false;
    this.forecastService.setForecast(id, anno, username, id_prd, qta, note, isAdding);
  }

  addForecast(anno: string, username: string, id_prd: string, qta: string, note: string){
    this.forecastService.addForecast(anno, username, id_prd, qta, note);
  }

  rmForecast(id: string){
    this.forecastService.rmForecast(id);
    this.listForecasts();
  }
}
