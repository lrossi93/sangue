import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pharma-registry',
  templateUrl: './pharma-registry.component.html',
  styleUrls: ['./pharma-registry.component.css']
})
export class PharmaRegistryComponent implements OnInit {
  products: any;

  pharmaRegistryGridConfig = [
    { headerName: 'ID', field: 'id'},
    { headerName: 'Code', field: 'cod'},
    { headerName: 'Description', field: 'des'}
  ]

  //parameters for the setProduct()
  id = '';
  cod = '';
  des = '';

  constructor(public loginService: LoginService, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginService.check();
    this.listProducts();
  }

  listProducts(): void{
    let prod;
    let path = environment.basePath + 'anag.php?request=listProducts&id_session='+localStorage.getItem('id_session');
    console.log(path);
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

  setProduct(): void{
    console.log(this.id + ', ' + this.cod + ', ' + this.des);
    
    this.http.post<String[]>(
      environment.basePath + 'anag.php', {
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
        console.log("Result: " + res[0]);
        console.log("Product ID: " + res[1]);
        //call listProducts() to update current products
        this.listProducts();
      }
    });
  }
}
