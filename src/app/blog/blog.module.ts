import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from "./blog-routing.module";

import { CompaniesListComponent } from "./companies/companies-list.component";
import { CompaniesDetailComponent } from "./companies/companies-detail.component";
import { ArticlesListComponent } from "./articles/articles-list.component";
import { ArticlesDetailComponent } from "./articles/articles-detail.component";

import { CompaniesService } from "./companies/companies.service";
import { ArticlesService } from "./articles/articles.service";

@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule,
    ],
    declarations: [
        CompaniesListComponent,
        CompaniesDetailComponent,
        ArticlesListComponent,
        ArticlesDetailComponent,
    ],
    exports: [

    ],
    providers: [
        CompaniesService,
        ArticlesService,
    ]
})
export class BlogModule { }