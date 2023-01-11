import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { Forecast, Order, OrderRow, Product, User } from 'src/environments/environment';
import { AreYouSureOrderRowComponent } from '../are-you-sure-order-row/are-you-sure-order-row.component';
import { EditOrderRowComponent } from '../edit-order-row/edit-order-row.component';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-add-order-dialog',
  templateUrl: './add-order-dialog.component.html',
  styleUrls: ['./add-order-dialog.component.css']
})
export class AddOrderDialogComponent implements OnInit {
  dialog: any;
  dialogRef: any;
  loginService: LoginService;
  newOrder!: Order;
  newOrderRows: OrderRow[] = [];
  auxId = 0;
  
  gg_min!: string;
  minDate!: Date;
  gg_max!: string;
  maxDate!: Date;

  isInputAmongUsers: boolean = false;
  isAddRowEnabled: boolean = false;
  isSubmitEnabled: boolean = false;

  forecasts: Forecast[] = [];
  currentUserForecasts: Forecast[] = [];
  orderRows: OrderRow[] = [];

  //newOrder formControls for fields
  anno!: UntypedFormControl;
  username!: string;
  d_ordine!: UntypedFormControl;
  n_ordine!: UntypedFormControl;
  b_urgente!: UntypedFormControl;
  b_extra!: UntypedFormControl;
  b_validato!: UntypedFormControl;
  d_validato!: UntypedFormControl;
  note!: UntypedFormControl;


  //BEGIN: autocomplete - users
  users: any = [];
  filteredUsers!: Observable<string[]>;
  userFormControl!: UntypedFormControl;
  userNames: any = [];
  //END: autocomplete - users

  //BEGIN: autocomplete - products
  id_prd!: string;
  products: any = [];
  filteredProducts!: Observable<string[]>;
  productFormControl!: UntypedFormControl;
  productNames: any = [];
  //END: autocomplete - products

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      users: User[],
      products: Product[],
      forecasts: Forecast[],
      gg_min: string,
      gg_max: string
    },
    private thisDialogRef: MatDialogRef<AddOrderDialogComponent>,
    dialog: MatDialog,
    private ordersService: OrdersService,
    loginService: LoginService,
    private _builder: FormBuilder,
  ) { 
    //this.dialogRef = thisDialogRef;
    this.dialog = dialog;
    this.loginService = loginService;

    //creation of formControls from _builder
    this.d_ordine = _builder.control(new Date(), Validators.required);
    this.n_ordine = _builder.control(0);
    this.b_urgente = _builder.control(false);
    this.b_extra = _builder.control(false);
    this.b_validato = _builder.control(false);
    this.d_validato = _builder.control("");
    this.note = _builder.control("");

    if(loginService.getUserCode() == "210"){
      this.userFormControl = _builder.control(loginService.getUsername(), Validators.required);
    }
    //else, if sangueaslno, pick list of users
    else if(loginService.getUserCode() == "220"){
      this.userFormControl = _builder.control('', Validators.required);
    }

    var auxDate = new Date();
    this.minDate = new Date(auxDate.getFullYear(), auxDate.getMonth(), parseInt(this.data.gg_min));
    this.maxDate = new Date(auxDate.getFullYear(), auxDate.getMonth(), parseInt(this.data.gg_max));
    this.forecasts = data.forecasts;
  }

  ngOnInit(): void {
    if(this.loginService.getUserCode() == "220") {
      this.users = this.data.users;
    }
    if(this.loginService.getUserCode() == '210') {
      this.filterForecastsByUsername(this.loginService.getUsername()!);
    }
    this.products = this.data.products;
    //filter input for users
    this.getUserNames();
    this.filteredUsers = this.userFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUsers(value || ''))
    );
  }

  pushOrderRow(newOrderRow: OrderRow){
    this.newOrderRows.push(newOrderRow);
  }

  rmOrderRowByIndex(index: number) {
    this.newOrderRows.splice(index, 1);
  }

  assignNewOrderValues() {
    this.newOrder = {
      id: "",
      anno: this.d_ordine.value.getFullYear(),
      b_extra: this.b_extra.value,
      b_urgente:this.b_urgente.value,
      b_validato: this.b_validato.value,
      d_ordine: this.formatDate(this.d_ordine.value.toLocaleString('it-IT').split(",", 2)[0]),
      d_validato: this.formatDate(this.d_validato.value.toLocaleString('it-IT').split(",", 2)[0]),
      n_ordine: this.n_ordine.value,
      note: this.note.value,
      username: this.username
    }
  }

  formatDate(date: string): string {
    if(date == "")
      return "";

    let formattedDate!: string;
    let splittedDate = date.split("/", 3);
    
    let day = splittedDate[0];
    let month = splittedDate[1];
    let year = splittedDate[2];

    //prepare date to be saved on db
    if(day.length == 1){
      day = "0" + day;
    }
    if(month.length == 1){
      month = "0" + month;
    }
    formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  }

  deleteOrderRow(id: string) {
    for(let i = 0; i < this.newOrderRows.length; ++i) {
      if(this.newOrderRows[i].id == id) {
        this.newOrderRows.splice(i, 1);
      }
    }
  }

//===================================================================================================================

  //checkbox toggles
  toggleUrgente() {
    this.b_urgente.value ? this.b_urgente = this._builder.control(false) : this.b_urgente = this._builder.control(true);
  }

  toggleExtra(): void {
    this.b_extra.value ? this.b_extra = this._builder.control(false) : this.b_extra = this._builder.control(true);
  }

  toggleValidato() {
    if(this.b_validato.value) {
      this.b_validato = this._builder.control(false);
      this.d_validato = this._builder.control("");
    }
    else {
      this.b_validato = this._builder.control(true);
      this.d_validato = this._builder.control(new Date());
    }
  }

//===================================================================================================================

  //if needed...
  onOrderDateChange(event: any) {
    console.log(this.d_ordine.value);
  }

  //if needed...
  onValidationDateChange(event: any) {
    console.log(this.d_validato.value);
  }

  onSubmit(event: any) {
    //TODO: check fields
    this.assignNewOrderValues();
    let isSubmitted = true;
    
    for(var i = 0; i < this.newOrderRows.length; ++i) {
      this.newOrderRows[i].username = this.newOrder.username
    }

    if(this.newOrder.d_validato == "") {
      this.newOrder.d_validato = "0000-00-00";
    }

    this.thisDialogRef.close({
      newOrder: this.newOrder,
      newOrderRows: this.newOrderRows,
      isSubmitted: isSubmitted
    });
    
    return;
  }

//===================================================================================================================

  //BEGIN functions for autocomplete - USERS
  private _filterUsers(value: string): string[] {
    const filterValue = value.toLowerCase();    
    return this.userNames.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  getUserId(event: any){
    for(let i = 0; i < this.users.length; ++i){
      if(this.users[i].client == event.source.value){
        return this.users[i].id;
      }
    }
  }

  getUserNames(): void {
    for(let i = 0; i < this.data.users.length; ++i){
      this.userNames.push(this.data.users[i].client);
    }
  }

  onUserSelected(event: any) {
    this.isInputAmongUsers = false;
    if(event.source._selected){
      this.username = this.getUserId(event);
      this.enableAddRowAndSubmit(event.source.value);
      this.filterForecastsByUsername(this.username);
    }
  }
  //END functions for autocomplete - USERS

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
  
  getOrderRowById(id: string): OrderRow | undefined {
    for(let i = 0; i < this.newOrderRows.length; ++i){
      if(id == this.newOrderRows[i].id){
        console.log(this.newOrderRows[i]);
        return this.newOrderRows[i];
      }
    }
    return undefined;
  }

  deleteOrderRowByIndex(index: number) {
    this.newOrderRows.splice(index, 1);
  }

  //works both for adding and for editing an orderRow
  //here id is not the real id but the index in the newOrderRows array!
  openEditOrderRowDialog(id: string, isAdding: boolean) {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.autoFocus = true;
    console.log("OpenEditOrderRowDialog: ID = " + id);
    
    //if id is not specified, create a new orderRow
    if(id == "") {
      let newOrderRow = {
        id: "",
        id_ordine: "",
        username: "",
        n_riga: 0,
        id_prd: "",
        qta: 0,
        motivazione: "",
        qta_validata: 0,
        qta_ricevuta: 0,
        note: ""
      }

      dialogConfig.data = {
        orderRow: newOrderRow,
        products: this.products,
        forecasts: this.currentUserForecasts,
        orderRows: this.newOrderRows
      }
    }
    else {
      let editedOrderRow = this.getOrderRowById(id);
      console.log(editedOrderRow);
      dialogConfig.data = {
        orderRow: editedOrderRow,
        products: this.products,
        forecasts: this.currentUserForecasts
      }
    }
          
    this.dialogRef = this.dialog.open(
      EditOrderRowComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { orderRow: OrderRow, isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        console.log(result);
        let newOrderRow = result.orderRow;
        //se l'id della orderRow è vuoto, allora la sto aggiungendo, quindi la devo pushare nell'array
        if(newOrderRow.id == "") {
          newOrderRow.id = this.newOrderRows.length.toString();
          console.log(newOrderRow);
          this.newOrderRows.push(newOrderRow);
        }
      }
    });
  }

  openAreYouSureOrderRowDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.autoFocus = true;
    dialogConfig.data = { id: id }
        
    this.dialogRef = this.dialog.open(
      AreYouSureOrderRowComponent, 
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        this.deleteOrderRowByIndex(id);
      }
    });
  }

  isAmongUsers(inputValue: string): boolean {
    for(var i = 0; i < this.userNames.length; ++i) {
      if(inputValue == this.userNames[i]) {
        return true;
      }
    }
    return false;
  }

  enableAddRowAndSubmit(selectedUser: string) {
    if(this.loginService.getUserCode() == '220') {
      this.isAddRowEnabled = false;
      this.isSubmitEnabled = false;
      
      if(this.isAmongUsers(selectedUser) && this.n_ordine.value > 0) {
        this.isAddRowEnabled = true;
        this.isSubmitEnabled = true;
      }
    }
    if(this.loginService.getUserCode() == '210' && this.n_ordine.value > 0) {
      this.isAddRowEnabled = true;
      this.isSubmitEnabled = true;
    }
  }

  filterForecastsByUsername(username: string) {
    this.currentUserForecasts = [];
    for(var i = 0; i < this.forecasts.length; ++i) {
      if(this.forecasts[i].username == username) {
        this.currentUserForecasts.push(this.forecasts[i]);
      }
    }
    //console.log(this.currentUserForecasts);
  }
}
