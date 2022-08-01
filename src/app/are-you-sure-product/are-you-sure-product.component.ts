import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AreYouSureData } from 'src/environments/environment';
import { PharmaRegistryComponent } from '../pharma-registry/pharma-registry.component';

@Component({
  selector: 'app-are-you-sure-product',
  templateUrl: './are-you-sure-product.component.html',
  styleUrls: ['./are-you-sure-product.component.css']
})
@Injectable({providedIn: 'root'})
export class AreYouSureProductComponent implements OnInit {

  id = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AreYouSureData,
    private pharmaRegistryComponent: PharmaRegistryComponent
  ) { }

  ngOnInit(): void {
    this.id = this.data.id;
  }

  onSubmit(){
    //this.id = this.pharmaRegistryComponent.id;
    console.log("Deleting product with ID: " + this.data.id);
    this.pharmaRegistryComponent.rmProduct(this.data.id);
    this.pharmaRegistryComponent.closeDialog();
  }

}
