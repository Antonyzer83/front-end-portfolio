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
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let ExperiencesService = class ExperiencesService {
    constructor(http) {
        this.http = http;
        this.baseurl = "http://localhost:8000/api";
    }
    /**
     * Display the action
     *
     * @param log
     */
    log(log) {
        console.info(log);
    }
    /**
     * Display the error
     *
     * @param operation
     * @param result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.log(error);
            console.log(`${operation} failded ${error.message}`);
            return rxjs_1.of(result);
        };
    }
    /**
     * Get the experiences
     */
    getExperiences() {
        return this.http.get(`${this.baseurl}/experiences`).pipe(operators_1.map((res) => {
            this.experiences = res['data'];
            return this.experiences;
        }), operators_1.tap(_ => this.log('fetched experiences')), operators_1.catchError(this.handleError('getExperiences', [])));
    }
};
ExperiencesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ExperiencesService);
exports.ExperiencesService = ExperiencesService;
//# sourceMappingURL=experiences.service.js.map