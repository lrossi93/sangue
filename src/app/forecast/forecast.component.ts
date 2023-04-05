import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CellClickedEvent, CellValueChangedEvent, GetRowIdFunc, GetRowIdParams, GridApi } from 'ag-grid-community';
import { environment, Forecast, ForecastGridRowData } from 'src/environments/environment';
import { AddForecastComponent } from '../add-forecast/add-forecast.component';
import { AreYouSureForecastComponent } from '../are-you-sure-forecast/are-you-sure-forecast.component';
import { ForecastService } from '../forecast.service';
import { LoginService } from '../login.service';
import { AgGridAngular } from 'ag-grid-angular';
import { UsersService } from '../users.service';
import { AG_GRID_LOCALE_EN, AG_GRID_LOCALE_IT, defaultColDef, gridConfigForecast210, gridConfigForecast220 } from 'src/environments/grid-configs'
import { Router } from '@angular/router';
import { PharmaRegistryService } from '../pharma-registry.service';
import { SnackbarService } from '../snackbar.service';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
@Injectable({providedIn: 'root'})
export class ForecastComponent implements OnInit {
  url = environment.basePath + 'forecast.php';
  pharmaRegistryUrl = environment.basePath + 'anag.php';
  dialogRef: any;

  loaded: number = 0;
  
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
  forecastGridConfig: any;
  forecasts: Forecast[] = [];
  forecastGridRowData: ForecastGridRowData[] = [];
  
  //sangueasl column definition (ASL cliente)
  //gridConfigUser210: any = this.gridConfigForecast210;

  //sangueaslno column definition (ASL fornitore)
  //gridConfigUser220: any = this.gridConfigForecast220;
  gridOptions: any;
  defaultColDef: any = defaultColDef;

  //agGrid API handle
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  gridApi!: GridApi;
  api: any;
  columnApi: any;

  //for dialog autocomplete
  users: any = []; 
  products: any = [];

  isLoading: boolean = false;

  public getRowId: GetRowIdFunc = (params: GetRowIdParams) => {
    return params.data.id;
  };

  localeText = (environment.currentLanguage == 'it' ? AG_GRID_LOCALE_IT : AG_GRID_LOCALE_EN);

/*

  CONSTRUCTOR

*/
  constructor(
    public loginService: LoginService,
    private forecastService: ForecastService,
    private pharmaRegistryService: PharmaRegistryService,
    private dialog: MatDialog,
    private usersService: UsersService,
    private router: Router,
    private snackbarService: SnackbarService
    ) { 
    //columnDef
    switch(this.loginService.getProfile()){
      case '210':
        this.forecastGridConfig = gridConfigForecast210;
        break;
      case '220':
        this.forecastGridConfig = gridConfigForecast220;
        break;
    }

    this.loginService.getCurrentUserSync();

    if(environment.globalUsers.length == 0) {
      //get users and populate globalUsers
      this.usersService.getUsersGlobally();
    }
    if(environment.globalProducts.length == 0) {
      this.pharmaRegistryService.getProductsGlobally();
    }    
    
    //gridOptions
    this.gridOptions = {
      /*onGridInit: () => {
        this.createForecastGridRowData();
        this.updateGrid();
      },
      */
      onCellClicked: (event: CellClickedEvent) => {
        //console.log(event);
      },
      onCellValueChanged: (event: CellValueChangedEvent) => {
        //console.log("Changed from " + event.oldValue + " to " + event.newValue);
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
      }
    }
  }

  onGridReady = (params: { api: any; columnApi: any; }) => {
    this.api = params.api;
    //console.log("log API:");
    //console.log(this.api);
    this.columnApi = params.columnApi;    
    //this.autoSizeColumns(false);
    console.log("forecastColumnState:");
    console.log(localStorage.getItem("forecastColumnState"));
  }

  autoSizeColumns(skipHeader: boolean) {
    /*
    const allColumnIds: string[] = [];
    this.columnApi.getColumns()!.forEach((column: { getId: () => string; }) => {
      allColumnIds.push(column.getId());
    });
    this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
    */
    this.api.sizeColumnsToFit();
    //this.columnApi.autoSizeAllColumns(skipHeader);
  }

  onFirstDataRendered = (event: any) => {
    this.retrieveColumnState();
  }
  
  retrieveColumnState() {
    let localColumnState = localStorage.getItem("forecastColumnState");
    if(localColumnState != null) {
      this.columnApi.applyColumnState({state: JSON.parse(localColumnState)});
    }
  }

  saveColumnState() {
    console.log(this.columnApi.getColumnState());
    localStorage.setItem("forecastColumnState", JSON.stringify(this.columnApi.getColumnState()));
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


    //retrieve data from db
    this.getAllForecastData();
    
    /*setTimeout(
      () => {
        this.api = this.agGrid.api;
        this.logAPI();
      }, 300);
      */
  }

  logAPI(){
    console.log(this.api);
  }

  setId(id: string){
    this.id = id;
  }

  getAllForecastData() {
    this.isLoading = true;
    this.forecastService.listForecastsPromise(this.year).subscribe(
      res1 => {
        if(res1[0] == "KO") {
          console.error("Error retrieving forecasts for year " + this.year) + "!";
        }
        else {
          this.forecasts = res1[1];
          //console.log(this.forecasts);
          this.usersService.listUsersPromise("210").subscribe(
            res2 => {
              if(res2[0] == "KO") {
                console.error("Error retrieving users with code 210!");
              }
              else {
                this.users = res2[1];
                //console.log(this.users);
                this.pharmaRegistryService.listProductsPromise().subscribe(
                  res3 => {
                    if(res3[0] == "KO") {
                      console.error("Error retrieving products!");
                    }
                    else {
                      this.products = res3[1];
                      //console.log(this.products);
                      this.createForecastGridRowData();
                      //this.autoSizeColumns(false);
                      //this.api.setDomLayout('autoHeight');
                      this.isLoading = false;
                    }
                  }
                )
              }
            }
          )
        }
      }
    )
  }
 

  listForecasts(year: string): void {    
    this.forecastService.listForecastsPromise(year).subscribe(
      res => {
        //console.log(res);
        if(res[0] == "KO"){
          console.error("Error retrieving forecasts!");
        }
        else{ 
          this.forecasts = res[1];
          this.createForecastGridRowData();
        }
      }
    );
  }

  createForecastGridRowData() {
    this.forecastGridRowData = [];
    for(var i = 0; i < this.forecasts.length; ++i) {
      var newForecastGridRowData = {
        id: this.forecasts[i].id,
        anno: this.forecasts[i].anno,
        username: this.forecasts[i].username,
        full_username: this.getFullUsernameById(this.forecasts[i].username),
        id_prd: this.forecasts[i].id_prd,
        product_name: this.getProductNameById(this.forecasts[i].id_prd),
        qta: this.forecasts[i].qta,
        note: this.forecasts[i].note,
        qta_approvata: this.forecasts[i].qta_approvata,
        costo_unitario: this.forecasts[i].costo_unitario
      };
      this.forecastGridRowData.push(newForecastGridRowData);
    }
    //console.log("forecastGridRowData");
    //console.log(this.forecastGridRowData);
  }

  getFullUsernameById(id: string): string {
    for(var i = 0; i < this.users.length; ++i) {
      if(this.users[i].username == id) {
        return this.users[i].client;
      }
    }
    return "";
  }

  getProductNameById(id: string): string {
    for(var i = 0; i < this.products.length; ++i) {
      if(this.products[i].id == id) {
        return this.products[i].des;
      }
    }
    return "";
  }

  setForecast(id: string, anno: number, username: string, id_prd: string, qta: number, note: string, qta_approvata: number, costo_unitario: number){
    let isAdding = false;
    this.forecastService.setForecastPromise(
      id, anno, 
      username, id_prd, qta, 
      note, qta_approvata, 
      costo_unitario, isAdding
    )?.subscribe(
      res => {
        this.setLocally(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario);
      }  
    );
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
        //this.createForecastGridRowData();
        //this.updateGrid();
        return;
      }
    }
  }

  addForecast(anno: number, username: string, id_prd: string, qta: number, note: string, qta_approvata: number, costo_unitario: number){
    this.forecastService.addForecastPromise(
      anno, username, 
      id_prd, qta, note, 
      qta_approvata, costo_unitario
    ).subscribe(
      (res: string[]) => {
        console.log("new forecast id: " + res[1]);
        let newForecast = {
          id: res[1],
          anno: anno,
          username: username,
          id_prd: id_prd,
          qta: qta,
          note: note,
          qta_approvata: qta_approvata,
          costo_unitario: costo_unitario
        }
        this.addLocally(newForecast);
        this.snackbarService.onCreate();
      }
    );
  }

  addLocally(newForecast: any){
    //console.log(newForecast);
    this.forecasts.push(newForecast);
    this.forecastGridRowData.push({
      id: newForecast.id,
      anno: newForecast.anno,
      username: newForecast.username,
      full_username: this.getFullUsernameById(newForecast.username),
      id_prd: newForecast.id_prd,
      product_name: this.getProductNameById(newForecast.id_prd),
      qta: newForecast.qta,
      note: newForecast.note,
      qta_approvata: newForecast.qta_approvata,
      costo_unitario: newForecast.costo_unitario
    });
    

    console.log("log API:");
    console.log(this.api);

    //devo aggiungere un ForecastGridRowData
    this.api.applyTransaction({
      add: [{
        id: newForecast.id,
        anno: newForecast.anno,
        username: newForecast.username,
        full_username: this.getFullUsernameById(newForecast.username),
        id_prd: newForecast.id_prd,
        product_name: this.getProductNameById(newForecast.id_prd),
        qta: newForecast.qta,
        note: newForecast.note,
        qta_approvata: newForecast.qta_approvata,
        costo_unitario: newForecast.costo_unitario
      }]
    })
    this.api.ensureIndexVisible(this.forecasts.length - 1);
  }

  rmForecast(id: string){
    var rmForecastPromise = this.forecastService.rmForecastPromise(id);
    if(rmForecastPromise != null){
      rmForecastPromise.subscribe(
        res => {
          console.log("forecast with id " + res[1] + " successfully removed!");
          this.rmLocally(id);
          this.snackbarService.onDelete();
        }
      );
    }
  }

  rmLocally(id: string){
    let visible = 0;
    for(let i = 0; i < this.forecasts.length; ++i){
      if(id == this.forecasts[i].id){
        this.forecasts.splice(i, 1);
        this.forecastGridRowData.splice(i, 1);
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
        //this.createForecastGridRowData();
        //this.updateGrid();
        this.removeRow(id);
        //this.api.ensureIndexVisible(visible);
        return;
      }
    }
  }

  removeRow(id: string) {
    const toBeRemoved: any = [];
    const rowNodes: any = [];
    var forecast = this.getForecastGridRowDataById(id)!;
    this.api.forEachNodeAfterFilterAndSort(function (rowNode: { data: any; }) {
      console.log(rowNode);

      if (rowNode.data.id != id) {
        return;
      }
      
      const data = rowNode.data;

      toBeRemoved.push(data);
      rowNodes.push(rowNode);
    });
    
    const res = this.api.applyTransaction({ remove: toBeRemoved})!;
    //this.api.redrawRows(rowNodes);
    console.log(res);
  }

  getForecastGridRowDataById(id: string): ForecastGridRowData | null {
    for(var i = 0; i < this.forecastGridRowData.length; ++i) {
      if(this.forecastGridRowData[i].id == id) {
        return this.forecastGridRowData[i];
      }
    }
    return null;
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
    
    dialogConfig.width = "95%";
    dialogConfig.maxHeight = "500px";

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
          //this.updateGrid();
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
        //this.updateGrid();
      }
    });
  }

  closeDialog(){
    this.dialog.closeAll();
    //this.listForecasts(this.year);
    this.api.setRowData(this.forecasts);
  }

  updateGrid(){
    console.log(this.api);
    this.api.setRowData(this.forecastGridRowData);
  }
}
