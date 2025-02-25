import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../models/login';
import { JwtAuth } from '../models/jwtAuth';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Register } from '../models/register';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  loginDto = new Login();
  jwtDto = new JwtAuth();
  registerDto = new Register();
  message: any = '';
  isLoading = false;

  constructor(private authService: AuthenticationService, 
    private router: Router, 
    
    private storageService: StorageService) { }

  login(loginDto: Login) {
    if (!loginDto || !loginDto.email || !loginDto.password) {
        this.message = 'Please provide both email and password.';
        alert(this.message);
        return;
    }
    this.isLoading = true;
    this.authService.login(loginDto).subscribe(
      (jwtDto) => {
        this.isLoading = false;
        if (jwtDto != null && jwtDto.result === true) {
          localStorage.setItem('jwtToken', jwtDto.token);
          console.log(jwtDto);
          this.message = 'Login successful!';
          this.loginDto.email = '';
          this.loginDto.password = '';
          this.router.navigate(['/home']);
        }
        else {
          this.message = 'Error during user login';
          alert(this.message);
        }
      }
      ,
      (error) => {
        this.isLoading = false;
        this.message = 'Error during user login';
        alert(this.message);
      }
    );
  }


  // login(loginDto: { email: string; password: string }): void {
  //   if (!loginDto || !loginDto.email || !loginDto.password) {
  //     this.message = 'Please provide both email and password.';
  //     return;
  //   }
  //   const existingUsers: Register[] = JSON.parse(localStorage.getItem('users') || '[]');
  //   const user = existingUsers.find(
  //     (u) => u.email === loginDto.email && u.password === loginDto.password
  //   );
  
  //   if (!user) {
  //     this.message = 'Invalid email or password.';
  //     return;
  //   }
  //   this.message = '';
  //   // alert(`Welcome, ${user.name}!`);
  //   localStorage.setItem('jwtToken', "eyJndGlkIjoiODkxNmMxZWMtMjIzNC00ZGUxLTljNDktOTIxNWZmM2E4MjU5IiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ");
  //   this.router.navigate(['/home']);
  // }
  

  skipToDashboard(): void {
    // Navigate to the dashboard
    console.log("AA gaya");
    this.router.navigate(['/home']);
  }

  saveData(): void {
    const user = { id: 1, name: 'John Doe' };
    this.storageService.setItem('user', user);
    console.log('User saved');
  }

  loadData(): void {
    const user = this.storageService.getItem('user');
    console.log('Retrieved user:', user);
  }

  clearData(): void {
    this.storageService.clear();
    console.log('Local storage cleared');
  }

}
