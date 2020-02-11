import { Injectable } from "@angular/core";
import { Articles } from "./articles";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { GlobalService } from "../../shared/global.service";

@Injectable()
export class ArticlesService {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    articles: Articles[];

    /**
     * Get the articles
     *
     * @param company_id
     */
    getArticles(company_id: number): Observable<Articles> {
        return this.http.get(`${this.globalService.baseurl}/blog/${company_id}`).pipe(
            map((res) => {
                this.articles = res['data'];
                return this.articles;
            }),
            tap(_ => this.globalService.log('fetched articles')),
            catchError(this.globalService.handleError('getArticles', []))
        );
    }

    /**
     * Get one article
     *
     * @param company_id
     * @param article_id
     */
    getArticle(company_id: number, article_id: number): Observable<Articles> {
        return this.http.get(`${this.globalService.baseurl}/blog/${company_id}/articles/${article_id}`).pipe(
            map((res) => {
                this.articles = res['data'];
                return this.articles;
            }),
            tap(_ => this.globalService.log('fetched article')),
            catchError(this.globalService.handleError('getArticle', []))
        );
    }
}