import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment, User } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    this.check();
    this.amILogged();
  }

  //fields
  username = '';
  password = '';
  id_session!: string | null;
  id_profile!: string | null;
  logged: boolean = false;
  private loginService: LoginService;
  router: Router;
  isBadLogin: boolean = false;
  users: User[] = [];

  //constructor
  constructor(
    loginService: LoginService, 
    router: Router,
    private usersService: UsersService,
  ) {
    this.loginService = loginService;
    this.router = router;
  }

  //methods
  getSession(){
    return this.loginService.getSession();
  }

  getProfile(){
    return this.loginService.getProfile();
  }

  isLogged(){
    //was "isLogged()"
    return this.loginService.isLoggedPromise();
  }

  check(){
    //was "check()"
    if(this.loginService.logged){
      this.router.navigate(['home']);
      return;
    }

    this.loginService.checkPromise().subscribe(
      res => {
        if(res[0] == "KO"){
          localStorage.removeItem("id_session");
          localStorage.removeItem("id_profile");
          localStorage.removeItem("sangue_username");
          localStorage.removeItem("sangue_client");
          this.logged = false;
          this.router.navigate(['login']);
        }
      }
    )
  }

  amILogged() {
    if(localStorage.getItem('id_session') != null) {
      this.router.navigate(['home']);
    }
  }
  
  login(username: string, password: string){
    this.loginService.loginPromise(username, password).subscribe(
      res => {
        if(res[0] == "KO") {
          this.isBadLogin = true;
          this.username = "";
          this.password = "";
        }
        else {
          this.isBadLogin = false;
          localStorage.setItem("id_session", res[1].toString());
          localStorage.setItem("id_profile", res[2].toString());
          localStorage.setItem("sangue_username", username);
          this.loginService.logged = true;
          this.getUsersGlobally();
          
          this.router.navigate(['home']);
          //this.loginService.getCurrentUser();
        }
      }
    );
  }

  getUsersGlobally() {
    this.usersService.listUsersPromise('210').subscribe(
      res => {
        if(res[0] == "OK") {
          //console.log(res[1]);
          this.users = res[1];
          environment.globalUsers = res[1];
          this.getCurrentUser(this.users);
        }
        else {
          console.error("Error retrieving users globally!");
        }
      }
    );
  }

  getCurrentUser(users: User[]) {
    for(var i = 0; i < users.length; ++i) {
      
      if(users[i].id == localStorage.getItem("sangue_username")) {
        //console.log(users[i].client);
        this.loginService.currentUser.id = users[i].id;
        this.loginService.currentUser.username = users[i].username;
        this.loginService.currentUser.client = users[i].client;
        this.loginService.currentUser.cf = users[i].cf;
        localStorage.setItem("sangue_client", this.loginService.currentUser.client);   
        localStorage.setItem("cf", this.loginService.currentUser.cf);
        environment.currentUser = this.loginService.currentUser;
        //console.log("current user:");
        //console.log(this.loginService.currentUser);
        return;
      }
    }
    this.loginService.currentUser.id = localStorage.getItem("sangue_username")!;
  }



  logout(){
    this.loginService.logout();
    //this.router.navigate(['https://servizi.regione.piemonte.it/catalogo/sistema-informativo-regionale-portale-medici-pediatri']);
    document.location.href = environment.logoutPath;
  }

  onClick(){
    console.log();
  }
}
