import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-are-you-sure-order-ddt-dialog',
  templateUrl: './are-you-sure-order-ddt-dialog.component.html',
  styleUrls: ['./are-you-sure-order-ddt-dialog.component.css']
})
export class AreYouSureOrderDdtDialogComponent implements OnInit {
  id!: string;
  isSubmitted: boolean = false;
  filename!: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: string, filename: string, isSubmitted: boolean},
    private dialogRef: MatDialogRef<AreYouSureOrderDdtDialogComponent>
  ) { 
    this.id = data.id;
    this.filename = data.filename;
  }

  ngOnInit(): void { }

  onSubmit() {
    this.isSubmitted = true;
    this.dialogRef.close({isSubmitted: this.isSubmitted, id: this.id})
  }
}
