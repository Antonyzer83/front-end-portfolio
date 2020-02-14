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
const about_service_1 = require("./about.service");
const platform_browser_1 = require("@angular/platform-browser");
let AboutComponent = class AboutComponent {
    constructor(aboutService, titleService) {
        this.aboutService = aboutService;
        this.titleService = titleService;
        this.about = null;
        this.error = null;
    }
    ngOnInit() {
        this.titleService.setTitle("CASTANER Antony | A Propos");
        this.aboutService.getAbout().subscribe((res) => {
            this.about = res;
            console.log(this.about);
        }, (err) => {
            this.error = err;
        });
    }
};
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        templateUrl: './app/public/about/about.component.html',
        styleUrls: [
            './app/public/about/about.component.css',
            './app/shared/button.component.css',
        ],
    }),
    __metadata("design:paramtypes", [about_service_1.AboutService, platform_browser_1.Title])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map