import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { SchoolsService } from "./schools.service";
import { Schools } from "./schools";

@Component({
    selector: 'schools',
    templateUrl: './app/public/cv/schools/schools.component.html',
})
export class SchoolsComponent implements OnInit{

    schools: Schools[] = null;
    error: string = null;

    constructor(private schoolsService: SchoolsService) { }

    ngOnInit(): void {
        this.schoolsService.getSchools().subscribe(
            (res: Schools[]) => {
                this.schools = res;
                console.log(this.schools);
            },
            (err) => {
                this.error = err;
            }
        );
    }

    convertDates(myDate: Date): string {
        let monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        let myNew = monthNames[new Date(myDate).getMonth()] + ' ' + new Date(myDate).getFullYear();
        return myNew;
    }
}