import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { environment } from 'src/environments/environment';
import { PharmaRegistryService } from '../pharma-registry.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs';
import { ForecastService } from '../forecast.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dropdown-products-forecast',
  templateUrl: './dropdown-products-forecast.component.html',
  styleUrls: ['./dropdown-products-forecast.component.css'],
  providers: [PharmaRegistryService]
})
export class DropdownProductsForecastComponent implements ICellRendererAngularComp, OnInit {

  pharmaRegistryUrl: string = environment.basePath + 'anag.php';
  forecastsUrl: string = environment.basePath + 'forecasts.php';
  loginService!: LoginService;

  data: any;
  value: any;
  products: any = [];
  productNames: string[] = [];
  productName: string = '';

  //sample array
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  formControl!: UntypedFormControl;

  loading: boolean = false;

  constructor(
    loginService: LoginService,
    private forecastService: ForecastService,
    private pharmaRegistryService: PharmaRegistryService
  ) { 
    //this.getProducts();
    this.products = environment.globalProducts;
    this.getProductNames();
    this.options = this.productNames;
    this.loginService = loginService;
  }

  ngOnInit(): void {
    //any time the array of filtered options changes (starting with
    //an empty string), _filter() is called on that value
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    this.value = params.value; //product id

    //adapt dropdown to user type
    switch(this.loginService.getUserCode()){
      case "210":
        this.formControl = new UntypedFormControl({value: this.productName, disabled: this.data.qta_approvata != 0});
        break;
      case "220":
        this.formControl = new UntypedFormControl({value: this.productName, disabled: true});
        break;
    }

    this.assignProductName();
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    //default return
    return false;
  }

  //this method has to be called into ngOnInit, as it must be called anytime
  //the code is compiled
  private _filter(value: string){
    //we take a string value and turn it to lower case
    const filterValue = value.toLowerCase();
    //then we cycle on the "options" array and, if one element includes the string
    //typed so far, we return it
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  //OK
  getProductNames(): void {
    for(let i = 0; i < this.products.length; ++i){
      this.productNames.push(this.products[i].des);
    }
  }

  //non dovrebbe più servire
  getProducts(): void{
    this.loading = true;
    this.pharmaRegistryService.listProductsPromise().subscribe(res => {
      if(res[0] == "KO"){
        console.error("Error retrieving products!");
      }
      else{
        this.products = res[1];
        this.getProductNames();
        this.assignProductName();
        this.loading = false;
      }
    });
  }

  assignProductName(): void {
    for(let i = 0; i < this.products.length; ++i){
      if(this.data.id_prd == this.products[i].id){
        this.productName = this.products[i].des;
        this.formControl.setValue(this.productName);
        return;
      }
    }
  }

  onOptionSelected(event: any) {
    if(event.source._selected){
      let productId = this.getProductId(event);
        this.forecastService.setForecast(
          this.data.id,
          this.data.anno,
          this.data.username,
          productId,
          this.data.qta,
          this.data.note,
          this.data.qta_approvata,
          this.data.costo_unitario,
          this.data.isAdding
        );
    }
  }

  getProductId(event: any){
    for(let i = 0; i < this.products.length; ++i){
      if(this.products[i].des == event.source.value){
        return this.products[i].id;
      }
    }
  }
}
