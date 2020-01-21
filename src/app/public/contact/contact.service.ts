import { Injectable } from "@angular/core";
import { Contact } from "./contact";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class ContactService {

    constructor(private http: HttpClient) { }

    baseurl = "http://localhost:8000/api";
    contact: Contact[];

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
     * Get the contact infos
     */
    getContact(): Observable<Contact> {
        return this.http.get<Contact>(`${this.baseurl}/infos`).pipe(
            map((res) => {
                this.contact = res['data'];
                return this.contact;
            }),
            tap(_ => this.log('fetched contact')),
            catchError(this.handleError('getContact', []))
        )
    }
}