import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
