import { Component, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-are-you-sure-forecast',
  templateUrl: './are-you-sure-forecast.component.html',
  styleUrls: ['./are-you-sure-forecast.component.css']
})
@Injectable({providedIn: 'root'})
export class AreYouSureForecastComponent {

  id!: number;
  isSubmitted: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number},
    private dialogRef: MatDialogRef<AreYouSureForecastComponent>
    ) { 
      this.id = this.data.id
    }

  onSubmit() {   
    this.isSubmitted = true;
    this.dialogRef.close(
      {
        id: this.id,
        isSubmitted: this.isSubmitted
      }
    );
  }
}
