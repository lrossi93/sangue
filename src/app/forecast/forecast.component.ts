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
import { DropdownProductsForecastComponent } from '../dropdown-products-forecast/dropdown-products-forecast.component';
import { UsersService } from '../users.service';
import { DropdownUsersForecastComponent } from '../dropdown-users-forecast/dropdown-users-forecast.component';

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
  anno!: number;
  username = '';
  id_prd = '';
  qta!: number;
  note = '';
  qta_approvata!: number;
  costo_unitario!: number;
  year: string = new Date().getFullYear().toString();
  
  //agGrid configuration
  api: any;
  forecastGridConfig: any;
  
  //sangueasl column definition
  gridConfigUser210: any = [
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
      editable: false
    },
    /*
    { 
      headerName: 'Product ID', 
      field: 'id_prd', 
      editable: true
    },
    */
    { 
      headerName: 'Product name', 
      field: 'id_prd', 
      cellRenderer: DropdownProductsForecastComponent
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
      headerName: 'Quantità approvata', 
      field: 'qta_approvata', 
      editable: false
    },
    { 
      headerName: 'Costo unitario (€)', 
      field: 'costo_unitario', 
      editable: false
    },
    { 
      headerName: 'Action', 
      cellRenderer: ButtonDeleteForecastComponent,
      autoHeight: true
    }
  ];

  //sangueaslno column definition
  gridConfigUser220: any = [
    { 
      headerName: 'ID', 
      field: 'id'
    },
    { 
      headerName: 'Year', 
      field: 'anno', 
      editable: false
    },
    { 
      headerName: 'Username', 
      field: 'username', 
      editable: false
    },
    /*
    { 
      headerName: 'Username', 
      field: 'username',
      cellRenderer: DropdownUsersForecastComponent
    },
    /*
    { 
      headerName: 'Product ID', 
      field: 'id_prd', 
      editable: false
    },
    */
    { 
      headerName: 'Product name', 
      field: 'id_prd', 
      cellRenderer: DropdownProductsForecastComponent,
      editable: false
    },
    { 
      headerName: 'Quantity', 
      field: 'qta', 
      editable: false
    },
    { 
      headerName: 'Notes', 
      field: 'note', 
      editable: false
    },
    { 
      headerName: 'Quantità approvata', 
      field: 'qta_approvata', 
      editable: true
    },
    { 
      headerName: 'Costo unitario (€)', 
      field: 'costo_unitario', 
      editable: true
    },
    { 
      headerName: 'Action', 
      cellRenderer: ButtonDeleteForecastComponent,
      autoHeight: true
    }
  ];
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
    private usersService: UsersService,
    ) { 
      //console.log('profile: ' + loginService.getProfile());
      
      //usersService.listUsers();

      //columnDef
      switch(loginService.getProfile()){
        case '210':
          this.forecastGridConfig = this.gridConfigUser210;
          break;
        case '220':
          this.forecastGridConfig = this.gridConfigUser220;
          break;
      }
      
      //gridOptions
      this.gridOptions = {
        onCellValueChanged: (event: CellValueChangedEvent) => {
          //console.log("Changed from " + event.oldValue + " to " + event.newValue);
          //console.log("event.data.toString(): " + event.data.toString());
          this.setForecast(
            event.data.id,
            event.data.anno,
            event.data.username,
            event.data.id_prd,
            event.data.qta,
            event.data.note,
            event.data.qta_approvata,
            event.data.costo_unitario
          );
          this.updateGrid();
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

    //columnDef
    switch(this.loginService.getProfile()){
      case '210':
        this.forecastGridConfig = this.gridConfigUser210;
        break;
      case '220':
        this.forecastGridConfig = this.gridConfigUser220;
        break;
    }

    this.listForecasts(this.year);

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

  listForecasts(year: string): void {    
    //this.forecasts = this.forecastService.listForecasts(this.year);
    
    if(this.forecasts == null){
      console.log("null array of forecasts");
    }
    
    let path = this.url + '?request=listForecasts&id_session='+localStorage.getItem('id_session') + '&year=' + this.year;
    
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      //console.log(res);
      if(res[0] == "KO"){
        alert("Error retrieving forecasts!");
      }
      else{ 
        this.forecasts = res[1];
      }
    });
  }

  setForecast(id: string, anno: number, username: string, id_prd: string, qta: number, note: string, qta_approvata: number, costo_unitario: number){
    let isAdding = false;
    this.forecastService.setForecast(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario, isAdding);
    this.setLocally(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario);
  }

  setLocally(id: string, anno: number, username: string, id_prd: string, qta: number, note: string, qta_approvata: number, costo_unitario: number){
    for(let i = 0; i < this.forecasts.length; ++i){
      if(id == this.forecasts[i].id){
        this.forecasts[i].anno = anno;
        this.forecasts[i].username = username;
        this.forecasts[i].id_prd = id_prd;
        this.forecasts[i].qta = qta;
        this.forecasts[i].note = note;
        this.forecasts[i].qta_approvata = qta_approvata;
        this.forecasts[i].costo_unitario = costo_unitario;
        this.updateGrid();
        return;
      }
    }
  }

  addForecast(anno: number, username: string, id_prd: string, qta: number, note: string, qta_approvata: number, costo_unitario: number){
    this.id = this.forecastService.addForecast(anno, username, id_prd, qta, note, qta_approvata, costo_unitario);
    console.log("new forecast id: " + this.id)
    let newForecast = {
      id: this.id,
      anno: anno,
      username: username,
      id_prd: id_prd,
      qta: qta,
      note: note,
      qta_approvata: qta_approvata,
      costo_unitario: costo_unitario
    }
    this.addLocally(newForecast);
  }

  addLocally(newForecast: any){
    this.forecasts.push(newForecast);
    this.updateGrid();
  }

  rmForecast(id: string){
    this.forecastService.rmForecast(id);
    this.listForecasts(this.year);
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
        anno: number,
        username: string,
        id_prd: string,
        qta: number,
        note: string,
        qta_approvata: number,
        costo_unitario: number,
        isSubmitted: boolean
    }) => {
      if(result !== undefined && result.isSubmitted){
        this.addForecast(
          result.anno,
          result.username,
          result.id_prd,
          result.qta,
          result.note,
          result.qta_approvata,
          result.costo_unitario
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
    this.listForecasts(this.year);
    this.api.setRowData(this.forecasts);
  }

  updateGrid(){
    console.log(this.api);
    this.api.setRowData(this.forecasts);
  }
}
