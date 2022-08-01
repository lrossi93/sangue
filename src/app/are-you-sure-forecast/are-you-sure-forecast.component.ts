import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AreYouSureData } from 'src/environments/environment';
import { ForecastComponent } from '../forecast/forecast.component';

@Component({
  selector: 'app-are-you-sure-forecast',
  templateUrl: './are-you-sure-forecast.component.html',
  styleUrls: ['./are-you-sure-forecast.component.css']
})
@Injectable({providedIn: 'root'})
export class AreYouSureForecastComponent implements OnInit {

  id = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AreYouSureData,
    private forecastComponent: ForecastComponent
  ) { }

  ngOnInit(): void {
    this.id = this.data.id;
  }

  onSubmit() {
    console.log("Deleting forecast with ID: " + this.data.id);
    this.forecastComponent.rmForecast(this.data.id);
    this.forecastComponent.closeDialog();    
  }
}
