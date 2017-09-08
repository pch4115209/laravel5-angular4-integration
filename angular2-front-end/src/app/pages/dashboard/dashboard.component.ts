import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import {MdDialog} from "@angular/material";
import { EventModalComponent } from './event-modal/event-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor( private _service:AuthenticationService, public  dialog: MdDialog) {
    this._service.checkCredentials();
  }

  logout(){
    this._service.logout();
  }

  openLeaveRequestDialog(){
    this.dialog.open(EventModalComponent);
  }
}
