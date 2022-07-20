import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmaRegistryService {
  url = environment.basePath + 'anag.php'

  constructor(private http: HttpClient, ) { }

  getProducts(): any {
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

  setProduct(id: string, cod: string, des: string, isAdding: boolean): void{
    if(!isAdding && parseInt(id) < 1){
      alert("Invalid ID!");
      id = "";
      return;
    }

    if(id == "" || cod == "" || des == ""){
      alert("Empty parameters are invalid.");
      return;
    }

    this.http.post<String[]>(
      this.url, {
        request: 'setProduct',
        id_session: localStorage.getItem('id_session'),
        id: id,
        cod: cod,
        des: des
      }
    ).subscribe(res => {
      console.log("WS response: " + res);
      if(res[0] == "KO"){
        alert(res[1].toString());
      }
      else{
        console.log("Result: " + res[0]);
        console.log("Product with ID " + res[1] + "successfully set!");
        //call listProducts() to update current products
        this.listProducts();
      }
    });
  }

  addProduct(): void{
    this.id = "-1";
    let isAdding = true;
    this.setProduct(isAdding);
  }

  rmProduct(id: string): void{
    if(this.id == "" || parseInt(this.id) < 1){
      alert("Invalid ID!");
      return;
    }

    this.http.post<String[]>(
      this.url, {
        request: 'rmProduct',
        id_session: localStorage.getItem('id_session'),
        id: this.id
      }
    ).subscribe(res => {
      console.log("WS response: " + res);
      if(res[0] == "KO"){
        alert(res[1].toString());
      }
      else{
        console.log("Removing product with ID " + res[0]);
        console.log("Product with ID " + res[1] + "successfully removed!");
      }
    });
  }
}
