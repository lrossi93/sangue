import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { map, Observable, startWith } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dropdown-users-orders-component',
  templateUrl: './dropdown-users-orders.component.html',
  styleUrls: ['./dropdown-users-orders.component.css']
})
export class DropdownUsersOrdersComponent implements ICellRendererAngularComp, OnInit {

  pharmaRegistryUrl: string = environment.basePath + 'anag.php';

  data: any;
  value: any;
  users: any = [];
  userNames: string[] = [];
  userName: string = '';

  //sample array
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  formControl!: UntypedFormControl;
  
  constructor(
    private loginService: LoginService,
    private usersService: UsersService,
    private ordersService: OrdersService,
    private http: HttpClient
  ) { 
    this.listUsers('210');
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
  
  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    this.value = params.value; //user id
  }
  
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  
  private _filter(value: string){
    //we take a string value and turn it to lower case
    const filterValue = value.toLowerCase();
    
    //then we cycle on the "options" array and, if one element includes the string
    //typed so far, we return it
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  /*
  getUsers(userlevel: string): void{
    let path = this.pharmaRegistryUrl + '?request=listUsers&id_session='+localStorage.getItem('id_session')+'&userlevel='+userlevel;
    //console.log(path);
    
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
      }
    });
  }
  */

  listUsers(userlevel: string) {
    this.usersService.listUsersPromise(userlevel)
    .subscribe(res => {
      if(res[0] == "KO"){
        alert("Error retrieving products!");
      }
      else{
        //console.log("listUsers response received");
        this.users = res[1];
        this.getUserNames();
        this.options = this.userNames;
        this.assignUserName();
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
        let updatedOrder = {
          id: this.data.id,
          anno: this.data.anno,
          username: userId,
          d_ordine: this.data.d_ordine,
          n_ordine: this.data.n_ordine,
          b_urgente: this.data.b_urgente,
          b_extra: this.data.b_extra,
          b_validato: this.data.b_validato,
          d_validato: this.data.d_validato,
          note: this.data.note
        }
        this.ordersService.setOrderPromise(updatedOrder, false).subscribe(
          res => {
            if(res[0] == "OK") {
              //also set updatedOrder.username to all orderRows with
              console.log("ok!");
              //TODO
            }
          }
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

  getUserNames(): void {
    for(let i = 0; i < this.users.length; ++i){
      this.userNames.push(this.users[i].client);
    }
  }
}