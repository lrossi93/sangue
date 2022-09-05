import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PharmaRegistryComponent } from './pharma-registry/pharma-registry.component';
import { SamplePRegistryComponent } from './sample-p-registry/sample-p-registry.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'pharma-registry', component: PharmaRegistryComponent},
  {path: 'forecast', component: ForecastComponent},
  {path: 'sample-p-reg', component: SamplePRegistryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
