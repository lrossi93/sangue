import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { DropdownProductsForecastComponent } from './dropdown-products-forecast/dropdown-products-forecast.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownUsersForecastComponent } from './dropdown-users-forecast/dropdown-users-forecast.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule} from '@angular/material/menu';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDateRangePicker } from '@angular/material/datepicker'


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
    ButtonDeleteProductComponent,
    DropdownProductsForecastComponent,
    DropdownUsersForecastComponent,
  ],
  providers: [
    AddProductComponent,
    AreYouSureProductComponent,
    AddForecastComponent,
    AreYouSureForecastComponent,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'it-IT'
    }
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
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatMenuModule,
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
