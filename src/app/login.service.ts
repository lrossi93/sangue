import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment, User } from 'src/environments/environment';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //fields
  username!: string | null;
  password!: string | null;
  id_session!: string | null;
  id_profile!: string | null;
  logged: boolean = false;
  currentUser: User = {id: "", username: "", client: ""};
  users: User[] = [];

  //constructor
  constructor(
    private http: HttpClient, 
    public router: Router,
    private usersService: UsersService
  ){ }

  //methods
  getSession(){
    return localStorage.getItem("id_session");
  }

  getProfile(){
    return localStorage.getItem("id_profile");
  }

  getUserCode(){
    return localStorage.getItem('id_profile');
  }

  getUsername(){
    return localStorage.getItem('sangue_username');
  }

  getUserType(){
    let userType;
    switch(localStorage.getItem('id_profile')){
      case "200":
        userType = "admin";
        break;
      case "210":
        userType = "A.S.L. Customer";
        break;
      case "220":
        userType = "A.S.L. Novara";
        break;
      case "230":
        userType = "Provider";
        break;
      default:
        userType = "none";
        break;
    }
    return userType;
  }

  isLogged(){
    this.check();
    return this.logged;
  }

  isLoggedPromise() {
    this.checkPromise().subscribe(
      res => {
        if(res[0] == "KO"){
          this.router.navigate(['login']);
          localStorage.removeItem("sangue_username");
        }
        else {
          
        }
      }
    )
  }

  check(){
    this.http.post<String[]>(
      environment.basePath + 'session.php',
      {
        request: "check",
        id_session: localStorage.getItem("id_session")
      }
    ).subscribe(res  => {
      if(res[0] == "KO"){
        console.log("CHECK: NOT logged!");
        localStorage.removeItem("id_session");
        localStorage.removeItem("id_profile");
        localStorage.removeItem("sangue_username");
        this.logged = false;
      }
      else{
        console.log("CHECK: logged with sessionID " + localStorage.getItem("id_session"));
        this.logged = true;
      }
    })
  }

  checkPromise(): Observable<any> {
    return this.http.post<String[]>(
      environment.basePath + 'session.php',
      {
        request: "check",
        id_session: localStorage.getItem("id_session")
      }
    )
  }
  
  login(username: string, password: string){
    this.http.post<String[]>(
      environment.basePath + 'session.php', {
      request: 'login',
      sangue_username: username,
      sangue_password: password
    }).subscribe(res => {
      if(res[0] == "KO"){
        console.log("Login KO!");
        alert(res[1].toString());
        this.logged = false;
      }
      else{
        console.log("Logged successfully!");
        localStorage.setItem("id_session", res[1].toString());
        localStorage.setItem("id_profile", res[2].toString());
        localStorage.setItem("sangue_username", username);
        this.logged = true;
      }
    });
  }

  loginPromise(username: string, password: string): Observable<any> {
    return this.http.post<String[]>(
      environment.basePath + 'session.php', {
      request: 'login',
      sangue_username: username,
      sangue_password: password
    })
  }

  logout(){
    this.http.post<String[]>(
      environment.basePath + 'session.php', {
      request: 'logout',
      id_session: localStorage.getItem("id_session"),
      sangue_username: localStorage.getItem("sangue_username")
    }).subscribe(res => {
      if(res[0] == "OK"){
        localStorage.removeItem("id_session");
        localStorage.removeItem("id_profile");
        localStorage.removeItem("sangue_username");
        console.log("Successfully logged out");
        this.logged = false;
        this.router.navigate(['/']);
      }
      else{
        alert("Error logging out!");
      }
    })
  }

  logoutPromise(): Observable<any> {
    return this.http.post<String[]>(
      environment.basePath + 'session.php', {
      request: 'logout',
      id_session: localStorage.getItem("id_session"),
      sangue_username: localStorage.getItem("sangue_username")
    });
  }

  /*
  getCurrentUser() {
    this.usersService.listUsersPromise(this.getUserCode()).subscribe(
      res => {
        //console.log(res);
        if(res[0] == "OK") {
          this.users = res[1];
          //console.log(this.users);

          for(var i = 0; i < this.users.length; ++i) {
            console.log(this.users[i]);
            if(this.users[i].username == localStorage.getItem("sangue_username")){
              console.log(this.users[i]);
              this.currentUser.id = this.users[i].id,
              this.currentUser.username = this.users[i].username,
              this.currentUser.client = this.users[i].client

              switch(this.getUserCode()){
                case '200':
                  this.currentUser.client = "Amministratore";
                  break;
                case '220':
                  this.currentUser.client = "ASL Novara";
                  break;
                case '230':
                  this.currentUser.client = "Fornitore";
                  break;
                default:
                  break;
              }
              localStorage.setItem("current_client", this.currentUser.client);
              return;
            }
          }
          
        }
        else {
          console.error("Error retrieving users!");
        }
      }
    );
  }
  */
}
