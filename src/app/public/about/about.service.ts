import { Injectable } from "@angular/core";
import { About } from "./about";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {catchError, map, tap } from "rxjs/operators";

@Injectable()
export class AboutService {


    constructor(private http: HttpClient) { }

    baseurl = "http://localhost:8000/api";
    about: About[];

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

    getAbout(): Observable<About> {
        return this.http.get<About>(`${this.baseurl}/about`).pipe(
            map((res) => {
                this.about = res['data'];
                return this.about;
            }),
            tap(_ => this.log('fetched about')),
            catchError(this.handleError('getAbout', []))
        );
    }
}