import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { RiskPageComponent } from './pages/risk-page/risk-page.component';
import { HelperPageComponent } from './pages/helper-page/helper-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'rules', component: RulesPageComponent },
  { path: 'risk', component: RiskPageComponent },
  { path: 'helper', component: HelperPageComponent },
  { path: 'register', component: RegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
