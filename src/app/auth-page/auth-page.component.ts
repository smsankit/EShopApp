import { Component } from '@angular/core';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import {UserLoginComponent} from '../user-login/user-login.component'
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [UserRegistrationComponent,UserLoginComponent,CommonModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {
  activeTab: 'signup' | 'signin' = 'signin';

/**
 *
 */
constructor(private authService:AuthenticationService, private router:Router) {
 if(authService.isLoggedIn()){
  this.router.navigate(['/home']);
 }
  
}

  switchTab(tab: 'signup' | 'signin') {
    this.activeTab = tab;
  }
}
