import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CellValueChangedEvent, Environment } from 'ag-grid-community';
import { environment } from 'src/environments/environment';
import { AddForecastComponent } from '../add-forecast/add-forecast.component';
import { AreYouSureForecastComponent } from '../are-you-sure-forecast/are-you-sure-forecast.component';
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
  dialogRef: any;
  url = environment.basePath + 'forecast.php';

  //component fields
  id = '';
  anno = '';
  username = '';
  id_prd = '';
  qta = '';
  note = '';
  

  //agGrid data
  forecasts: any;
  api: any;

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
    onGridReady: (params: any) => {
      console.log("================grid is ready====================");
      this.api = params.api;
      params.api.setRowData(this.forecasts);
    }
  }
  

  constructor(
    private http: HttpClient,
    public loginService: LoginService,
    private forecastService: ForecastService,
    private dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.loginService.check();
    this.year = new Date().getFullYear().toString();
    this.listForecasts();
  }

  listForecasts(): void {
    /*
    this.forecasts = this.forecastService.listForecasts(this.year);
    if(this.forecasts == null){
      alert("Received null instead of array of forecasts");
    }
    */
    let path = this.url + '?request=listForecasts&id_session='+localStorage.getItem('id_session') + '&year=' + this.year;
    
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      console.log(res);
      if(res[0] == "KO"){
        alert("Error retrieving forecasts!");
      }
      else{
        console.log(res[1]); 
        this.forecasts = res[1];
      }
    });
  }

  setForecast(id: string, anno: string, username: string, id_prd: string, qta: string, note: string){
    let isAdding = false;
    this.forecastService.setForecast(id, anno, username, id_prd, qta, note, isAdding);
  }

  addForecast(anno: string, username: string, id_prd: string, qta: string, note: string){
    this.id = this.forecastService.addForecast(anno, username, id_prd, qta, note);
    let newForecast = {
      id: this.id,
      anno: anno,
      username: username,
      id_prd: id_prd,
      qta: qta,
      note: note
    }
    this.addLocally(newForecast);
  }

  addLocally(newForecast: any){
    this.forecasts.push(newForecast);
  }

  rmForecast(id: string){
    this.forecastService.rmForecast(id);
    this.listForecasts();
  }

  openDialog(){
    this.dialogRef = this.dialog.open(
      AddForecastComponent, 
      {
        data: {
          anno: this.anno,
          username: this.username,
          id_prd: this.id_prd,
          qta: this.qta,
          note: this.note
        }
      }
    );
    this.dialogRef.afterClosed().subscribe(() => {
      this.listForecasts();
      this.api.setRowData(this.forecasts);
    });
  }

  openAreYouSureDialog(){
    this.dialogRef = this.dialog.open(
      AreYouSureForecastComponent,
      {
        data:{
          id: this.id
        }
      });
    this.dialogRef.afterClosed().subscribe(() =>{
      this.listForecasts();
      this.api.setRowData(this.forecasts);
    });
  }

  closeDialog(){
    this.dialog.closeAll();
    this.listForecasts();
    this.api.setRowData(this.forecasts);
  }
}
