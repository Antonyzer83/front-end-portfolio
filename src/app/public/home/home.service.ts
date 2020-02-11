import { Injectable } from '@angular/core';
import { Home } from "./home";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {catchError, map, tap } from "rxjs/operators";

import { GlobalService } from "../../shared/global.service";

@Injectable()
export class HomeService {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    home: Home[];

    /**
     * Get the home content
     */
    getHome(): Observable<Home> {
        return this.http.get<Home>(`${this.globalService.baseurl}/home`).pipe(
            map((res) => {
                this.home = res['data'];
                return this.home;
            }),
            tap(_ => this.globalService.log('fetched home')),
            catchError(this.globalService.handleError('getHome', []))
        );
    }
}