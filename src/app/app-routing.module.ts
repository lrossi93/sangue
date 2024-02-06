import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastReportComponent } from './forecast-report/forecast-report.component';
import { ForecastComponent } from './forecast/forecast.component';
import { LoansComponent } from './loans/loans.component';
import { LoginComponent } from './login/login.component';
import { OrderResumeComponent } from './order-resume/order-resume.component';
import { OrderablePeriodComponent } from './orderable-period/orderable-period.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PharmaRegistryComponent } from './pharma-registry/pharma-registry.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginGatewayComponent } from './login-gateway/login-gateway.component';

const routes: Routes = [
  {path: 'login', redirectTo: ''},
  {path: 'welcome', redirectTo: '', pathMatch: 'full'},
  {path: '', component: LoginComponent},
  {path: 'home', component: WelcomeComponent},
  {path: 'pharma-registry', component: PharmaRegistryComponent},
  {path: 'forecast', component: ForecastComponent},
  {path: 'forecast-report', component: ForecastReportComponent},
  {path: 'orders', component: OrdersComponent,},
  {path: 'resume', component: OrderResumeComponent},
  {path: 'order-period', component: OrderablePeriodComponent},
  {path: 'supplies', component: SuppliesComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'login_gateway', component: LoginGatewayComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
