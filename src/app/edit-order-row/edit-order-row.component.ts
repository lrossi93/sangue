import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { environment, Forecast, OrderRow, Product, User, alerts } from 'src/environments/environment';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-edit-order-row',
  templateUrl: './edit-order-row.component.html',
  styleUrls: ['./edit-order-row.component.css']
})
export class EditOrderRowComponent implements OnInit {
  isSubmitted: boolean = false;
  orderRow!: OrderRow;

  productID!: string;
  usernameString!: string;

  qtyThreshold!: number;
  qtyValue!: number;

  forecasts: Forecast[] = [];
  orderRows: OrderRow[] = [];

  //flags for field checking
  productOK: boolean = false;
  nRigaOK: boolean = false;
  quantitaOK: boolean = false;
  motivazioneOK: boolean = false;

  id!: UntypedFormControl;
  id_ordine!: UntypedFormControl;
  username!: UntypedFormControl;
  n_riga!: UntypedFormControl;
  id_prd!: UntypedFormControl;
  qta!: UntypedFormControl;
  motivazione!: UntypedFormControl;
  qta_validata!: UntypedFormControl;
  note!: UntypedFormControl;

  isSubmitEnabled: boolean = false;
  isMotivazioneVisible: boolean = false;

  productsFormControl!: FormControl;// = new FormControl('', Validators.required);
  products: Product[] = [];
  productOptions: string[] = [];
  filteredProductOptions: Observable<string[]> | undefined;

  usersFormControl!: FormControl;// = new FormControl('', Validators.required);
  users: User[] = [];
  userOptions: string[] = [];
  filteredUserOptions: Observable<string[]> | undefined;

  loginService: LoginService
  minQty: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { 
      orderRow: OrderRow,
      users: any,
      products: Product[],
      forecasts: Forecast[],
      orderRows: OrderRow[]
    },
    private dialogRef: MatDialogRef<EditOrderRowComponent>,
    private _builder: UntypedFormBuilder,
    loginService: LoginService
  ) {
    this.loginService = loginService;

    this.orderRow = data.orderRow;
    this.orderRows = data.orderRows;
    this.users = data.users;    
    this.forecasts = data.forecasts;
    console.log(this.forecasts);


    
    //se sangueaslno
    if(loginService.getUserCode() == "220") {
      if(this.orderRow.id != "") {
        this.usersFormControl = _builder.control(this.orderRow.username == "" ? "" : this.usernameToClient(this.orderRow.username), Validators.required);
        //this.userOptions = this.usersToOptions(this.users);
      }
      else {
        //do nothing, orderRow.username is already assigned
      }
    }
    //se sangueasl
    else if(loginService.getUserCode() == "210") {
      if(this.orderRow.id != null) {
        this.usersFormControl = _builder.control(localStorage.getItem("id_profile"));
      }
      else{
        this.usersFormControl = _builder.control(this.usernameToClient(localStorage.getItem("id_profile")!));
      }
    }

    //products
    this.products = data.products;    
    console.log(this.products);
    
    this.productsFormControl = _builder.control(this.productIdToDes(this.orderRow.id_prd), Validators.required);
    this.productOptions = this.productsToOptions(this.products);
    
    //this.n_riga = _builder.control(this.orderRow.n_riga == null ? 0 : this.orderRow.n_riga, Validators.required);
    console.log("RIGA: " +  this.orderRow.n_riga == "0" ? this.orderRows.length + 1 : this.orderRow.n_riga);
    
    this.n_riga = _builder.control(this.orderRow.n_riga == 0 ? this.orderRows.length + 1 : this.orderRow.n_riga, Validators.required);
    this.qta = _builder.control(this.orderRow.qta, Validators.required);
    this.motivazione = _builder.control(this.orderRow.motivazione, Validators.required);
    this.qta_validata = _builder.control(this.orderRow.qta_validata, Validators.required);
    this.note = _builder.control(this.orderRow.note);
  }

  ngOnInit(): void {
    //first filter
    this.filteredProductOptions = this.productsFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterProducts(value || '')),
    );
    this.checkFields();
  }

  private _filterProducts(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.productOptions.filter(option => option.toLowerCase().includes(filterValue));
  }
/*
  private _filterUsers(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.userOptions.filter(option => option.toLowerCase().includes(filterValue));
  }
*/
  productsToOptions(products: Product[]): string[] {
    var productOptions: string[] = [];
    for(var i = 0; i < products.length; ++i) {
      productOptions.push(products[i].des);
    }
    return productOptions;
  }

  productDesToId(des: string): string {
    //console.log("des: " + des);
    
    for(var i = 0; i < this.products.length; ++i){
      if(des == this.products[i].des) {
        //console.log("found! returning product id: " + this.products[i].id);
        return this.products[i].id;
      }
    }
    return "";
  }

  productIdToDes(id: string): string {
    for(var i = 0; i < this.products.length; ++i){
      if(id == this.products[i].id) {
        return this.products[i].des;
      }
    }
    return "";
  }

  usersToOptions(users: User[]): string[] {
    var userOptions: string[] = [];
    for(var i = 0; i < users.length; ++i) {
      userOptions.push(users[i].client);
    }
    return userOptions;
  }

  userClientToId(client: string): string {
    for(var i = 0; i < this.users.length; ++i){
      if(client == this.users[i].client) {
        return this.users[i].username;
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

  onUserSelected(event: any) {
    console.log(event.source.value);
    console.log(this.userClientToId(event.source.value));
  }

  onProductSelected(event: any) {
    if(event.source.selected){    
    let productId = this.productDesToId(event.source.value);
    this.productsFormControl.setValue(event.source.value);
    console.log("qta approvata: " + this.getQtaApprovataByProductId(productId));
    this.qtyThreshold = Math.floor(this.getQtaApprovataByProductId(productId) / 12);
    this.minQty = Math.floor(this.getMinOrdByProductId(productId) / 12);
    this.checkFields(event);
    }
  }

  getQtaApprovataByProductId(id: string): number {
    for(var i = 0; i < this.forecasts.length; ++i) {
      if(this.forecasts[i].id_prd == id){
        //this.qtyThreshold = Math.floor(this.forecasts[i].qta_approvata / 12);
        //console.log(this.forecasts[i].qta_approvata / 12);
        if(this.forecasts[i].qta_approvata > 0){
          return this.forecasts[i].qta_approvata;
        }
      }
    }
    return -1;
  }

  getMinOrdByProductId(id: string): number {
    for(var i = 0; i < this.products.length; ++i) {
      if(this.products[i].id == id){
        console.log("minimum order quantity: " + this.products[i].min_ord);
        return this.products[i].min_ord;
      }
    }
    return 0;
  }

  assignOrderRowValues() {
    this.orderRow.id_prd = this.productDesToId(this.productsFormControl.value);
    this.orderRow.n_riga = this.n_riga.value;
    this.orderRow.note = this.note.value;
    this.orderRow.qta = this.qta.value;
    this.orderRow.motivazione = this.motivazione.value;
    this.orderRow.qta_validata = this.qta_validata.value;
    //this.orderRow.username = this.userClientToId(this.usersFormControl.value);
  }

  onSubmit() {
    this.isSubmitted = true;
    this.assignOrderRowValues();
    //console.log(this.orderRow);
    this.dialogRef.close(
      { 
        orderRow: this.orderRow, 
        isSubmitted: this.isSubmitted
      }
    );
  }
  
  onBlur(event: Event) {
    //console.log(event);
    if(this.qta.value == null){
      this.qta.setValue(0);
      this.isMotivazioneVisible = false;
    }

    this.qtyValue = this.qta.value;
    
    if(this.qtyThreshold == -1 || this.qtyValue <= this.qtyThreshold){
      this.isMotivazioneVisible = false;
      this.motivazione.setValue(null);
      return;
    }
    
    if(this.qtyValue > this.qtyThreshold){
      alert(environment.currentLanguage == 'it' ? alerts.it.ThresholdSurpassed : alerts.en.ThresholdSurpassed);
      this.isMotivazioneVisible = true;
      return;
    }
  }

  checkFields(event?: Event) {
    //console.log(event);
    
    this.isSubmitEnabled = false;
    //this.productsFormControl.setValue(this.productsFormControl.value);
    //console.log("checkFields(): " + this.productsFormControl.value);
    //console.log("motivazione: " + this.motivazione.value);

    //se il prodotto scritto è tra i prodotti esistenti AND
    //se il numero riga è positivo
      //se la quantità è maggiore della soglia
        //se la motivazione non è vuota
          //abilita submit
      //se la quantità è == -1
        //abilita submit
    
    //il prodotto esiste e ha un numero riga
    if(this.isAmongProducts(this.productsFormControl.value) && this.n_riga.value > 0) {
      //console.log("the product exists");
      
      //ha una soglia
      if(this.qtyThreshold != -1 && this.minQty >= 0){

        //se la soglia è stata superata, serve una motivazione
        if(this.qta.value > this.qtyThreshold) {
          //console.log("\tthreshold surpassed, enabling motivazione");

          //non ha una motivazione --> submit disabilitato
          if(this.motivazione.value == null || this.motivazione.value == undefined || this.motivazione.value == "") {
            //console.log("\treason EMPTY --> disabling submit");
            this.isSubmitEnabled = false;
          }

          //ha una motivazione --> submit abilitato
          else if(this.motivazione.value != null && this.motivazione.value != "" && this.motivazione.value != undefined) {
            //console.log("\treason not empty --> enabling submit");
            this.isSubmitEnabled = true;
          }
        }

        //se la soglia non è stata superata, non serve una motivazione MA serve vedere che sia stata superata la minQty
        else {
          //console.log("threshold not surpassed, enabling submit independently from motivazione");
          if(this.qta.value >= this.minQty)
            this.isSubmitEnabled = true;
          else 
            this.isSubmitEnabled = false;
        }
      }
      //non ha una soglia --> abilito submit
      else {
        //console.log("threshold not set");
        if(this.qta.value > 0 && this.qta.value >= this.minQty) {
          this.isSubmitEnabled = true;
        }
      }
    }
    //prodotto non esiste o non ha un numero riga --> submit disabilitato a prescindere
    else {
      this.isSubmitEnabled = false;
    }
  }

  isAmongProducts(inputValue: string): boolean {
    for(var i = 0; i < this.products.length; ++i) {
      if(inputValue == this.products[i].des) {
        this.getQtaApprovataByProductId(this.products[i].id);
        return true;
      }
    }
    this.qtyThreshold = Infinity;
    return false;
  }
}
