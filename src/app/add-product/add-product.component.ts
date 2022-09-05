import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface AddProductData{
  cod: string,
  des: string
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
@Injectable({providedIn: 'root'})
export class AddProductComponent implements OnInit {

  cod = '';
  des = '';

  constructor(
    private dialogRef: MatDialogRef<AddProductComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.cod);
    console.log(this.des);
    this.dialogRef.close({cod: this.cod, des: this.des, isSubmitted: true});
  }

  ngOnDestroy(): void {
    this.dialogRef.close({cod: this.cod, des: this.des, isSubmitted: false});
  }
}
