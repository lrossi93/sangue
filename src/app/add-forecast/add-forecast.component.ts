import { Component, Injectable } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-add-forecast',
  templateUrl: './add-forecast.component.html',
  styleUrls: ['./add-forecast.component.css']
})
@Injectable({providedIn: 'root'})
export class AddForecastComponent{

  anno = '';
  username = '';
  id_prd = ''; 
  qta = '';
  note = '';
  isSubmitted: boolean = false;

  constructor(private dialogRef: MatDialogRef<AddForecastComponent>) { }

  onSubmit() {
    this.isSubmitted = true;
    this.dialogRef.close(
      {
        anno: this.anno,
        username: this.username,
        id_prd: this.id_prd,
        qta: this.qta,
        note: this.note,
        isSubmitted: this.isSubmitted
      }
    );
  }

}
