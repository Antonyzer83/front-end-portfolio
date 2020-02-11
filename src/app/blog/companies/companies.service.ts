import { Injectable } from "@angular/core";
import {Companies} from "./companies";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { GlobalService } from "../../shared/global.service";

@Injectable()
export class CompaniesService {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    companies: Companies[];

    /**
     * Get the companies
     */
    getCompanies(): Observable<Companies> {
        return this.http.get(`${this.globalService.baseurl}/blog`).pipe(
            map((res) => {
                this.companies = res['data'];
                return this.companies;
            }),
            tap(_ => this.globalService.log('fetched companies')),
            catchError(this.globalService.handleError('getCompanies', []))
        );
    }
}