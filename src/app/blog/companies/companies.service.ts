import { Injectable } from "@angular/core";
import {Companies} from "./companies";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class CompaniesService {

    constructor(private http: HttpClient) { }

    baseurl = "http://localhost:8000/api";
    companies: Companies[];

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
     * Get the companies
     */
    getCompanies(): Observable<Companies> {
        return this.http.get(`${this.baseurl}/blog`).pipe(
            map((res) => {
                this.companies = res['data'];
                return this.companies;
            }),
            tap(_ => this.log('fetched companies')),
            catchError(this.handleError('getCompanies', []))
        );
    }
}