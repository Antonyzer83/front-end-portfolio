import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CompaniesListComponent } from "./companies/companies-list.component";
import { CompaniesDetailComponent } from "./companies/companies-detail.component";

const blogRoutes: Routes = [
    {path: 'blog', component: CompaniesListComponent },
    {path: 'blog/:id', component: CompaniesDetailComponent },
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