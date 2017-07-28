import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import {HttpModule} from "@angular/http";
import { LoginComponent } from './pages/login/login.component';

import { ReactiveFormsModule } from "@angular/forms"; //login page

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule, // login page
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
