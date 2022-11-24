import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { OrderRow } from 'src/environments/environment';
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
  qta_validata!: UntypedFormControl;
  note!: UntypedFormControl;

  //BEGIN: autocomplete - users
  users: any = [];
  filteredUsers!: Observable<string[]>;
  userFormControl!: UntypedFormControl;
  userNames: any = [];
  //END: autocomplete - users

  //BEGIN: autocomplete - products
  products: any = [];
  filteredProducts!: Observable<string[]>;
  productFormControl!: UntypedFormControl;
  productNames: any = [];
  //END: autocomplete - products

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
    this.loginService = loginService
    this.orderRow = data.orderRow;
    //if(this.loginService.getUserCode() == "220")
    console.log("username: " + data.orderRow.username);
    console.log("users");
    console.log(data.users);
    console.log("products");
    console.log(data.products);
    
    
    this.username = _builder.control(data.orderRow.username, Validators.required);
    this.n_riga = _builder.control(data.orderRow.n_riga);
    this.id_prd = _builder.control(data.orderRow.id_prd, Validators.required);
    this.qta = _builder.control(data.orderRow.qta, Validators.required);
    if(this.loginService.getUserCode() == "220") {
      this.userFormControl = _builder.control("", Validators.required);
    }
    this.productFormControl = _builder.control("", Validators.required);
    this.qta_validata = _builder.control(data.orderRow.qta_validata, Validators.required);
    this.note = _builder.control(data.orderRow.note);
    
   }

  ngOnInit(): void {
    console.log("EditOrderRowComponent: orderID: " + this.data.orderRow.id_ordine);
    
    //filter input for users
    this.filteredUsers = this.userFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUsers(value || ''))
    );
    
    //filter input for products
    this.filteredProducts = this.productFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterProducts(value || ''))
    );
  }

  assignOrderRowValues() {
    this.orderRow.id = this.data.orderRow.id;
    //this.orderRow.id_ordine = this.data.orderId;
    this.orderRow.id_prd = this.productID;
    this.orderRow.n_riga = this.n_riga.value;
    this.orderRow.note = this.note.value;
    this.orderRow.qta = this.qta.value;
    this.orderRow.qta_validata = this.qta_validata.value;
    this.orderRow.username = this.username.value;
  }

  onSubmit() {
    this.isSubmitted = true;
    //console.log(this.data.orderRow);
    this.assignOrderRowValues();
    this.dialogRef.close(
      { 
        orderRow: this.orderRow, 
        isSubmitted: this.isSubmitted
      }
    );
  }

  //BEGIN functions for autocomplete - USERS
  private _filterUsers(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.userNames.filter((option: string) => option!.toLowerCase().includes(filterValue));
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
    if(event.source._selected){
      this.username = this.getUserId(event);
    }
  }
  //END functions for autocomplete - USERS

  //BEGIN functions for autocomplete - PRODUCTS
  private _filterProducts(value: string): string[]{
    const filterValue = value.toLowerCase();
    return this.productNames.filter((option: string) => option!.toLowerCase().includes(filterValue));
  }

  getProductId(event: any){
    for(let i = 0; i < this.products.length; ++i){
      if(this.products[i].des == event.source.value){
        return this.products[i].id;
      }
    }
  }

  getProductNames(): void {
    for(let i = 0; i < this.data.products.length; ++i){      
      this.productNames.push(this.data.products[i].des);
    }
  }

  onProductSelected(event: any) {
    if(event.source._selected){
      this.id_prd = this._builder.control(this.getProductId(event));
    }
  }
  //END functions for autocomplete - PRODUCTS
}
