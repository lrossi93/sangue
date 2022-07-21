import { Component, Injectable, OnInit } from '@angular/core';
import { PharmaRegistryComponent } from '../pharma-registry/pharma-registry.component';
//import { PharmaRegistryService } from '../pharma-registry.service';

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
    private pharmaRegistryComponent: PharmaRegistryComponent,
    /*private pharmaRegistryService: PharmaRegistryService*/) { }

  ngOnInit(): void {
    //#TODO
  }

  onSubmit(){
    this.pharmaRegistryComponent.addProductParams(this.cod, this.des);
    this.pharmaRegistryComponent.closeDialog();
  }
}
