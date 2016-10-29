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
          <div class="container-fluid">
            <div class="navbar-header">
              <a routerLink="/" routerLinkActive="active" class="navbar-brand">Home</a>
              <a routerLink="/reviews" routerLinkActive="active" class="navbar-brand">Reviews</a>
              <a routerLink="/gallery" routerLinkActive="active" class="navbar-brand">Gallery</a>
              <a routerLink="/contact" routerLinkActive="active" class="navbar-brand">Contact Us</a>
              <a routerLink="/about" routerLinkActive="active" class="navbar-brand">About Us</a>
            </div>
            <div class="collapse navbar-collapse">
              <div class="nav navbar-nav navbar-right">
                Val Home Service 
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" style="margin-top: 50px;">
            <router-outlet></router-outlet>
        </div>  

      <footer class="footer">
          <div class="container-fluid">
            <hr />
            <div class="col-md-6">
              <a href="#"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
              &nbsp;
              <a href="#"><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
              &nbsp;
              <a href="#"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
              &nbsp;
              <a routerLink="/contact"><i class="fa fa-envelope-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div class="col-md-6">
              <div class="pull-right" style="color: #377BB5">&copy;&nbsp;Val Home Service 2016</div>
            </div>
          </div>
      </footer>
      `
})
export class AppComponent { }
