import { Injectable } from '@angular/core';
import { Home } from "./home";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {catchError, map, tap } from "rxjs/operators";

@Injectable()
export class HomeService {

    constructor(private http: HttpClient) { }

    baseurl = "http://localhost:8000/api";
    home: Home[];

    private log(log: string) {
        console.info(log);
    }

    private handleError<T>(operation='operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failded ${error.message}`);

            return of(result as T);
        }
    }

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