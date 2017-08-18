import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import {HttpModule} from "@angular/http";
import * as $ from 'jquery';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component'; //login form
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthenticationService } from './services/authentication.service';
import { FullCalendarComponent } from './pages/dashboard/full-calendar/full-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    FullCalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
