import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community'
import { environment, translations } from 'src/environments/environment';

@Component({
  selector: 'app-cell-checkbox',
  templateUrl: './cell-checkbox.component.html',
  styleUrls: ['./cell-checkbox.component.css']
})
export class CellCheckboxComponent implements ICellRendererAngularComp {
  data: any;
  currentValue: any;
  headerName: string | undefined = '';
  checked: boolean = false;
  isLocked!: boolean;
  constructor(private snackbar: MatSnackBar) { 
  }

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    //console.log(this.data);
    this.currentValue = params.value;
    this.headerName = params.colDef?.headerName;
    this.isLocked = params.data.isRowLocked;
    
    //console.log(params);
    if(this.currentValue == 1)
      this.checked = true;
/*
    switch(this.data.status){
      default:
        case "inviato al fornitore":
          break;
        this.isLocked = false;
        break;
    }
    */
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  onValueChange(event: any) {
    this.snackbar.open(environment.currentLanguage == "it" ? translations.it.UpdateSuccessful : translations.en.UpdateSuccessful);
  }

  openSnackbar() {
    this.snackbar.open(environment.currentLanguage == "it" ? translations.it.UpdateSuccessful : translations.en.UpdateSuccessful);
  }

  toggleCheckbox(event: any): void {
    console.log("To be implemented!");
  }

  getFormattedDate(date: Date): string {
    let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
    
    let day = splitDate[0];
    let month = splitDate[1];
    let year = splitDate[2];

    if(day.length == 1){
      day = "0" + day;
    }
    if(month.length == 1){
      month = "0" + month;
    }
    return year + "-" + month + "-" + day;  
  }
}
