import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderRow } from 'src/environments/environment';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-edit-order-row',
  templateUrl: './edit-order-row.component.html',
  styleUrls: ['./edit-order-row.component.css']
})
export class EditOrderRowComponent implements OnInit {
  isSubmitted: boolean = false;
  orderRow!: OrderRow;

  id!: UntypedFormControl;
  id_ordine!: UntypedFormControl;
  username!: UntypedFormControl;
  n_riga!: UntypedFormControl;
  id_prd!: UntypedFormControl;
  qta!: UntypedFormControl;
  qta_validata!: UntypedFormControl;
  note!: UntypedFormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { 
      orderRow: OrderRow
    },
    private dialogRef: MatDialogRef<EditOrderRowComponent>,
    private _builder: UntypedFormBuilder,
    private loginService: LoginService
  ) {
    this.orderRow = data.orderRow;
    //if(this.loginService.getUserCode() == "220")
    console.log("username: " + data.orderRow.username);
    
    this.username = _builder.control(data.orderRow.username, Validators.required);
    this.n_riga = _builder.control(data.orderRow.n_riga);
    this.id_prd = _builder.control(data.orderRow.id_prd, Validators.required);
    this.qta = _builder.control(data.orderRow.qta, Validators.required);
    //if(this.loginService.getUserCode() == "210")
    this.qta_validata = _builder.control(data.orderRow.qta_validata, Validators.required);
    this.note = _builder.control(data.orderRow.note);
   }

  ngOnInit(): void {
    console.log("EditOrderRowComponent: orderID: " + this.data.orderRow.id_ordine);
    
  }

  assignOrderRowValues() {
    this.orderRow.id = this.data.orderRow.id;
    //this.orderRow.id_ordine = this.data.orderId;
    this.orderRow.id_prd = this.id_prd.value;
    this.orderRow.n_riga = this.n_riga.value;
    this.orderRow.note = this.note.value;
    this.orderRow.qta = this.qta.value;
    this.orderRow.qta_validata = this.qta_validata.value;
    this.orderRow.username = this.username.value;
  }

  onSubmit() {
    this.isSubmitted = true;
    //console.log(this.data.orderRow);
    this.assignOrderRowValues();
    this.dialogRef.close({ orderRow: this.orderRow, isSubmitted: this.isSubmitted });
  }
}
