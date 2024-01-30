import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-are-you-sure-order',
  templateUrl: './are-you-sure-order.component.html',
  styleUrls: ['./are-you-sure-order.component.css']
})
export class AreYouSureOrderComponent implements OnInit {
  orderId!: string;
  orderN!: string;
  isSubmitted: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { 
      id: string,
      n: string;  
    },
    private dialogRef: MatDialogRef<AreYouSureOrderComponent>
  ) { 
    this.orderId = data.id;
    this.orderN = data.n;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true;
    this.dialogRef.close({isSubmitted: this.isSubmitted});
  }
}
