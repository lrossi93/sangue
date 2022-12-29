import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SendToSupplierDialogComponent } from '../send-to-supplier-dialog/send-to-supplier-dialog.component';

@Component({
  selector: 'app-send-to-customer-dialog',
  templateUrl: './send-to-customer-dialog.component.html',
  styleUrls: ['./send-to-customer-dialog.component.css']
})
export class SendToCustomerDialogComponent implements OnInit {
  orderId!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { orderId: string },
    private dialogRef: MatDialogRef<SendToSupplierDialogComponent>
  ) {
    this.orderId = data.orderId;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dialogRef.close({isSubmitted: true});
  }

  onCancel() {
    this.dialogRef.close({isCancelled: true});
  }
}
