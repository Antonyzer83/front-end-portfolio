import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ExperiencesService } from "./experiences.service";
import { Experiences } from "./experiences";

@Component({
    selector: 'experiences',
    templateUrl: './app/public/cv/experiences/experiences.component.html',
})
export class ExperiencesComponent implements OnInit {

    experiences: Experiences[] = null;
    error: string = null;

    constructor(private experiencesService: ExperiencesService) { }

    ngOnInit(): void {
        this.experiencesService.getExperiences().subscribe(
            (res: Experiences[]) => {
                this.experiences = res;
                console.log(this.experiences);
            },
            (err) => {
                this.error = err;
            }
        );
    }
}