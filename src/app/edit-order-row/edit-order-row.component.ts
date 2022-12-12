import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { OrderRow, Product, User } from 'src/environments/environment';
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

  id!: UntypedFormControl;
  id_ordine!: UntypedFormControl;
  username!: UntypedFormControl;
  n_riga!: UntypedFormControl;
  id_prd!: UntypedFormControl;
  qta!: UntypedFormControl;
  motivazione!: UntypedFormControl;
  qta_validata!: UntypedFormControl;
  note!: UntypedFormControl;


  productsFormControl!: FormControl;// = new FormControl('', Validators.required);
  products: Product[] = [];
  productOptions: string[] = [];
  filteredProductOptions: Observable<string[]> | undefined;

  usersFormControl!: FormControl;// = new FormControl('', Validators.required);
  users: User[] = [];
  userOptions: string[] = [];
  filteredUserOptions: Observable<string[]> | undefined;

  loginService: LoginService

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { 
      orderRow: OrderRow,
      users: any,
      products: any
    },
    private dialogRef: MatDialogRef<EditOrderRowComponent>,
    private _builder: UntypedFormBuilder,
    loginService: LoginService
  ) {
    this.loginService = loginService;

    this.orderRow = data.orderRow;
    this.users = data.users;    
    
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
      this.usersFormControl = _builder.control(this.usernameToClient(localStorage.getItem("id_profile")!));
    }

    //products
    this.products = data.products;    
    
    this.productsFormControl = _builder.control(this.productIdToDes(this.orderRow.id_prd), Validators.required);
    this.productOptions = this.productsToOptions(this.products);
    
    this.n_riga = _builder.control(this.orderRow.n_riga == null ? 0 : this.orderRow.n_riga, Validators.required);
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

    //second filter
/*
    this.filteredUserOptions = this.usersFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUsers(value || '')),
    );
*/ 
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
    for(var i = 0; i < this.products.length; ++i){
      if(des == this.products[i].des) {
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
    console.log(event.source.value);
    console.log(this.productDesToId(event.source.value));
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
}
