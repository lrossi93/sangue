import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { OrdersService } from '../orders.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-button-supply-report',
  templateUrl: './button-supply-report.component.html',
  styleUrls: ['./button-supply-report.component.css']
})
export class ButtonSupplyReportComponent implements OnInit, ICellRendererAngularComp {

  data: any;

  constructor(
    private suppliesService: OrdersService
  ) { }
  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

  getSupplyReport(orderID: string) {
    this.suppliesService.getSupplyResumePromise(orderID).subscribe(
      res => {
        if(res[0] == "OK") {
          //console.log(res[1][0].filename);
          window.open(environment.reportPath + res[1][0].filename, "_blank");
        }
        else {
          console.error("Error retrieving supply report for order with id: " + orderID + ".");
        }
      }
    );
  }
}
