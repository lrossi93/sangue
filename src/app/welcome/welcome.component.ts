import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment, User } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';
import { UsersService } from '../users.service';
import { VersionService } from '../version.service';

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
    private router: Router
  ) {
    this.getUsersGlobally();
    this.ordersService.getOrdersGlobally();
    this.versionService.checkVersion();
  }

  ngOnInit(): void {
    this.loginService.checkPromise().subscribe(
      res => {
        if(res[0] == "KO"){
          localStorage.removeItem("id_session");
          localStorage.removeItem("id_profile");
          localStorage.removeItem("sangue_username");
          localStorage.removeItem("sangue_client");
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
          //this.loginService.getCurrentUser(this.users);
          this.loginService.getCurrentUserSync();
        }
        else{
          console.error("Error retrieving users!");
        }
      }
    );
  }
}
