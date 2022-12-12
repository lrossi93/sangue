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
    let path = this.url + '?request=' + requestType + '&id_session=' + this.loginService.getSession();
    console.log(path);
    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    )
  }
}
