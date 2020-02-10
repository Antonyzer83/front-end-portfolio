import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const blogRoutes: Routes = [

];

@NgModule({
    imports: [
        RouterModule.forChild(blogRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BlogRoutingModule { }