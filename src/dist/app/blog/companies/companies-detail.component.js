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
const router_1 = require("@angular/router");
const companies_service_1 = require("./companies.service");
const platform_browser_1 = require("@angular/platform-browser");
let CompaniesDetailComponent = class CompaniesDetailComponent {
    constructor(route, companiesService, titleService) {
        this.route = route;
        this.companiesService = companiesService;
        this.titleService = titleService;
        this.company = null;
        this.error = null;
    }
    ngOnInit() {
        this.titleService.setTitle("CASTANER Antony | Blog");
        let id = +this.route.snapshot.paramMap.get('id');
        this.companiesService.getCompany(id).subscribe((res) => {
            this.company = res;
            console.log(this.company);
        }, (err) => {
            this.error = err;
        });
    }
};
CompaniesDetailComponent = __decorate([
    core_1.Component({
        selector: 'companies-detail',
        templateUrl: './app/blog/companies/companies-detail.component.html',
        styleUrls: ['./app/blog/companies/companies-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, companies_service_1.CompaniesService, platform_browser_1.Title])
], CompaniesDetailComponent);
exports.CompaniesDetailComponent = CompaniesDetailComponent;
//# sourceMappingURL=companies-detail.component.js.map