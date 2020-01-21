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
const skills_service_1 = require("./skills.service");
let SkillsComponent = class SkillsComponent {
    constructor(skillsService) {
        this.skillsService = skillsService;
        this.skills = null;
        this.error = null;
    }
    ngOnInit() {
        this.skillsService.getSkills().subscribe((res) => {
            this.skills = res;
            console.log(this.skills);
        }, (err) => {
            this.error = err;
        });
    }
};
SkillsComponent = __decorate([
    core_1.Component({
        selector: 'skills',
        templateUrl: './app/public/cv/skills/skills.component.html',
    }),
    __metadata("design:paramtypes", [skills_service_1.SkillsService])
], SkillsComponent);
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=skills.component.js.map