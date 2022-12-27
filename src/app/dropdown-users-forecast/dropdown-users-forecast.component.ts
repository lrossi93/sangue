import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs';
import { ForecastService } from '../forecast.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dropdown-users-forecast',
  templateUrl: './dropdown-users-forecast.component.html',
  styleUrls: ['./dropdown-users-forecast.component.css']
})
export class DropdownUsersForecastComponent implements ICellRendererAngularComp, OnInit {

  pharmaRegistryUrl: string = environment.basePath + 'anag.php';
  forecastsUrl: string = environment.basePath + 'forecasts.php';
  loginService!: LoginService;

  data: any;
  value: any;
  users: any = [];
  userNames: string[] = [];
  userName: string = '';

  //sample array
  options: string[] = [];//['Delhi', 'Mumbai', 'Banglore'];
  filteredOptions: Observable<string[]> | undefined;
  formControl!: UntypedFormControl;


  loading: boolean = false;

  //constructor is called when cells are hidden and then re-displayed
  constructor(
    loginService: LoginService,
    private forecastService: ForecastService,
    private http: HttpClient,
  ) { 
    
    //retrieve product names
    this.getUsers('210');
    
    this.options = this.userNames;
    this.loginService = loginService;

    //adapt dropdown to user type
    switch(loginService.getUserCode()){
      case "210":
        this.formControl = new UntypedFormControl({value: this.userName, disabled: true});
        break;
      case "220":
        this.formControl = new UntypedFormControl({value: this.userName, disabled: false});
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

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    this.value = params.value; //user id
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

  getUserNames(): void {
    for(let i = 0; i < this.users.length; ++i){
      this.userNames.push(this.users[i].client);
    }
  }

  getUsers(userlevel: string): void{
    let path = this.pharmaRegistryUrl + '?request=listUsers&id_session='+localStorage.getItem('id_session')+'&userlevel='+userlevel;
    //console.log(path);
    this.loading = true;
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
        this.users = res[1];
        this.getUserNames();
        this.assignUserName();
        this.loading = false;
      }
    });
  }

  assignUserName(): void {
    for(let i = 0; i < this.users.length; ++i){
      if(this.data.username == this.users[i].id){
        this.userName = this.users[i].client;
        return;
      }
    }
  }

  onOptionSelected(event: any) {
    if(event.source._selected){
      let userId = this.getUserId(event);
        //perform call to update db
        this.forecastService.setForecast(
          this.data.id,
          this.data.anno,
          userId,
          this.data.id_prd,
          this.data.qta,
          this.data.note,
          this.data.qta_approvata,
          this.data.costo_unitario,
          this.data.isAdding
        );
    }
  }

  getUserId(event: any){
    for(let i = 0; i < this.users.length; ++i){
      if(this.users[i].client == event.source.value){
        return this.users[i].id;
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
