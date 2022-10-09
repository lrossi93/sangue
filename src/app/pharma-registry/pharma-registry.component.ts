import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { environment, Product } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CellValueChangedEvent } from 'ag-grid-community';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { AddProductComponent } from '../add-product/add-product.component';
import { AreYouSureProductComponent } from '../are-you-sure-product/are-you-sure-product.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ButtonDeleteProductComponent } from '../button-delete-product/button-delete-product.component';
import { CellCheckboxComponent } from '../cell-checkbox/cell-checkbox.component';

@Component({
  selector: 'app-pharma-registry',
  templateUrl: './pharma-registry.component.html',
  styleUrls: ['./pharma-registry.component.css']
})
@Injectable({providedIn: 'root'})
export class PharmaRegistryComponent implements OnInit {
  products: any = [];
  url = environment.basePath + 'anag.php';

  //sample param for dialog
  dialogData: string = "";

  //agGrid configuration
  pharmaRegistryGridConfig: any;
  gridOptions: any;
  defaultColDef: any;

  //agGrid API handle
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  //parameters for [set|add|rm]Product()
  id!: string;
  cod!: string;
  des!: string;
  unita!: number;
  confezionamento!: string;
  multiplo_confezionamento!: number;
  multiplo_imballo!: number;
  attivo!: boolean;
  extra!: boolean;
  min_ord!: number;
  valido_da: string = "";
  valido_a: string = "";

  api: any;

  setId(id: string){
    this.id = id;
  }

  setCod(cod: string){
    this.cod = cod;
  }

  setDes(des: string){
    this.des = des;
  }

  //dialog reference
  dialogRef: any;
  columnApi: any;


  

  /*
  
    CONSTRUCTOR

  */
  constructor(
    public loginService: LoginService, 
    private http: HttpClient,
    private dialog: MatDialog)
  { 

    //columnDef
    this.pharmaRegistryGridConfig = [
      { 
        headerName: 'ID', 
        field: 'id',
        editable: false
      },
      { 
        headerName: 'Code', 
        field: 'cod', 
        editable: true
      },
      { 
        headerName: 'Description', 
        field: 'des', 
        editable: true
      },
      { 
        headerName: 'Unità', 
        field: 'unita', 
        editable: true
      },
      { 
        headerName: 'Confezionamento', 
        field: 'confezionamento', 
        editable: true
      },
      { 
        headerName: 'Multiplo Confezionamento', 
        field: 'multiplo_confezionamento', 
        editable: true
      },
      { 
        headerName: 'Multiplo Imballo', 
        field: 'multiplo_imballo', 
        editable: true
      },
      { 
        headerName: 'Attivo', 
        field: 'attivo', 
        editable: false,
        cellRenderer: CellCheckboxComponent
      },
      { 
        headerName: 'Extra', 
        field: 'extra', 
        editable: false,
        cellRenderer: CellCheckboxComponent
      },
      { 
        headerName: 'Ordine minimo', 
        field: 'min_ord', 
        editable: true
      },
      { 
        headerName: 'Valido da', 
        field: 'valido_da', 
        editable: true,
        cellRenderer: (params: { value: string | number | Date; }) => {
          return new Date(params.value).toLocaleDateString('it-IT');
        }
      },
      { 
        headerName: 'Valido fino a', 
        field: 'valido_a', 
        editable: true,
        cellRenderer: (params: { value: string | number | Date; }) => {
          return new Date(params.value).toLocaleDateString('it-IT');
        }
      },
      { 
        headerName: 'Action', 
        cellRenderer: ButtonDeleteProductComponent
      }
    ];

    //gridOptions
    this.gridOptions = {
      onCellValueChanged: (event: CellValueChangedEvent) => {
        console.log('onCellValueChanged\n\n\n\n');
        console.log(event);
        console.log("Changed from " + event.oldValue + " to " + event.newValue);
        this.id = event.data.id;
        this.cod = event.data.cod;
        this.des = event.data.des;
        this.unita = event.data.unita;
        this.confezionamento = event.data.confezionamento;
        this.multiplo_confezionamento = event.data.multiplo_confezionamento;
        this.multiplo_imballo = event.data.multiplo_imballo;
        this.attivo = event.data.attivo;
        this.extra = event.data.extra;
        this.min_ord = event.data.min_ord;

        //check the dates are not null before assigning them
        //let validoDa = new DatePipe('it-IT').transform(new Date(event.data.valido_da), 'YYYY-MM-DD');
        

        //the new date written as is by the user:
        console.log("data scritta dall'utente: " + new Date(event.data.valido_da).toISOString());
        //convert it to american format YYYY-MM-DD
        console.log("data in formato IT: " + new Date(event.data.valido_da).toLocaleString('it-IT', {timeZone: 'UTC'}).substring(0, 10));
        //save it as string in valido_da

        //salvo le date in formato italiano sulle variabili locali
        this.valido_da = new Date(event.data.valido_da).toLocaleString('it-IT', {timeZone: 'UTC'}).substring(0, 10);
        this.valido_a = new Date(event.data.valido_a).toLocaleString('it-IT', {timeZone: 'UTC'}).substring(0, 10);
        //console.log("to ISO8601: " + this.fromItLocaleToISO(this.valido_da));
        
        this.setProduct(false); //edit product from grid
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
    this.listProducts();
    setTimeout(
      () => {
        this.api = this.agGrid.api;
        console.log(this.api);
      }, 300);
  }

  listProducts(): void{
    let path = this.url + '?request=listProducts&id_session='+localStorage.getItem('id_session');
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe((res: any[]) => {
      console.log(res);
      if(res[0] == "KO"){
        alert("Error retrieving products!");
      }
      else{
        console.log(res[1]); 
        this.products = res[1];
      }
    });
  }

  logAPI(){
    console.log(this.api);
  }

  setProduct(isAdding: boolean): void{
    if(!isAdding && parseInt(this.id) < 1){
      alert("Invalid ID!");
      this.id = "";
      return;
    }

    if(this.id == "" || this.cod == "" || this.des == ""){
      alert("Empty parameters are invalid.");
      return;
    }
    console.log('[[[valido a before post]]]: ' + this.valido_a.toString());
    
    this.http.post<String[]>(
      this.url, {
        request: 'setProduct',
        id_session: localStorage.getItem('id_session'),
        id: this.id,
        cod: this.cod,
        des: this.des,
        unita: this.unita,
        confezionamento: this.confezionamento,
        multiplo_confezionamento: this.multiplo_confezionamento,
        multiplo_imballo: this.multiplo_imballo,
        attivo: this.attivo,
        extra: this.extra,
        min_ord: this.min_ord,
        //salvo le date su DB in formato americano
        valido_da: this.valido_da,//this.fromItLocaleToISO(this.valido_da),
        valido_a: this.valido_a//this.fromItLocaleToISO(this.valido_a)
      }
    ).subscribe(res => {
      console.log("WS response: " + res);
      if(res[0] == "KO"){
        alert(res[1].toString());
      }
      else{
        console.log("Product with ID " + res[1] + "successfully set!");
        if(isAdding){
          this.addLocally(
            res[1].toString(), 
            this.cod, 
            this.des,
            this.unita,
            this.confezionamento,
            this.multiplo_confezionamento,
            this.multiplo_imballo,
            this.attivo,
            this.extra,
            this.min_ord,
            //aggiungo le date localmente in formato italiano
            new Date(this.valido_da).toLocaleDateString('it-IT'),
            new Date(this.valido_a).toLocaleDateString('it-IT')
          );
        }
        else{
          this.setLocally(
            parseInt(res[1].toString()), 
            this.cod, 
            this.des,
            this.unita,
            this.confezionamento,
            this.multiplo_confezionamento,
            this.multiplo_imballo,
            this.attivo,
            this.extra,
            this.min_ord,
            new Date(this.valido_da).toLocaleDateString('it-IT'),
            new Date(this.valido_a).toLocaleDateString('it-IT')
            );
        }
        this.clearVars();
      }
    });
  }

  addProduct(): void{
    this.id = "-1";
    let isAdding = true;
    this.setProduct(isAdding);
  }

  addLocally(
    id: string, 
    cod: string, 
    des: string,
    unita: number,
    confezionamento: string,
    multiplo_confezionamento: number,
    multiplo_imballo: number,
    attivo: boolean,
    extra: boolean,
    min_ord: number,
    valido_da: string,
    valido_a: string
  ){
    let newProduct = {
      id: id,
      cod: cod,
      des: des,
      unita: unita,
      confezionamento: confezionamento,
      multiplo_confezionamento: multiplo_confezionamento,
      multiplo_imballo: multiplo_imballo,
      attivo: attivo,
      extra: extra,
      min_ord: min_ord,
      valido_da: valido_da,
      valido_a: valido_a
    };
    this.products.push(newProduct);
    console.log(this.products);
    this.updateGrid();
    this.api.ensureIndexVisible(this.products.length - 1);
    this.api.refreshCells();
  }

  addProductParams(
    cod: string, 
    des: string,
    unita: number,
    confezionamento: string,
    multiplo_confezionamento: number,
    multiplo_imballo: number,
    attivo: boolean,
    extra: boolean,
    min_ord: number,
    valido_da: string,
    valido_a: string
  ){
    this.cod = cod;
    this.des = des;
    this.unita = unita;
    this.confezionamento = confezionamento;
    this.multiplo_confezionamento = multiplo_confezionamento;
    this.multiplo_imballo = multiplo_imballo;
    this.attivo = attivo;
    this.extra = extra;
    this.min_ord = min_ord;
    this.valido_da = valido_da;
    this.valido_a = valido_a;
    this.addProduct();
  }

  rmProduct(id: string): void{
    if(id == "" || parseInt(id) < 1){
      alert("Invalid ID!");
      return;
    }

    this.http.post<String[]>(
      this.url, {
        request: 'rmProduct',
        id_session: localStorage.getItem('id_session'),
        id: id
      }
    ).subscribe(res => {
      console.log("WS response: " + res);
      if(res[0] == "KO"){
        alert(res[1].toString());
      }
      else{
        console.log("Product with ID " + res[1] + " removed from database.");
        this.rmLocally(parseInt(res[1].toString()));
        console.log("Product with ID " + res[1] + " removed locally.");
        this.clearVars();
      }
    });
  }

  rmLocally(id: number){
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
        this.api.ensureIndexVisible(visible);
        return;
      }
    }
  }
/*
  rmProduct(){
    this.pharmaRegistryService.rmProduct(this.id);
    this.listProducts();
  }
*/

  clearVars(){
    this.id = '';
    this.cod = '';
    this.des = '';
  }

  openAddProductDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "80%";

    dialogConfig.data = {
      cod: this.cod, 
      des: this.des,
      unita: this.unita,
      confezionamento: this.confezionamento,
      multiplo_confezionamento: this.multiplo_confezionamento,
      multiplo_imballo: this.multiplo_imballo,
      attivo: this.attivo,
      extra: this.extra,
      min_ord: this.min_ord,
      valido_da: this.valido_da,
      valido_a: this.valido_a
    }

    this.dialogRef = this.dialog.open(
      AddProductComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe( (result: Product) => {
      if(result !== undefined && result.isSubmitted){
        this.addProductParams(
          result.cod,
          result.des,
          result.unita,
          result.confezionamento,
          result.multiplo_confezionamento,
          result.multiplo_imballo,
          result.attivo,
          result.extra,
          result.min_ord,
          result.valido_da,
          result.valido_a
        );
        this.updateGrid();
      }
    });
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

  setLocally(
    id: number, 
    cod: string, 
    des: string,
    unita: number,
    confezionamento: string,
    multiplo_confezionamento: number,
    multiplo_imballo: number,
    attivo: boolean,
    extra: boolean,
    min_ord: number,
    valido_da: string,
    valido_a: string
  ){
    for(let i = 0; i < this.products.length; ++i){
      if(id == this.products[i].id){
        this.products[i].cod = cod;
        this.products[i].des = des;
        this.products[i].unita = unita;
        this.products[i].confezionamento = confezionamento;
        this.products[i].multiplo_confezionamento = multiplo_confezionamento;
        this.products[i].multiplo_imballo = multiplo_imballo;
        this.products[i].attivo = attivo;
        this.products[i].extra = extra;
        this.products[i].min_ord = min_ord;
        console.log('valido da: ' + valido_da);
        console.log('valido a: ' + valido_a);
        this.products[i].valido_da = valido_da;
        this.products[i].valido_a = valido_a;
        this.updateGrid();
        return;
      }
    }
  }

  clearSelection() {
    this.api.deselectAll();
  }

  updateGrid(){
    console.log(this.api);
    this.api.setRowData(this.products);
  }

  fromItLocaleToISO(itDate: string): string {
    let year = itDate.substring(6, 10);
    let month = itDate.substring(3, 5);
    let day = itDate.substring(0, 2);
    return year + "-" + month + "-" + day;
  }
}


