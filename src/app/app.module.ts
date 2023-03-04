import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CellCheckboxComponent } from './cell-checkbox/cell-checkbox.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ButtonEditOrderComponent } from './button-edit-order/button-edit-order.component';
import { ButtonDeleteOrderComponent } from './button-delete-order/button-delete-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { EditOrderDialogComponent } from './edit-order-dialog/edit-order-dialog.component';
import { DatepickerProductsDialogComponent } from './datepicker-products-dialog/datepicker-products-dialog.component'
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AreYouSureOrderRowComponent } from './are-you-sure-order-row/are-you-sure-order-row.component';
import { AreYouSureOrderComponent } from './are-you-sure-order/are-you-sure-order.component';
import { AddOrderRowComponent } from './add-order-row/add-order-row.component';
import { EditOrderRowComponent } from './edit-order-row/edit-order-row.component';
import { AddOrderDialogComponent } from './add-order-dialog/add-order-dialog.component';
import { DropdownUsersOrdersComponentComponent } from './dropdown-users-orders-component/dropdown-users-orders-component.component';
import { DropdownUsersOrdersComponent } from './dropdown-users-orders/dropdown-users-orders.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OrdersExtraCheckboxComponent } from './orders-extra-checkbox/orders-extra-checkbox.component';
import { OrdersUrgentCheckboxComponent } from './orders-urgent-checkbox/orders-urgent-checkbox.component';
import { OrdersValidatedCheckboxComponent } from './orders-validated-checkbox/orders-validated-checkbox.component';
import { PharmaRegistryActiveCheckboxComponent } from './pharma-registry-active-checkbox/pharma-registry-active-checkbox.component';
import { PharmaRegistryExtraCheckboxComponent } from './pharma-registry-extra-checkbox/pharma-registry-extra-checkbox.component';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { OrderablePeriodComponent } from './orderable-period/orderable-period.component';
import { LoadingCellRendererComponent } from './loading-cell-renderer/loading-cell-renderer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrdersSentCheckboxComponent } from './orders-sent-checkbox/orders-sent-checkbox.component';
import { SendToSupplierDialogComponent } from './send-to-supplier-dialog/send-to-supplier-dialog.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { OrdersToCustomerComponent } from './orders-to-customer/orders-to-customer.component';
import { OrdersToCustomerCheckboxComponent } from './orders-to-customer-checkbox/orders-to-customer-checkbox.component';
import { SendToCustomerDialogComponent } from './send-to-customer-dialog/send-to-customer-dialog.component';
import { ButtonSupplyDetailsComponent } from './button-supply-details/button-supply-details.component';
import { OrdersReceivedCheckboxComponent } from './orders-received-checkbox/orders-received-checkbox.component';
import { MarkAsReceivedDialogComponent } from './mark-as-received-dialog/mark-as-received-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import {MatTooltipModule} from '@angular/material/tooltip';
import { ButtonOrderReportComponent } from './button-order-report/button-order-report.component';
import { ForecastReportComponent } from './forecast-report/forecast-report.component';
import { LoansComponent } from './loans/loans.component';
import { AddLoanDialogComponent } from './add-loan-dialog/add-loan-dialog.component';
import { ButtonLoanDetailsComponent } from './button-loan-details/button-loan-details.component';
import { LoanDetailsDialogComponent } from './loan-details-dialog/loan-details-dialog.component';
import { OrderResumeComponent } from './order-resume/order-resume.component';

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
    CellCheckboxComponent,
    OrdersComponent,
    PageNotFoundComponent,
    ButtonEditOrderComponent,
    ButtonDeleteOrderComponent,
    EditOrderComponent,
    EditOrderDialogComponent,
    DatepickerProductsDialogComponent,
    AreYouSureOrderRowComponent,
    AreYouSureOrderComponent,
    AddOrderRowComponent,
    EditOrderRowComponent,
    AddOrderDialogComponent,
    DropdownUsersOrdersComponentComponent,
    DropdownUsersOrdersComponent,
    OrdersExtraCheckboxComponent,
    OrdersUrgentCheckboxComponent,
    OrdersValidatedCheckboxComponent,
    PharmaRegistryActiveCheckboxComponent,
    PharmaRegistryExtraCheckboxComponent,
    OrderablePeriodComponent,
    LoadingCellRendererComponent,
    OrdersSentCheckboxComponent,
    SendToSupplierDialogComponent,
    SuppliesComponent,
    OrdersToCustomerComponent,
    OrdersToCustomerCheckboxComponent,
    SendToCustomerDialogComponent,
    ButtonSupplyDetailsComponent,
    OrdersReceivedCheckboxComponent,
    MarkAsReceivedDialogComponent,
    ButtonOrderReportComponent,
    ForecastReportComponent,
    LoansComponent,
    AddLoanDialogComponent,
    ButtonLoanDetailsComponent,
    LoanDetailsDialogComponent,
    OrderResumeComponent,

  ],
  providers: [
    AddProductComponent,
    AreYouSureProductComponent,
    AddForecastComponent,
    AreYouSureForecastComponent,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'it-IT'
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 3000
      }
    }
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule,
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
    MatDatepickerModule,
    CommonModule,
    MatCardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}