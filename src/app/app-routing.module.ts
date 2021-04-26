import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ProductsComponent } from './Components/products/products.component';
import { GithubComponent } from './Components/github/github.component';
import { HomeComponent } from './Components/home/home.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'homepage',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  }, {
    path: 'products',
    component: ProductsComponent
  }, {
    path: 'github',
    component: GithubComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
