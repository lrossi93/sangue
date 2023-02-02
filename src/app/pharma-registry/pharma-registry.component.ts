import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { environment, Product } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CellClickedEvent, CellValueChangedEvent, GetRowIdFunc, GetRowIdParams, RowDataUpdatedEvent } from 'ag-grid-community';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { AddProductComponent } from '../add-product/add-product.component';
import { AreYouSureProductComponent } from '../are-you-sure-product/are-you-sure-product.component';
import { AgGridAngular } from 'ag-grid-angular';
import { DatepickerProductsDialogComponent } from '../datepicker-products-dialog/datepicker-products-dialog.component';
import { AG_GRID_LOCALE_EN, AG_GRID_LOCALE_IT, pharmaRegistryGridConfig } from 'src/environments/grid-configs';
import { Router } from '@angular/router';
import { PharmaRegistryService } from '../pharma-registry.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-pharma-registry',
  templateUrl: './pharma-registry.component.html',
  styleUrls: ['./pharma-registry.component.css']
})
@Injectable({providedIn: 'root'})
export class PharmaRegistryComponent implements OnInit {
  //auxiliary product
  product: Product = {
    id: "",
    cod: "",
    des: "",
    ord: "",
    unita: 0,
    confezionamento: "",
    multiplo_confezionamento: 0,
    multiplo_imballo: 0,
    attivo: false,
    extra: false,
    min_ord: 0,
    valido_da: "",
    valido_a: ""
  };
  id: string = "";
  products: Product[] = [];
  url = environment.basePath + 'anag.php';

  //sample param for dialog
  dialogData: string = "";

  //agGrid configuration
  pharmaRegistryGridConfig: any;
  gridOptions: any;
  defaultColDef: any;

  //agGrid API handle
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  api: any;

  //dialog reference
  dialogRef: any;
  columnApi: any;

  isLoading: boolean = false;
  selectedRow: any;

  public getRowId: GetRowIdFunc = (params: GetRowIdParams) => {
    return params.data.id;
  };

  localeText = (environment.currentLanguage == 'it' ? AG_GRID_LOCALE_IT : AG_GRID_LOCALE_EN);

  /*
  
    CONSTRUCTOR

  */
  constructor(
    public loginService: LoginService, 
    private http: HttpClient,
    private dialog: MatDialog,
    private router: Router,
    private pharmaRegistryService: PharmaRegistryService,
    private snackbarService: SnackbarService
  )
  { 

    //columnDef
    this.pharmaRegistryGridConfig = pharmaRegistryGridConfig;

    //gridOptions
    this.gridOptions = {
      onCellClicked: (event: CellClickedEvent) => {
        console.log(event);
        if(event.column.getColId() == "valido_a" || event.column.getColId() == "valido_da") {
          //open dialog and pass date parameter to it
          this.openEditDateDialog(event);
        }
        if(event.column.getColId() == "action") {
          console.log(this.api.getSelectedRows());
          this.selectedRow = this.api.getSelectedRows();//event.rowIndex;
        }
      },

      onCellValueChanged: (event: CellValueChangedEvent) => {
        //console.log('onCellValueChanged\n\n\n\n');
        //console.log(event);
        //console.log("Changed from " + event.oldValue + " to " + event.newValue);
        this.product.id = event.data.id;
        this.product.cod = event.data.cod;
        this.product.des = event.data.des;
        this.product.ord = event.data.ord;
        this.product.unita = event.data.unita;
        this.product.confezionamento = event.data.confezionamento;
        this.product.multiplo_confezionamento = event.data.multiplo_confezionamento;
        this.product.multiplo_imballo = event.data.multiplo_imballo;
        this.product.attivo = event.data.attivo;
        this.product.extra = event.data.extra;
        this.product.min_ord = event.data.min_ord;     

        //salvo le date in formato italiano sulle variabili locali
        this.product.valido_da = new Date(event.data.valido_da).toLocaleString('it-IT', {timeZone: 'UTC'}).substring(0, 10);
        this.product.valido_a = new Date(event.data.valido_a).toLocaleString('it-IT', {timeZone: 'UTC'}).substring(0, 10);
        
        this.setProduct(this.product, false); //edit product from grid
      },

      onRowDataUpdated: (event: RowDataUpdatedEvent) => {
        console.log(event);
      }
    }

    //defaultColDef
    this.defaultColDef = {
      sortable: true,
      filter: true,
    };
  }

  onGridReady = (params: { api: any; columnApi: any; }) => {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.autoSizeColumns(false);
    this.api.setDomLayout('autoHeight');
  }

  autoSizeColumns(skipHeader: boolean) {
    const allColumnIds: string[] = [];
    this.columnApi.getColumns()!.forEach((column: { getId: () => string; }) => {
      allColumnIds.push(column.getId());
    });
    this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  ngOnInit(): void {
    this.loginService.checkPromise().subscribe(
      res => {
        if(res[0] == "KO"){
          localStorage.removeItem("id_session");
          localStorage.removeItem("sangue_username");
          this.loginService.logged = false;
          this.router.navigate(['login']);
        }
      }
    );

    this.listProducts();

    setTimeout(
      () => {
        this.api = this.agGrid.api;
        //console.log(this.api);
      }, 300);
  }

  setId(id: string) {
    this.id = id;
  }

  listProducts(): void{
    this.isLoading = true;
    this.pharmaRegistryService.listProductsPromise().subscribe(
      res => {
        if(res[0] == "OK") {
          this.products = res[1];
          this.isLoading = false;
        }
        else{
          console.error("Error retrieving products!");
        }
      }
    );
  }

  logAPI(){
    console.log(this.api);
  }

  //if adding, product.id == -1
  setProduct(product: Product, isAdding: boolean): void{
    //console.log(product.id == "-1" ? "adding" : "setting");
    
    //console.log(product);
    
    this.pharmaRegistryService.setProductPromise(product).subscribe(
      res => {
        if(res[0] == "OK"){
          if(isAdding){
            console.log("aaaaaaa");
            
            let newProduct = product;
            newProduct.id = res[1];
            this.addLocally(newProduct);
            this.snackbarService.onCreate();
          }
          else{
            this.setLocally(product);
            this.snackbarService.onUpdate();
          }
        }
        else {
          console.error("Error setting product!");
        }
      }
    );
  }

  addLocally(product: Product){
    this.products.push(product);
    this.api.applyTransaction({
      add: [{
        id: product.id,
        cod: product.cod,
        des: product.des,
        ord: product.ord,
        unita: product.unita,
        confezionamento: product.confezionamento,
        multiplo_confezionamento: product.multiplo_confezionamento,
        multiplo_imballo: product.multiplo_imballo,
        attivo: product.attivo,
        extra: product.extra,
        min_ord: product.min_ord,
        valido_da: product.valido_da,
        valido_a: product.valido_a
      }]
    });
    /*
    this.agGrid.api.updateRowData({
      add: [{
        id: product.id,
        cod: product.cod,
        des: product.des,
        ord: product.ord,
        unita: product.unita,
        confezionamento: product.confezionamento,
        multiplo_confezionamento: product.multiplo_confezionamento,
        multiplo_imballo: product.multiplo_imballo,
        attivo: product.attivo,
        extra: product.extra,
        min_ord: product.min_ord,
        valido_da: product.valido_da,
        valido_a: product.valido_a
      }]
    });
    */
    //console.log(this.products);
    //console.log(this.products);
    //this.updateGrid();
    this.api.ensureIndexVisible(this.products.length - 1);
  }

  rmProduct(id: string): void{
    this.pharmaRegistryService.rmProductPromise(id).subscribe(
      res => {
        if(res[0] == "OK") {
          this.rmLocally(res[1]);
          this.snackbarService.onDelete();
        }
        else {
          console.error("Error removing product with ID = " + id);
        }
      }
    );
  }

  rmLocally(id: string){
    let visible = 0;
    for(let i = 0; i < this.products.length; ++i){
      if(id == this.products[i].id){
        this.products.splice(i, 1);
        if(this.products.length == 0){
          //no-op
        }
        else{
          //if it was the last index, make the current last index visible
          if(i == this.products.length){
            visible = this.products.length - 1;
          }
          //if it was not the last index, make the current i index visible
          else{
            visible = i;
          }
        }
        this.updateGrid();
        /*
        this.api.applyTransaction({
          remove: this.selectedRow
        });
        */
        this.selectedRow = null;

        this.api.ensureIndexVisible(visible);
        return;
      }
    }
  }

  openAddProductDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      cod: this.product.cod, 
      des: this.product.des,
      ord: this.product.ord,
      unita: this.product.unita,
      confezionamento: this.product.confezionamento,
      multiplo_confezionamento: this.product.multiplo_confezionamento,
      multiplo_imballo: this.product.multiplo_imballo,
      attivo: this.product.attivo,
      extra: this.product.extra,
      min_ord: this.product.min_ord,
      valido_da: this.product.valido_da,
      valido_a: this.product.valido_a
    }

    this.dialogRef = this.dialog.open(
      AddProductComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: {newProduct: Product, isSubmitted: boolean}) => {
      if(result !== undefined && result.isSubmitted){
        let newProduct = result.newProduct;
        newProduct.id = "-1";
        this.setProduct(newProduct, true);
        //this.updateGrid();
      }});
  }

  openAreYouSureDialog(){
    this.dialogRef = this.dialog.open(
      AreYouSureProductComponent,
      {
        data:{
          id: this.id
        }
      },
    );
    this.dialogRef.afterClosed().subscribe((result: { id: string; isSubmitted: boolean }) =>{
      if(result !== undefined && result.isSubmitted){        
        this.rmProduct(result.id);
        this.updateGrid();
      }
    });
  }

  openEditDateDialog(event: CellClickedEvent) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    switch(event.column.getColId()){
      case "valido_da":
        dialogConfig.data = {
          date: event.data.valido_da,
          isValidoDa: true,
          isValidoA: false
        }
        break;

      case "valido_a":
        dialogConfig.data = {
          date: event.data.valido_a,
          isValidoDa: false,
          isValidoA: true
        }
        break;
    }

    this.dialogRef = this.dialog.open(
      DatepickerProductsDialogComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: {
        date: string,
        isValidoDa: boolean,
        isValidoA: boolean,
        isSubmitted: boolean
      }) => {

      if(result !== undefined && result.isSubmitted){
        //console.log(result);
        
        let editedProduct = {
          id: event.data.id,
          cod: event.data.cod,
          des: event.data.des,
          ord: event.data.ord,
          unita: event.data.unita,
          confezionamento: event.data.confezionamento,
          multiplo_confezionamento: event.data.multiplo_confezionamento,
          multiplo_imballo: event.data.multiplo_imballo,
          attivo: event.data.attivo,
          extra: event.data.extra,
          min_ord: event.data.min_ord,
          valido_da: "",
          valido_a: ""
        };

        if(result.isValidoDa){
          editedProduct.valido_da = result.date;
          editedProduct.valido_a = event.data.valido_a;
          this.setProduct(editedProduct, false);
        }
        else if(result.isValidoA) {
          editedProduct.valido_da = event.data.valido_da;
          editedProduct.valido_a = result.date;
          this.setProduct(editedProduct, false);
        }
        this.updateGrid();
      }
    });
  }

  setLocally(product: Product){
    for(let i = 0; i < this.products.length; ++i){
      if(product.id == this.products[i].id){
        this.products[i].cod = product.cod;
        this.products[i].des = product.des;
        this.products[i].ord = product.ord;
        this.products[i].unita = product.unita;
        this.products[i].confezionamento = product.confezionamento;
        this.products[i].multiplo_confezionamento = product.multiplo_confezionamento;
        this.products[i].multiplo_imballo = product.multiplo_imballo;
        this.products[i].attivo = product.attivo;
        this.products[i].extra = product.extra;
        this.products[i].min_ord = product.min_ord;
        this.products[i].valido_da = product.valido_da;
        this.products[i].valido_a = product.valido_a;
        //this.updateGrid();
        this.api.applyTransaction({
          set: [{
            id: product.id,
            cod: product.cod,
            des: product.des,
            ord: product.ord,
            unita: product.unita,
            confezionamento: product.confezionamento,
            multiplo_confezionamento: product.multiplo_confezionamento,
            multiplo_imballo: product.multiplo_imballo,
            attivo: product.attivo,
            extra: product.extra,
            min_ord: product.min_ord,
            valido_da: product.valido_da,
            valido_a: product.valido_a
          }]
        });
        this.api.ensureIndexVisible(i);
        return;
      }
    }
  }

  updateGrid(){
    //console.log(this.api);
    this.api.setRowData(this.products);
  }
}


