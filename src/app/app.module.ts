import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { RiskPageComponent } from './pages/risk-page/risk-page.component';
import { HelperPageComponent } from './pages/helper-page/helper-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    RulesPageComponent,
    RiskPageComponent,
    HelperPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
