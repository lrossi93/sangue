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
import { UsersService } from '../users.service';
import { defaultColDef, gridConfigForecast210, gridConfigForecast220 } from 'src/environments/grid-configs'
import { Router } from '@angular/router';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
@Injectable({providedIn: 'root'})
export class ForecastComponent implements OnInit {
  forecasts: any = [];
  url = environment.basePath + 'forecast.php';
  pharmaRegistryUrl = environment.basePath + 'anag.php';
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
  
  //sangueasl column definition (ASL cliente)
  gridConfigUser210: any = gridConfigForecast210;

  //sangueaslno column definition (ASL fornitore)
  gridConfigUser220: any = gridConfigForecast220;
  gridOptions: any;
  defaultColDef: any = defaultColDef;

  //agGrid API handle
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  //for dialog autocomplete
  users: any = [];
  products: any = [];

/*

  CONSTRUCTOR

*/
  constructor(
    private http: HttpClient,
    public loginService: LoginService,
    private forecastService: ForecastService,
    private dialog: MatDialog,
    private usersService: UsersService,
    private router: Router
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
    }

  ngOnInit(): void {
    this.loginService.checkPromise().subscribe(
      res => {
        if(res[0] == "KO"){
          localStorage.removeItem("id_session");
          this.router.navigate(['login']);
        }
      }
    );

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
    this.listUsers("210");
    this.listProducts();

    setTimeout(
      () => {
        this.api = this.agGrid.api;
        this.logAPI();
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
        //instructions for when listforecasts fails
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
    console.log("new forecast id: " + this.id);
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
    //#TODO: check the ID is put in the grid
    console.log(newForecast);
    
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
      note: this.note,
      users: this.users,        //array of users
      products: this.products   //array of products
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
        console.log(result);
        if(
          result.anno == null ||
          result.anno.toString() == '' ||
          result.username == '' ||
          result.id_prd === undefined ||
          result.qta.toString() == '' 
        ){
          alert("All Forecast core fields must have a value before submission! Submission aborted.");
          return;
        }
        else{
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

  listUsers(userlevel: string): void{
    let path = this.pharmaRegistryUrl + '?request=listUsers&id_session='+localStorage.getItem('id_session')+'&userlevel='+userlevel;
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      if(res[0] == "KO"){
        //instructions for when listUsers fails
      }
      else{
        this.users = res[1];
      }
    });
  }

  listProducts(): void{
    let path = this.pharmaRegistryUrl + '?request=listProducts&id_session='+localStorage.getItem('id_session');
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      if(res[0] == "KO"){
        //instructions for when listProducts fails
      }
      else{
        this.products = res[1];
      }
    });
  }
}
