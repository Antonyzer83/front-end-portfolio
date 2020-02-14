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
const home_service_1 = require("./home.service");
const platform_browser_1 = require("@angular/platform-browser");
let HomeComponent = class HomeComponent {
    constructor(homeService, titleService) {
        this.homeService = homeService;
        this.titleService = titleService;
        this.home = null;
        this.error = null;
    }
    ngOnInit() {
        this.titleService.setTitle("CASTANER Antony | Accueil");
        this.homeService.getHome().subscribe((res) => {
            this.home = res;
            console.log(this.home);
        }, (err) => {
            this.error = err;
        });
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './app/public/home/home.component.html',
        styleUrls: [
            './app/public/home/home.component.css',
            './app/shared/button.component.css',
        ],
    }),
    __metadata("design:paramtypes", [home_service_1.HomeService, platform_browser_1.Title])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map