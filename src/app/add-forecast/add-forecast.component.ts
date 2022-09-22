import { Component, Injectable } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-add-forecast',
  templateUrl: './add-forecast.component.html',
  styleUrls: ['./add-forecast.component.css']
})
@Injectable({providedIn: 'root'})
export class AddForecastComponent{

  anno!: number;
  username = '';
  id_prd = ''; 
  qta!: number;
  note = '';
  qta_approvata: number = 0;
  costo_unitario: number = 0;
  isSubmitted: boolean = false;

  constructor(private dialogRef: MatDialogRef<AddForecastComponent>) {
    this.anno = new Date().getFullYear();
  }

  onSubmit() {
    this.isSubmitted = true;
    this.dialogRef.close(
      {
        anno: this.anno,
        username: this.username,
        id_prd: this.id_prd,
        qta: this.qta,
        note: this.note,
        qta_approvata: this.qta_approvata,
        costo_unitario: this.costo_unitario,
        isSubmitted: this.isSubmitted
      }
    );
  }

}
