// import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component'
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [
    { path: '', component: AuthPageComponent },
    { path: 'home', component: LandingpageComponent },
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }
