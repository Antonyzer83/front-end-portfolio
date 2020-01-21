import { Injectable } from "@angular/core";
import { Certifications } from "./certifications";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class CertificationsService {

    constructor(private http: HttpClient) { }

    baseurl = "http://localhost:8000/api";
    certifications: Certifications[];

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

    getCertifications(): Observable<Certifications> {
        return this.http.get(`${this.baseurl}/certifications`).pipe(
            map((res) => {
                this.certifications = res['data'];
                return this.certifications;
            }),
            tap(_ => this.log('fetched certifications')),
            catchError(this.handleError('getCertifications', []))
        );
    }
}