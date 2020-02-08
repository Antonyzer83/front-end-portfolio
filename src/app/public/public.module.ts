import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { CvModule } from "./cv/cv.module";

import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent } from "./public.component";

import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsListComponent } from "./projects/projects-list.component";
import { ProjectsDetailComponent } from "./projects/projects-detail.component";
import { ContactComponent } from "./contact/contact.component";

import { HomeService } from "./home/home.service";
import { AboutService } from "./about/about.service";
import { ProjectsService } from "./projects/projects.service";
import { ContactService } from "./contact/contact.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CvModule,
        PublicRoutingModule
    ],
    declarations: [
        PublicComponent,
        NavbarComponent,
        HomeComponent,
        AboutComponent,
        ProjectsListComponent,
        ProjectsDetailComponent,
        ContactComponent,
    ],
    exports: [
        PublicComponent,
        NavbarComponent
    ],
    providers: [
        HomeService,
        AboutService,
        ProjectsService,
        ContactService
    ]
})
export class PublicModule { }