"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const cv_component_1 = require("./cv.component");
const skills_component_1 = require("./skills/skills.component");
const experiences_component_1 = require("./experiences/experiences.component");
const certifications_component_1 = require("./certifications/certifications.component");
const schools_component_1 = require("./schools/schools.component");
const skills_service_1 = require("./skills/skills.service");
const experiences_service_1 = require("./experiences/experiences.service");
const certifications_service_1 = require("./certifications/certifications.service");
const schools_service_1 = require("./schools/schools.service");
let CvModule = class CvModule {
};
CvModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
        ],
        declarations: [
            cv_component_1.CvComponent,
            skills_component_1.SkillsComponent,
            experiences_component_1.ExperiencesComponent,
            certifications_component_1.CertificationsComponent,
            schools_component_1.SchoolsComponent,
        ],
        exports: [
            cv_component_1.CvComponent,
        ],
        providers: [
            skills_service_1.SkillsService,
            experiences_service_1.ExperiencesService,
            certifications_service_1.CertificationsService,
            schools_service_1.SchoolsService,
        ]
    })
], CvModule);
exports.CvModule = CvModule;
//# sourceMappingURL=cv.module.js.map