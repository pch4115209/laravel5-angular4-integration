import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    users: User[];
    title: string;

    constructor( private dataService: DataService ){
        this.title = 'Staff Leave Management';
    }

    ngOnInit() {
       this.dataService.getUsers().subscribe((users) => {
            this.users = users;
        })

        this.title += ' System';
    }
}

interface User{
    id: number,
    name: string,
    username: string,
    email:  string,
    address: string,
    phone: string
}