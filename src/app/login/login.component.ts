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
  }

  //fields
  username = '';
  password = '';
  id_session!: string | null;
  id_profile!: string | null;
  url: string = 'https://vm-portalmmg.sistemapiemonte.it/collector/modules/ws/sangue/session.php';
  logged: boolean = false;
  private loginService: LoginService;
  router: Router;
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
    return this.loginService.isLogged();
  }

  check(){
    this.loginService.check();
  }
  
  login(username: string, password: string){
    this.loginService.login(username, password);
    //dopo la login controlla se è loggato e, se sì, naviga su /welcome
    this.router.navigate(['/welcome']);
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
