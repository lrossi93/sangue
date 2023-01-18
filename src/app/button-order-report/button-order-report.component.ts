import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { environment } from 'src/environments/environment';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-button-order-report',
  templateUrl: './button-order-report.component.html',
  styleUrls: ['./button-order-report.component.css']
})
export class ButtonOrderReportComponent implements OnInit, ICellRendererAngularComp {
  data: any;
  
  constructor(
    private ordersService: OrdersService
  ) { }

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

  getReport() {
    this.ordersService.getOrderPdfPromise(this.data.id).subscribe(
      (res: any) => {
        if(res[0] == "KO"){
          console.error("Error retrieving report for order " + this.data.id);
        }
        else{
          window.open(environment.reportPath + res[1][0].filename, "_blank");
        }
      }
    );
  }
}
