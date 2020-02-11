import { Injectable } from "@angular/core";
import { Certifications } from "./certifications";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { GlobalService } from "../../../shared/global.service";

@Injectable()
export class CertificationsService {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    certifications: Certifications[];

    getCertifications(): Observable<Certifications> {
        return this.http.get(`${this.globalService.baseurl}/certifications`).pipe(
            map((res) => {
                this.certifications = res['data'];
                return this.certifications;
            }),
            tap(_ => this.globalService.log('fetched certifications')),
            catchError(this.globalService.handleError('getCertifications', []))
        );
    }
}