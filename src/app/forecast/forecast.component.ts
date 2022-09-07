import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CellValueChangedEvent } from 'ag-grid-community';
import { environment } from 'src/environments/environment';
import { AddForecastComponent } from '../add-forecast/add-forecast.component';
import { AreYouSureForecastComponent } from '../are-you-sure-forecast/are-you-sure-forecast.component';
import { ForecastService } from '../forecast.service';
import { LoginService } from '../login.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ButtonDeleteForecastComponent } from '../button-delete-forecast/button-delete-forecast.component';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
@Injectable({providedIn: 'root'})
export class ForecastComponent implements OnInit {
  forecasts: any = [];
  url = environment.basePath + 'forecast.php';
  dialogRef: any;
  
  //parameters for [set|add|rm]Forecast()
  id = '';
  anno = '';
  username = '';
  id_prd = '';
  qta = '';
  note = '';
  year: string = '';
  

  //agGrid configuration
  api: any;
  forecastGridConfig: any;
  gridOptions: any;
  defaultColDef: any;

  //agGrid API handle
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

/*

  CONSTRUCTOR

*/
  constructor(
    private http: HttpClient,
    public loginService: LoginService,
    private forecastService: ForecastService,
    private dialog: MatDialog,
    ) { 

      //columnDef
      this.forecastGridConfig = [
        { 
          headerName: 'ID', 
          field: 'id'
        },
        { 
          headerName: 'Year', 
          field: 'anno', 
          editable: true
        },
        { 
          headerName: 'Username', 
          field: 'username', 
          editable: true
        },
        { 
          headerName: 'Product ID', 
          field: 'id_prd', 
          editable: true
        },
        { 
          headerName: 'Quantity', 
          field: 'qta', 
          editable: true
        },
        { 
          headerName: 'Notes', 
          field: 'note', 
          editable: true
        },
        { 
          headerName: 'Action', 
          cellRenderer: ButtonDeleteForecastComponent
        }
      ];

      //gridOptions
      this.gridOptions = {
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
        }
      }

      //defaultColDef
      this.defaultColDef = {
        sortable: true,
        filter: true,
      };
    }

  ngOnInit(): void {
    this.loginService.check();
    this.year = new Date().getFullYear().toString();
    this.listForecasts();
    setTimeout(
      () => {
        this.api = this.agGrid.api;
        console.log(this.api);
      }, 300);
  }

  logAPI(){
    console.log(this.api);
  }

  setId(id: string){
    this.id = id;
  }

  listForecasts(): void {
    
    this.forecasts = this.forecastService.listForecasts(this.year);
    if(this.forecasts == null){
      //alert("Received null instead of array of forecasts");
      console.log("null array of forecasts");
      
    }
    
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
    this.setLocally(id, anno, username, id_prd, qta, note);
  }

  setLocally(id: string, anno: string, username: string, id_prd: string, qta: string, note: string){
    for(let i = 0; i < this.forecasts.length; ++i){
      if(id == this.forecasts[i].id){
        this.forecasts[i].anno = anno;
        this.forecasts[i].username = username;
        this.forecasts[i].id_prd = id_prd;
        this.forecasts[i].qta = qta;
        this.forecasts[i].note = note;
        this.updateGrid();
        return;
      }
    }
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
    this.updateGrid();
  }

  rmForecast(id: string){
    this.forecastService.rmForecast(id);
    this.listForecasts();
  }

  rmLocally(id: string){
    let visible = 0;
    for(let i = 0; i < this.forecasts.length; ++i){
      if(id == this.forecasts[i].id){
        this.forecasts.splice(i, 1);
        if(this.forecasts.length == 0){
          //no-op
        }
        else{
          //if it was the last index, make the current last index visible
          if(i == this.forecasts.length){
            visible = this.forecasts.length - 1;
          }
          //if it was not the last index, make the current i index visible
          else{
            visible = i;
          }
        }
        this.updateGrid();
        this.api.ensureIndexVisible(visible);
        return;
      }
    }
  }

  openAddForecastDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      anno: this.anno,
      username: this.username,
      id_prd: this.id_prd,
      qta: this.qta,
      note: this.note
    }

    this.dialogRef = this.dialog.open(
      AddForecastComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: {
        anno: string,
        username: string,
        id_prd: string,
        qta: string,
        note: string,
        isSubmitted: boolean
    }) => {
      if(result !== undefined && result.isSubmitted){
        this.addForecast(
          result.anno,
          result.username,
          result.id_prd,
          result.qta,
          result.note
        );
        this.updateGrid();
      }
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
    this.dialogRef.afterClosed().subscribe((result: {id: string, isSubmitted: boolean}) =>{
      if(result !== undefined && result.isSubmitted){
        this.rmForecast(result.id);
        this.updateGrid();
      }
    });
  }

  closeDialog(){
    this.dialog.closeAll();
    this.listForecasts();
    this.api.setRowData(this.forecasts);
  }

  updateGrid(){
    console.log(this.api);
    this.api.setRowData(this.forecasts);
  }
}
