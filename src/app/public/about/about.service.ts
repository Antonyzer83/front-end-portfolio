import { Injectable } from "@angular/core";
import { About } from "./about";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class AboutService {
    // Créer un service global qu'on appelle dans le constructeur
    // Faire un dossier shared pour l'ensemble des services d'admin et public

    constructor(private http: HttpClient) { }

    baseurl = "http://localhost:8000/api";
    about: About[];

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
     * Get the about
     */
    getAbout(): Observable<About> {
        return this.http.get<About>(`${this.baseurl}/about`).pipe(
            map((res) => {
                this.about = res['data'];
                return this.about;
            }),
            tap(_ => this.log('fetched about')),
            catchError(this.handleError('getAbout', []))
        );
    }
}