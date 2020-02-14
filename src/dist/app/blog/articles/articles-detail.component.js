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
const articles_service_1 = require("./articles.service");
const router_1 = require("@angular/router");
const platform_browser_1 = require("@angular/platform-browser");
let ArticlesDetailComponent = class ArticlesDetailComponent {
    constructor(route, articlesService, titleService) {
        this.route = route;
        this.articlesService = articlesService;
        this.titleService = titleService;
        this.article = null;
        this.company_id = null;
        this.error = null;
    }
    ngOnInit() {
        this.titleService.setTitle("CASTANER Antony | Blog");
        this.company_id = +this.route.snapshot.paramMap.get('company_id');
        let article_id = +this.route.snapshot.paramMap.get('article_id');
        this.articlesService.getArticle(this.company_id, article_id).subscribe((res) => {
            this.article = res;
            console.log(this.article);
        }, (err) => {
            this.error = err;
        });
    }
};
ArticlesDetailComponent = __decorate([
    core_1.Component({
        selector: 'articles-detail',
        templateUrl: './app/blog/articles/articles-detail.component.html',
        styleUrls: ['./app/blog/articles/articles-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, articles_service_1.ArticlesService, platform_browser_1.Title])
], ArticlesDetailComponent);
exports.ArticlesDetailComponent = ArticlesDetailComponent;
//# sourceMappingURL=articles-detail.component.js.map