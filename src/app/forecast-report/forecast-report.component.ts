import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { environment, User } from 'src/environments/environment';
import { ForecastService } from '../forecast.service';
import { LoginService } from '../login.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-forecast-report',
  templateUrl: './forecast-report.component.html',
  styleUrls: ['./forecast-report.component.css']
})
export class ForecastReportComponent implements OnInit {

  year: string = new Date().getFullYear().toString();
  isInputAmongUsers: boolean = false;
  username: string = "";
  loginService: LoginService;
  
  //BEGIN: autocomplete - users
  users: User[] = [];
  filteredUsers!: Observable<string[]>;
  userFormControl!: UntypedFormControl;
  userNames: any = [];
  //END: autocomplete - users

  selectedUser: string = "";

  constructor(
    private forecastService: ForecastService,
    private usersService: UsersService,
    loginService: LoginService,
    private _builder: FormBuilder,
  ) { 
    this.loginService = loginService;
    if(environment.globalUsers.length != 0) {
      this.users = environment.globalUsers;
      this.userFormControl = _builder.control(this.users[0].client);
    }
    else {
      console.log("getting users globally");
      this.userFormControl = _builder.control("");
      this.getUsersGlobally();
    }
  }

  ngOnInit(): void {
    //filter input for users
    this.getUserNames();
    console.log(this.userFormControl);
    
    this.filteredUsers = this.userFormControl!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUsers(value || ''))
    );
  }

  getReport(username: string, year: string) {
    this.forecastService.getForecastPdfPromise(username, year).subscribe(
      (res: any) => {
        if(res[0] == "KO"){
          console.error("Error retrieving report for user " + username);
        }
        else{
          //console.log(res);
          window.open(environment.reportPath + res[1][0].filename, "_blank");
        }
      }
    );
  }

  getUsersGlobally() {
    this.usersService.listUsersPromise("210").subscribe(
      res => {
        if(res[0] == "OK") {
          this.users = res[1];
          environment.globalUsers = res[1];
          this.getUserNames();
          this.username = this.users[0].id;
          this.userFormControl = this._builder.control(this.users[0].client);
        }
        else{
          console.error("Error retrieving users!");
        }
      }
    );
  }

  //BEGIN functions for autocomplete - USERS
  private _filterUsers(value: string): string[] {
    const filterValue = value.toLowerCase();    
    return this.userNames.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  getUserId(event: any): string {
    for(let i = 0; i < this.users.length; ++i){
      if(this.users[i].client == event.source.value){
        //console.log(this.users[i].id);
        return this.users[i].id;
      }
    }
    return "Not found!";
  }

  getUserNames(): void {
    for(let i = 0; i < this.users.length; ++i){
      this.userNames.push(this.users[i].client);
    }
    //console.log(this.userNames);
    this.selectedUser = this.userNames[0];
  }

  onUserSelected(event: any) {
    this.isInputAmongUsers = false;
    if(event.source._selected){
      this.username = this.getUserId(event)!;
    }
  }
  //END functions for autocomplete - USERS
}
