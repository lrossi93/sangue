import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    this.check();
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
  //constructor
  constructor(loginService: LoginService, router: Router) {
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
      this.router.navigate(['welcome']);
      return;
    }

    this.loginService.checkPromise().subscribe(
      res => {
        if(res[0] == "KO"){
          localStorage.removeItem("id_session");
          this.logged = false;
          this.router.navigate(['login']);
        }
      }
    )
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
          this.router.navigate(['welcome']);
        }
      }
    );
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/']);
  }

  onClick(){
    console.log();
  }
}
