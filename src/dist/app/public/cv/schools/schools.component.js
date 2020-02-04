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
const schools_service_1 = require("./schools.service");
let SchoolsComponent = class SchoolsComponent {
    constructor(schoolsService) {
        this.schoolsService = schoolsService;
        this.schools = null;
        this.error = null;
    }
    ngOnInit() {
        this.schoolsService.getSchools().subscribe((res) => {
            this.schools = res;
            console.log(this.schools);
        }, (err) => {
            this.error = err;
        });
    }
    convertDates(myDate) {
        let monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        let myNew = monthNames[new Date(myDate).getMonth()] + ' ' + new Date(myDate).getFullYear();
        return myNew;
    }
};
SchoolsComponent = __decorate([
    core_1.Component({
        selector: 'schools',
        templateUrl: './app/public/cv/schools/schools.component.html',
    }),
    __metadata("design:paramtypes", [schools_service_1.SchoolsService])
], SchoolsComponent);
exports.SchoolsComponent = SchoolsComponent;
//# sourceMappingURL=schools.component.js.map