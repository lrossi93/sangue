import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public loginService: LoginService, public router: Router) {}

  ngOnInit(): void {
    console.log("logged: " + this.loginService.isLogged());
    if(!this.loginService.isLogged()){
      //this.router.navigate(['/login']);
    }
  }

}
