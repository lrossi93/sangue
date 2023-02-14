import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { environment, Order, OrderRow, Forecast, OrderStatus} from 'src/environments/environment';
import { EditOrderDialogComponent } from '../edit-order-dialog/edit-order-dialog.component';
import { ForecastService } from '../forecast.service';
import { OrdersService } from '../orders.service';
import { OrdersComponent } from '../orders/orders.component';
import { PharmaRegistryService } from '../pharma-registry.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-button-edit-order',
  templateUrl: './button-edit-order.component.html',
  styleUrls: ['./button-edit-order.component.css']
})
export class ButtonEditOrderComponent implements OnInit, ICellRendererAngularComp {
  url = environment.basePath + "order.php";
  data: any;
  isLocked!: boolean;
  currentOrder: Order = {
    id: '',
    anno: 0,
    username: '',
    d_ordine: '',
    n_ordine: 0,
    b_urgente: false,
    b_extra: false,
    b_validato: false,
    d_validato: 'string',
    note: '',
    d_consegna_prevista: "0000-00-00",
    n_ddt: "",
    d_ddt: "",
    note_consegna: "",
  };
  
  orderRows: OrderRow[] = [];
  users: any = [];
  products: any = [];
  forecasts: Forecast[] = [];
  filteredForecasts: Forecast[] = [];

  dialogRef: any;
  dialog: MatDialog;


  constructor(
    dialog: MatDialog,
    private ordersService: OrdersService,
    private usersService: UsersService,
    private pharmaRegistryService: PharmaRegistryService,
    private ordersComponent: OrdersComponent,
    private forecastService: ForecastService
  ) { 
    this.dialog = dialog;
    this.ordersService = ordersService; 
  }
  
  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    //console.log("DATA:");
    //console.log(this.data);
    
    this.isLocked = this.data.isRowLocked;
    this.listOrderRows(this.data.id);
    this.listForecasts(this.data.anno);    
  }
  
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
    this.listProducts();
    this.listUsers();
    switch(localStorage.getItem("id_profile")) {
      case '220':
        this.isLocked = (this.data.status == "inviato al fornitore" || this.data.status == "inviato al cliente" || this.data.status == "ricevuto");
        break;
      case '210':
        this.isLocked = (this.data.status != "inviato");
        break;
      case '230':
        this.isLocked = true;
        break;
      default:
        break;
    }
  }

  listOrderRows(id: string) {
    this.ordersService.listOrderRowsPromise(id).subscribe(
      res => {
        if(res[0] == "KO") {
          console.error("Error retrieving OrderRows!")
        }
        else {
          this.orderRows = res[1];
        }
      }
    );
  }

  openEditOrderDialog(event: any) {  
    this.assignOrderData();
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      order: this.currentOrder,
      orderRows: this.orderRows, //array di orderRows 
      users: this.users,
      products: this.products,
      isLocked: this.isLocked,
      forecasts: this.filteredForecasts,
      status: this.data.status
    }

    dialogConfig.width = "95%";
    dialogConfig.maxHeight = "500px";

    if(this.data.status == "inviato")
      dialogConfig.disableClose = true;
    
    //console.log(this.filteredForecasts);
    
    
    this.dialogRef = this.dialog.open(
      EditOrderDialogComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: {
        order: Order,
        orderRows: OrderRow[],
        isSubmitted: boolean,
        isClosing: boolean,
        deleteOrder: boolean,
        isValidated: boolean,
        isQtaRicevutaConfirmed: boolean
    }) => {
      //console.log(result.order);
      if(result !== undefined && result.isSubmitted){
        let orderStatus: OrderStatus = {
          id: "0",
          username: localStorage.getItem('sangue_username')!,
          id_order: this.data.id,
          d_status: this.getFormattedDate(new Date()),
          status: "eliminato",
          note: "eliminato da " + localStorage.getItem('sangue_username'),
          b_sto: false
        }

        this.rmOrderAndOrderRows(this.data.id, result.orderRows);
        this.ordersComponent.setOrderStatus(orderStatus);
      }
      if(result !== undefined && result.isClosing) {       
        if(result.deleteOrder){
          this.ordersComponent.rmOrder(this.currentOrder.id);
        }

        let orderStatus: OrderStatus = {
          id: "0",
          username: localStorage.getItem('sangue_username')!,
          id_order: this.currentOrder.id,
          d_status: this.getFormattedDate(new Date()),
          status: "eliminato",
          note: "eliminato da " + localStorage.getItem('sangue_username'),
          b_sto: false
        }

        this.ordersComponent.setOrderStatus(orderStatus);
      }
      if(result !== undefined && result.isValidated) {
        let orderStatus: OrderStatus = {
          id: "0",
          username: localStorage.getItem('sangue_username')!,
          id_order: this.currentOrder.id,
          d_status: this.getFormattedDate(new Date()),
          status: "confermato",
          note: "Ordine validato da " + localStorage.getItem('sangue_username'),
          b_sto: false
        }        
        
        this.ordersComponent.validateOrderRowsRec(result.orderRows, 0);

        this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
          res => {
            if(res[0] == "OK"){
              let order = result.order;
              order.b_validato = true;
              order.d_validato = this.getFormattedDate(new Date());
              this.ordersComponent.setOrder(order, orderStatus, false);
            }
            else {
              console.error("Error setting status for order " + this.data.id);
            }
          }
        );
      } 
      if(result !== undefined && result.isQtaRicevutaConfirmed) {
        let orderStatus: OrderStatus = {
          id: "0",
          username: localStorage.getItem('sangue_username')!,
          id_order: this.currentOrder.id,
          d_status: this.getFormattedDate(new Date()),
          status: "ricevuto",
          note: "quantità ricevuta aggiornata da " + localStorage.getItem('sangue_username'),
          b_sto: false
        }

        this.ordersComponent.confirmQtaRicevutaOrderRowsRec(result.orderRows, 0);

        this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
          res => {
            if(res[0] == "OK"){
              let order = result.order;
              order.b_validato = true;
              order.d_validato = this.getFormattedDate(new Date());
              this.ordersComponent.setOrder(order, orderStatus, false);
            }
            else {
              console.error("Error setting status for order " + this.data.id);
            }
          }
        );
      }
    });
  }

  rmOrderAndOrderRows(orderId: string, orderRows: OrderRow[]) {
    this.ordersComponent.rmOrderAndOrderRows(orderId, orderRows);
  }

  assignOrderData() {
    this.currentOrder.id = this.data.id;
    this.currentOrder.anno = this.data.anno;
    this.currentOrder.b_extra = this.data.b_extra;
    this.currentOrder.b_urgente = this.data.b_urgente;
    this.currentOrder.b_validato = this.data.b_validato;
    this.currentOrder.d_ordine = this.data.d_ordine;
    this.currentOrder.d_validato = this.data.d_validato;
    this.currentOrder.n_ordine = this.data.n_ordine;
    this.currentOrder.note = this.data.note;
    this.currentOrder.username = this.data.username;
    this.currentOrder.n_ddt = this.data.n_ddt;
    this.currentOrder.d_ddt = this.data.d_ddt;
    this.currentOrder.d_consegna_prevista = this.data.d_consegna_prevista;
    this.currentOrder.note_consegna = this.data.note_consegna;
    console.log(this.currentOrder);
  }

  listUsers() {
    this.usersService.listUsersPromise("210").subscribe(
      res => {
        if(res[0] == "KO") {
          //alert("Error retrieving users!");
        }
        else {
          this.users = res[1];
          //console.log(this.users);
        }
      }
    );
  }

  listProducts() {
    this.pharmaRegistryService.listProductsPromise().subscribe(
      res => {
        if(res[0] == "KO") {
          //alert("Error retrieving products!");
        }
        else {
          this.products = res[1];
          //console.log(this.products);
        }
      }
    );
  }

  listForecasts(year: string) {
    this.forecastService.listForecastsPromise(year).subscribe(
      res => {
        if(res[0] == "OK"){
          this.forecasts = res[1];
          //console.log(this.forecasts);
          this.filterForecastsByUsername(this.data.username);
          //console.log(this.filteredForecasts);
        }
        else {
          console.error("Error retrieving forecasts!");
        }
      }
    )
  }

  filterForecastsByUsername(username: string) {
    this.filteredForecasts = [];
    for(var i = 0; i < this.forecasts.length; ++i) {
      if(this.forecasts[i].username == username) {
        this.filteredForecasts.push(this.forecasts[i]);
      }
    }
  }

  /**
   * 
   * ORDER STATUS MANAGEMENT
   * 
   */
  
  getOrderStatus(orderId: string) {
    this.ordersService.getOrderStatusPromise(orderId).subscribe(
      res => {
        if(res[0] == "OK"){
          
        }
        else{
          //console.error("Error retrieving orderStatus for order " + orderId);
          //console.error(res);
        }
      }
    );
  }

  getFormattedDate(date: Date): string {
    let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
    
    let day = splitDate[0];
    let month = splitDate[1];
    let year = splitDate[2];

    if(day.length == 1){
      day = "0" + day;
    }
    if(month.length == 1){
      month = "0" + month;
    }
    return year + "-" + month + "-" + day;  
  }
}
