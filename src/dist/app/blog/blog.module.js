"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const blog_routing_module_1 = require("./blog-routing.module");
const companies_list_component_1 = require("./companies/companies-list.component");
const companies_detail_component_1 = require("./companies/companies-detail.component");
const articles_list_component_1 = require("./articles/articles-list.component");
const articles_detail_component_1 = require("./articles/articles-detail.component");
const companies_service_1 = require("./companies/companies.service");
const articles_service_1 = require("./articles/articles.service");
let BlogModule = class BlogModule {
};
BlogModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            blog_routing_module_1.BlogRoutingModule,
        ],
        declarations: [
            companies_list_component_1.CompaniesListComponent,
            companies_detail_component_1.CompaniesDetailComponent,
            articles_list_component_1.ArticlesListComponent,
            articles_detail_component_1.ArticlesDetailComponent,
        ],
        exports: [],
        providers: [
            companies_service_1.CompaniesService,
            articles_service_1.ArticlesService,
        ]
    })
], BlogModule);
exports.BlogModule = BlogModule;
//# sourceMappingURL=blog.module.js.map