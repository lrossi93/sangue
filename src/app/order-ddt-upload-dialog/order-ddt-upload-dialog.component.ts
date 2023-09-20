import { Component, Inject, OnInit } from '@angular/core';
import { OrderDdtService } from '../order-ddt.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../snackbar.service';
import { environment, translations } from 'src/environments/environment';

@Component({
  selector: 'app-order-ddt-upload-dialog',
  templateUrl: './order-ddt-upload-dialog.component.html',
  styleUrls: ['./order-ddt-upload-dialog.component.css']
})
export class OrderDdtUploadDialogComponent implements OnInit {
  progress: number = 0;
  file: any;
  public filename: string = "";
  onlineFilename: string = "";
  errors: string = "";
  fileButton!: HTMLButtonElement;
  fileInput!: HTMLInputElement;
  selectedFile: File | null = null;
  remoteFileSize: number = 0;
  //dialogSelfRef: MatDialogRef;

  fileExists: boolean = false;      //there already is a file online
  isFileLoaded: boolean = false;    //success in uploading the file client-side 
  isFileUploaded: boolean = false;  //success in uploading the file on the server
  loading: boolean = false;

  filebase64: string = "";
  maxFileSize: number = 20 * 1024 * 1024; //max file size is 20 MB

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      orderID: string,
      orderNo: string,
    },
    private orderDdtService: OrderDdtService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<MatDialog>
  ) {
  }

  ngOnInit(): void {
    //this.connectListeners();
    this.doesFileExist(this.data.orderID);
  }

  isPDF(file: File | null): boolean {
    if(file == null)
      return false;
    return file?.type === "application/pdf" || file?.name.toLowerCase().endsWith(".pdf");
  }

  async onFileSelected(event: any): Promise<void> {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
      if(this.selectedFile && this.selectedFile.size > this.maxFileSize) {
        this.errors = "The file you tried to upload exceeds the size limit by " + (this.selectedFile.size - this.maxFileSize) + " B.";
        return;
      }

      if(this.selectedFile && this.isPDF(this.selectedFile)) {
        this.errors = "";
        //encode in filebase64
        try {
          const base64String = await this.toBase64(this.selectedFile!);
          
          this.filename = this.selectedFile!.name;
          this.filebase64 = base64String;

          //console.log("Base64 Encoded File:", this.filebase64);
        } catch (error) {
          console.error("Error encoding file:", error);
        }
        return;
      }
      else {
        this.selectedFile = null;
        this.errors = "File extension not supported: only PDF files are allowed.\n";
      }
    } else {
      this.selectedFile = null;
    }
  }

  toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        //remove "type:application/pdf;base64," to correctly encode string
        const base64String = (reader.result as string).split(",")[1];
        //console.log("toBase64: " + base64String);
        resolve(base64String);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    })
  }

  uploadFile(orderID: string, filename: string, filebase64: string): void {
    //console.log("orderID: " + orderID + ", filename: "+ filename + ", filebase64: " + filebase64);
    this.snackbarService.openSnackbar(environment.currentLanguage == "it" ? translations.it.FileUploadStarted : translations.en.FileUploadStarted);
    this.orderDdtService.setOrderDdtPromise(orderID, filename, filebase64).subscribe(
      res => {
        if(res[0] == "OK") {
          this.onlineFilename = filename;
          this.remoteFileSize = atob(filebase64).length;
          this.isFileLoaded = false;
          this.filebase64 = "";
          this.selectedFile = null;
          this.snackbarService.openSnackbar((environment.currentLanguage == "it" ? translations.it.FileUploadSuccessful : translations.en.FileUploadSuccessful) + "\n(" + this.onlineFilename + ", " + this.remoteFileSize + " B)");
          //console.log(res);
          this.dialogRef.close();
        }
        else {
          console.error("Error uploading file " + filename + "!");
        }
      }
    );
  }

  doesFileExist(orderID: string) {
    this.loading = true;
    this.orderDdtService.getOrderDdtPromise(orderID).subscribe(
      res => {
        if(res[0] == "OK") {
          if(res[1].length > 0) {
            //console.log(res[1][res[1].length - 1]);
            this.remoteFileSize = this.getFileSize(res[1][res[1].length - 1].filebase64);
            this.fileExists = true;
            this.onlineFilename = res[1][res[1].length - 1].filename;
            this.loading = false;
          }
          else {
            this.fileExists = false;
            this.loading = false;
          }
        }
        else {
          console.error("Error checking orderDdt file existence!");
        }
      }
    )
  }

  getFileSize(base64String: string): number {
    if(base64String != "")
      return atob(base64String).length;
    return -1;
  }
/*
  getNormalizedFileSizeString(size: number): string {
    let multiplier = "";
    let b = 1;
    let kb = 1024;
    let mb = 1024 * 1024;
    let gb = 1024 * 1024 * 1024;
    if(size < kb){

    }
    if(size)

    let result = -1;
    switch(multiplier) {
      case "b":
        result = size;
        break;
      case "kb":
        result = Math.ceil(size/kb);
        break;
      case "mb":
        result = Math.ceil(size/mb);
        break;
      case"gb":
        result = Math.ceil(size/gb);
        break;
      default:
        break;
    }
    return result + " "+ unit.toUpperCase();
  }*/
}