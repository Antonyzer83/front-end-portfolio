import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvComponent } from "./cv.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperiencesComponent } from "./experiences/experiences.component";

import { SkillsService } from "./skills/skills.service";
import { ExperiencesService } from "./experiences/experiences.service";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CvComponent,
        SkillsComponent,
        ExperiencesComponent,
    ],
    exports: [
        CvComponent,
    ],
    providers: [
        SkillsService,
        ExperiencesService,
    ]
})
export class CvModule { }