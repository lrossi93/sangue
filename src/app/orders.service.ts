import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, Order, OrderRow } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  url = environment.basePath + 'order.php';
  orders: any = [];
  orderRows: any = [];
  lastOrderId: string = "";
  lastOrderRowId: string = "";

  constructor(
    private loginService: LoginService,
    private http: HttpClient,
  ) {

  }

  /*
  
        ORDERS ===========================

  */
  listOrders(year: string): any {
    let path = this.url + '?request=listOrders&id_session=' + this.loginService.getSession() + '&year=' + year;
    //console.log(path);
    
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      //console.log(res);
      if(res[0] == "KO"){
        alert("Error retrieving orders!");
        return null;
      }
      else{
        //console.log(res[1]);   
        this.orders = res[1];     
        return this.orders;
      }
    });
  }

  listOrdersPromise(year: string): Observable<any> {
    let path = this.url + '?request=listOrders&id_session=' + this.loginService.getSession() + '&year=' + year;
    //console.log(path);
    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    )
  }

  setOrder(
    order: Order,
    isAdding: boolean
  ): void {
    if(!isAdding){
      //SET
      this.http.post<String[]>(
        this.url, 
        {
          request: 'setOrder',
          id_session: this.loginService.getSession(),
          id: order.id,
          anno: order.anno,
          username: order.username,
          d_ordine: order.d_ordine,
          n_ordine: order.n_ordine,
          b_urgente: order.b_urgente,
          b_extra: order.b_extra,
          b_validato: order.b_validato,
          d_validato: order.d_validato,
          note: order.note
        }
      ).subscribe(res => {
        if(res[0] == "KO"){
          alert("setOrders() error: " + res[1].toString());
        }
        else{
          console.log("Result: " + res[0]);
          console.log("Order with ID " + res[1] + " successfully set!");
          this.lastOrderId = res[1].toString();
        }
      });
    }
    else{
      //ADD
      this.http.post<String[]>(
        this.url, 
        {
          request: 'setOrder',
          id_session: this.loginService.getSession(),
          id: '-1',
          anno: order.anno,
          username: order.username,
          d_ordine: order.d_ordine,
          n_ordine: order.n_ordine,
          b_urgente: order.b_urgente,
          b_extra: order.b_extra,
          b_validato: order.b_validato,
          d_validato: order.d_validato,
          note: order.note
        }
      ).subscribe(res => {
        if(res[0] == "KO"){
          alert("setOrders() error: " + res[1].toString());
        }
        else{
          console.log("Result: " + res[0]);
          console.log("Order with ID " + res[1] + " successfully added!");
          this.lastOrderId = res[1].toString();
        }
      });
    }
  }

  setOrderPromise(
    order: Order,
    isAdding: boolean
  ): Observable<any> {
    if(!isAdding){
      //SET
      return this.http.post<String[]>(
        this.url, 
        {
          request: 'setOrder',
          id_session: this.loginService.getSession(),
          id: order.id,
          anno: order.anno,
          username: order.username,
          d_ordine: order.d_ordine,
          n_ordine: order.n_ordine,
          b_urgente: order.b_urgente,
          b_extra: order.b_extra,
          b_validato: order.b_validato,
          d_validato: order.d_validato,
          note: order.note
        }
      )
    }
    else{
      return this.http.post<String[]>(
        this.url, 
        {
          request: 'setOrder',
          id_session: this.loginService.getSession(),
          id: '-1',
          anno: order.anno,
          username: order.username,
          d_ordine: order.d_ordine,
          n_ordine: order.n_ordine,
          b_urgente: order.b_urgente,
          b_extra: order.b_extra,
          b_validato: order.b_validato,
          d_validato: order.d_validato,
          note: order.note
        }
      )
    }
  }

  rmOrder(id: string): void {
    this.http.post<String[]>(
      this.url, 
      {
        request: 'rmOrder',
        id_session: this.loginService.getSession(),
        id: id
      }
    ).subscribe(res => {
      if(res[0] == "KO"){
        alert("setOrderRows() error: " + res[1].toString());
      }
      else{
        console.log("Result: " + res[0]);
        console.log("OrderRow with ID " + res[1] + " successfully removed!");
        this.lastOrderRowId = res[1].toString();
      }
    });
  }

  /*
  
        ORDERROWS ===========================

  */
  listOrderRows(id_order: string): any {
    let path = this.url + '?request=listOrderRows&id_session=' + this.loginService.getSession() + '&id_order=' + id_order;
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      if(res[0] == "KO"){
        alert("Error retrieving orders!");
        return null;
      }
      else{   
        this.orderRows = res[1];
        return this.orderRows;
      }
    });
  }

  listOrderRowsPromise(id_order: string): Observable<any> {
    let path = this.url + '?request=listOrderRows&id_session=' + this.loginService.getSession() + '&id_order=' + id_order;
    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    )
  }

  setOrderRow(
    orderRow: OrderRow,
    isAdding: boolean
  ): void {
    if(!isAdding){
      //SET
      this.http.post<String[]>(
        this.url, 
        {
          request: 'setOrder',
          id_session: this.loginService.getSession(),
          id: orderRow.id,
          id_ordine: orderRow.id_ordine,
          username: orderRow.username,
          n_riga: orderRow.n_riga,
          id_prd: orderRow.id_prd,
          qta: orderRow.qta,
          qta_validata: orderRow.qta_validata,
          note: orderRow.note
        }
      ).subscribe(res => {
        if(res[0] == "KO"){
          alert("setOrderRows() error: " + res[1].toString());
        }
        else{
          console.log("Result: " + res[0]);
          console.log("OrderRow with ID " + res[1] + "successfully set!");
          this.lastOrderRowId = res[1].toString();
        }
      });
    }
    else{
      //ADD
      this.http.post<String[]>(
        this.url, 
        {
          request: 'setOrder',
          id_session: this.loginService.getSession(),
          id: '-1',
          id_ordine: orderRow.id_ordine,
          username: orderRow.username,
          n_riga: orderRow.n_riga,
          id_prd: orderRow.id_prd,
          qta: orderRow.qta,
          qta_validata: orderRow.qta_validata,
          note: orderRow.note
        }
      ).subscribe(res => {
        if(res[0] == "KO"){
          alert("setOrderRows() error: " + res[1].toString());
        }
        else{
          console.log("Result: " + res[0]);
          console.log("OrderRow with ID " + res[1] + "successfully added!");
          this.lastOrderRowId = res[1].toString();
        }
      });
    }
  }

  setOrderRowPromise(
    orderRow: OrderRow,
    isAdding: boolean
  ): Observable<any> {
    if(!isAdding){
      //SET
      return this.http.post<String[]>(
        this.url, 
        {
          request: 'setOrderRow',
          id_session: this.loginService.getSession(),
          id: orderRow.id,
          id_ordine: orderRow.id_ordine,
          username: orderRow.username,
          n_riga: orderRow.n_riga,
          id_prd: orderRow.id_prd,
          qta: orderRow.qta,
          qta_validata: orderRow.qta_validata,
          note: orderRow.note
        }
      )
    }
    else{
      //ADD
      return this.http.post<String[]>(
        this.url, 
        {
          request: 'setOrderRow',
          id_session: this.loginService.getSession(),
          id: '-1',
          id_ordine: orderRow.id_ordine,
          username: orderRow.username,
          n_riga: orderRow.n_riga,
          id_prd: orderRow.id_prd,
          qta: orderRow.qta,
          qta_validata: orderRow.qta_validata,
          note: orderRow.note
        }
      )
    }
  }

  rmOrderRow(id: string): void {
    this.http.post<String[]>(
      this.url, 
      {
        request: 'rmOrderRow',
        id_session: this.loginService.getSession(),
        id: id
      }
    ).subscribe(res => {
      if(res[0] == "KO"){
        alert("setOrderRows() error: " + res[1].toString());
      }
      else{
        console.log("Result: " + res[0]);
        console.log("OrderRow with ID " + res[1] + "successfully removed!");
        this.lastOrderRowId = res[1].toString();
      }
    });
  }
}
