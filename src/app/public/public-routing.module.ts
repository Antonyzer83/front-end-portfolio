import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {HomeComponent} from "./home/home.component";

const publicRoutes: Routes = [
    { path: '', component: HomeComponent, outlet: 'public'}
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