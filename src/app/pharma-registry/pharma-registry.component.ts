import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CellValueChangedEvent } from 'ag-grid-community';
import { ButtonCellComponent } from '../button-cell/button-cell.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { AddProductComponent } from '../add-product/add-product.component';
import { AreYouSureProductComponent } from '../are-you-sure-product/are-you-sure-product.component';
import { AgGridAngular } from 'ag-grid-angular';

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

  //parameters for the [set|add|rm]Product()
  id = '';
  cod = '';
  des = '';


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
        headerName: 'Action', 
        cellRenderer: ButtonCellComponent
      }
    ];

    //gridOptions
    this.gridOptions = {
      onCellValueChanged: (event: CellValueChangedEvent) => {
        console.log("Changed from " + event.oldValue + " to " + event.newValue);
        console.log("ID: " + event.data.id + "; COD: " + event.data.cod + "; DES: " + event.data.des);
        this.id = event.data.id;
        this.cod = event.data.cod;
        this.des = event.data.des;
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

  addLocally(id: number, cod: string, des: string){
    let newProduct = {
      id: id,
      cod: cod,
      des: des
    };
    this.products.push(newProduct);
    console.log(this.products);
    this.updateGrid();
    this.api.ensureIndexVisible(this.products.length - 1);
    this.api.refreshCells();
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
          if(i == this.products.length - 1){
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

    dialogConfig.data = {
      cod: this.cod, 
      des: this.des
    }

    this.dialogRef = this.dialog.open(
      AddProductComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe( (result: {cod: string, des: string, isSubmitted: boolean}) => {
      if(result !== undefined && result.isSubmitted){
        this.addProductParams(result.cod, result.des);
        this.updateGrid();
      }
    });
  }

  openAreYouSureDialog(){
    this.dialogRef = this.dialog.open(
      AreYouSureProductComponent,
      {
        data:{
          id: this.id,
          isSubmitted: false
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

  setLocally(id: number, cod: string, des: string){
    for(let i = 0; i < this.products.length; ++i){
      if(id == this.products[i].id){
        console.log(this.products[i].id + '->' + id);
        console.log(this.products[i].cod + '->' + cod);
        console.log(this.products[i].des + '->' + des);
        this.products[i].cod = cod;
        this.products[i].des = des;
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
}


