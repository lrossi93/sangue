import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment, User } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
@Injectable()
export class WelcomeComponent implements OnInit {

  users: User[] = [];

  constructor(
    public loginService: LoginService, 
    private usersService: UsersService,
    private router: Router
  ) {
    this.getUsersGlobally();
  }

  ngOnInit(): void {
    this.loginService.checkPromise().subscribe(
      res => {
        if(res[0] == "KO"){
          localStorage.removeItem("id_session");
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
          console.log(environment.globalUsers);
        }
        else{
          console.error("Error retrieving users!");
        }
      }
    );
  }
}
