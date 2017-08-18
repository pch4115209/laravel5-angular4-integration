import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor( private _service:AuthenticationService ) {
    this._service.checkCredentials();
  }

  logout(){
    this._service.logout();
  }

}
