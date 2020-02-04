import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { Router} from "@angular/router";

@Component({
    selector: 'public',
    templateUrl: './app/public/public.component.html',
    styleUrls: ['./app/public/public.component.css']
})
export class PublicComponent implements OnInit{

    url: string = '/';

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.events.subscribe((value) => {
            if (location.pathname === '/navbar') {
                this.url = '/';
            } else {
                this.url = '/navbar';
            }
        });
    }

    convertDates(myDate: Date): string {
        let monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        let myNew = monthNames[new Date(myDate).getMonth()] + ' ' + new Date(myDate).getFullYear();
        return myNew;
    }
}