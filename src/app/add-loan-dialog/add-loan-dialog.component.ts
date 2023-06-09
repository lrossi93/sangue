import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { Forecast, Order, OrderRow, Product, User } from 'src/environments/environment';

@Component({
  selector: 'app-add-loan-dialog',
  templateUrl: './add-loan-dialog.component.html',
  styleUrls: ['./add-loan-dialog.component.css']
})
export class AddLoanDialogComponent implements OnInit {
  anno!: UntypedFormControl;
  username!: string;
  productId!: string;
  d_ordine!: UntypedFormControl;
  n_ordine!: UntypedFormControl;
  b_urgente!: UntypedFormControl;
  b_extra!: UntypedFormControl;
  b_validato!: UntypedFormControl;
  d_validato!: UntypedFormControl;
  n_ddt!: UntypedFormControl;
  d_ddt!: UntypedFormControl;
  note!: UntypedFormControl;
  d_consegna_prevista!: UntypedFormControl;
  note_consegna!: UntypedFormControl;
  b_prestito!: UntypedFormControl;
  id_ordine_prestito!: UntypedFormControl;
  qta!: UntypedFormControl;

  newLoanReq!: Order;
  newLoanRes!: Order;
  newLoanRowReq!: OrderRow;
  newLoanRowRes!: OrderRow;

  yearFormControl!: UntypedFormControl;
  selectedYear!: number;
  monthFormControl!: UntypedFormControl;
  selectedMonth!: number;

  yearsArray: number[] = [];
  monthsArray: number[] = [];

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
  productsFormControl!: UntypedFormControl;
  productNames: any = [];
  //END: autocomplete - products
  
  forecasts: Forecast[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      users: User[],
      products: Product[],
      forecasts: Forecast[],
    },
    private _builder: FormBuilder,
    private thisDialogRef: MatDialogRef<AddLoanDialogComponent>,
  ) { 
    this.users = this.data.users;
    this.getUserNames();
    this.products = this.data.products;
    this.getProductNames();
    this.forecasts = this.data.forecasts;

    let date = new Date();

    this.anno = _builder.control(new Date().getFullYear().toString(), Validators.required);
    this.userFormControl = _builder.control(this.userNames[0], Validators.required);
    this.productsFormControl = _builder.control(this.productNames[0], Validators.required);
    this.username = localStorage.getItem('sangue_username')!; //colui che ha effettuato la richiesta di prestito
    this.d_ordine = _builder.control(new Date(), Validators.required);
    this.n_ordine = _builder.control(0);
    this.b_urgente = _builder.control(false);
    this.b_extra = _builder.control(false);
    this.b_validato = _builder.control(false);
    this.d_validato = _builder.control("");
    this.n_ddt = _builder.control(0);
    this.d_ddt = _builder.control(new Date());
    this.note = _builder.control("");
    this.n_ddt = _builder.control(0);
    this.d_ddt = _builder.control("");
    this.d_consegna_prevista = _builder.control("");
    this.note_consegna = _builder.control("");
    this.b_prestito = _builder.control(true);
    this.id_ordine_prestito = _builder.control("");
    this.qta = _builder.control(0);

    this.initMonthsArray(date.getMonth() + 1);//+1 because months are counted from 0
    
    this.initYearsArray(date.getFullYear(), date.getMonth());
    
    if(this.yearsArray.length == 2) {
      this.yearFormControl = _builder.control(this.yearsArray[1], Validators.required);
      this.monthFormControl = _builder.control(this.monthsArray[1], Validators.required);
    }
    else {
      this.yearFormControl = _builder.control(this.yearsArray[0], Validators.required);
      this.monthFormControl = _builder.control(this.monthsArray[1], Validators.required);
    }
  }

  ngOnInit(): void {
    //filter input for users
    //this.getUserNames();
    this.filteredUsers = this.userFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUsers(value || ''))
    );

    this.filteredProducts = this.productsFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterProducts(value || '')),
    );
  }

  onLoanDateChange() {
    console.log("onLoadDateChange");
  }

  initYearsArray(year: number, month: number) {
    this.yearsArray = [];
    this.yearsArray.push(year);
    //this.yearsArray.push(year + 1);
    if(month == 12) {
      this.yearsArray.push(year + 1);
    }
  }

  initMonthsArray(month: number) {
    this.monthsArray = [];
    this.monthsArray.push(month)
    if(month == 12) {
      this.monthsArray.push(1);
    }
    else{
      this.monthsArray.push(month + 1);
    }
    console.log(this.monthsArray);
  }

  onYearValueChanged(event: Event) {
    console.log(event);
    console.log(this.yearFormControl.value);
    //se viene scelto l'anno successivo, impostare il mese successivo (gennaio anno successivo)
    if(this.yearsArray.length == 2 && this.yearsArray[1].toString() == event.toString()) {
      this.monthFormControl.setValue(this.monthsArray[1]);
    }
    //se viene scelto l'anno precedente, impostare il primo mese (dicembre anno precedente)
    if(this.yearsArray.length == 2 && this.yearsArray[0].toString() == event.toString()) {
      this.monthFormControl.setValue(this.monthsArray[0]);
    }
  }

  onMonthValueChanged(event: Event) {
    console.log(event);
    console.log(this.monthFormControl.value);
    if(this.yearsArray.length == 2) {
      if(parseInt(event.toString()) == 12 && this.monthsArray[0] == 12) {
        this.yearFormControl.setValue(this.yearsArray[0])
      }
      if(parseInt(event.toString()) == 1 && this.monthsArray[1] == 1) {
        this.yearFormControl.setValue(this.yearsArray[1]);
      }
    }
  }

  assignNewLoanValues() {
    //console.log("this.username: " + this.username);
    
    this.newLoanReq = {
      id: "", //to be assigned
      anno: new Date(this.d_ordine.value).getFullYear(),
      mese: new Date(this.d_ordine.value).getMonth(),
      b_extra: false,
      b_urgente: false,
      b_validato: false,
      d_ordine: this.getFormattedDate(this.d_ordine.value.toLocaleString('it-IT').split(",", 2)[0]),
      d_validato: "",//this.getFormattedDate(this.d_validato.value.toLocaleString('it-IT').split(",", 2)[0]),
      n_ordine: this.n_ordine.value, //to be assigned?
      note: this.note.value,
      status: "prestito",
      username: localStorage.getItem("sangue_username")!, //the person who requested the loan, i.e. the logged user
      d_consegna_prevista: "",
      n_ddt: "",
      d_ddt: "",
      note_consegna: "",
      b_prestito: true,
      id_ordine_prestito: "", //to be assigned
      username_prestito_da: localStorage.getItem("sangue_username")!,//loan performer
      username_prestito_a: this.username,//loan recipient
    }

    this.newLoanRes = {
      id: "", //to be assigned
      anno: new Date(this.d_ordine.value).getFullYear(),
      mese: new Date(this.d_ordine.value).getMonth(),
      b_extra: false,
      b_urgente: false,
      b_validato: false,
      d_ordine: this.getFormattedDate(this.d_ordine.value.toLocaleString('it-IT').split(",", 2)[0]),
      d_validato: "",//this.getFormattedDate(this.d_validato.value.toLocaleString('it-IT').split(",", 2)[0]),
      n_ordine: this.n_ordine.value, //to be assigned?
      note: this.note.value,
      status: "prestito",
      username: this.username, //loan recipient
      d_consegna_prevista: "",
      n_ddt: "",
      d_ddt: "",
      note_consegna: "",
      b_prestito: true,
      id_ordine_prestito: "", //to be assigned
      username_prestito_da: localStorage.getItem("sangue_username")!,//loan performer
      username_prestito_a: this.username,//loan recipient
    }

    this.newLoanRowReq = {
      id: "",
      id_ordine: "",
      n_riga: 1,
      id_prd: this.getProductIdByDes(this.productsFormControl.value),
      username: localStorage.getItem("sangue_username")!,
      qta: this.qta.value * (-1),
      motivazione: "",
      qta_validata: 0,
      qta_ricevuta: 0,
      note: ""
    }

    this.newLoanRowRes = {
      id: "",
      id_ordine: "",
      n_riga: 1,
      id_prd: this.getProductIdByDes(this.productsFormControl.value),
      username: this.username,
      qta: this.qta.value,
      motivazione: "",
      qta_validata: 0,
      qta_ricevuta: 0,
      note: ""
    }
  }

  onSubmit(event: Event) {
    this.assignNewLoanValues();
    this.logData();

    this.thisDialogRef.close({
      newLoanReq: this.newLoanReq,
      newLoanRes: this.newLoanRes,
      newLoanRowReq: this.newLoanRowReq,
      newLoanRowRes: this.newLoanRowRes,
      isSubmitted: true
    });
  }

  //BEGIN functions for autocomplete - USERS
  private _filterUsers(value: string): string[] {
    const filterValue = value.toLowerCase();    
    return this.userNames.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  getUserId(event: any){
    for(let i = 0; i < this.users.length; ++i){
      if(this.users[i].client == event.source.value){
        console.log(this.users[i].id);
        return this.users[i].id;
      }
    }
  }

  getUserNames(): void {  
    this.userNames = [];  
    for(let i = 0; i < this.users.length; ++i){
      this.userNames.push(this.users[i].client);
    }
  }

  onUserSelected(event: any) {
    if(event.source._selected){
      this.username = this.getUserId(event);//loan recipient
    }
  }
  //END functions for autocomplete - USERS

//===============================================================================================================
  //BEGIN functions for autocomplete - PRODUCTS
  private _filterProducts(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.productNames.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  getProductId(event: any){
    for(let i = 0; i < this.products.length; ++i){
      if(this.products[i].des == event.source.value){
        return this.products[i].id;
      }
    }
  }

  getProductIdByDes(des: string){
    for(let i = 0; i < this.products.length; ++i){
      if(this.products[i].des == des){
        return this.products[i].id;
      }
    }
  }

  getProductNames(): void {  
    this.productNames = [];  
    for(let i = 0; i < this.products.length; ++i){
      this.productNames.push(this.products[i].des);
    }
  }

  onProductSelected(event: any) {
    if(event.source.selected){    
      this.productId = this.getProductId(event);
    }
  }

  //END functions for autocomplete - PRODUCTS




  logData() {
    console.log(this.newLoanReq);
    console.log(this.newLoanRowReq);
    console.log(this.newLoanRes);
    console.log(this.newLoanRowRes);

    console.log("product: " + this.productsFormControl.value);
    console.log("quantity: " + this.qta.value);
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
