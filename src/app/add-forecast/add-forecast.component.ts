import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForecastComponent } from '../forecast/forecast.component';

export interface AddForecastData {
  anno: string,
  username: string,
  id_prd: string,
  qta: string,
  note: string
}

@Component({
  selector: 'app-add-forecast',
  templateUrl: './add-forecast.component.html',
  styleUrls: ['./add-forecast.component.css']
})
@Injectable({providedIn: 'root'})
export class AddForecastComponent implements OnInit {

  //declare here fields in common with the interface
  anno = '';
  username = '';
  id_prd = ''; 
  qta = '';
  note = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AddForecastData,
    private forecastComponent: ForecastComponent
  ) { }

  ngOnInit(): void {
    this.anno = this.data.anno;
    this.username = this.data.username;
    this.id_prd = this.data.id_prd;
    this.qta = this.data.qta;
    this.note = this.data.note;
  }

  onSubmit() {
    this.forecastComponent.addForecast(this.anno, this.username, this.id_prd, this.qta, this.note);
    this.forecastComponent.closeDialog();
  }

}
