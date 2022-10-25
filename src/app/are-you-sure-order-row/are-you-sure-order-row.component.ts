import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-are-you-sure-order-row',
  templateUrl: './are-you-sure-order-row.component.html',
  styleUrls: ['./are-you-sure-order-row.component.css']
})
export class AreYouSureOrderRowComponent implements OnInit {
  id!: number;
  isSubmitted: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number, isSubmitted: boolean},
    private dialogRef: MatDialogRef<AreYouSureOrderRowComponent>
  ) { 
    this.id = data.id;
  }

  ngOnInit(): void { }
  
  onSubmit() {
    this.isSubmitted = true;
    this.dialogRef.close({isSubmitted: this.isSubmitted});
  }
}
