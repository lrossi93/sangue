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

  constructor(public loginService: LoginService, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginService.check();
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

  //TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  setProduct(id: string, cod: string, des: string): void{
    let path = environment.basePath + 'anag.php?request=setProduct&id_session=' + localStorage.getItem('id_session') + '&id='+id+'&cod='+cod+'&des=description';
    console.log(path);
    this.http.post<String[]>(
      environment.basePath + 'anag.php', {
        request: 'setProduct',
        id_session: localStorage.getItem('id_session'),
        id: id,
        cod: cod,
        des: des
      }
    ).subscribe(res => {
      console.log("WS response: " + res[0].toString());
      if(res[0] == "KO"){
        alert(res[1].toString());
      }
      else{
        console.log("Result: " + res[0]);
      }
    });
  }
}
