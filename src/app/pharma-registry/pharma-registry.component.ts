import { APP_ID, Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CellValueChangedEvent } from 'ag-grid-community';
import { ButtonCellComponent } from '../button-cell/button-cell.component';
//import { PharmaRegistryService } from '../pharma-registry.service';
import { MatDialog } from '@angular/material/dialog'
import { AddProductComponent } from '../add-product/add-product.component';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-pharma-registry',
  templateUrl: './pharma-registry.component.html',
  styleUrls: ['./pharma-registry.component.css']
})
@Injectable({providedIn: 'root'})
export class PharmaRegistryComponent implements OnInit {
  products: any;
  api: any;
  url = environment.basePath + 'anag.php';

  //agGrid configuration
  pharmaRegistryGridConfig = [
    { headerName: 'ID', field: 'id'},
    { headerName: 'Code', field: 'cod', editable: true},
    { headerName: 'Description', field: 'des', editable: true},
    { headerName: '', cellRenderer: ButtonCellComponent}
  ];

  gridOptions = {
    /*onCellClicked: (event: CellClickedEvent) => {
      console.log(event);
    },*/
    onCellValueChanged: (event: CellValueChangedEvent) => {
      console.log("Changed from " + event.oldValue + " to " + event.newValue);
      console.log("ID: " + event.data.id + "; COD: " + event.data.cod + "; DES: " + event.data.des);
      this.id = event.data.id;
      this.cod = event.data.cod;
      this.des = event.data.des;
      this.setProduct(false); //edit product from grid
    },
  }

  defaultColDef = {
    sortable: true,
    filter: true,
  };

  //parameters for the [set|add|rm]Product()
  id = '';
  cod = '';
  des = '';

  //dialog reference
  dialogRef: any;
  columnApi: any;

  constructor(
    public loginService: LoginService, 
    private http: HttpClient,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loginService.check();
    this.listProducts();
  }

  listProducts(): void{
    let path = this.url + '?request=listProducts&id_session='+localStorage.getItem('id_session');
    
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
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

    this.http.post<String[]>(
      this.url, {
        request: 'setProduct',
        id_session: localStorage.getItem('id_session'),
        id: this.id,
        cod: this.cod,
        des: this.des
      }
    ).subscribe(res => {
      console.log("WS response: " + res);
      if(res[0] == "KO"){
        alert(res[1].toString());
      }
      else{
        console.log("Product with ID " + res[1] + "successfully set!");
        if(isAdding){
          console.log(this.products);
          this.addLocally(parseInt(res[1].toString()), this.cod, this.des);
        }
        else{
          this.setLocally(parseInt(res[1].toString()), this.cod, this.des);
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

  addProductParams(cod: string, des: string){
    this.cod = cod;
    this.des = des;
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

  openDialog(){
    this.dialogRef = this.dialog.open(AddProductComponent);
    this.dialogRef.afterClosed().subscribe(() => {
      this.listProducts();
      this.api.setRowData(this.products);
    });
  }

  closeDialog(){
    this.dialog.closeAll();
    this.api.setRowData(this.products);
  }

  addLocally(id: number, cod: string, des: string){
    let newProduct = {
      id: id,
      cod: cod,
      des: des
    };
    this.products.push(newProduct);
    console.log(this.products);
    //this.api.refreshCells();
    this.api.setRowData(this.products);
    //this.api.setFocusedCell(this.products.length);
    this.api.ensureIndexVisible(this.products.length - 1);
    this.api.refreshCells();
  }

  setLocally(id: number, cod: string, des: string){
    for(let i = 0; i < this.products.length; ++i){
      if(id == this.products[i].id){
        this.products[i].cod = cod;
        this.products[i].des = des;
        return;
      }
    }
    this.api.refreshCells();
    //this.api.setRowData(this.products);
  }

  rmLocally(id: number){
    let visibleIndex = 0;
    for(let i = 0; i < this.products.length; ++i){
      if(id == this.products[i].id){
        this.products.splice(i, 1);
        this.api.setRowData(this.products);
        console.log("i: " + i);
        console.log("p.len: " + this.products.length);
        if(i <= this.products.length){
          console.log("ensuring visible");
          this.api.ensureIndexVisible(i - 1);
        }
        if(i == 0){
          this.api.ensureIndexVisible(0);
        }
        return;
      }
    }
  }

  onGridReady(params: any) {
    this.api = params.api;
  }

  bringFocusBack() {
    let cell = this.api.getFocusedCell();

    if ( cell ) {
       this.api.setFocusedCell(cell.rowIndex, cell.column);
    }
 }
}
