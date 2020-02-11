import { Injectable } from "@angular/core";
import { About } from "./about";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { GlobalService } from "../../shared/global.service";

@Injectable()
export class AboutService {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    about: About[];

    /**
     * Get the about
     */
    getAbout(): Observable<About> {
        return this.http.get<About>(`${this.globalService.baseurl}/about`).pipe(
            map((res) => {
                this.about = res['data'];
                return this.about;
            }),
            tap(_ => this.globalService.log('fetched about')),
            catchError(this.globalService.handleError('getAbout', []))
        );
    }
}