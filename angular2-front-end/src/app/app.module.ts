import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*  Angular Material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
/* END  */
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { AuthenticationService } from './services/authentication.service';
import { ModalService } from './services/modal.service';
import {HttpModule} from '@angular/http';
import * as $ from 'jquery';
import * as moment from 'moment';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component'; // login form
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar'; // full calendar io
import { FullCalendarComponent } from './pages/dashboard/full-calendar/full-calendar.component';
import { BootstrapYearCalendarComponent } from 'ngx-bootstrap-year-calendar/src/app/bootstrap-year-calendar.component';
import { BootstrapFullCalendarComponent } from './pages/dashboard/bootstrap-full-calendar/bootstrap-full-calendar.component';
import { EventModalComponent } from './pages/dashboard/event-modal/event-modal.component';
import { DatepickerComponent } from './form-components/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    FullCalendarComponent,
    CalendarComponent, // full calendar wrapper
    BootstrapFullCalendarComponent,
    BootstrapYearCalendarComponent,// bootstrap full calendar wrapper
    EventModalComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    DataService,
    AuthenticationService,
    ModalService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
