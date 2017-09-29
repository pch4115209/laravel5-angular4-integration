import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  modals:any[] = [];

  constructor() { }

  add(key:string, modalRef:object){

    for( let i = 0; i < this.modals.length; i++ ){ // remove the all elements with the same keys
      if( key in this.modals[i] )
        this.modals.splice(i,1);
    }

    let modalObj = {};
    modalObj[key] = modalRef;
    return this.modals.push(modalObj);
  }

  get( key:string ){
    for( let i = 0; i < this.modals.length; i++ ){
      if( key in this.modals[i] ){
        return this.modals[i][key];
      }
    }

    return false;
  }

  remove(key:string){
    for( let i = 0; i < this.modals.length; i++ ){
      if( key in this.modals[i]  )
        this.modals.splice(i,1); // remove a particular element
    }

    return false;
  }

}
