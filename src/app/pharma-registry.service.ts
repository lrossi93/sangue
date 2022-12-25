import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, Product } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmaRegistryService {
  url = environment.basePath + 'anag.php'
  products: any = [];

  constructor(
    private http: HttpClient, 
  ) { }

  getProducts(): any[] {
    let path = this.url + '?request=listProducts&id_session='+localStorage.getItem('id_session');
    
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      console.log(res);
      if(res[0] == "KO"){
        
        return null;
      }
      else{
        console.log(res[1]);
        this.products = res[1];
        return res[1]; 
      }
    });
    return [];
  }

  listProductsPromise(): Observable<any> {
    let path = this.url + '?request=listProducts&id_session='+localStorage.getItem('id_session');
    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    )
  }

  setProduct(
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
    valido_a: string,
    isAdding: boolean
  ): void{
    if(!isAdding && parseInt(id) < 1){
      alert("Invalid ID!");
      id = "";
      return;
    }

    if(id == "" || cod == "" || des == ""){
      alert("Empty core parameters are invalid.");
      return;
    }

    this.http.post<String[]>(
      this.url, {
        request: 'setProduct',
        id_session: localStorage.getItem('id_session'),
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
      }
    ).subscribe(res => {
      console.log("WS response: " + res);
      if(res[0] == "KO"){
        alert(res[1].toString());
      }
      else{
        console.log("Result: " + res[0]);
        console.log("Product with ID " + res[1] + "successfully set!");
      }
    });
  }

  setProductPromise(product: Product): Observable<any> {
    //product.id == -1 for ADDING
    return this.http.post<String[]>(
      this.url, 
      {
        request: 'setProduct',
        id_session: localStorage.getItem('id_session'),
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
      }
    );
  }

  addProduct(
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
    valido_a: string,  
  ): void{
    let id = "-1";
    let isAdding = true;
    this.setProduct(
      id, 
      cod, 
      des, 
      unita, 
      confezionamento, 
      multiplo_confezionamento, 
      multiplo_imballo, 
      attivo, 
      extra, 
      min_ord, 
      valido_da, 
      valido_a, 
      isAdding
    );
  }

  rmProduct(id: string): void{
    if(id == "" || parseInt(id) < 1){
      alert("Invalid ID!");
      return;
    }

    this.http.post<String[]>(
      this.url, 
      {
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
        console.log("rmProduct result: " + res[0]);
        console.log("Removing product with ID " + res[1]);
        console.log("Product with ID " + res[1] + "successfully removed!");
      }
    });
  }

  rmProductPromise(id: string): Observable<any> {
    return this.http.post<String[]>(
      this.url, 
      {
        request: 'rmProduct',
        id_session: localStorage.getItem('id_session'),
        id: id
      }
    );
  }
}
