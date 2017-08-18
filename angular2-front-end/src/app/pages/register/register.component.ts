import { Component } from '@angular/core';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service'
import {EmailValidator, EqualPasswordsValidator} from '../../validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss'],
  providers: [AuthenticationService]
})
export class RegisterComponent{

  public form:FormGroup;
  public submitted:boolean = false;
  public email:AbstractControl;
  public passwords:FormGroup;
  public password:AbstractControl;
  public confirm_password:AbstractControl;

  constructor(private fb:FormBuilder, private _service:AuthenticationService) {
    this.form = this.fb.group({
     'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
     'passwords': this.fb.group({
     'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
     'confirm_password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
     }, {validator: EqualPasswordsValidator.validate('password', 'confirm_password')})
     });

     this.email = this.form.controls['email'];
     this.passwords = <FormGroup> this.form.controls['passwords'];
     this.password = this.passwords.controls['password'];
     this.confirm_password = this.passwords.controls['confirm_password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    console.log(values);
    if (this.form.valid) {
      // your code goes here
      //var user:object = values;
      console.log(values);
    }else{
      console.log("Authentication failed...");
    }
  }

}
