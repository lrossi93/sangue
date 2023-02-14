import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, Forecast } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  url = environment.basePath + 'forecast.php';
  reportUrl = environment.reportPath + 'forecast.php';
  forecast: any;
  forecasts: Forecast[] = [];

  constructor(
    private loginService: LoginService,
    private http: HttpClient,
    ) { }

  
  //GET
  listForecasts(year: string, result: any): any{
    let request = 'listForecasts';
    let id_session = localStorage.getItem('id_session');

    let path = this.url + '?request='+ request +'&id_session=' + id_session + '&year=' + year;
    
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      console.log(res);
      if(res[0] == "KO"){
        console.error("Error retrieving forecasts!");
        return null;
      }
      else{
        console.log(res[1]); 
        result = res[1];
        console.log('result ' + result);
        
        return res[1];
      }
    });
  }

  listForecastsPromise(year: string): Observable<any>{
    let request = 'listForecasts';
    let id_session = localStorage.getItem('id_session');

    let path = this.url + '?request=' + request + '&id_session='+ id_session + '&year=' + year;
    
    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    );
  }

  //POST
  setForecast(
    id: string,
    anno: number,
    username: string,
    id_prd: string,
    qta: number,
    note: string,
    qta_approvata: number,
    costo_unitario: number,
    isAdding: boolean
  ): any{
    if(!isAdding && parseInt(id) < 1){
      console.error("Invalid ID!");
      id = "";
      return null;
    }
    if(
      id == "" || 
      anno.toString() == "" || 
      username == "" || 
      id_prd == "" ||
      qta.toString() == ""
    ){
      console.error("\"note\" is the only acceptable empty parameter.");
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
        note: note,
        qta_approvata: qta_approvata,
        costo_unitario: costo_unitario
      }
    ).subscribe(res => {
      //console.log("WS response: " + res);
      if(res[0] == "KO"){
        console.error("setForecast() error: " + res[1].toString());
        return null;
      }
      else{
        //console.log("Result: " + res[0]);
        //console.log("Product with ID " + res[1] + "successfully set!");
        return res[1].toString();
      }
    });
  }

  setForecastPromise(
    id: string,
    anno: number,
    username: string,
    id_prd: string,
    qta: number,
    note: string,
    qta_approvata: number,
    costo_unitario: number,
    isAdding: boolean
  ): Observable<any> | null{
    if(!isAdding && parseInt(id) < 1){
      console.error("Invalid ID!");
      id = "";
      return null;
    }
    else if(
      id == "" || 
      anno.toString() == "" || 
      username == "" || 
      id_prd == "" ||
      qta.toString() == ""
    ){
      console.error("\"note\" is the only acceptable empty parameter.");
      return null;
    }
    else{
      return this.http.post<String[]>(
        this.url, {
          request: 'setForecast',
          id_session: localStorage.getItem('id_session'),
          id: id,
          anno: anno,
          username: username,
          id_prd: id_prd,
          qta: qta,
          note: note,
          qta_approvata: qta_approvata,
          costo_unitario: costo_unitario
        }
      );
    }
  }

  //POST
  addForecast(
    anno: number,
    username: string,
    id_prd: string,
    qta: number,
    note: string,
    qta_approvata: number,
    costo_unitario: number,
  ): any{
    let id = "-1";
    let isAdding = true;
    return this.setForecast(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario, isAdding);
  }

  addForecastPromise(
    anno: number,
    username: string,
    id_prd: string,
    qta: number,
    note: string,
    qta_approvata: number,
    costo_unitario: number,
  ): any{
    let id = "-1";
    let isAdding = true;
    return this.setForecastPromise(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario, isAdding);
  }
  
  //POST
  rmForecast(id: string){
    if(id == "" || parseInt(id) < 1){
      console.error("Invalid ID!");
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
        console.error(res[1].toString());
      }
      else{
        //console.log("Removing product with ID " + res[0]);
        console.log("Product with ID " + res[1] + "successfully removed!");
      }
    });
  }

  rmForecastPromise(id: string): Observable<any> | null{
    if(id == "" || parseInt(id) < 1){
      console.error("Invalid ID!");
      return null;
    }

    return this.http.post<String[]>(
      this.url, {
        request: 'rmForecast',
        id_session: localStorage.getItem('id_session'),
        id: id
      }
    )
  }

  getForecastsGlobally(year: string) {
    this.listForecastsPromise(year).subscribe(
      res => {
        if(res[0] == "OK") {
          this.forecasts = res[1];
          environment.globalForecasts = res[1];
          //console.log(environment.globalForecasts);
        }
        else{
          console.error("Error retrieving users!");
        }
      }
    );
  }

  getForecastPdfPromise(username: string, year: string) {
    let request = 'getForecastPDF';
    let id_session = localStorage.getItem('id_session');
    let path = this.url + '?request='+ request + '&id_session=' + id_session + '&username=' + username + '&year=' + year;
    //console.log(path)
    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    );
  }
}
