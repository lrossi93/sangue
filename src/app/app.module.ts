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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { AreYouSureProductComponent } from './are-you-sure-product/are-you-sure-product.component';
import { AreYouSureForecastComponent } from './are-you-sure-forecast/are-you-sure-forecast.component';
import { AddForecastComponent } from './add-forecast/add-forecast.component'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatInputComponent } from './mat-input/mat-input.component';
import { ButtonDeleteForecastComponent } from './button-delete-forecast/button-delete-forecast.component';
import { ButtonDeleteProductComponent } from './button-delete-product/button-delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggedComponent,
    LoginComponent,
    WelcomeComponent,
    HomeComponent,
    PharmaRegistryComponent,
    ForecastComponent,
    AddProductComponent,
    AreYouSureProductComponent,
    AreYouSureForecastComponent,
    AddForecastComponent,
    MatInputComponent,
    ButtonDeleteForecastComponent,
    ButtonDeleteProductComponent
  ],
  providers: [
    AddProductComponent,
    AreYouSureProductComponent,
    AddForecastComponent,
    AreYouSureForecastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
