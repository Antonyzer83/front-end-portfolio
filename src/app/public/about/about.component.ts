import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { AboutService } from "./about.service";
import { About } from "./about";

@Component({
    selector: 'about',
    templateUrl: './app/public/about/about.component.html',
})
export class AboutComponent implements OnInit{

    about: About = null;
    error: string = null;

    constructor(private aboutService: AboutService) { }

    ngOnInit(): void {
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