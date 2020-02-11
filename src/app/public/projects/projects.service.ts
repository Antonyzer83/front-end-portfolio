import { Injectable } from "@angular/core";
import { Projects } from "./projects";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { GlobalService } from "../../shared/global.service";

@Injectable()
export class ProjectsService {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    projects: Projects[];

    /**
     * Get the projects
     */
    getProjects(): Observable<Projects> {
        return this.http.get(`${this.globalService.baseurl}/projects`).pipe(
            map((res) => {
                this.projects = res['data'];
                return this.projects;
            }),
            tap(_ => this.globalService.log('fetched projects')),
            catchError(this.globalService.handleError('getProjects', []))
        );
    }

    /**
     * Get one project
     *
     * @param id
     */
    getProject(id: number): Observable<Projects> {
        return this.http.get(`${this.globalService.baseurl}/projects/${id}`).pipe(
            map((res) => {
                this.projects = res['data'];
                return this.projects;
            }),
            tap(_ => this.globalService.log('fetched project')),
            catchError(this.globalService.handleError('getProject', []))
        );
    }
}