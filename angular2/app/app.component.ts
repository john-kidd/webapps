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
              <button type="button" class="navbar-toggle" data-toggle="collapse" (click)="openNav()">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <h4 class="navbar-text navbar-toggle" data-toggle="collapse" >
                   Val Home Service&nbsp;&nbsp;&nbsp;  
                </h4>
            </div>
            <div id="mySidenav" class="sidenav" [style.width]="sideNavWith" style="cursor:pointer">
              <a href="javascript:void(0)" class="closebtn" (click)="closeNav()">&times;</a>
              <a routerLink="/">Home</a>
              <a routerLink="/reviews">Reviews</a>
              <a routerLink="/gallery">Gallery</a>
              <a routerLink="/contact">Contact Us</a>
              <a routerLink="/about">About Us</a>
            </div>
            <div id="main" class="collapse navbar-collapse">
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

        <div class="container" style="margin-top: 50px;" [style.marginLeft]="mainMarginLeft">
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
  sideNavWith: string;
  mainMarginLeft: string;

  constructor() {
    
  }

  openNav(): void {
    this.sideNavWith = "250px";
    this.mainMarginLeft = "250px";
  }

  closeNav(): void {
    this.sideNavWith = "0";
    this.mainMarginLeft = "";
  }
}
