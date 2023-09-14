import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { OrderDdtService } from '../order-ddt.service';
import { OrderDdtUploadDialogComponent } from '../order-ddt-upload-dialog/order-ddt-upload-dialog.component';
import { SnackbarService } from '../snackbar.service';
import { FileDownloadService } from '../file-download.service';
import { environment, translations } from 'src/environments/environment';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-ddt-order-actions',
  templateUrl: './ddt-order-actions.component.html',
  styleUrls: ['./ddt-order-actions.component.css']
})
export class DdtOrderActionsComponent implements OnInit, ICellRendererAngularComp{
  data: any; 
  documentIsPresent: boolean = false;
  stateIsValid: boolean = false;
  fileExists: boolean = false;
  uploadEnabled: boolean = false;

  dialogRef: any;
  dialog: MatDialog;
  
  constructor(
    dialog: MatDialog,
    private orderDdtService: OrderDdtService,
    private snackbarService: SnackbarService,
    private fileDownloadService: FileDownloadService,
    public loginService: LoginService,
  ) {
    this.dialog = dialog;
  }
  
  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    //this.print(this.data);
    this.isStateValid();
    this.doesFileExist(this.data.id);
  }
  
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

  getOrderDdt(orderID: string) {
    this.orderDdtService.getOrderDdtPromise(orderID).subscribe(
      res => {
        if(res[0] == "OK") {
          //console.log(res[1][res[1].length -1]); //take last file uploaded, with index res[1].length -1
          let filename = res[1][res[1].length -1].filename;
          let filebase64 = res[1][res[1].length -1].filebase64;
          //console.log("filename: " + filename);
          //console.log("filebase64: " + filebase64);
          this.fileDownloadService.downloadPdfFromBase64(filename, filebase64);
          this.snackbarService.openSnackbar(environment.currentLanguage == "it" ? translations.it.FileDownloadHasStarted : translations.en.FileDownloadHasStarted);
        }
        else {
          console.error("Error retrieving orderDDT document for order with ID = " + orderID + "!");
        }
      }
    );
  }

  doesFileExist(orderID: string) {
    this.orderDdtService.getOrderDdtPromise(orderID).subscribe(
      res => {
        if(res[0] == "OK") {
          if(res[1].length > 0) {
            this.fileExists = true;
          }
        }
        else {
          console.error("Error checking orderDdt file existence!");
        }
      }
    )
  }

  //to be called when the dialog closes
  /*setOrderDDT(orderID: string, filename: string, filebase64: string) {
    this.orderDdtService.setOrderDdtPromise(orderID, filename, filebase64).subscribe(
      res => {
        if(res[0] == "OK") {
          console.log(res);
        }
        else {
          console.error("Error uploading orderDDT document for order with ID = " + orderID + "!");
        }
      }
    );
  }*/

  isStateValid() {
    switch(this.data.status){
      
      case "inviato al cliente":
      
      case "ricevuto":
        this.uploadEnabled = true;
        break;

      default:
        break;
    }
  }

  openEditOrderDialog(event: Event) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      orderID: this.data.id,
      orderNo: this.data.n_ordine,
    }

    dialogConfig.maxWidth = "50%";
    dialogConfig.maxHeight = "50%";

    dialogConfig.disableClose = false;
    this.dialogRef = this.dialog.open(
      OrderDdtUploadDialogComponent, 
      dialogConfig
    );
  }


}
