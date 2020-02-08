import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CvComponent } from "./cv.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { CertificationsComponent } from "./certifications/certifications.component";
import { SchoolsComponent } from "./schools/schools.component";

import { SkillsService } from "./skills/skills.service";
import { ExperiencesService } from "./experiences/experiences.service";
import { CertificationsService } from "./certifications/certifications.service";
import { SchoolsService } from "./schools/schools.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        CvComponent,
        SkillsComponent,
        ExperiencesComponent,
        CertificationsComponent,
        SchoolsComponent,
    ],
    exports: [
        CvComponent,
    ],
    providers: [
        SkillsService,
        ExperiencesService,
        CertificationsService,
        SchoolsService,
    ]
})
export class CvModule { }