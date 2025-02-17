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
const platform_browser_1 = require("@angular/platform-browser");
let PublicComponent = class PublicComponent {
    constructor(router, titleService) {
        this.router = router;
        this.titleService = titleService;
        this.url = '/';
    }
    ngOnInit() {
        this.titleService.setTitle("CASTANER Antony | Projets");
        this.router.events.subscribe((value) => {
            if (location.pathname === '/navbar') {
                this.url = '/';
            }
            else {
                this.url = '/navbar';
            }
        });
    }
    convertDates(myDate) {
        let monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        let myNew = monthNames[new Date(myDate).getMonth()] + ' ' + new Date(myDate).getFullYear();
        return myNew;
    }
};
PublicComponent = __decorate([
    core_1.Component({
        selector: 'public',
        templateUrl: './app/public/public.component.html',
        styleUrls: ['./app/public/public.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, platform_browser_1.Title])
], PublicComponent);
exports.PublicComponent = PublicComponent;
//# sourceMappingURL=public.component.js.map