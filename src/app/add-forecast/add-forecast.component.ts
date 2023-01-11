import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-add-forecast',
  templateUrl: './add-forecast.component.html',
  styleUrls: ['./add-forecast.component.css']
})
@Injectable({providedIn: 'root'})
export class AddForecastComponent implements OnInit{

  url = environment.basePath + 'anag.php';
  username: string | null = "";
  id_prd: string = "";
  isSubmitted: boolean = false;
  loginService!: LoginService; 

  //fields to return to caller
  anno!: UntypedFormControl;  
  qta!: UntypedFormControl;
  note!: UntypedFormControl;
  qta_approvata!: UntypedFormControl;
  costo_unitario!: UntypedFormControl;
  
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

  isBadForecast: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number,
      anno: string,
      username: string,
      id_prd: string,
      qta: number,
      note: string,
      users: any,
      products: any
    },
    loginService: LoginService,
    private dialogRef: MatDialogRef<AddForecastComponent>,
    private _builder: UntypedFormBuilder,
  ) {
      this.loginService = loginService;
      this.anno = _builder.control(new Date().getFullYear(), Validators.required);
      
      //if ASL Cliente, set values of qta_approvata and costo_unitario
      if(loginService.getUserCode() == "210"){
        this.userFormControl = _builder.control(loginService.getUsername(), Validators.required);
        this.qta_approvata = _builder.control("in attesa", Validators.required);
        this.costo_unitario = _builder.control("in attesa", Validators.required);
        this.username = loginService.getUsername();
      }
      //else, if ASL Novara, set those values to 0 and pick list of users
      else if(loginService.getUserCode() == "220"){
        this.userFormControl = _builder.control('', Validators.required);
        this.qta_approvata = _builder.control(0, Validators.required);
        this.costo_unitario = _builder.control(0, Validators.required);        
      }

      this.productFormControl = _builder.control('', Validators.required);
      this.qta = _builder.control(0, Validators.required);
      this.note = _builder.control('');
  }

  ngOnInit(): void {
    //general onInit settings
    this.getProductNames();
    this.products = this.data.products;

    //specific user settings
    if(this.loginService.getUserCode() == "210"){
      
    }
    else if(this.loginService.getUserCode() == "220"){
      this.getUserNames();
      this.users = this.data.users;
    }

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

  onSubmit() {
    if(!this.invalidFields()){
      this.isSubmitted = true;
      this.dialogRef.close(
        {
          anno: this.anno.value,
          username: this.username,
          id_prd: this.id_prd,
          qta: this.qta.value,
          note: this.note.value,
          qta_approvata: this.qta_approvata.value,
          costo_unitario: this.costo_unitario.value,
          isSubmitted: this.isSubmitted
        }
      );
      return;
    }
    this.isBadForecast = true;
  }

  invalidFields(): boolean {
    if(this.anno.value == "" ||
    this.username == "" ||
    this.id_prd == "" ||
    this.qta.value == "" ||
    this.qta_approvata.value == "" ||
    this.costo_unitario.value == "")
      return true;
    return false;
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
    if(event.source._selected){
      this.username = this.getUserId(event);
    }
  }
  //END functions for autocomplete - USERS

  //BEGIN functions for autocomplete - PRODUCTS
  private _filterProducts(value: string): string[]{
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

  getProductNames(): void {
    for(let i = 0; i < this.data.products.length; ++i){      
      this.productNames.push(this.data.products[i].des);
    }
  }

  onProductSelected(event: any) {
    if(event.source._selected){
      this.id_prd = this.getProductId(event);
    }
  }
  //END functions for autocomplete - PRODUCTS
}
