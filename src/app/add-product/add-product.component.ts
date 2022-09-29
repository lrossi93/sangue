import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
@Injectable({providedIn: 'root'})
export class AddProductComponent{

  cod!: FormControl;
  des!: FormControl;
  unita!: FormControl;
  confezionamento!: FormControl;
  multiplo_confezionamento!: FormControl;
  multiplo_imballo!: FormControl;
  attivo!: FormControl;
  extra!: FormControl;
  min_ord!: FormControl;
  valido_da!: FormControl;
  valido_a!: FormControl;
  isSubmitted: boolean = false;
  
  formBuilder!: FormBuilder;
  constructor(
    private dialogRef: MatDialogRef<AddProductComponent>,
    private _builder: FormBuilder
  ) { 
    //formBuilder configuration
    this.cod = _builder.control('', Validators.required);
    this.des = _builder.control('', Validators.required);
    this.unita = _builder.control('', Validators.required);
    this.confezionamento = _builder.control('');
    this.multiplo_confezionamento = _builder.control('');
    this.multiplo_imballo = _builder.control('');
    this.attivo = _builder.control(false);
    this.extra = _builder.control(false);
    this.min_ord = _builder.control('');
    this.valido_da = _builder.control('');
    this.valido_a = _builder.control('');
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.dialogRef.close({
      cod: this.cod.value, 
      des: this.des.value,
      unita: this.unita.value,
      confezionamento: this.confezionamento.value,
      multiplo_confezionamento: this.multiplo_confezionamento.value,
      multiplo_imballo: this.multiplo_imballo.value,
      attivo: this.attivo.value ? 1 : 0,
      extra: this.extra.value ? 1 : 0,
      min_ord: this.min_ord.value,
      valido_da: this.valido_da.value,
      valido_a: this.valido_a.value,
      isSubmitted: this.isSubmitted});
  }

  toggleAttivo(): void {
    this.attivo.value ? this.attivo = this._builder.control(false) : this.attivo = this._builder.control(true);
  }

  toggleExtra(): void {
    this.extra.value ? this.extra = this._builder.control(false) : this.extra = this._builder.control(true);
  }

  getData(): void {
    console.log(
      "cod: " + this.cod.value +
      " des: " + this.des.value +
      " attivo: " + this.attivo.value + 
      " extra: " + this.extra.value
    );
  }
}
