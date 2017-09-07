import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})

export class FullCalendarComponent implements OnInit {

  calendarOptions:Object = {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'listYear,month,agendaWeek,agendaDay'
    },
    defaultView: 'month',
    selectable: true,
    slotDuration: '01:00:00',
    fixedWeekCount : true,
    defaultDate: '2016-09-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    businessHours: [ // specify an array instead
      {
        dow: [ 1, 2, 3 ], // Monday, Tuesday, Wednesday
        start: '08:00', // 8am
        end: '18:00' // 6pm
      },
      {
        dow: [ 4, 5 ], // Thursday, Friday
        start: '10:00', // 10am
        end: '16:00' // 4pm
      }
    ],
    events: [
      {
        title: 'All Day Event',
        start: '2016-09-01'
      },
      {
        title: 'Long Event',
        start: '2016-09-07',
        end: '2016-09-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-09-11',
        end: '2016-09-13'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T10:30:00',
        end: '2016-09-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2016-09-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2016-09-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2016-09-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2016-09-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-09-28'
      }
    ],
    eventClick: function(calEvent, jsEvent, view) {

      alert('Event: ' + calEvent.title);
      alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
      alert('View: ' + view.name);

      // change the border color just for fun
      $(this).css('border-color', 'red');

    },
    select: function(start, end, jsEvent, view){
      alert(  moment(start).format('DD/MM/YYYY hh:mm:ss') + ' to ' + moment(end).format('DD/MM/YYYY hh:mm:ss') );
    }
  };

  constructor() {}

  ngOnInit() {

  }
}
