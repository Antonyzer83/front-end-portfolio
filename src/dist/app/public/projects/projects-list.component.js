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
const projects_service_1 = require("./projects.service");
let ProjectsListComponent = class ProjectsListComponent {
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.projects = null;
        this.error = null;
    }
    ngOnInit() {
        this.projectsService.getProjects().subscribe((res) => {
            this.projects = res;
            console.log(this.projects);
        }, (err) => {
            this.error = err;
        });
    }
};
ProjectsListComponent = __decorate([
    core_1.Component({
        selector: 'projects-list',
        templateUrl: './app/public/projects/projects-list.component.html',
        styleUrls: ['./app/public/projects/projects-list.component.css']
    }),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsListComponent);
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=projects-list.component.js.map