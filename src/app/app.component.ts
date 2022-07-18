import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sangue';
  
  constructor(public loginService: LoginService){ }

  check(){
    this.loginService.check();
  }

  login(username: string, password: string){
    this.loginService.login(username, password);
  }

  logout(){
    this.loginService.logout();
  }
}
