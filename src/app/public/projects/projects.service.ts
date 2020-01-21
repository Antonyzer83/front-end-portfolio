import { Injectable } from "@angular/core";
import { Projects } from "./projects";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class ProjectsService {

    constructor(private http: HttpClient) { }

    baseurl = "http://localhost:8000/api";
    projects: Projects[];

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
     * Get the projects
     */
    getProjects(): Observable<Projects> {
        return this.http.get(`${this.baseurl}/projects`).pipe(
            map((res) => {
                this.projects = res['data'];
                return this.projects;
            }),
            tap(_ => this.log('fetched projects')),
            catchError(this.handleError('getProjects', []))
        );
    }

    getProject(id: number): Observable<Projects> {
        return this.http.get(`${this.baseurl}/projects/${id}`).pipe(
            map((res) => {
                this.projects = res['data'];
                return this.projects;
            }),
            tap(_ => this.log('fetched project')),
            catchError(this.handleError('getProject', []))
        );
    }
}