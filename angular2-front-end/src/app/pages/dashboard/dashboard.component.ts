import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import {MdDialog} from "@angular/material";
import { EventModalComponent } from './event-modal/event-modal.component';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor( private _service:AuthenticationService, public  dialog: MdDialog, public _modalService:ModalService) {
    this._service.checkCredentials();
  }

  logout(){
    this._service.logout();
  }

  openLeaveRequestDialog(){
    let dialogRef = this.dialog.open(EventModalComponent);
    this._modalService.add('newLeaveModal', dialogRef);
  }

}
