import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'cv',
    templateUrl: './app/public/cv/cv.component.html',
    styleUrls: [
        './app/public/cv/cv.component.css',
        './app/shared/button.component.css',
    ],
})
export class CvComponent implements OnInit {

    constructor(private titleService: Title) { }

    ngOnInit(): void {
        this.titleService.setTitle("CASTANER Antony | CV");
    }
}