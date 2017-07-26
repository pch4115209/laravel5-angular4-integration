import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data service connected');
  }

  getUsers(){
    return this.http.get('http://api.staffleavemanagement.com.au/api/test')
                .map(res => res.json());
  }
}
