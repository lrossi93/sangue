import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  url = environment.basePath + 'forecast.php';
  forecast: any;

  constructor(
    private loginService: LoginService,
    private http: HttpClient,
    ) { 
      //this.forecast = this.listForecasts('2020');
    }

  
  //GET
  listForecasts(year: string): any{
    let path = this.url + '?request=listForecasts&id_session='+localStorage.getItem('id_session') + '&year=' + year;
    
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      console.log(res);
      if(res[0] == "KO"){
        alert("Error retrieving forecasts!");
        return null;
      }
      else{
        console.log(res[1]); 
        return res[1];
      }
    });
  }

  //POST
  setForecast(
    id: string,
    anno: string,
    username: string,
    id_prd: string,
    qta: string,
    note: string,
    isAdding: boolean
  ): any{
    if(!isAdding && parseInt(id) < 1){
      alert("Invalid ID!");
      id = "";
      return null;
    }

    if(
      id == "" || 
      anno == "" || 
      username == "" || 
      id_prd == "" ||
      qta == ""
    ){
      alert("\"note\" is the only acceptable empty parameter.");
      return null;
    }

    this.http.post<String[]>(
      this.url, {
        request: 'setForecast',
        id_session: localStorage.getItem('id_session'),
        id: id,
        anno: anno,
        username: username,
        id_prd: id_prd,
        qta: qta,
        note: note
      }
    ).subscribe(res => {
      console.log("WS response: " + res);
      if(res[0] == "KO"){
        alert("setForecast() error: " + res[1].toString());
        return null;
      }
      else{
        console.log("Result: " + res[0]);
        console.log("Product with ID " + res[1] + "successfully set!");
        return res[1];
      }
    });
  }
  //POST
  addForecast(
    anno: string,
    username: string,
    id_prd: string,
    qta: string,
    note: string,
  ): any{
    let id = "-1";
    let isAdding = true;
    return this.setForecast(id, anno, username, id_prd, qta, note, isAdding);
  }
  
  //POST
  rmForecast(id: string){
    if(id == "" || parseInt(id) < 1){
      alert("Invalid ID!");
      return;
    }

    this.http.post<String[]>(
      this.url, {
        request: 'rmForecast',
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
      }
    });
  }
}
