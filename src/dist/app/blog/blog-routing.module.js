"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const companies_list_component_1 = require("./companies/companies-list.component");
const companies_detail_component_1 = require("./companies/companies-detail.component");
const articles_detail_component_1 = require("./articles/articles-detail.component");
const blogRoutes = [
    { path: 'blog', component: companies_list_component_1.CompaniesListComponent },
    { path: 'blog/:id', component: companies_detail_component_1.CompaniesDetailComponent },
    { path: 'blog/:company_id/articles/:article_id', component: articles_detail_component_1.ArticlesDetailComponent }
];
let BlogRoutingModule = class BlogRoutingModule {
};
BlogRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(blogRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], BlogRoutingModule);
exports.BlogRoutingModule = BlogRoutingModule;
//# sourceMappingURL=blog-routing.module.js.map