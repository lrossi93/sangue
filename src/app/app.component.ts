import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sangue';
  
  constructor(
    public loginService: LoginService,
    public translate: TranslateService
  ){
    translate.addLangs(['en', 'it']);
    translate.setDefaultLang('it');
  }

  /*
  
    LOGIN SERVICE FUNCTIONS
  
  */
  check(){
    this.loginService.check();
  }

  login(username: string, password: string){
    this.loginService.login(username, password);
  }

  logout(){
    this.loginService.logout();
  }

  /*
  
    LANGUAGE FUNCTIONS

  */
  switchLanguage(lang: string) {
    this.translate.use(lang)
  }
}
