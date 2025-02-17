import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

import { ArticlesService } from "./articles.service";
import { Articles } from "./articles";
import { ActivatedRoute } from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'articles-list',
    templateUrl: './app/blog/articles/articles-list.component.html',
    styleUrls: ['./app/blog/articles/articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

    articles: Articles[] = null;
    id: number = null;
    error: string = null;

    constructor(private route: ActivatedRoute, private articlesService: ArticlesService, private titleService: Title) { }

    ngOnInit(): void {
        this.titleService.setTitle("CASTANER Antony | Blog");
        this.id = +this.route.snapshot.paramMap.get('id');
        this.articlesService.getArticles(this.id).subscribe(
            (res: Articles[]) => {
                this.articles = res;
                console.log(this.articles);
            },
            (err) => {
                this.error = err;
            }
        );
    }
}