import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SendToSupplierDialogComponent } from '../send-to-supplier-dialog/send-to-supplier-dialog.component';

@Component({
  selector: 'app-mark-as-received-dialog',
  templateUrl: './mark-as-received-dialog.component.html',
  styleUrls: ['./mark-as-received-dialog.component.css']
})
export class MarkAsReceivedDialogComponent implements OnInit {
  orderId!: string;
  orderNo!: string;
  isSubmitted: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: { 
      orderId: string, 
      orderNo: string,
      isValidated: boolean
    },
    private dialogRef: MatDialogRef<SendToSupplierDialogComponent>
  ) { 
    this.orderId = this.data.orderId
    this.orderNo = this.data.orderNo 
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true;
    //this.dialogRef.close({isSubmitted: this.isSubmitted});
  }

  onOK() {
    this.dialogRef.close({isSubmitted: this.isSubmitted});
  }

  onCancel() {
    this.dialogRef.close({isCancelled: true});
  }
}
