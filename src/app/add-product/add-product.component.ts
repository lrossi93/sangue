import { Component, Injectable } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
@Injectable({providedIn: 'root'})
export class AddProductComponent{

  cod!: UntypedFormControl;
  des!: UntypedFormControl;
  unita!: UntypedFormControl;
  confezionamento!: UntypedFormControl;
  multiplo_confezionamento!: UntypedFormControl;
  multiplo_imballo!: UntypedFormControl;
  attivo!: UntypedFormControl;
  extra!: UntypedFormControl;
  min_ord!: UntypedFormControl;
  valido_da!: UntypedFormControl;
  valido_a!: UntypedFormControl;
  isSubmitted: boolean = false;

  //DateRangePicker
  range = new UntypedFormGroup({
    start: new UntypedFormControl('', Validators.required),
    end: new UntypedFormControl('', Validators.required),
  });
  
  formBuilder!: UntypedFormBuilder;
  constructor(
    private dialogRef: MatDialogRef<AddProductComponent>,
    private _builder: UntypedFormBuilder
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
      valido_da: this.range.controls['start'].value,
      valido_a: this.range.controls['end'].value,
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
