import { Component, OnInit } from '@angular/core';
import { ILoadingCellRendererAngularComp } from 'ag-grid-angular';
import { ILoadingCellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-loading-cell-renderer',
  templateUrl: './loading-cell-renderer.component.html',
  styleUrls: ['./loading-cell-renderer.component.css']
})
export class LoadingCellRendererComponent implements OnInit, ILoadingCellRendererAngularComp {
  public params!: ILoadingCellRendererParams;

  constructor() { }

  agInit(params: ILoadingCellRendererParams<any>): void {
    this.params;
  }

  ngOnInit(): void {
  }

}
