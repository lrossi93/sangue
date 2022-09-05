import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-are-you-sure-product',
  templateUrl: './are-you-sure-product.component.html',
  styleUrls: ['./are-you-sure-product.component.css']
})
@Injectable({providedIn: 'root'})
export class AreYouSureProductComponent implements OnInit {

  id!: number;
  isSubmitted: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number, isSubmitted: boolean},
    private dialogRef: MatDialogRef<AreYouSureProductComponent>
  ) {
    this.id = this.data.id;
    this.isSubmitted = false;
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.data.isSubmitted = true;
    console.log("onSubmit: " + this.data.isSubmitted);
    this.dialogRef.close({id: this.id, isSubmitted: this.data.isSubmitted});
  }
}
