import { Component, Injectable, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CellValueChangedEvent } from 'ag-grid-community';
import { ButtonCellComponent } from '../button-cell/button-cell.component';
//import { PharmaRegistryService } from '../pharma-registry.service';
import { MatDialog } from '@angular/material/dialog'
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-pharma-registry',
  templateUrl: './pharma-registry.component.html',
  styleUrls: ['./pharma-registry.component.css']
})
@Injectable({providedIn: 'root'})
export class PharmaRegistryComponent implements OnInit {
  products: any;
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

  //flags for displaying corresponding divs
  isAddOn = true;
  isSetOn = false;
  isRmOn = false;

  //dialog reference
  dialogRef: any;

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
/*
  listProducts() {
    this.products = this.pharmaRegistryService.getProducts();
  }

*/
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
        //console.log("Result: " + res[0]);
        console.log("Product with ID " + res[1] + "successfully set!");
        //call listProducts() to update current products
        this.listProducts();
        this.clearVars();
      }
    });
  }
  /*
  setProduct(isAdding: boolean){
    this.pharmaRegistryService.setProduct(this.id, this.cod, this.des, isAdding);
    this.clearVars();
  }
  */
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
        console.log("Removing product with ID " + res[0]);
        console.log("Product with ID " + res[1] + "successfully removed!");
        //call listProducts() to update current products
        this.listProducts();
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

/*
  activateAdd(){
    this.isSetOn = false;
    this.isRmOn = false;
    this.isAddOn = true;
    this.clearVars();
  }

  activateSet(){
    this.isRmOn = false;
    this.isAddOn = false;
    this.isSetOn = true;
    this.clearVars();
  }

  activateRm(){
    this.isAddOn = false;
    this.isSetOn = false;
    this.isRmOn = true;
    this.clearVars();
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
    });
  }

  closeDialog(){
    this.dialog.closeAll();
    console.log("closeDialog");
    this.listProducts();
  }
}
