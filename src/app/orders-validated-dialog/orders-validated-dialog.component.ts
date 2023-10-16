import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/environments/environment';

@Component({
  selector: 'app-orders-validated-dialog',
  templateUrl: './orders-validated-dialog.component.html',
  styleUrls: ['./orders-validated-dialog.component.css']
})
export class OrdersValidatedDialogComponent implements OnInit {
  isSubmitted: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      order: Order
    },
    private dialogRef: MatDialogRef<OrdersValidatedDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true;
    this.dialogRef.close({
      order: this.data.order,
      isValidated: this.isSubmitted
    });
  }

  onCancel() {

  }

}
