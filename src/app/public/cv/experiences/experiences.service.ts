import { Injectable } from "@angular/core";
import { Experiences } from "./experiences";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {catchError, map, tap } from "rxjs/operators";

import { GlobalService } from "../../../shared/global.service";

@Injectable()
export class ExperiencesService {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    experiences: Experiences[];

    /**
     * Get the experiences
     */
    getExperiences(): Observable<Experiences> {
        return this.http.get<Experiences>(`${this.globalService.baseurl}/experiences`).pipe(
            map((res) => {
                this.experiences = res['data'];
                return this.experiences;
            }),
            tap(_ => this.globalService.log('fetched experiences')),
            catchError(this.globalService.handleError('getExperiences', []))
        );
    }
}