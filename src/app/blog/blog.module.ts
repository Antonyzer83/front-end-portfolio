import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from "./blog-routing.module";

import { CompaniesListComponent } from "./companies/companies-list.component";
import { CompaniesDetailComponent } from "./companies/companies-detail.component";

import { CompaniesService } from "./companies/companies.service";

@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule,
    ],
    declarations: [
        CompaniesListComponent,
        CompaniesDetailComponent,
    ],
    exports: [

    ],
    providers: [
        CompaniesService,
    ]
})
export class BlogModule { }