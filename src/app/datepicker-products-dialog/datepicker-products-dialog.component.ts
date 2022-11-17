import { Component, Inject } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-datepicker-products-dialog',
  templateUrl: './datepicker-products-dialog.component.html',
  styleUrls: ['./datepicker-products-dialog.component.css']
})
export class DatepickerProductsDialogComponent {
  date!: UntypedFormControl;
  formattedDate!: string;
  isSubmitted = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      date: string, 
      isValidoDa: boolean, 
      isValidoA: boolean,
      isOrderDate: boolean,
      isValidationDate: boolean,
    },
    private dialogRef: MatDialogRef<DatepickerProductsDialogComponent>
  ) {
    this.date = new UntypedFormControl(data.date, Validators.required);
  }

  onDateChange(event: any) {
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
        isSubmitted: this.isSubmitted
      }
    )
  }
}
