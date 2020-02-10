import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CompaniesListComponent } from "./companies/companies-list.component";

const blogRoutes: Routes = [
    {path: 'blog', component: CompaniesListComponent },
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