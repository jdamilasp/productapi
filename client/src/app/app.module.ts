import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxJsonViewerModule } from 'ngx-json-viewer';
 

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './_guards/auth.guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { HttpService } from './_services/http.service';
import { LoginService } from './_services/login.service';
import { SignupService } from './_services/signup.service';
import { DashboardService } from './_services/dashboard.service';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxJsonViewerModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    AuthGuard,
    LoginService,
    SignupService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
