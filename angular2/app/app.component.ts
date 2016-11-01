import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: 
      `
        <style>
          footer{
              width:100%;
              min-height:100px;  
          }
        </style>
        <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <h4 class="navbar-text">
                   Val Home Service&nbsp;&nbsp;&nbsp;  
                </h4>
            </div>
            <div class="collapse navbar-collapse" id="navigationbar">
                <ul class="nav navbar-nav">
                  <li><a routerLink="/" routerLinkActive="active" class="navbar-brand">Home</a></li>
                  <li><a routerLink="/reviews" routerLinkActive="active" class="navbar-brand">Reviews</a></li>
                  <li><a routerLink="/gallery" routerLinkActive="active" class="navbar-brand">Gallery</a></li>
                  <li><a routerLink="/contact" routerLinkActive="active" class="navbar-brand">Contact Us</a></li>
                  <li><a routerLink="/about" routerLinkActive="active" class="navbar-brand">About Us</a></li>
                </ul>
            </div>
          </div>
        </div>

        <div class="container" style="margin-top: 50px;">
            <router-outlet></router-outlet>
        </div>  

      <footer class="footer">
          <div class="container">
            <hr />
            <div class="row">
              <div class="col-md-6">
                <a href="#"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                &nbsp;
                <a href="#"><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
                &nbsp;
                <a href="#"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                &nbsp;
                <a routerLink="/contact"><i class="fa fa-envelope-square fa-2x" aria-hidden="true"></i></a>
                <div class="pull-right" style="color: #377BB5">&copy;&nbsp;Val Home Service {{year}}</div>
              </div>            
            </div>
          </div>
      </footer>
      `
})
export class AppComponent {
  year: number = new Date().getFullYear();

}
