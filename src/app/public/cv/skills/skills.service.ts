import { Injectable } from "@angular/core";
import { Skills } from "./skills";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { GlobalService } from "../../../shared/global.service";

@Injectable()
export class SkillsService {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    skills: Skills[];

    /**
     * Get the skills
     */
    getSkills(): Observable<Skills> {
        return this.http.get<Skills>(`${this.globalService.baseurl}/skills`).pipe(
            map((res) => {
                this.skills = res['data'];
                return this.skills;
            }),
            tap(_ => this.globalService.log('fetched skills')),
            catchError(this.globalService.handleError('getSkills', []))
        );
    }
}