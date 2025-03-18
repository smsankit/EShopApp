import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Login } from './models/login';
import { JwtAuth } from './models/jwtAuth';
import { AuthenticationService } from './services/authentication.service';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component'
import { AuthPageComponent } from './auth-page/auth-page.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule,
    FormsModule, UserRegistrationComponent, UserLoginComponent, AuthPageComponent, LandingpageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'eshopapp';
  constructor(public authService: AuthenticationService, public router:Router) {
    console.log(this.router.url==='/');
   }

  logout(){
    this.authService.logout();
  }

  skipToDashboard(): void {
    // Navigate to the dashboard
   
  }

  contactUs(): void {
    // Navigate to the dashboard
    this.router.navigate(['/contact']);
  }

  aboutUs(): void {
    // Navigate to the dashboard
    this.router.navigate(['/aboutus']);
  }
}
