"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const companies_service_1 = require("./companies.service");
const platform_browser_1 = require("@angular/platform-browser");
let CompaniesListComponent = class CompaniesListComponent {
    constructor(companiesService, titleService) {
        this.companiesService = companiesService;
        this.titleService = titleService;
        this.companies = null;
        this.error = null;
    }
    ngOnInit() {
        this.titleService.setTitle("CASTANER Antony | Blog");
        this.companiesService.getCompanies().subscribe((res) => {
            this.companies = res;
            console.log(this.companies);
        }, (err) => {
            this.error = err;
        });
    }
};
CompaniesListComponent = __decorate([
    core_1.Component({
        selector: 'companies-list',
        templateUrl: './app/blog/companies/companies-list.component.html',
        styleUrls: ['./app/blog/companies/companies-list.component.css']
    }),
    __metadata("design:paramtypes", [companies_service_1.CompaniesService, platform_browser_1.Title])
], CompaniesListComponent);
exports.CompaniesListComponent = CompaniesListComponent;
//# sourceMappingURL=companies-list.component.js.map