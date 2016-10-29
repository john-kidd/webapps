import { Component, Inject, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { GalleryService } from './gallery.service';
import { Picture } from './picture';

@Component({
    templateUrl: 'app/gallery/gallery.component.html'
})
export class GalleryComponent implements OnInit {
    pageTitle: string = 'Our Services';
    data: Picture[];
    error: string;

    constructor(private galleryService: GalleryService) {

    }

    ngOnInit() {
        return this.galleryService.getData()
                        .subscribe(
                            data => this.data = data,
                            error => this.error = error);
        
    }
}