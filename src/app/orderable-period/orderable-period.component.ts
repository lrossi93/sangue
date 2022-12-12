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

  constructor(
    private orderablePeriodService: OrderablePeriodService
  ) { 
  }

  ngOnInit(): void {
    this.getOrderPeriod();
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  getOrderPeriod() {
    this.orderablePeriodService.getOrderPeriodPromise().subscribe(
      res => {
        if(res[0] == "OK") {
          console.log(res);
        }
      }
    );
  }

  onDateChange(type: string, event: any) {
    //here it's better to keep the date type as Date because it's handled well by the datepicker
    this.date = new UntypedFormControl(new Date(event.value), Validators.required);
    console.log(this.date.value.toLocaleString('it-IT'));

    //crop the hour part (we don't need it)
    let fullLocaleDate = this.date.value.toLocaleString('it-IT').split(",", 2)[0];
    console.log(fullLocaleDate);
    
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
    
    this.formattedDate = year + "-" + month + "-" + day;   
    console.log(this.formattedDate);
    if(type == "start")
      this.formattedStartDate = this.formattedDate;
    else if(type == "end")
      this.formattedEndDate = this.formattedDate;
  }


  onSubmit() {
    this.isSubmitted = true;
    console.log("date: " + this.date.value);
    console.log("formatted date: " + this.formattedDate);
    //TODO: send data to db
  }
}
