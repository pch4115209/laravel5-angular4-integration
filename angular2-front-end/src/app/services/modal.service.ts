import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  constructor() { }

  open(modalID:string){
    (<any>$("#" + modalID)).modal('show');
  }

  hide(modalID:string){
    (<any>$("#" + modalID)).modal('hide');
  }

  /**
   * Fill in the data into the modal with the given ID
   *
   * @param modalID
   * @param data
   */
  updateData(modalID:string, data:any) {
    console.log(data);
    (<any>$("#" + modalID)).find('input[name=eventStartDate]').val(data.startDate);
    (<any>$("#" + modalID)).find('input[name=eventEndDate]').val(data.endDate);
  }
}
