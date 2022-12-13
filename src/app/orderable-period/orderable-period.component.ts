import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { OrderablePeriodService } from '../orderable-period.service';

@Component({
  selector: 'app-orderable-period',
  templateUrl: './orderable-period.component.html',
  styleUrls: ['./orderable-period.component.css']
})
export class OrderablePeriodComponent implements OnInit {
  date!: UntypedFormControl;
  formattedDate = "";
  formattedStartDate = "";
  formattedEndDate = "";
  isSubmitted = false;
  gg_min = "";
  gg_max = "";
  year = "";
  month = "";

  constructor(
    private orderablePeriodService: OrderablePeriodService
  ) { 
    this.year = new Date().getFullYear().toString();
    console.log("year: " + this.year);
    
    this.month = new Date().getMonth().toString();
    console.log("month: " + this.month);
    
  }

  ngOnInit(): void {
    //this.getOrderPeriod();
    this.setDates();
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  getOrderPeriod() {
    this.orderablePeriodService.getOrderPeriodPromise().subscribe(
      res => {
        if(res[0] == "OK") {
          this.gg_min = res[1].gg_min;
          this.gg_max = res[1].gg_max;          
        }
      }
    );
  }

  setOrderPeriod(min: string, max: string) {
    this.orderablePeriodService.setOrderPeriodPromise(min, max).subscribe(
      res => {
        if(res[0] == "OK"){
          console.log("orderPeriod set!");
          let newDate = new Date();
          this.range.controls['start'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), parseInt(min)));
          this.gg_min = min;
          this.range.controls['end'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), parseInt(max)));
          this.gg_max = max;
        }
        else {
          console.error("Error setting orderPeriod!");
        }
      }
    );
  }

  setDates() {
    this.orderablePeriodService.getOrderPeriodPromise().subscribe(
      res => {
        if(res[0] == "OK") {
          let newDate = new Date();
          console.log(newDate); 
          this.range.controls['start'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), res[1].gg_min));
          this.range.controls['end'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), res[1].gg_max));
        }
      }
    );
  }

  onDateChange(type: string, event: any) {
    //here it's better to keep the date type as Date because it's handled well by the datepicker
    this.date = new UntypedFormControl(new Date(event.value), Validators.required);
    //console.log(this.date.value.toLocaleString('it-IT'));

    //crop the hour part (we don't need it)
    let fullLocaleDate = this.date.value.toLocaleString('it-IT').split(",", 2)[0];
    
    //split where the separators "/" are
    let splittedDate = fullLocaleDate.split("/", 3);
    
    let day = splittedDate[0];
    let month = splittedDate[1];
    let year = splittedDate[2];

    //prepare date to be saved on db
    if(day.length == 1){
      day = "0" + day;
    }
    if(month.length == 1){
      month = "0" + month;
    }
    
    //check day can be what it is
    switch(this.month) {
      case "02":
        if(parseInt(this.year) % 4 == 0 && day > 29){
          day = 29;
        }
        else if(day > 28){
          day = 28;
        }
        break;

      case "04" || "06" || "09" || "11":
        if(day > 30){
          day = 30;
        }
        break;
      case "01" || "03" || "05" || "07" || "08" || "10" || "11" || "12":
        if(day > 31){
          day = 31;
        }
        break;

      default:
        if(day < 1){
          day = 1;
        }
        break;
    }

    this.formattedDate = year + "-" + month + "-" + day;   
    console.log(this.formattedDate);
    if(type == "start") {
      this.formattedStartDate = this.formattedDate;
      this.gg_min = this.formattedDate.split("-")[2];
      console.log("min: " + this.gg_min + "; max: " + this.gg_max);
      this.setOrderPeriod(this.gg_min, this.gg_max);
    }
    else if(type == "end" && this.formattedDate != "1970-01-01") {
      this.formattedEndDate = this.formattedDate;
      this.gg_max = this.formattedDate.split("-")[2];
      console.log("min: " + this.gg_min + "; max: " + this.gg_max);
      this.setOrderPeriod(this.gg_min, this.gg_max);
    }
  }
}
