import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent implements  OnInit{
  date:Date;

  constructor() {}

  ngOnInit(){
    this.date = new Date();
  }

}
