// import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component'
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
    { path: '', component: AuthPageComponent },
    { path: 'productDetails', component: ProductDetailsComponent },
    { path: 'home', component: LandingpageComponent },
    { path: 'contact', component: ContactusComponent }
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }
