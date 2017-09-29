import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import {ModalService} from "../../../services/modal.service";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css'],
})
export class EventModalComponent implements OnInit {
  /*  Modal Attributes  */
  modalTitle:string;
  modalID:string;

  /* Event Attribute */
  currentDate:Date = new Date();
  eventId =  -1;
  eventName =  'Initial Event';
  eventHolidayType =  'Annual Leave';
  eventDescription = 'Going to China';
  eventColor =  '#C5678e';
  eventStartDate =  this.currentDate;//setHours(0,0,0,0);//.toLocaleDateString('en-GB'), // Always display current year upon first loading,
  eventEndDate =   this.currentDate;//setHours(0,0,0,0);//toLocaleDateString('en-GB') // Always display current year upon first loading,

  constructor(public _modalService:ModalService) {
    this.modalID = 'event-modal';
  }

  ngOnInit() {
    this.modalTitle = 'Request a Leave';
    this.currentDate.setHours(0,0,0,0);
  }

  addEvent(){
    //TODO: Input validation
    //TODO: Data storage at the backend
    let currentDataSources =  jQuery('.calendar').data('calendar').getDataSource();
    currentDataSources.push({ // add new event / leave to the data resources
        holidayType: this.eventHolidayType,
        name: this.eventName,
        description: this.eventDescription,
        color: this.eventColor,
        startDate: this.eventStartDate,
        endDate: this.eventEndDate
    });


    console.log(this.eventStartDate + " to " + this.eventEndDate);

    jQuery('.calendar').data('calendar').setDataSource(currentDataSources);

    let dialogRef = this._modalService.get('newLeaveModal');

    if( dialogRef )
      dialogRef.close();

    this._modalService.remove('newLeaveModal');
  }

}
