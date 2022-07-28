import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedComponent } from './logged/logged.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { PharmaRegistryComponent } from './pharma-registry/pharma-registry.component';
import { AgGridModule } from 'ag-grid-angular';
import { ForecastComponent } from './forecast/forecast.component';
import { ButtonCellComponent } from './button-cell/button-cell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { AreYouSureProductComponent } from './are-you-sure-product/are-you-sure-product.component';
import { AreYouSureForecastComponent } from './are-you-sure-forecast/are-you-sure-forecast.component'

@NgModule({
  declarations: [
    AppComponent,
    LoggedComponent,
    LoginComponent,
    WelcomeComponent,
    HomeComponent,
    PharmaRegistryComponent,
    ForecastComponent,
    ButtonCellComponent,
    AddProductComponent,
    AreYouSureProductComponent,
    AreYouSureForecastComponent
  ],
  providers: [
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
