import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {ModalService} from "../../../services/modal.service";
import { BootstrapYearCalendarDataSource } from '../../../../../node_modules/ngx-bootstrap-year-calendar/src/app/model/bootstrap-year-calendar';

@Component({
  selector: 'app-bootstrap-full-calendar',
  templateUrl: './bootstrap-full-calendar.component.html',
  styleUrls: ['./bootstrap-full-calendar.component.scss']
})
export class BootstrapFullCalendarComponent implements OnInit {
    currentYear:number =  moment(new Date).year(); // Always display current year upon first loading
    eventInfo:BootstrapYearCalendarDataSource = new BootstrapYearCalendarDataSource();

    options:Object = { // Indiviudal caldendar initialisation - all data arranged and sent by backend DB
        allowOverlap: true,
        alwaysHalfDay: true,
        contextMenuItems: [
          // {
          //   text: 'View',
          //   click: (e) => {
          //     this.selectedEvent = e.event;
          //     this.refreshView.next();
          //   },
          //   subMenu: []
          // },
          // {
          //   text: 'Edit',
          //   click: (e) => {
          //     this.selectedEvent = e.event;
          //     this.refreshEdit.next();
          //   },
          //   subMenu: []
          // },
          // {
          //   text: 'Delete',
          //   click: (e) => {
          //     this.selectedEvent = e.event;
          //     this.refreshDelete.next();
          //   },
          //   subMenu: []
          // }
        ],
        dataSource:[
            this.eventInfo
            /* {
                id: 0,
                holidayType: 'Annual Leave',
                name: 'Vacation in Japan',
                description: 'Going Japan with my family',
                color: '#48a4f2',
                startDate: new Date(this.currentYear, 2, 16),
                endDate: new Date(this.currentYear, 3, 19)
            }*/
        ],
        disabledDays: [],
        displayWeekNumber: false,
        enableContextMenu: true,
        enableRangeSelection: true,
        language: 'en',
        maxDate: null,
        minDate: null,
        mouseOnDayPopUp: true,
        roundRangeLimits: false,
        startYear: this.currentYear,
        style: 'background'
    };

  constructor(private _modalService:ModalService) {}

  ngOnInit() {
      this.eventInfo.id = 0;
      this.eventInfo.holidayType = 'Annual Leave';
      this.eventInfo.name = 'Vacation in Japan';
      this.eventInfo.description = 'Going Japan with my family!!!!!!';
      this.eventInfo.color = '#48a4f2';
      this.eventInfo.startDate = new Date(this.currentYear, 2, 16);
      this.eventInfo.endDate = new Date(this.currentYear, 3, 19);
  }

  displayLeaveRequestModal(dayRangeObj){
    //Get the dates
    let startDate:string = dayRangeObj.startDate.toLocaleDateString('en-GB');
    let endDate:string = dayRangeObj.endDate.toLocaleDateString('en-GB');
    var event:Object = {
        id: '-1',
        name: '',
        holidayType: '', //addtional attribute
        description: '', // addtional attribute
        color: '',
        startDate: startDate,
        endDate: endDate
    };

    this._modalService.updateData("event-modal", event);
    this._modalService.open("event-modal");
  }
}
