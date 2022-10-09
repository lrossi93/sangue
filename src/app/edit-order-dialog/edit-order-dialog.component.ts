import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order, OrderRow } from 'src/environments/environment';

@Component({
  selector: 'app-edit-order-dialog',
  templateUrl: './edit-order-dialog.component.html',
  styleUrls: ['./edit-order-dialog.component.css']
})
export class EditOrderDialogComponent implements OnInit {
  annoFormControl!: UntypedFormControl;
  dOrdineFormControl!: UntypedFormControl;
  nOrdineFormControl!: UntypedFormControl;
  urgenteFormControl!: UntypedFormControl;
  extraFormControl!: UntypedFormControl;
  validatoFormControl!: UntypedFormControl;
  dValidatoFormControl!: UntypedFormControl;
  noteFormControl!: UntypedFormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      order: Order,
      orderRows: OrderRow[]
    },
    private _builder: UntypedFormBuilder
  ) { 
    this.annoFormControl = _builder.control(data.order.anno, Validators.required);
    this.dOrdineFormControl = _builder.control(data.order.d_ordine, Validators.required);
    this.nOrdineFormControl = _builder.control(data.order.n_ordine, Validators.required);
    this.urgenteFormControl = _builder.control(data.order.b_urgente, Validators.required);//questo sarà un checkbox
    this.extraFormControl = _builder.control(data.order.b_extra, Validators.required);
    this.validatoFormControl = _builder.control(data.order.b_validato, Validators.required);
    this.dValidatoFormControl = _builder.control(data.order.d_validato, Validators.required);
    this.noteFormControl = _builder.control(data.order.note); //not required
  }

  ngOnInit(): void {
  }

}
