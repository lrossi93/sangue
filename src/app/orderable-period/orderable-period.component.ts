import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment, translations } from 'src/environments/environment';
import { OrderablePeriodService } from '../orderable-period.service';
import { SnackbarService } from '../snackbar.service';

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

  currentStartDate!: Date;
  currentEndDate!: Date;

  constructor(
    private orderablePeriodService: OrderablePeriodService,
    private snackbarService: SnackbarService
  ) { 
    this.year = new Date().getFullYear().toString();
    this.month = new Date().getMonth().toString();
  }

  ngOnInit(): void {
    this.getDates();
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  setOrderPeriod(min: string, max: string) {
    this.orderablePeriodService.setOrderPeriodPromise(min, max).subscribe(
      res => {
        if(res[0] == "OK"){
          //console.log("orderPeriod set!");
          let newDate = new Date();
          this.range.controls['start'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), parseInt(min)));
          this.gg_min = min;
          this.range.controls['end'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), parseInt(max)));
          this.gg_max = max;
          this.snackbarService.onUpdate();
        }
        else {
          console.error("Error setting orderPeriod!");
        }
      }
    );
  }

  getDates() {
    this.orderablePeriodService.getOrderPeriodPromise().subscribe(
      res => {
        if(res[0] == "OK") {
          let newDate = new Date();
          //console.log(newDate); 
          this.range.controls['start'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), res[1].gg_min));
          this.range.controls['end'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), res[1].gg_max));
        }
        else{
          console.error("Error getting orderPeriod!");
        }
      }
    );
  }

  onDateChange(type: string, event: any) {
   let fullLocaleDate = "";
    //here it's better to keep the date type as Date because it's handled well by the datepicker
    switch(type) {
      case "start":
        this.range.controls['start'] = new FormControl(new Date(event.value), Validators.required);
        fullLocaleDate = this.range.controls.start.value!.toLocaleString('it-IT').split(",", 2)[0];        
        break;
      case "end":
        if(event.value == null) {
          let newDate = new Date();
          this.range.controls['end'] = new FormControl(new Date(newDate.getFullYear(), newDate.getMonth(), parseInt(this.gg_max)), Validators.required);
        }
        else
          this.range.controls['end'] = new FormControl(new Date(event.value), Validators.required);
        fullLocaleDate = this.range.controls.end.value!.toLocaleString('it-IT').split(",", 2)[0];
        break;
    }

    //split where the separators "/" are
    let splittedDate = fullLocaleDate.split("/", 3);
    
    let day = splittedDate[0];
    let month = splittedDate[1];
    let year = splittedDate[2];

    //prepare date to be saved on db
    if(month.length == 1){
      month = "0" + month;
    }
    
    //check day is formatted correctly
    day = this.checkDay(parseInt(day));

    this.formattedDate = year + "-" + month + "-" + day;   
    //console.log(this.formattedDate);
    
    if(type == "start") {
      this.formattedStartDate = this.formattedDate;
      this.gg_min = this.formattedDate.split("-")[2];
      if(this.gg_min > this.gg_max){
        this.gg_max = this.gg_min;
      }
      this.setOrderPeriod(this.gg_min, this.gg_max);
    }
    else if(type == "end" && this.formattedDate != "1970-01-01") {
      this.formattedEndDate = this.formattedDate;
      this.gg_max = this.formattedDate.split("-")[2];
      this.setOrderPeriod(this.gg_min, this.gg_max);
    }
  }

  checkDay(day: number): string {
    switch(this.month) {
      case "02":
        if(parseInt(this.year) % 4 == 0 && day > 29){
          day = 29;
        }
        else if((day) > 28){
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

    if(day.toString().length == 1){
      return "0" + day;
    }
    else 
      return day.toString();
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
}
