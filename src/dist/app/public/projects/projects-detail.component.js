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
const projects_service_1 = require("./projects.service");
let ProjectsDetailComponent = class ProjectsDetailComponent {
    constructor(route, projectsService) {
        this.route = route;
        this.projectsService = projectsService;
        this.project = null;
        this.error = null;
    }
    ngOnInit() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.projectsService.getProject(id).subscribe((res) => {
            this.project = res;
            console.log(this.project);
        }, (err) => {
            this.error = err;
        });
    }
};
ProjectsDetailComponent = __decorate([
    core_1.Component({
        selector: 'projects-detail',
        templateUrl: './app/public/projects/projects-detail.component.html',
        styleUrls: ['./app/public/projects/projects-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        projects_service_1.ProjectsService])
], ProjectsDetailComponent);
exports.ProjectsDetailComponent = ProjectsDetailComponent;
//# sourceMappingURL=projects-detail.component.js.map