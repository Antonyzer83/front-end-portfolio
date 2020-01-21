import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvComponent } from "./cv.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { CertificationsComponent } from "./certifications/certifications.component";

import { SkillsService } from "./skills/skills.service";
import { ExperiencesService } from "./experiences/experiences.service";
import { CertificationsService } from "./certifications/certifications.service";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CvComponent,
        SkillsComponent,
        ExperiencesComponent,
        CertificationsComponent,
    ],
    exports: [
        CvComponent,
    ],
    providers: [
        SkillsService,
        ExperiencesService,
        CertificationsService,
    ]
})
export class CvModule { }