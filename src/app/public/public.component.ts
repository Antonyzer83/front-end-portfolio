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
}