import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment, User } from 'src/environments/environment';
import { LoginService } from './login.service';
import { UsersService } from './users.service';
import { log } from 'console';
import { VersionService } from './version.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sangue';
  users: User[] = [];
  currentUser!: User;
  localStorage: any;
  router!: Router;
  
  constructor(
    public loginService: LoginService,
    public translate: TranslateService,
    router: Router,
    private usersService: UsersService,
    private versionService: VersionService
  ){
    this.router = router;
    translate.addLangs(['en', 'it']);
    this.localStorage = localStorage;
    //this.localStorage.setItem("version", environment.version);
    this.loginService.getCurrentUserSync();
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
    //console.log(navigator.language.split("-", 2)[0]);
    //console.log(loginService.getUserCode());
  }

  ngOnInit(): void {
    //check connection every 30s
    this.checkRegularly(30);
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

  checkRegularly(seconds: number) {
    setInterval(() => {
      this.loginService.checkPromise().subscribe(
        res => {
          if(res[0] == "KO"){
            localStorage.removeItem("id_session");
            localStorage.removeItem("id_profile");
            localStorage.removeItem("sangue_username");
            this.router.navigate(['login']);
          }
        }
      );
    }, seconds * 1000);
  }

  /*
  
    LANGUAGE FUNCTIONS

  */
  switchLanguage(lang: string) {
    this.translate.use(lang)
    environment.currentLanguage = lang;
  }

  getManual(userCode: string) {
    let filename: string = "manual-" + userCode + ".pdf";
    let docsPath: string = "assets/docs/";
    window.open(docsPath + filename, "_blank");
  }

  getVersion() {

  }

  setVersion() {

  }
}
