"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/common/http");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const public_module_1 = require("./public/public.module");
const blog_module_1 = require("./blog/blog.module");
const global_service_1 = require("./shared/global.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            public_module_1.PublicModule,
            blog_module_1.BlogModule,
            app_routing_module_1.AppRoutingModule,
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        providers: [
            global_service_1.GlobalService,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map