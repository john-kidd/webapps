import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeService } from './home/home.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ]) 
  ],
  declarations: [ AppComponent, HomeComponent, AboutComponent ],
  bootstrap: [ AppComponent ],
  providers: [ HomeService ]
})
export class AppModule { }
