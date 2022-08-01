import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PharmaRegistryComponent } from '../pharma-registry/pharma-registry.component';
//import { PharmaRegistryService } from '../pharma-registry.service';

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
    @Inject(MAT_DIALOG_DATA) public data: AddProductData,
    private pharmaRegistryComponent: PharmaRegistryComponent,
    /*private pharmaRegistryService: PharmaRegistryService*/) { }

  ngOnInit(): void {
    //#TODO
    this.cod = this.data.cod;
    this.des = this.data.des;
  }

  onSubmit() {
    this.pharmaRegistryComponent.addProductParams(this.cod, this.des);
    this.pharmaRegistryComponent.closeDialog();
  }
}
