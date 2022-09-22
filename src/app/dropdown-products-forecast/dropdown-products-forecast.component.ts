import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { environment, Forecast } from 'src/environments/environment';
import { PharmaRegistryService } from '../pharma-registry.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-dropdown-products-forecast',
  templateUrl: './dropdown-products-forecast.component.html',
  styleUrls: ['./dropdown-products-forecast.component.css']
})
export class DropdownProductsForecastComponent implements ICellRendererAngularComp, OnInit {

  pharmaRegistryUrl: string = environment.basePath + 'anag.php';
  forecastsUrl: string = environment.basePath + 'forecasts.php';

  data: any;
  value: any;
  products: any = [];
  productNames: string[] = [];
  productName: string = '';

  localForecast!: Forecast;


  //sample array
  options: string[] = [];//['Delhi', 'Mumbai', 'Banglore'];
  filteredOptions: Observable<string[]> | undefined;
  formControl: FormControl;

  constructor(
    private pharmaRegistryService: PharmaRegistryService,
    private forecastService: ForecastService,
    private http: HttpClient,
  ) { 
    //retrieve product names
    this.getProducts();
    this.options = this.productNames;
    //sample control
    this.formControl = new FormControl();
    console.log('assigned product name: ' + this.productName);
    
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
    console.log('[[[VALUE]]]: ' + this.value);
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

  getProductNames(): void {
    for(let i = 0; i < this.products.length; ++i){
      this.productNames.push(this.products[i].des);
    }
  }

  getProducts(): void{
    let path = this.pharmaRegistryUrl + '?request=listProducts&id_session='+localStorage.getItem('id_session');
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      if(res[0] == "KO"){
        alert("Error retrieving products!");
      }
      else{
        this.products = res[1];
        this.getProductNames();
        this.assignProductName();
      }
    });
  }

  assignProductName(): void {
    console.log('assignProductName: ');
    for(let i = 0; i < this.products.length; ++i){
      if(this.data.id_prd == this.products[i].id){
        console.log(this.products[i].des);
        this.productName = this.products[i].des;
        return;
      }
    }
  }

  onOptionSelected(event: any) {
    if(event.source._selected){
      let productId = this.getProductId(event);
      console.log('product id: ' + productId);
  
        //perform call to update db
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

  logData(){
    console.log('id: ' + this.data.id);
    console.log('anno: ' + this.data.anno);
    console.log('username: ' + this.data.username);
    console.log('id_prd: ' + this.data.id_prd);
    console.log('qta: ' + this.data.qta);
    console.log('note: ' + this.data.note);
    console.log('qta_approvata: ' + this.data.qta_approvata);
    console.log('costo_unitario: ' + this.data.costo_unitario);
  }
}
