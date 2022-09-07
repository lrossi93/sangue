import { Component, Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
@Injectable({providedIn: 'root'})
export class AddProductComponent{

  cod = '';
  des = '';
  isSubmitted: boolean = false;

  constructor(private dialogRef: MatDialogRef<AddProductComponent>) { }

  onSubmit(): void {
    console.log(this.cod);
    console.log(this.des);
    this.isSubmitted = true;
    this.dialogRef.close({cod: this.cod, des: this.des, isSubmitted: this.isSubmitted});
  }
}
