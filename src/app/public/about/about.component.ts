import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { AboutService } from "./about.service";
import { About } from "./about";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'about',
    templateUrl: './app/public/about/about.component.html',
    styleUrls: [
        './app/public/about/about.component.css',
        './app/shared/button.component.css',
    ],
})
export class AboutComponent implements OnInit{

    about: About = null;
    error: string = null;

    constructor(private aboutService: AboutService, private titleService: Title) { }

    ngOnInit(): void {
        this.titleService.setTitle("CASTANER Antony | A Propos");
        this.aboutService.getAbout().subscribe(
            (res: About[]) => {
               this.about = res;
               console.log(this.about);
            },
            (err) => {
                this.error = err;
            }
        );
    }
}