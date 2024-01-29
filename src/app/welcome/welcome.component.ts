import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment, User } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';
import { UsersService } from '../users.service';
import { VersionService } from '../version.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
@Injectable()
export class WelcomeComponent implements OnInit {

  users: User[] = [];
  currentClient: string = "";

  constructor(
    public loginService: LoginService, 
    private usersService: UsersService,
    private ordersService: OrdersService,
    private versionService: VersionService,
    private router: Router,
    private sharedService: SharedService
  ) {
    this.getUsersGlobally();
    this.ordersService.getOrdersGlobally();
    this.versionService.checkVersion();
    //this.sharedService.printVenues();
  }

  ngOnInit(): void {
    this.loginService.checkPromise().subscribe(
      res => {
        if(res[0] == "KO"){
          localStorage.removeItem("id_session");
          localStorage.removeItem("id_profile");
          localStorage.removeItem("sangue_username");
          localStorage.removeItem("sangue_client");
          localStorage.removeItem("cf");
          this.loginService.logged = false;
          this.router.navigate(['login']);
        }
      }
    );
  }

  getUsersGlobally() {
    this.usersService.listUsersPromise("210").subscribe(
      res => {
        if(res[0] == "OK") {
          this.users = res[1];
          environment.globalUsers = res[1]
          //console.log(environment.globalUsers);
          let venues: User[] = [];
          //console.log("cf: " + localStorage.getItem("cf"));
          this.filterVenues(venues);
          this.sharedService.setVenues(venues);
          //this.loginService.getCurrentUser(this.users);
          this.loginService.getCurrentUserSync();
        }
        else{
          console.error("Error retrieving users!");
        }
      }
    );
  }

  filterVenues(venues: User[]) {
    let storageCF = localStorage.getItem("cf");
    let storageUsername = localStorage.getItem("sangue_username");
    //sconsole.log("cf: " + storageCF + ", user: " + storageUsername);
    for(var i = 0; i < this.users.length; ++i) {
      let userID = this.users[i].id;
      let userCF = this.users[i].cf;
      //console.log("userID: " + userID + ", userCF: " + userCF);
      if(
        storageCF != "" && 
        storageCF == userCF && 
        userID != storageUsername
        ) {
        venues.push(this.users[i]);
      }
    }
  }
}
