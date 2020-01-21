import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvComponent } from "./cv.component";
import { SkillsComponent } from "./skills/skills.component";

import { SkillsService } from "./skills/skills.service";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CvComponent,
        SkillsComponent,
    ],
    exports: [
        CvComponent,
    ],
    providers: [
        SkillsService,
    ]
})
export class CvModule { }