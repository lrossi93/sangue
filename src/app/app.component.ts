import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
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
    
    if(
      navigator.language.split("-", 2)[0] == 'it' ||
      navigator.language.split("-", 2)[0] == 'en'
    ){
      //translate.setDefaultLang(navigator.language.split("-", 2)[0]);
      translate.setDefaultLang('it');
    }
    else{
      translate.setDefaultLang('en');
    }
    
    //comment the next line to activate language detection
    //translate.setDefaultLang('it');
    //environment.currentLanguage = 'it'
    console.log(navigator.language.split("-", 2)[0]);
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
    environment.currentLanguage = lang;
  }
}
