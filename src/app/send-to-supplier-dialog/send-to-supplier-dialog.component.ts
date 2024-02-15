import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-send-to-supplier-dialog',
  templateUrl: './send-to-supplier-dialog.component.html',
  styleUrls: ['./send-to-supplier-dialog.component.css']
})
export class SendToSupplierDialogComponent implements OnInit {

  orderId!: string;
  orderNo!: string;
  isValidated!: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: { 
      orderId: string, 
      orderNo: string;
      isValidated: boolean},
    private dialogRef: MatDialogRef<SendToSupplierDialogComponent>
  ) {
    this.orderId = data.orderId;
    this.orderNo = data.orderNo;
    this.isValidated = data.isValidated;
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
