import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { SkillsService } from "./skills.service";
import { Skills } from "./skills";

@Component({
    selector: 'skills',
    templateUrl: './app/public/cv/skills/skills.component.html',
    styleUrls: [
        './app/public/cv/skills/skills.component.css'
    ],
})
export class SkillsComponent implements OnInit {

    skills: Skills[] = null;
    error: string = null;

    constructor(private skillsService: SkillsService) { }

    ngOnInit(): void {
        this.skillsService.getSkills().subscribe(
            (res: Skills[]) => {
                this.skills = res;
                console.log(this.skills);
            },
            (err) => {
                this.error = err;
            }
        );
    }
}