import { Component, Inject, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { HomeService } from './home.service';
import { Home } from './home';

@Component({
    templateUrl: 'app/home/home.component.html'
})
export class HomeComponent implements OnInit {
    pageTitle: string = 'Val Home Service';
    data: Home;
    error: string;

    constructor(private homeService: HomeService) {

    }

    ngOnInit() {
        return this.homeService.getData()
                        .subscribe(
                            data => this.data = data,
                            error => this.error = error);
        
    }
}