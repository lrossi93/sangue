import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, GetRowIdFunc, GetRowIdParams, GridApi } from 'ag-grid-community';
import { Forecast, Order, OrderRow, OrderRowGridRowData, OrderStatus, Product } from 'src/environments/environment';
import { defaultColDef, gridConfigOrderRows } from 'src/environments/grid-configs';
import { AddOrderRowComponent } from '../add-order-row/add-order-row.component';
import { AreYouSureOrderRowComponent } from '../are-you-sure-order-row/are-you-sure-order-row.component';
import { AreYouSureOrderComponent } from '../are-you-sure-order/are-you-sure-order.component';
import { EditOrderRowComponent } from '../edit-order-row/edit-order-row.component';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-edit-order-dialog',
  templateUrl: './edit-order-dialog.component.html',
  styleUrls: ['./edit-order-dialog.component.css']
})
export class EditOrderDialogComponent implements OnInit {

  annoFormControl!: UntypedFormControl;
  dOrdineFormControl!: UntypedFormControl;
  nOrdineFormControl!: UntypedFormControl;
  urgenteFormControl!: UntypedFormControl;
  extraFormControl!: UntypedFormControl;
  validatoFormControl!: UntypedFormControl;
  dValidatoFormControl!: UntypedFormControl;
  noteFormControl!: UntypedFormControl;

  order!: Order;
  orderRows: OrderRow[] = [];
  orderRowGridRowData: OrderRowGridRowData[] = [];
  users: any = [];
  products: any = [];
  forecasts: Forecast[] = [];

  dialogRef!: any;
  dialog!: MatDialog;

  isLocked!: boolean;
  qtaRicevuta: number[] = [];
  isValidated!: boolean;

  userCode!: string;

  //agGrid config
  orderRowsGridConfig!: any;
  defaultColDef: any = defaultColDef;
  gridOptions: any;
  public getRowId: GetRowIdFunc = (params: GetRowIdParams) => {
    return params.data.id;
  };

  //agGrid API handles
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  gridApi!: GridApi;
  api: any;
  columnApi: any;

  displayedColumns: string[] = ['id', 'n_riga', 'product', 'qta', 'motivazione', 'qta_validata', 'qta_ricevuta', 'note', 'edit', 'delete'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      order: Order,
      orderRows: OrderRow[],
      users: any,
      products: Product[],
      isLocked: boolean,
      forecasts: Forecast[],
      status: string
    },
    private _builder: UntypedFormBuilder,
    dialog: MatDialog,
    private thisDialogRef: MatDialogRef<AreYouSureOrderComponent>,
    private ordersService: OrdersService,
    private loginService: LoginService
  ) { 
    /*
    this.annoFormControl = _builder.control(data.order.anno, Validators.required);
    this.dOrdineFormControl = _builder.control(data.order.d_ordine, Validators.required);
    this.nOrdineFormControl = _builder.control(data.order.n_ordine, Validators.required);
    this.urgenteFormControl = _builder.control(data.order.b_urgente, Validators.required);
    this.extraFormControl = _builder.control(data.order.b_extra, Validators.required);
    this.validatoFormControl = _builder.control(data.order.b_validato, Validators.required);
    this.dValidatoFormControl = _builder.control(data.order.d_validato, Validators.required);
    this.noteFormControl = _builder.control(data.order.note); //not required
    */
    this.order = data.order;
    this.orderRows = data.orderRows;
    this.dialog = dialog;
    this.users = data.users;
    this.products = data.products;
    this.createOrderRowGridRowData();
    //console.log(this.products);
    
    this.isLocked = data.isLocked;
    this.forecasts = data.forecasts;
    this.isValidated = data.status != "inviato";
    console.log("isvalidated?" + this.isValidated);
    
    //TODO: correggere: validato???

    this.userCode = this.loginService.getUserCode()!;



    //AgGrid initialization
    this.orderRowsGridConfig = gridConfigOrderRows;
    this.gridOptions = {
      onCellClicked: (event: CellClickedEvent) => {
        console.log(event);
      },
    }
  }

  onGridReady = (params: { api: any; columnApi: any; }) => {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.setRowData(this.orderRows);
    this.autoSizeColumns(false);
    
    //this.api.setDomLayout('autoHeight');
  }

  autoSizeColumns(skipHeader: boolean) {
    const allColumnIds: string[] = [];
    this.columnApi.getColumns()!.forEach((column: { getId: () => string; }) => {
      allColumnIds.push(column.getId());
    });
    this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  ngOnInit(): void {
    console.log(this.order);
    console.log(this.orderRows);
    this.assignQtaRicevuta();
  }

  deleteOrderRowById(id: string) {
    for(let i = 0; i < this.orderRows.length; ++i){
      if(this.orderRows[i].id == id){
        this.orderRows.splice(i, 1);
        this.orderRowGridRowData.splice(i, 1);
        this.ordersService.rmOrderRow(id);
        this.createOrderRowGridRowData();
        return;
      }
    }
  }

  assignQtaRicevuta() {
    for(var i = 0; i < this.orderRows.length; ++i){
      this.qtaRicevuta[i] = this.orderRows[i].qta_ricevuta;
    }
  }

  onQtaRicevutaSet(orderRow: OrderRow, qtaRicevuta: number) {
    if(qtaRicevuta > 0){
      console.log(orderRow);
      orderRow.qta_ricevuta = qtaRicevuta;
      this.setQtaRicevutaInOrderRowGridRowData(orderRow);
      this.ordersService.setOrderRowPromise(orderRow, false).subscribe(
        res => {
          if(res[0] == "OK"){
            let orderStatus: OrderStatus = {
              id: "0",
              username: localStorage.getItem('sangue_username')!,
              id_order: orderRow.id_ordine,
              d_status: this.getFormattedDate(new Date()),
              status: "ricevuto",
              note: "Quantità ricevuta impostata a " + orderRow.qta_ricevuta,
              b_sto: false
            }
    
            this.setOrderStatus(orderStatus);
          }
          else {
            console.error("Error setting orderRow!");
          }
        }
      );
    }
    else {
      qtaRicevuta = orderRow.qta_ricevuta;
    }
  }

  setQtaRicevutaInOrderRowGridRowData(orderRow: OrderRow){
    for(var i = 0; i < this.orderRowGridRowData.length; ++i) {
      if(this.orderRowGridRowData[i].id == orderRow.id){
        this.orderRowGridRowData[i].qta_ricevuta = orderRow.qta_ricevuta;
        this.orderRowGridRowData[i].isQtaRicevutaSet = true;
      }
    }
    //this.createOrderRowGridRowData();
  }

  getOrderRowById(id: string): OrderRow | undefined {
    for(var i = 0; i < this.orderRows.length; ++i){
      if(id == this.orderRows[i].id){
        console.log(this.orderRows[i]);
        return this.orderRows[i];
      }
    }
    return undefined;
  }

  openAreYouSureOrderRowDialog(id: string) {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.autoFocus = true;
    dialogConfig.data = { 
      id: id
    }
        
    this.dialogRef = this.dialog.open(
      AreYouSureOrderRowComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        this.deleteOrderRowById(id);
        
        let orderStatus: OrderStatus = {
          id: "0",
          username: localStorage.getItem('sangue_username')!,
          id_order: this.order.id,
          d_status: this.getFormattedDate(new Date()),
          status: "inviato",
          note: "eliminazione riga d'ordine",
          b_sto: false
        }

        this.setOrderStatus(orderStatus);
      }
    });
  }

  //works both for adding and for editing an orderRow
  openEditOrderRowDialog(id: string, isAdding: boolean) {
    const dialogConfig = new MatDialogConfig();
    
    //if id is not specified, create a new orderRow
    if(id == "") {
      let newOrderRow = {
        id: "",
        id_ordine: this.data.order.id,
        username: this.data.order.username,
        n_riga: "",
        id_prd: "",
        qta: 0,
        motivazione: "",
        qta_validata: 0,
        note: ""
      }
      dialogConfig.data = {
        orderRow: newOrderRow,
        users: this.users,
        products: this.products,
        forecasts: this.forecasts,
        orderRows: this.orderRows
      }
      console.log("Sending data: ")
      console.log(dialogConfig.data);
    }
    else {
      let editedOrderRow = this.getOrderRowById(id);
      editedOrderRow!.username = this.data.order.username;       
   
      dialogConfig.data = {
        orderRow: this.getOrderRowById(id),
        users: this.users,
        products: this.products,
        forecasts: this.forecasts
      }
      console.log("Sending data: ")
      console.log(dialogConfig.data);
    }

    
    
    this.dialogRef = this.dialog.open(
      EditOrderRowComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { 
        orderRow: OrderRow, 
        isSubmitted: boolean
      }) => {
        //confirm edits
        if(result !== undefined && result.isSubmitted){
          console.log(result);
          this.ordersService
            .setOrderRowPromise(result.orderRow, isAdding)
            .subscribe(
              res => {
                if(res[0] != "KO"){
                  //console.log(res);
                  let newOrderRow = result.orderRow;
                  if(newOrderRow.id == "") {
                    newOrderRow.id = res[1];
                    this.orderRows.push(newOrderRow);
                    this.createOrderRowGridRowData();
                  }
                  else {
                    this.updateOrderRow(result.orderRow);
                  }

                  let orderStatus: OrderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username')!,
                    id_order: result.orderRow.id_ordine,
                    d_status: this.getFormattedDate(new Date()),
                    status: "inviato",
                    note: "modifica riga d'ordine",
                    b_sto: false
                  }
          
                  this.setOrderStatus(orderStatus);
                }
                else {
                  console.error("Error setting orderRow!");
                }
              }
            );
        }
    });
  }

  /*
  openAddOrderRowDialog() {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.autoFocus = true;
    dialogConfig.data = {
      order: this.data.order,
      orderRows: this.orderRows, //array di orderRows
      forecasts: this.forecasts 
    }
        
    this.dialogRef = this.dialog.open(
      AddOrderRowComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        console.log(result);
      }
    });
  }
  */

  openAreYouSureOrderDialog(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id: id }
        
    this.dialogRef = this.dialog.open(
      AreYouSureOrderComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { order: Order, orderRows: OrderRow[], isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        this.thisDialogRef.close({
          orderId: id, 
          orderRows: this.orderRows, 
          isSubmitted: result.isSubmitted
        });
      }
    });
  }

  productIdToDes(id: string): string {
    for(var i = 0; i < this.products.length; ++i){
      if(id == this.products[i].id) {
        return this.products[i].des;
      }
    }
    return "";
  }

  usernameToClient(username: string): string {    
    for(var i = 0; i < this.users.length; ++i){
      if(username == this.users[i].username) {
        return this.users[i].client;
      }
    }
    return "";
  }

  onClose(id: string) {
    if(this.orderRows.length == 0){
      this.thisDialogRef.close({
        isClosing: true,
        deleteOrder: true
      });
    }
    else {
      this.thisDialogRef.close();
    }
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

  setOrderStatus(orderStatus: OrderStatus) {
    this.ordersService.setOrderStatusPromise(orderStatus).subscribe(
      res => {
        if(res[0] == "OK") {
          console.log("Status for order " + orderStatus.id_order + " successfully set!");
        }
        else {
          console.error("Error setting status for order " + orderStatus.id_order);
        }
      }
    );
  }

  validateOrder(){
    this.isValidated = true;
    this.thisDialogRef.close({
      order: this.order,
      orderRows: this.orderRows,
      isValidated: this.isValidated
    });
  }

  createOrderRowGridRowData() {
    this.orderRowGridRowData = [];
    for(var i = 0; i < this.orderRows.length; ++i) {
      var newOrderRow = {
        id: this.orderRows[i].id,
        id_ordine: this.orderRows[i].id_ordine,
        n_riga: this.orderRows[i].n_riga,
        id_prd: this.orderRows[i].id_prd,
        product_name: this.productIdToDes(this.orderRows[i].id_prd),
        username: this.orderRows[i].username,
        full_username: "",
        qta: this.orderRows[i].qta,
        motivazione: this.orderRows[i].motivazione,
        qta_validata: this.orderRows[i].qta_validata,
        qta_ricevuta: this.orderRows[i].qta_ricevuta,
        note: this.orderRows[i].note,
        isQtaRicevutaSet: this.orderRows[i].qta_ricevuta > 0
      }
      this.orderRowGridRowData.push(newOrderRow);
    }
  }

  updateOrderRow(orderRow: OrderRow) {
    for(var i = 0; i < this.orderRows.length; ++i) {
      if(this.orderRows[i].id == orderRow.id){
        this.orderRows[i] = orderRow;
      }
    }
    this.createOrderRowGridRowData();
  }

  isQtaRicevutaSetAND(): boolean {
    var auxBool: boolean = false;
    for(var i = 0; i < this.orderRowGridRowData.length; ++i){
      auxBool = auxBool && this.orderRowGridRowData[i].isQtaRicevutaSet;
    }
    return auxBool;
  }
}
