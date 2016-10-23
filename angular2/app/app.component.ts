import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: 
      `
        <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <a routerLink="/" routerLinkActive="active" class="navbar-brand">Home</a>
              <a routerLink="/about" routerLinkActive="active" class="navbar-brand">About</a>
            </div>
            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                
              </ul>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="content">
            <router-outlet></router-outlet>
          </div>
        </div>  
      `
})
export class AppComponent { }
