import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi } from 'ag-grid-community';
import { Order, OrderGridRowData, OrderStatus, Product, SupplyGridRowData, User } from 'src/environments/environment';
import { defaultColDef, gridConfigSupplies } from 'src/environments/grid-configs';
import { OrdersService } from '../orders.service';
import { PharmaRegistryService } from '../pharma-registry.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {

  year: string = new Date().getFullYear().toString();
  dialogRef: any;
  dialog: any;

  users: User[] = [];
  products: Product[] = [];
  orders: Order[] = [];
  orderStatusArr: any[] = [];
  supplyGridRowData: SupplyGridRowData[] = [];

  suppliesGridConfig = gridConfigSupplies

  //agGrid config
  ordersGridConfig!: any;
  defaultColDef: any = defaultColDef;
  gridOptions: any;

  //agGrid API handles
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  gridApi!: GridApi;
  api: any;
  columnApi: any;

  //spinner boolean
  isLoading = false;

  constructor(
    private ordersService: OrdersService,
    private pharmaRegistryService: PharmaRegistryService,
    private usersService: UsersService,
  ) { 
    this.gridOptions = {
      //functions for managing the grid
    }
  }

  ngOnInit(): void {
    //call list* here
  }

  autoSizeColumns(skipHeader: boolean) {
    const allColumnIds: string[] = [];
    this.columnApi.getColumns()!.forEach((column: { getId: () => string; }) => {
      allColumnIds.push(column.getId());
    });
    this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  onGridReady = (params: { api: any; columnApi: any; }) => {
    this.api = params.api;
    this.columnApi = params.columnApi;
    console.log(this.api);
    this.getAllData();
    this.listProducts();
    this.listOrders(this.year);
    //this.api.sizeColumnsToFit();
    //this.autoSizeColumns(false);
    //this.columnApi.autoSizeAllColumns();
  }

  getAllData() {
    //listOrders, then
    //this.isLoading = true;
    this.ordersService.listOrdersPromise(this.year).subscribe(
      res => {
        console.log(res);
        if(res[0] == "OK") {
          this.orders = res[1];
          console.log(this.orders);
          this.orderStatusArr = [];
          this.getAllOrderStatusRec(this.orders, 0);
        }
        else {
          console.error("Error retrieving orders!");
        }
      }
    );
  }

  getAllOrderStatusRec(orders: Order[], i: number) {
    //uscita
    if(i >= orders.length) {
      this.listUsers();
      console.log(this.orderStatusArr);
      return;
    }
    this.ordersService.getOrderStatusPromise(orders[i].id).subscribe(
      res => {
        //console.log(res);
        if(res[0] == "OK") {
          //console.log(res[1][res[1].length - 1]);
          this.orderStatusArr.push(res[1][res[1].length - 1]);
          this.getAllOrderStatusRec(orders, i + 1);
        }
        else {
          console.error("Error retrieving orderStatus for order " + orders[i].id);
        }
      }
    );
  }


  listOrders(year: string) {
    this.ordersService.listOrdersPromise(year).subscribe(
      res => {
        if(res[0] == "OK") {
          this.orders = res[1];
          console.log(this.orders);
          this.createSupplyGridRowData();
        }
        else {
          console.error("Error retrieving orders!");
        }
      }
    );
  }

  listProducts() {
    this.pharmaRegistryService.listProductsPromise().subscribe(
      res => {
        if(res[0] == "OK"){
          this.products = res[1];
        }
        else {
          console.error("Error retrieving products!");
        }
      }
    );
  }

  listUsers() {
    this.usersService.listUsersPromise('210').subscribe(
      res => {
        if(res[0] == "OK") {
          this.users = res[1];
          console.log(this.users);
          //this.isLoading = false;
          this.createSupplyGridRowData();
        }
        else {
          console.error("Error retrieving users!");
        }
      }
    );
  }

  createSupplyGridRowData() {
    this.supplyGridRowData = [];
    for(var i = 0; i < this.orders.length; ++i) {
      //aggiungo solo gli ordini con stato "inviato al fornitore" o "inviato al cliente"

      /*if(
        this.orderStatusArr[i].status == "inviato al fornitore" ||
        this.orderStatusArr[i].status == "inviato al cliente" ||
        this.orderStatusArr[i].status == "ricevuto"){
          */
        var lock: boolean = false;
        let toCustomerCondition = false;

        switch(this.orderStatusArr[i].status){
          case "inviato al fornitore":
            toCustomerCondition = false;
            break;
          default:
            toCustomerCondition = true;
            lock = true;
          break;
        }

        var newSupplyGridRowData = {
          id: this.orders[i].id,
          anno: this.orders[i].anno,
          username: this.orders[i].username,
          full_username: this.getFullUsernameById(this.orders[i].username), //per permettere di filtrare sullo username (client)
          d_ordine: this.orders[i].d_ordine,
          n_ordine: this.orders[i].n_ordine,
          b_urgente: this.orders[i].b_urgente,
          b_extra: this.orders[i].b_extra,
          b_validato: this.orders[i].b_validato,
          //prossimo campo non presente in orderGridRowData... sistemare
          b_to_customer: toCustomerCondition,
          d_validato: this.orders[i].d_validato,
          status: this.orderStatusArr[i].status,
          note: this.orders[i].note,
          isRowLocked: lock
        };

        this.supplyGridRowData.push(newSupplyGridRowData);
      //}
    }
    //this.isLoading = false;
    console.log(this.supplyGridRowData);
  }

  getFullUsernameById(id: string): string {
    for(var i = 0; i < this.users.length; ++i) {
      if(this.users[i].username == id) {
        return this.users[i].client;
      }
    }
    return "";
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

 
