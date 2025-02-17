import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable()
export class GlobalService {

    baseurl = "http://antonycastaner.ddns.net/api";

    /**
     * Display the action
     *
     * @param log
     */
    public log(log: string) {
        console.info(log);
    }

    /**
     * Display the error
     *
     * @param operation
     * @param result
     */
    public handleError<T>(operation='operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failded ${error.message}`);

            return of(result as T);
        }
    }
}