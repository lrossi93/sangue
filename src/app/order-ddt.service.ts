import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDDT, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderDdtService {
  url = environment.basePath + 'order.php';
  orderDDT!: OrderDDT;

  constructor(
    private http: HttpClient
  ) { 

  }

  getOrderDdtPromise(orderID: string): Observable<any> {
    let path = this.url + '?request=getOrderDDT&id_session='+localStorage.getItem('id_session')+'&id_order='+orderID;
    //console.log(path);

    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    )
  }

  //to be called when the dialog closes
  setOrderDdtPromise(orderID: string, filename: string, filebase64: string): Observable<any> {
    return this.http.post<String[]>(
      this.url, 
      {
        request: 'setOrderDDT',
        id_session: localStorage.getItem("id_session"),
        id_order: orderID,
        filename: filename,
        filebase64: filebase64 
      }
    )
  }

  rmOrderDdtPromise(id: string): Observable<any> {
    return this.http.post<String[]>(
      this.url, 
      {
        request: 'rmOrderDDT',
        id_session: localStorage.getItem("id_session"),
        id_order: id,
      }
    )
  }
}
