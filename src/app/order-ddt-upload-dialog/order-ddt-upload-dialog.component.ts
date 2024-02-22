import { Component, Inject, OnInit } from '@angular/core';
import { OrderDdtService } from '../order-ddt.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../snackbar.service';
import { environment, translations } from 'src/environments/environment';
import { DialogConfig } from '@angular/cdk/dialog';
import { AreYouSureOrderDdtDialogComponent } from '../are-you-sure-order-ddt-dialog/are-you-sure-order-ddt-dialog.component';
import { FileDownloadService } from '../file-download.service';

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

  files: any[] = [];
  filebase64: string = "";
  maxFileSize: number = 20 * 1024 * 1024; //max file size is 20 MB

  //table
                                //filename, size, action: download, action: delete
  displayedColumns: string[] = ['filename', 'size', 'download', 'delete'];
  dataSource: any[] = [];

  dialogRef!: any;
  dialog!: MatDialog;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      orderID: string,
      orderNo: string,
      files: any[]
    },
    private orderDdtService: OrderDdtService,
    private snackbarService: SnackbarService,
    private fileDownloadService: FileDownloadService,
    dialog: MatDialog
  ) {
    this.dialog = dialog;
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
    let filenames = [];
    this.errors = "";

    for(var i = 0; i < this.files.length; ++i) {
      filenames.push(this.files[i].filename);
    }

    if (fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
      if(this.selectedFile && this.selectedFile.size > this.maxFileSize) {
        this.errors += "The file you tried to upload exceeds the size limit by " + (this.selectedFile.size - this.maxFileSize) + " B.\n";
        return;
      }

      if(filenames.includes(this.selectedFile!.name)) {
        this.errors += "Another file with the same name exists. Upload failed!\n";
        return;
      }

      if(this.selectedFile && this.isPDF(this.selectedFile)) {
        this.errors = "";
        //encode in filebase64
        try {
          const base64String = await this.toBase64(this.selectedFile!);
          this.filename = this.selectedFile!.name;
          this.filebase64 = base64String;
          this.uploadFile(this.data.orderID, this.filename, this.filebase64);
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
    this.loading = true;
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
          this.files.push({filename: this.filename, filebase64: this.filebase64});
          this.createFileTable();
          this.snackbarService.openSnackbar((environment.currentLanguage == "it" ? translations.it.FileUploadSuccessful : translations.en.FileUploadSuccessful) + "\n(" + this.onlineFilename + ", " + this.remoteFileSize + " B)");
          //console.log(res);
          this.loading = false;
          //this.dialogRef.close();
        }
        else {
          console.error("Error uploading file " + filename + "!");
        }
      }
    );
  }

  doesFileExist(orderID: string) {
    this.loading = true;
    this.files = [];
    this.orderDdtService.getOrderDdtPromise(orderID).subscribe(
      res => {
        if(res[0] == "OK") {
          if(res[1].length > 0) {
            //console.log(res[1][res[1].length - 1]);
            this.remoteFileSize = this.getFileSize(res[1][res[1].length - 1].filebase64);
            this.fileExists = true;
            this.onlineFilename = res[1][res[1].length - 1].filename;
            this.loading = false;
            this.files = res[1]; //TODO: questo posso passarglielo qui, altrimenti faccio due volte il download dei file
            this.createFileTable();
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

  deleteFile(id: string) {
    this.loading = true;
    this.orderDdtService.rmOrderDdtPromise(id).subscribe(
      res => {
        if(res[0] == "OK") {
          //console.log(res);
          for(var i = 0; i < this.files.length; ++i) {
            if(this.files[i].id == id) {
              this.files.splice(i, 1);
              this.createFileTable();
              this.loading = false;
            }
          }
        }
        else {
          console.error("Error deleting orderDDT file with id " + id + "!");
        }
      }
    );
  }

  createFileTable() {
    this.dataSource = [];
    //console.log(this.files)
    for(var i = 0; i < this.files.length; ++i) {
      let fileTableElement = {
        id: this.files[i].id,
        filename: this.files[i].filename,
        size: this.formatBytes(this.getFileSize(this.files[i].filebase64)),
      }
      this.dataSource.push(fileTableElement)
    }
    //console.log(this.dataSource);
  }

  downloadFile(id: string) {
    for(var i = 0; i < this.files.length; ++i) {
      if(this.files[i].id == id) {
        this.fileDownloadService.downloadPdfFromBase64(this.files[i].filename, this.files[i].filebase64);
        this.snackbarService.openSnackbar(environment.currentLanguage == "it" ? translations.it.FileDownloadHasStarted : translations.en.FileDownloadHasStarted);
      }
    }
  }

  openAreYouSureDialog(id: string, filename: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: id,
      filename: filename
    }
    this.dialogRef = this.dialog.open(
      AreYouSureOrderDdtDialogComponent,
      dialogConfig
    );

    this.dialogRef.afterClosed().subscribe(
      (result: { isSubmitted: boolean }) => {
      if(result !== undefined && result.isSubmitted){
        this.deleteFile(id);
      }
    });
  }

  getFileSize(base64String: string): number {
    if(base64String != "")
      return atob(base64String).length;
    return -1;
  }

  formatBytes(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

  print(string: string) {
    console.log(string);
  }
}