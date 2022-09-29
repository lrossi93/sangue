import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForecastService } from '../forecast.service';
import { LoginService } from '../login.service';
import { PharmaRegistryService } from '../pharma-registry.service';

@Component({
  selector: 'app-dropdown-users-forecast',
  templateUrl: './dropdown-users-forecast.component.html',
  styleUrls: ['./dropdown-users-forecast.component.css']
})
export class DropdownUsersForecastComponent implements OnInit {

  pharmaRegistryUrl: string = environment.basePath + 'anag.php';
  forecastsUrl: string = environment.basePath + 'forecasts.php';
  loginService!: LoginService;

  data: any;
  value: any;

  users: any = [];
  userNames: string[] = [];
  userName: string = '';

  //data for autocomplete
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  formControl!: FormControl;

  constructor(
    loginService: LoginService,
    private pharmaRegistryService: PharmaRegistryService,
    private forecastService: ForecastService,
    private http: HttpClient
  ) { 
    //retrieve users
    console.log("getting users...");
    
    this.getUsers("210");

    this.options = this.userNames;
    this.loginService = loginService;

    //adapt dropdown to user type
    switch(loginService.getUserCode()){
      case "210":
        this.formControl = new FormControl({value: this.userName, disabled: false});
        break;
      case "220":
        this.formControl = new FormControl({value: this.userName, disabled: true});
        break;
    }
  }

  ngOnInit(): void {
    //any time the array of filtered options changes (starting with
    //an empty string), _filter() is called on that value
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
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

  getUsers(userlevel: string): void {
    let path = this.pharmaRegistryUrl + '?request=listUsers&id_session='+localStorage.getItem('id_session')+'&userlevel='+userlevel;
    
    console.log(path);

    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      console.log(res);
      if(res[0] == "KO"){
        alert("Error retrieving products!");
      }
      else{
        console.log('>>>>>users: ' + res[1]);
        this.users = res[1]; 
      }
    });
  }

  onOptionSelected(event: any) {
    if(event.source._selected){
      let productId = this.getUserId(event);
      //console.log('product id: ' + productId);
  
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

  //TODO fix this because users may have other fields
  getUserId(event: any){
    for(let i = 0; i < this.users.length; ++i){
      if(this.users[i].des == event.source.value){
        return this.users[i].id;
      }
    }
  }

  assignUserName(): void {
    for(let i = 0; i < this.users.length; ++i){
      if(this.data.id_prd == this.users[i].id){
        this.userName = this.users[i].des;
        return;
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
