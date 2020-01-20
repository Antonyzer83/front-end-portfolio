import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

const publicRoutes: Routes = [
    { path: '', component: HomeComponent, outlet: 'public' },
    { path: 'apropos', component: AboutComponent, outlet: 'public' }
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