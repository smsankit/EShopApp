// import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component'
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: '', component: AuthPageComponent },
    { path: 'productDetails', component: ProductDetailsComponent },
    { path: 'home', component: LandingpageComponent },
    { path: 'contact', component: ContactusComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', redirectTo: '/home' } // Catch-all for unknown routes
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }
