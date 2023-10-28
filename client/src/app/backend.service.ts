import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    private server = 'http://localhost:3000/';

    constructor(private httpservice: HttpClient) { }

    get(resource: string): Observable<any> {
        return this.httpservice.get<any>(this.server + resource)
            .pipe(
                map(data => data.data),
            );
    }

    getFiles(pathname: string): Observable<any> {
        return this.get(`files?path=${pathname}`)
            .pipe(
                catchError(err => {
                    this.logError(`getFiles`, err);
                    return of('');
                })
            );
    }

    getFolders(pathname: string): Observable<any[]> {
        return this.get(`folders?path=${pathname}`)
            .pipe(
                catchError(err => {
                    this.logError(`getFolders`, err);
                    return of([]);
                })
            );
    }

    logError(message: string, e: Error) {
        console.error(message, e);
    }

}
