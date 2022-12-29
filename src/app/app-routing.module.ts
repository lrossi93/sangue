import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
//import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderablePeriodComponent } from './orderable-period/orderable-period.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PharmaRegistryComponent } from './pharma-registry/pharma-registry.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  //{path: '', component: HomeComponent},
  {path: 'login', redirectTo: '', pathMatch: 'full'},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: '', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'pharma-registry', component: PharmaRegistryComponent},
  {path: 'forecast', component: ForecastComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'orderable-period', component: OrderablePeriodComponent},
  {path: 'supplies', component: SuppliesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
