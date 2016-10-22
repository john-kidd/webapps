import { Component } from '@angular/core';

@Component({
    template: `
    <h2>{{pageTitle}}</h2>
  `
})
export class AboutComponent { 
    pageTitle: string = "About us...";
}