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
const forms_1 = require("@angular/forms");
const cv_module_1 = require("./cv/cv.module");
const public_routing_module_1 = require("./public-routing.module");
const public_component_1 = require("./public.component");
const navbar_component_1 = require("./navbar/navbar.component");
const home_component_1 = require("./home/home.component");
const about_component_1 = require("./about/about.component");
const projects_list_component_1 = require("./projects/projects-list.component");
const projects_detail_component_1 = require("./projects/projects-detail.component");
const contact_component_1 = require("./contact/contact.component");
const home_service_1 = require("./home/home.service");
const about_service_1 = require("./about/about.service");
const projects_service_1 = require("./projects/projects.service");
const contact_service_1 = require("./contact/contact.service");
let PublicModule = class PublicModule {
};
PublicModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            cv_module_1.CvModule,
            public_routing_module_1.PublicRoutingModule
        ],
        declarations: [
            public_component_1.PublicComponent,
            navbar_component_1.NavbarComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            projects_list_component_1.ProjectsListComponent,
            projects_detail_component_1.ProjectsDetailComponent,
            contact_component_1.ContactComponent,
        ],
        exports: [
            public_component_1.PublicComponent,
            navbar_component_1.NavbarComponent
        ],
        providers: [
            home_service_1.HomeService,
            about_service_1.AboutService,
            projects_service_1.ProjectsService,
            contact_service_1.ContactService
        ]
    })
], PublicModule);
exports.PublicModule = PublicModule;
//# sourceMappingURL=public.module.js.map