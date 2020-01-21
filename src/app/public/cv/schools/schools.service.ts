import { Injectable } from "@angular/core";
import { Schools } from "./schools";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class SchoolsService {

    constructor(private http: HttpClient) { }

    baseurl = "http://localhost:8000/api";
    schools: Schools[];

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
     * Get the schools
     */
    getSchools(): Observable<Schools> {
        return this.http.get<Schools>(`${this.baseurl}/schools`).pipe(
            map((res) => {
                this.schools = res['data'];
                return this.schools;
            }),
            tap(_ => this.log('fetched schools')),
            catchError(this.handleError('getSchools', []))
        );
    }
}