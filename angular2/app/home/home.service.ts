import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

import { Home } from './home';

@Injectable()
export class HomeService {
    private serviceUrl = 'api/home.json';  // URL to web api

    constructor(private http: Http) { }

    getData(): Observable<Home> {
        return this.http.get(this.serviceUrl)
                         .map(response => response.json() as Home)
                         .do(data => console.log('server data:', data))
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}