import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-resume',
  templateUrl: './order-resume.component.html',
  styleUrls: ['./order-resume.component.css']
})

export class OrderResumeComponent implements OnInit {

  loginService!: LoginService
  startDate!: string;
  startFormattedDate!: string;
  endDate!: string;
  endFormattedDate!: string;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  
  constructor(
    loginService: LoginService,
    private ordersService: OrdersService
  ) { 
    this.loginService = loginService;
    let date = new Date();
    this.range.controls['start'].setValue(date);
    this.startDate = this.getFormattedDate(date);
    this.startFormattedDate = new Date(this.startDate).toLocaleString('it-IT').split(",", 2)[0];
    console.log(this.startDate);
    this.range.controls['end'].setValue(date);
    this.endDate = this.getFormattedDate(date);
    this.endFormattedDate = new Date(this.endDate).toLocaleString('it-IT').split(",", 2)[0]
    console.log(this.endDate);
  }

  ngOnInit(): void {
  }

  getFormattedDate(date: Date): string {
    let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
    
    let day = splitDate[0];
    let month = splitDate[1];
    let year = splitDate[2];

    if(day.length == 1){
      day = "0" + day;
    }
    if(month.length == 1){
      month = "0" + month;
    }
    return year + "-" + month + "-" + day;  
  }

  onDateChange(type: string, event: any) {
    //console.log(event);
    switch(type) {
      case "start":
        this.range.controls['start'] = new FormControl(new Date(event.value), Validators.required);
        this.startDate = this.getFormattedDate(new Date(event.value));    
        this.startFormattedDate = new Date(this.startDate).toLocaleString('it-IT').split(",", 2)[0]    
        break;
      case "end":
        if(event.value == null) {
          let newDate = new Date();
          this.range.controls['end'] = new FormControl(new Date(event.value), Validators.required);
        }
        else {
          this.range.controls['end'] = new FormControl(new Date(event.value), Validators.required);
        }
        this.endDate = this.getFormattedDate(new Date(event.value));
        this.endFormattedDate = new Date(this.endDate).toLocaleString('it-IT').split(",", 2)[0]
        break;
    }
  }

  getOrderResume() {
    this.ordersService.getOrderResumePromise(this.startDate, this.endDate).subscribe(
      (res: any) => {
        if(res[0] == "OK") {
          //console.log(res[1]);
          //https://vm-portalmmg.sistemapiemonte.it/collector/
          window.open(environment.reportPath + res[1][0].filename, "_blank");
        }
        else {
          console.error("Error retrieving resume!");
        }
      }
    );
  }
}
