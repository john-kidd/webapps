import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Picture } from './picture';

@Injectable()
export class GalleryService {
    private serviceUrl = 'api/gallery.json';  // URL to web api

    constructor(private http: Http) { }

    getData(): Observable<Picture[]> {
        return this.http.get(this.serviceUrl)
                         .map(response => response.json() as Picture)
                         .do(data => console.log('server data:', data))
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}