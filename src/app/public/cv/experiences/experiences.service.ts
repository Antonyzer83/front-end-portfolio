import { Injectable } from "@angular/core";
import { Experiences } from "./experiences";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {catchError, map, tap } from "rxjs/operators";

@Injectable()
export class ExperiencesService {

    constructor(private http: HttpClient) { }

    baseurl = "http://localhost:8000/api";
    experiences: Experiences[];

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
     * Get the experiences
     */
    getExperiences(): Observable<Experiences> {
        return this.http.get<Experiences>(`${this.baseurl}/experiences`).pipe(
            map((res) => {
                this.experiences = res['data'];
                return this.experiences;
            }),
            tap(_ => this.log('fetched experiences')),
            catchError(this.handleError('getExperiences', []))
        );
    }
}