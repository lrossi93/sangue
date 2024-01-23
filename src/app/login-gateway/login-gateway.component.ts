import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UsersService } from '../users.service';
import { User, environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-gateway',
  templateUrl: './login-gateway.component.html',
  styleUrls: ['./login-gateway.component.css']
})
export class LoginGatewayComponent implements OnInit {
  id_profile: string|null = "";
  id_session: string|null = "";
  users: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router,
    private usersService: UsersService,
  ) { 
    
  }

  ngOnInit(): void {
    this.id_profile = this.route.snapshot.queryParams['id_profilo'];
    this.id_session = this.route.snapshot.queryParams['id_session'];
    //console.log("profile: " + this.id_profile + ", session: " + this.id_session)

    this.loginService.checkPromiseParams(this.id_profile!, this.id_session!).subscribe(
      res => {
        //console.log(res)
        if(res[0] == "OK") {
          localStorage.setItem("id_session", this.id_session!);
          localStorage.setItem("id_profile", this.id_profile!);
          localStorage.setItem("sangue_username", res[1]);
          
          this.usersService.listUsersPromise("210").subscribe(
            res1 => {
              if(res[0] == "OK") {
                this.users = res1[1];
                environment.globalUsers = res1[1];

                switch(localStorage.getItem("id_profile")) {
                  case "200":
                    this.loginService.currentUser.client = "Amministratore Farmaci";
                    this.loginService.currentUser.id = localStorage.getItem("sangue_username")!;
                    localStorage.setItem("sangue_client", this.loginService.currentUser.client);
                    localStorage.setItem("sangue_username", this.loginService.currentUser.id);
                  break;
            
                  case "220":
                    this.loginService.currentUser.client = "ASL Amministratrice";
                    this.loginService.currentUser.id = localStorage.getItem("sangue_username")!;
                    localStorage.setItem("sangue_client", this.loginService.currentUser.client);
                    localStorage.setItem("sangue_username", this.loginService.currentUser.id);
                    break;
            
                  case "230":
                    this.loginService.currentUser.client = "Fornitore";
                    this.loginService.currentUser.id = localStorage.getItem("sangue_username")!;
                    localStorage.setItem("sangue_client", this.loginService.currentUser.client);
                    localStorage.setItem("sangue_username", this.loginService.currentUser.id);
                    break;
            
                  default: //case 210
                    for(var i = 0; i < environment.globalUsers.length; ++i) {
                      var auxUser: User = environment.globalUsers[i];
                      if(auxUser.id == localStorage.getItem("sangue_username")) {
                        //console.log("auxUser.id: " + auxUser.id);
                        this.loginService.currentUser.id = auxUser.id;
                        this.loginService.currentUser.username = auxUser.username;
                        this.loginService.currentUser.client = auxUser.client;   
                        this.loginService.currentUser.cf = auxUser.cf;
                        localStorage.setItem("sangue_client", this.loginService.currentUser.client);
                        localStorage.setItem("sangue_username", this.loginService.currentUser.id);
                        localStorage.setItem("cf", this.loginService.currentUser.cf);
                      }
                    }
                    break;
                }
                this.router.navigate(['home']);
              }
              else{
                console.error("Error retrieving users!");
                this.router.navigate(['login']);
              }
            }
          );
        }
        else {
          console.error("Authentication failed!");
          this.router.navigate(['login']);
        }
      }
    );
  }
}
