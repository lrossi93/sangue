import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class OrderablePeriodService {
  url = environment.basePath + "anag.php"
  
  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  getOrderPeriodPromise(): Observable<any> {
    let requestType = "getOrderPeriod";
    let id_session = localStorage.getItem('id_session');
    let path = this.url + '?request=' + requestType + '&id_session=' + id_session;
    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    )
  }

  setOrderPeriodPromise(min: string, max: string): Observable<any> {
    return this.http.post<String[]>(
      this.url, {
        request: 'setOrderPeriod',
        id_session: localStorage.getItem('id_session'),
        gg_min: min,
        gg_max: max
      }
    );
  }
}
