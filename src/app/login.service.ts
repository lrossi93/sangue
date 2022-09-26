import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  //constructor
  constructor(private http: HttpClient, public router: Router) {
  }

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
        this.logged = false;
        //this.router.navigate(['/']);
      }
      else{
        console.log("CHECK: logged with sessionID " + localStorage.getItem("id_session"));
        this.logged = true;
      }
    })
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
}
