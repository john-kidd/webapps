import { Component } from '@angular/core';

@Component({
    template: `
    <h2>{{pageTitle}}</h2>
  `
})
export class HomeComponent { 
    pageTitle: string = "Welcome to Val Home Service";
}