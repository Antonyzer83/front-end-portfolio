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
const http_1 = require("@angular/common/http");
const operators_1 = require("rxjs/operators");
const global_service_1 = require("../../shared/global.service");
let CompaniesService = class CompaniesService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
    }
    /**
     * Get the companies
     */
    getCompanies() {
        return this.http.get(`${this.globalService.baseurl}/blog`).pipe(operators_1.map((res) => {
            this.companies = res['data'];
            return this.companies;
        }), operators_1.tap(_ => this.globalService.log('fetched companies')), operators_1.catchError(this.globalService.handleError('getCompanies', [])));
    }
    /**
     * Get one company
     *
     * @param id
     */
    getCompany(id) {
        return this.http.get(`${this.globalService.baseurl}/blog/${id}/company`).pipe(operators_1.map((res) => {
            this.companies = res['data'];
            return this.companies;
        }), operators_1.tap(_ => this.globalService.log('fetched company')), operators_1.catchError(this.globalService.handleError('getCompany', [])));
    }
};
CompaniesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient, global_service_1.GlobalService])
], CompaniesService);
exports.CompaniesService = CompaniesService;
//# sourceMappingURL=companies.service.js.map