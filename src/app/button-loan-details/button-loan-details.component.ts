import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { environment, OrderRow, Product } from 'src/environments/environment';
import { LoanDetailsDialogComponent } from '../loan-details-dialog/loan-details-dialog.component';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-button-loan-details',
  templateUrl: './button-loan-details.component.html',
  styleUrls: ['./button-loan-details.component.css']
})
export class ButtonLoanDetailsComponent implements OnInit, ICellRendererAngularComp {

  data: any;
  orderRows: OrderRow[] = [];

  dialogRef: any;

  constructor(
    private ordersService: OrdersService,
    private dialog: MatDialog,
  ) { 
  }
  
  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    this.getOrderRow(this.data.id);
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  getOrderRow(id: string) {
    this.ordersService.listOrderRowsPromise(id).subscribe(
      res => {
        if(res[0] == "OK") {
          this.orderRows = res[1];        
        }
        else {
          console.error("Error retrieving OrderRows!");
        }
      }
    );
  }

  ngOnInit(): void {
  }

  openLoanDetailsDialog(event: any) {  
    //this.assignOrderData();
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data: this.data,
      orderRow: this.orderRows[0],
      products: environment.globalProducts
    }

    dialogConfig.width = "50%";
    dialogConfig.maxHeight = "500px";
    
    
    this.dialogRef = this.dialog.open(
      LoanDetailsDialogComponent, 
      dialogConfig
    );
  }

}
