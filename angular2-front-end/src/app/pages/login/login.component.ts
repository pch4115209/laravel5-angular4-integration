import { Component } from '@angular/core';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service'
import {EmailValidator, EqualPasswordsValidator} from '../../validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})

export class LoginComponent {

  public form:FormGroup;
  public submitted:boolean = false;
  public email:AbstractControl;
  public password:AbstractControl;

  constructor(private fb:FormBuilder, private _service:AuthenticationService) {
    this._service.checkCredentials();

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

  }


  public onSubmit(values:Object):void {
    this.submitted = true;

    if (this.form.valid) {
      // your code goes here
      var user:object = values;
     this._service.login(user);
      console.log(values);
    }else{
      console.log('Authentication failed...');
    }
  }

}
