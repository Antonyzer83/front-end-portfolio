import { Injectable } from '@angular/core';
import { Home } from "./home";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {catchError, map, tap } from "rxjs/operators";

@Injectable()
export class HomeService {

    constructor(private http: HttpClient) { }

    baseurl = "http://localhost:8000/api";
    home: Home[];

    /**
     * Display the action
     *
     * @param log
     */
    private log(log: string) {
        console.info(log);
    }

    /**
     * Display the error
     *
     * @param operation
     * @param result
     */
    private handleError<T>(operation='operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failded ${error.message}`);

            return of(result as T);
        }
    }

    /**
     * Get the home content
     */
    getHome(): Observable<Home> {
        return this.http.get<Home>(`${this.baseurl}/home`).pipe(
            map((res) => {
                this.home =res['data'];
                return this.home;
            }),
            tap(_ => this.log('fetched home')),
            catchError(this.handleError('getHome', []))
        );
    }
}