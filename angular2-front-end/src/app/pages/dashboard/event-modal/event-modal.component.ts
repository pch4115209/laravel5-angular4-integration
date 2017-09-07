import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
  modalTitle:string;
  modalID:string;

  currentDate:Date = new Date();

  event:Object = {
    eventId: -1,
    eventName: '',
    eventHolidayType: '',
    eventDescription:'',
    eventColor: '',
    eventStartDate: this.currentDate.toLocaleDateString('en-GB'), // Always display current year upon first loading,
    eventEndDate:  this.currentDate.toLocaleDateString('en-GB') // Always display current year upon first loading,
  };

  constructor() {
    this.modalID = 'event-modal';
  }

  ngOnInit() {
    this.modalTitle = 'Request a Leave';
  }



}
