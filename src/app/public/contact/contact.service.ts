import { Injectable } from "@angular/core";
import { Contact } from "./contact";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { GlobalService } from "../../shared/global.service";

@Injectable()
export class ContactService {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    contact: Contact[];

    /**
     * Get the contact infos
     */
    getContact(): Observable<Contact> {
        return this.http.get<Contact>(`${this.globalService.baseurl}/infos`).pipe(
            map((res) => {
                this.contact = res['data'];
                return this.contact;
            }),
            tap(_ => this.globalService.log('fetched contact')),
            catchError(this.globalService.handleError('getContact', []))
        )
    }
}