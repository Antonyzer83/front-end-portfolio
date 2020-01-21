import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CvComponent } from "./cv/cv.component";

const publicRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'apropos', component: AboutComponent },
    { path: 'cv', component: CvComponent }
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