import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { Order, OrderRow, Product, User } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';

//object of orderRows formControls
interface OrderRowFormControls {
  id: number;
  id_ordine: UntypedFormControl;
  n_riga: UntypedFormControl;
  id_prd: UntypedFormControl;
  username: UntypedFormControl;
  qta: UntypedFormControl;
  qta_validata: UntypedFormControl;
  note: UntypedFormControl;
  productFormControl: UntypedFormControl,
  filteredProducts: Observable<string[]>
}



/*

TODO: trovare un modo per assegnare gli orderRows solo quando la setOrder 
ha restituito un orderId da poter inserire negli orderRow appena creati

*/

@Component({
  selector: 'app-add-order-dialog',
  templateUrl: './add-order-dialog.component.html',
  styleUrls: ['./add-order-dialog.component.css']
})
export class AddOrderDialogComponent implements OnInit {
  dialogRef: any;
  loginService: LoginService;
  newOrder!: Order;
  newOrderRows: OrderRow[] = [];
  auxId = 0;

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

  //array of formControls for orderRows
  orderRowFormControls: OrderRowFormControls[] = [];

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
      products: Product[]
    },
    private thisDialogRef: MatDialogRef<AddOrderDialogComponent>,
    dialog: MatDialog,
    private ordersService: OrdersService,
    loginService: LoginService,
    private _builder: FormBuilder
  ) { 
    this.dialogRef = thisDialogRef;
    this.loginService = loginService;

    //creation of formControls from _builder
    //this.anno = _builder.control(new Date().getFullYear(), Validators.required);
    //this.username = _builder.control(loginService.getUsername(), Validators.required);
    this.d_ordine = _builder.control(new Date(), Validators.required);
    this.n_ordine = _builder.control(0);
    this.b_urgente = _builder.control(false);
    this.b_extra = _builder.control(false);
    this.b_validato = _builder.control(false);
    this.d_validato = _builder.control("");
    this.note = _builder.control("");    
    console.log(this.data.users);
    console.log(this.data.products);

    if(loginService.getUserCode() == "210"){
      this.userFormControl = _builder.control(loginService.getUsername(), Validators.required);
      console.log("constructor: username: " + this.userFormControl.value);
    }
    //else, if sangueaslno, pick list of users
    else if(loginService.getUserCode() == "220"){
      this.userFormControl = _builder.control('', Validators.required);
    }
  }

  ngOnInit(): void {
    if(this.loginService.getUserCode() == "220"){
      this.users = this.data.users;
    }
    this.products = this.data.products;
    //filter input for users
    this.getUserNames();
    this.filteredUsers = this.userFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUsers(value || ''))
    );

    //filter input for products
    this.getProductNames();
  }

  pushOrderRow(newOrderRow: OrderRow){
    this.newOrderRows.push(newOrderRow);
  }

  rmOrderRowByIndex(index: number) {
    this.newOrderRows.splice(index, 1);
  }

  //create orderRow, fill it with values from dialog and push it to newOrderRows array
  assignOrderRowValues() {
    for(let i = 0; i < this.orderRowFormControls.length; ++i) {
      let newOrderRow: OrderRow = {
        id: "",
        id_ordine: this.orderRowFormControls[i].id_ordine.value,
        id_prd: this.getProductIdFromDes(this.orderRowFormControls[i].productFormControl.value),
        username: this.orderRowFormControls[i].username.value,
        n_riga: this.orderRowFormControls[i].n_riga.value,
        qta: this.orderRowFormControls[i].qta.value,
        qta_validata: this.orderRowFormControls[i].qta_validata.value, 
        note: this.orderRowFormControls[i].note.value
      };
      console.log(newOrderRow);
      this.pushOrderRow(newOrderRow);
    }
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

  //add a new set of formControls for a new vOrderRow
  addRow() {
    let newOrderRowFormControls: OrderRowFormControls = 
    {
      id: this.auxId++,
      id_ordine: new UntypedFormControl(this.orderRowFormControls.length, Validators.required),
      n_riga: new UntypedFormControl(""),
      id_prd: new UntypedFormControl(""),
      username: new UntypedFormControl(this.loginService.getUsername(), Validators.required),
      qta: new UntypedFormControl(0, Validators.required),
      qta_validata: new UntypedFormControl(0),
      note: new UntypedFormControl(""),
      productFormControl: new UntypedFormControl(""),
      filteredProducts: new Observable<string[]> //che cos'è?
    };
    //assign formControl to new row
    newOrderRowFormControls.filteredProducts = newOrderRowFormControls.productFormControl.valueChanges.pipe(
      startWith(''),
      map(value => 
        this._filterProducts(value || '')
      ));
    this.orderRowFormControls.push(newOrderRowFormControls);
  }

  //delete an orderRow from gui
  deleteRow(id: number) {
    for(let i = 0; i < this.orderRowFormControls.length; ++i) {
      if(this.orderRowFormControls[i].id == id) {
        this.orderRowFormControls.splice(i, 1);
      }
    }
  }

  save() {
    let isAdding = true;
    //console.log(this.newOrder);
    //console.log(this.newOrderRows);
    this.ordersService.setOrderPromise(this.newOrder, isAdding).subscribe(res => {
      if(res[0] == "KO"){
        alert("Error setting order!");
      }
      else {
        console.log(res);
        for(let i = 0; i < this.newOrderRows.length; ++i) {
          this.newOrderRows[i].id_ordine = res[1];
          this.ordersService.setOrderRowPromise(this.newOrderRows[i], isAdding).subscribe(res2 => {
            if(res2[0] == "KO"){
              alert("Error setting orderRow!");
            }
            else {
              console.log("OrderRow with id " + res2[1] + " successfully set!");
            }
          });
          let isSubmitted = true;
          this.dialogRef.close({
            newOrder: this.newOrder,
            isSubmitted: isSubmitted
          });
        }        
      }
    });
  }

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

  toggleQtaValidata(id: number) {
    for(let i = 0; i < this.orderRowFormControls.length; ++i) {
      if(this.orderRowFormControls[i].id == id){
        this.orderRowFormControls[i].qta_validata.value ? this.orderRowFormControls[i].qta_validata = this._builder.control(false) : this.orderRowFormControls[i].qta_validata = this._builder.control(true);
        return;
      }
    }
  }

  //if needed...
  onOrderDateChange(event: any) {
    console.log(this.d_ordine.value);
  }

  //if needed...
  onValidationDateChange(event: any) {
    console.log(this.d_validato.value);
  }

  checkCompulsoryFields(): boolean {
    if(
      this.username == "" ||
      this.d_ordine.value == ""
    ){
      alert("All compulsory Order fields must not be empty!");
      return false;
    }
    for(let i = 0; i < this.orderRowFormControls.length; ++i) {
      if(this.orderRowFormControls[i].id_prd.value == "") {
        alert("OrderRow of index " + i + " is missing id_prd");
        return false;
      }
      if(this.orderRowFormControls[i].username.value == "") {
        alert("OrderRow of index " + i + " is missing username");
        return false;
      }
      if(this.orderRowFormControls[i].qta.value == 0) {
        alert("OrderRow of index " + i + " is missing qta");
        return false;
      }
    }
    return true;
  }

  onSubmit(event: any) {
    if(this.orderRowFormControls.length == 0) {
      alert("Cannot submit an order without order rows!");
      return;
    }
    if(
      true//this.checkCompulsoryFields()
    ) {
      this.assignNewOrderValues();
      this.assignOrderRowValues();
      this.save();
      return;
    }
  }

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
    console.log(event);
    if(event.source._selected){
      this.username = this.getUserId(event);
    }
    console.log("username: " + this.username);
  }
  //END functions for autocomplete - USERS



  //BEGIN functions for autocomplete - PRODUCTS
  private _filterProducts(value: string): string[]{
    const filterValue = value.toLowerCase();  
    return this.productNames.filter((option?: string) => option?.toLowerCase().includes(filterValue));
  }

  getProductId(event: any){
    for(let i = 0; i < this.products.length; ++i){
      if(this.products[i].des == event.source.value){
        return this.products[i].id;
      }
    }
  }

  getProductIdFromDes(des: string) {
    for(let i = 0; i < this.products.length; ++i){
      if(this.products[i].des == des){
        return this.products[i].id;
      }
    }
  }

  getProductNames(): void {
    for(let i = 0; i < this.data.products.length; ++i){      
      this.productNames.push(this.data.products[i].des);
    }
  }

  onProductSelected(event: any, index: number) {
    console.log(event.source.value);
    console.log(this.orderRowFormControls[index].filteredProducts);
    

    if(event.source._selected){
      for(let i = 0; i < this.orderRowFormControls.length; ++i) {
        if(this.orderRowFormControls[i].id == index) {
          this.orderRowFormControls[i].productFormControl = this.getProductId(event);
          return;
        }
      }
    }
  }
  //END functions for autocomplete - PRODUCTS
  
}
