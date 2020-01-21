import { Injectable } from "@angular/core";
import { Skills } from "./skills";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {catchError, map, tap } from "rxjs/operators";

@Injectable()
export class SkillsService {

    constructor(private http: HttpClient) { }

    baseurl = "http://localhost:8000/api";
    skills: Skills[];

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
     * Get the skills
     */
    getSkills(): Observable<Skills> {
        return this.http.get<Skills>(`${this.baseurl}/skills`).pipe(
            map((res) => {
                this.skills = res['data'];
                return this.skills;
            }),
            tap(_ => this.log('fetched skills')),
            catchError(this.handleError('getSkills', []))
        );
    }
}