import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, Order, OrderRow, OrderStatus } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  url = environment.basePath + 'order.php';
  //reportUrl = environment.reportPath + 'order.php';
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
    ////console.log(path);
    
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      ////console.log(res);
      if(res[0] == "KO"){
        console.error("Error retrieving orders!");
        return null;
      }
      else{
        ////console.log(res[1]);   
        this.orders = res[1];     
        return this.orders;
      }
    });
  }

  listOrdersPromise(year: string, month?: string): Observable<any> {
    let id_session = localStorage.getItem('id_session');
    let path = "";
    
    if(month == "" || month == null || month == undefined) {
      month = undefined;
    }
    if(year == "" || year == null || year == undefined) {
      year == undefined;
    }

    if(month == undefined) {
      path = this.url + '?request=listOrders&id_session=' + id_session + '&year=' + year;
    }
    
    if(year == undefined) {
      path = this.url + '?request=listOrders&id_session=' + id_session;
    }
    
    if(year != undefined && month != undefined) {
      path = this.url + '?request=listOrders&id_session=' + id_session + '&year=' + year + "&month=" + month;
    }

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
          mese: order.mese,
          username: order.username,
          d_ordine: order.d_ordine,
          n_ordine: order.n_ordine,
          b_urgente: order.b_urgente,
          b_extra: order.b_extra,
          b_validato: order.b_validato,
          d_validato: order.d_validato,
          note: order.note,
          d_consegna_prevista: order.d_consegna_prevista,
          n_ddt: order.n_ddt,
          d_ddt: order.d_ddt,
          note_consegna: order.note_consegna
        }
      ).subscribe(res => {
        if(res[0] == "KO"){
          console.error("setOrders() error: " + res[1].toString());
        }
        else{
          //console.log("Result: " + res[0]);
          //console.log("Order with ID " + res[1] + " successfully set!");
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
          mese: order.mese,
          username: order.username,
          d_ordine: order.d_ordine,
          n_ordine: order.n_ordine,
          b_urgente: order.b_urgente,
          b_extra: order.b_extra,
          b_validato: order.b_validato,
          d_validato: order.d_validato,
          note: order.note,
          d_consegna_prevista: order.d_consegna_prevista,
          n_ddt: order.n_ddt,
          d_ddt: order.d_ddt,
          note_consegna: order.note_consegna
        }
      ).subscribe(res => {
        if(res[0] == "KO"){
          console.error("setOrders() error: " + res[1].toString());
        }
        else{
          //console.log("Result: " + res[0]);
          //console.log("Order with ID " + res[1] + " successfully added!");
          this.lastOrderId = res[1].toString();
        }
      });
    }
  }

  setOrderPromise(
    order: Order,
    isAdding: boolean
  ): Observable<any> {
    //console.log("order: ");
    //console.log(order);

    if(!isAdding){
      //SET
      return this.http.post<String[]>(
        this.url, 
        {
          request: 'setOrder',
          id_session: this.loginService.getSession(),
          id: order.id,
          anno: order.anno,
          mese: order.mese,
          username: order.username,
          d_ordine: order.d_ordine,
          n_ordine: order.n_ordine,
          b_urgente: order.b_urgente,
          b_extra: order.b_extra,
          b_validato: order.b_validato,
          d_validato: order.d_validato,
          note: order.note,
          d_consegna_prevista: order.d_consegna_prevista,
          n_ddt: order.n_ddt,
          d_ddt: order.d_ddt,
          note_consegna: order.note_consegna,
          b_prestito: order.b_prestito,
          id_ordine_prestito: order.id_ordine_prestito,
          username_prestito_da: order.username_prestito_da,
          username_prestito_a: order.username_prestito_a
        }
      )
    }
    else{
      //console.log("isAdding: " + isAdding);
      //console.log(order);
      
      return this.http.post<String[]>(
        this.url, 
        {
          request: 'setOrder',
          id_session: this.loginService.getSession(),
          id: '-1',
          anno: order.anno,
          mese: order.mese,
          username: order.username,
          d_ordine: order.d_ordine,
          n_ordine: order.n_ordine,
          b_urgente: order.b_urgente,
          b_extra: order.b_extra,
          b_validato: order.b_validato,
          d_validato: order.d_validato,
          note: order.note,
          d_consegna_prevista: order.d_consegna_prevista,
          n_ddt: order.n_ddt,
          d_ddt: order.d_ddt,
          note_consegna: order.note_consegna,
          b_prestito: order.b_prestito,
          id_ordine_prestito: order.id_ordine_prestito,
          username_prestito_da: order.username_prestito_da,
          username_prestito_a: order.username_prestito_a
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
        console.error("setOrderRows() error: " + res[1].toString());
      }
      else{
        //console.log("Result: " + res[0]);
        //console.log("OrderRow with ID " + res[1] + " successfully removed!");
        this.lastOrderRowId = res[1].toString();
      }
    });
  }

  rmOrderPromise(id: string): Observable<any> {
    return this.http.post<String[]>(
      this.url, 
      {
        request: 'rmOrder',
        id_session: this.loginService.getSession(),
        id: id
      }
    );
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
        console.error("Error retrieving orders!");
        return null;
      }
      else{   
        this.orderRows = res[1];
        //console.log("orderRowssssssssssssssssssssssssssssssssssssssssssssss");
        
        //console.log(res[1]);
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
          qta_ricevuta: orderRow.qta_ricevuta,
          note: orderRow.note
        }
      ).subscribe(res => {
        if(res[0] == "KO"){
          console.error("setOrderRows() error: " + res[1].toString());
        }
        else{
          //console.log("Result: " + res[0]);
          //console.log("OrderRow with ID " + res[1] + "successfully set!");
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
          console.error("setOrderRows() error: " + res[1].toString());
        }
        else{
          //console.log("Result: " + res[0]);
          //console.log("OrderRow with ID " + res[1] + "successfully added!");
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
          motivazione: orderRow.motivazione,
          n_riga: orderRow.n_riga,
          id_prd: orderRow.id_prd,
          qta: orderRow.qta,
          qta_validata: orderRow.qta_validata,
          qta_ricevuta: orderRow.qta_ricevuta,
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
          motivazione: orderRow.motivazione,
          qta_validata: orderRow.qta_validata,
          qta_ricevuta: orderRow.qta_ricevuta,
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
        console.error("setOrderRows() error: " + res[1].toString());
      }
      else{
        //console.log("Result: " + res[0]);
        //console.log("OrderRow with ID " + res[1] + "successfully removed!");
        this.lastOrderRowId = res[1].toString();
      }
    });
  }

  /**
   * 
   * ORDER STATUS MANAGEMENT
   * 
   */
  getOrderStatusPromise(id_order: string) {
    let request = 'getOrderStatus';
    let id_session = localStorage.getItem('id_session');
    let path = this.url + '?request='+ request + '&id_session=' + id_session + '&id_order=' + id_order;
    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    );
  }

  setOrderStatusPromise(orderStatus: OrderStatus) {
    //console.log("Setting order status for order " + orderStatus.id_order);
    
    return this.http.post<String[]>(
      this.url, 
      {
        request: 'setOrderStatus',
        id_session: localStorage.getItem('id_session'),
        username: orderStatus.username,
        id_order: orderStatus.id_order,
        d_status: orderStatus.d_status,
        status: orderStatus.status,
        note: orderStatus.note
      }
    )
  }

  /**
   * 
   * ORDER PDF MANAGEMENT
   * 
   */
  getOrderPdfPromise(id_order: string) {
    let request = 'getOrderPDF';
    let id_session = localStorage.getItem('id_session');
    let path = this.url + '?request='+ request + '&id_session=' + id_session + '&id_order=' + id_order;
    //console.log(path)
    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    );
  }

  /**
   * 
   * GLOBAL ORDERS RETRIEVAL
   * 
   */
  getOrdersGlobally() {
    let year = new Date().getFullYear().toString();
    this.listOrdersPromise(year).subscribe(
      res => {
        if(res[0] == "OK") {
          //console.log(res[1]);
          environment.globalOrders = res[1];
        }
        else {
          console.error("Error retrieving global orders!");
        }
      }
    );
  }

  /**
   * 
   * ORDER RESUME XLS
   * 
   */
  getOrderResumePromise(startDate: string, endDate: string) {
    let request = 'getOrderResume';
    let id_session = localStorage.getItem('id_session');
    let d_inizio = startDate;
    let d_fine = endDate;
    let path = this.url + '?request='+ request + '&id_session=' + id_session + '&d_inizio=' + d_inizio + '&d_fine=' + d_fine;
    //console.log(path)
    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    );
  }

  /**
   * 
   * SUPPLY RESUME
   * 
   */
  getSupplyResumePromise(orderID: string) {
    let request = 'getOrderXlsx';
    let id_session = localStorage.getItem('id_session');
    let path = this.url + '?request='+ request + '&id_session=' + id_session + '&id_order=' + orderID;
    //console.log(path)
    return this.http.get<any[]>(
      path,
      {
        responseType: "json"
      }
    );
  }
}
