import { Component, Inject } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-datepicker-products-dialog',
  templateUrl: './datepicker-products-dialog.component.html',
  styleUrls: ['./datepicker-products-dialog.component.css']
})
export class DatepickerProductsDialogComponent {
  date!: UntypedFormControl;
  formattedDate!: string;
  isSubmitted = false;
  minDate!: Date;
  maxDate!: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      date: string, 
      isValidoDa: boolean, 
      isValidoA: boolean,
      isOrderDate: boolean,
      isValidationDate: boolean,
      isDDTDate: boolean,
      gg_min: string,
      gg_max: string
    },
    private dialogRef: MatDialogRef<DatepickerProductsDialogComponent>,
    public loginService: LoginService
  ) {

    console.log(data);
    
    this.date = new UntypedFormControl((data.date == null ? "1970-01-01" : data.date), Validators.required);
    
    console.log(this.date);

    if(loginService.getUserCode() == '210' && data.isOrderDate){
      var auxDate = new Date();
      this.minDate = new Date(auxDate.getFullYear(), auxDate.getMonth(), parseInt(data.gg_min));
      console.log(this.minDate);
      
      this.maxDate = new Date(auxDate.getFullYear(), auxDate.getMonth(), parseInt(data.gg_max));
      console.log(this.maxDate);
    }
  }

  onDateChange(event: any) {
    //here it's better to keep the date type as Date because it's handled well by the datepicker
    this.date = new UntypedFormControl(new Date(event.value), Validators.required);
    this.formattedDate = this.getFormattedDate(this.date.value); 
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

  onSubmit() {
    this.isSubmitted = true;
    console.log("date: " + this.date.value);
    console.log("formatted date: " + this.formattedDate);
    
    this.dialogRef.close(
      {
        date: this.formattedDate,
        isValidoDa: this.data.isValidoDa,
        isValidoA: this.data.isValidoA,
        isOrderDate: this.data.isOrderDate,
        isValidationDate: this.data.isValidationDate,
        isDDTDate: this.data.isDDTDate,
        isSubmitted: this.isSubmitted
      }
    )
  }
}
