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
  currentUser: User = {
    id: "", 
    username: "", 
    client: ""
  };
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
        localStorage.removeItem("sangue_client");
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

  checkPromiseParams(id_profile: string, id_session: string): Observable<any> {
    return this.http.post<String[]>(
      environment.basePath + 'session.php',
      {
        request: "check",
        id_session: id_session,
        //id_profile: id_profile
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
        console.error(res[1].toString());
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

  //TODO: chiamata http che passa username e session e restituisce una nuova sessione

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
        localStorage.removeItem("sangue_client")
        console.log("Successfully logged out");
        this.logged = false;
        //this.router.navigate(['/']);
        document.location.href = environment.logoutPath;
      }
      else{
        console.error("Error logging out!");
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

  getCurrentUser(users: User[]) {
    for(var i = 0; i < users.length; ++i) {
      
      if(users[i].id == localStorage.getItem("sangue_username")) {
        console.log(users[i].client);
        this.currentUser.id = users[i].id;
        this.currentUser.username = users[i].username;
        this.currentUser.client = users[i].client;   
        console.log(this.currentUser.client);
        return;
      }
    }
    this.currentUser.id = localStorage.getItem("sangue_username")!;
  }

  getCurrentUserSync() {
    switch(this.getUserCode()) {
      case "200":
        this.currentUser.client = "Amministratore Farmaci";
        this.currentUser.username = "sangueadmin";
      break;

      case "220":
        this.currentUser.client = "ASL Amministratrice";
        this.currentUser.username = "sangueaslno";
        break;

      case "230":
        this.currentUser.client = "Fornitore";
        this.currentUser.username = "sanguefornitore";
        break;

      default: 
        if(this.users.length == 0) {   
          this.usersService.listUsersPromise("210").subscribe(
            res => {
              if(res[0] == "OK") {
                this.users = res[1];
                environment.globalUsers = res[1];
                
                for(var i = 0; i < this.users.length; ++i) {
                  if(this.users[i].id == localStorage.getItem("sangue_username")) {
                    console.log(this.users[i].client);
                    this.currentUser.id = this.users[i].id;
                    this.currentUser.username = this.users[i].username;
                    this.currentUser.client = this.users[i].client;   
                  }
                }

                console.log("client: " + this.currentUser.client);
              }
              else {
                console.error("Error retrieving users");
              }
            }
          );
        }
        else {
          for(var i = 0; i < this.users.length; ++i) {
            if(this.users[i].id == localStorage.getItem("sangue_username")) {
              console.log(this.users[i].client);
              this.currentUser.id = this.users[i].id;
              this.currentUser.username = this.users[i].username;
              this.currentUser.client = this.users[i].client;   
            }
          }
          console.log("client: " + this.currentUser.client);
        }
      break;
    }
  }
}
