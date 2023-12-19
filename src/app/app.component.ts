import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment, User } from 'src/environments/environment';
import { LoginService } from './login.service';
import { UsersService } from './users.service';
import { VersionService } from './version.service';
import { SharedService } from './shared.service';


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
  venues: User[] = [];
  
  constructor(
    public loginService: LoginService,
    public translate: TranslateService,
    router: Router,
    private usersService: UsersService,
    private versionService: VersionService,
    public sharedService: SharedService,
    private elementRef: ElementRef,
    private renderer: Renderer2
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
          if(localStorage.getItem("id_session") != null && res[0] == "KO"){
            localStorage.removeItem("id_session");
            localStorage.removeItem("id_profile");
            localStorage.removeItem("sangue_username");
            localStorage.removeItem("cf");
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

  changeVenue(venue: string) {
    //console.log("Changing venue to: " + venue);
    //console.log("userId: " + this.getUserIdByClient(venue));
    //console.log("id_session: " + this.localStorage.getItem("id_session"));
    this.loginGateway(this.getUserIdByClient(venue)!);
  }

  getUserIdByClient(client: string): string | undefined {
    let venues = this.sharedService.getVenues();
    for(var i = 0; i < venues.length; ++i) {
      //console.log(this.sharedService.getVenues()[i])
      if(venues[i].client == client) {
        return venues[i].id;
      }
    }
    return undefined;
  }

  loginGateway(sangue_username: string) {
    this.loginService.loginGatewayPromise(sangue_username).subscribe(
      res => {
        //console.log(res)
        if(res[0] == "OK") {
          let currentVenue: User;
          let venues = this.sharedService.getVenues();
          for(var i = 0; i < venues.length; ++i) {
            if(venues[i].id == sangue_username){
              currentVenue = venues[i];
            }
          }
          this.localStorage.setItem("sangue_username", sangue_username);
          this.localStorage.setItem("sangue_client", currentVenue!.client);
          this.localStorage.setItem("id_session", res[1]);
          this.localStorage.setItem("id_profile", res[2]);
          this.router.navigate(['/login']);
        }
        else {
          console.error("Error while changing venue!");
        }
      }
    );
  }
}
