"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const home_component_1 = require("./home/home.component");
const about_component_1 = require("./about/about.component");
const cv_component_1 = require("./cv/cv.component");
const projects_list_component_1 = require("./projects/projects-list.component");
const projects_detail_component_1 = require("./projects/projects-detail.component");
const contact_component_1 = require("./contact/contact.component");
const navbar_component_1 = require("./navbar/navbar.component");
const publicRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'navbar', component: navbar_component_1.NavbarComponent },
    { path: 'apropos', component: about_component_1.AboutComponent },
    { path: 'cv', component: cv_component_1.CvComponent },
    { path: 'projets', component: projects_list_component_1.ProjectsListComponent },
    { path: 'projets/:id', component: projects_detail_component_1.ProjectsDetailComponent },
    { path: 'contact', component: contact_component_1.ContactComponent }
];
let PublicRoutingModule = class PublicRoutingModule {
};
PublicRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(publicRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], PublicRoutingModule);
exports.PublicRoutingModule = PublicRoutingModule;
//# sourceMappingURL=public-routing.module.js.map