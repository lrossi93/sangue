import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    public loginService: LoginService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginService.checkPromise().subscribe(
      res => {
        if(res[0] == "KO"){
          localStorage.removeItem("id_session");
          this.loginService.logged = false;
          this.router.navigate(['login']);
        }
      }
    );
  }
}
