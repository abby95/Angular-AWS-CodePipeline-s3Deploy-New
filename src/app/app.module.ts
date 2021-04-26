import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ProductsComponent } from './Components/products/products.component';
import { GithubComponent } from './Components/github/github.component';
import { HomeComponent } from './Components/home/home.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ProductsComponent,
    GithubComponent,
    HomeComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
