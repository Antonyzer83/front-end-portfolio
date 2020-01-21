import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CvComponent } from "./cv/cv.component";
import { ProjectsListComponent } from "./projects/projects-list.component";
import { ProjectsDetailComponent } from "./projects/projects-detail.component";
import { ContactComponent } from "./contact/contact.component";

const publicRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'apropos', component: AboutComponent },
    { path: 'cv', component: CvComponent },
    { path: 'projets', component: ProjectsListComponent },
    { path: 'projets/:id', component: ProjectsDetailComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule {}