import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import objectContaining = jasmine.objectContaining;

@Injectable()
export class AuthenticationService {

  constructor( private _router: Router ){

  }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/login']);
  }

  login(user){
    console.log('Anthentication...');
    if ( user.email === 'admin' && user.password === 'admin123' ) {
      localStorage.setItem("user", user);
      this._router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  checkCredentials(){
    if ( localStorage.getItem("user") === null ){
      this._router.navigate(['/login']);
    }else{
      this._router.navigate(['/dashboard']);
    }
  }
}