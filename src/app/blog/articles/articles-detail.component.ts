import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

import { ArticlesService } from "./articles.service";
import { Articles } from "./articles";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'articles-detail',
    templateUrl: './app/blog/articles/articles-detail.component.html',
    styleUrls: ['./app/blog/articles/articles-detail.component.css']
})
export class ArticlesDetailComponent implements OnInit {

    article: Articles = null;
    company_id: number = null;
    error: string = null;

    constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

    ngOnInit(): void {
        this.company_id = +this.route.snapshot.paramMap.get('company_id');
        let article_id = +this.route.snapshot.paramMap.get('article_id');
        this.articlesService.getArticle(this.company_id, article_id).subscribe(
            (res: Articles) => {
                this.article = res;
                console.log(this.article);
            },
            (err) => {
                this.error = err;
            }
        );
    }
}