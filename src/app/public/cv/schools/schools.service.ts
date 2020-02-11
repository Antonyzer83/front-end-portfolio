import { Injectable } from "@angular/core";
import { Schools } from "./schools";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { GlobalService } from "../../../shared/global.service";

@Injectable()
export class SchoolsService {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    schools: Schools[];

    /**
     * Get the schools
     */
    getSchools(): Observable<Schools> {
        return this.http.get<Schools>(`${this.globalService.baseurl}/schools`).pipe(
            map((res) => {
                this.schools = res['data'];
                return this.schools;
            }),
            tap(_ => this.globalService.log('fetched schools')),
            catchError(this.globalService.handleError('getSchools', []))
        );
    }
}