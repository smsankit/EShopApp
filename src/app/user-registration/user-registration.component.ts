import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../models/register';
import { JwtAuth } from '../models/jwtAuth';
import { AuthenticationService } from '../services/authentication.service';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  registerDto = new Register();
  jwtDto = new JwtAuth();
  message: any = '';

  constructor(private authService: AuthenticationService, 
    private storageService: StorageService) { }


  // register(registerDto: Register) {
  //   this.authService.register(registerDto).subscribe(
  //     (jwtDto) => {
  //       if (jwtDto != null && jwtDto.result === true) {
  //         console.log(jwtDto);
  //         this.message = 'Registration successful!';
  //         this.registerDto.name='';
  //         this.registerDto.email='';
  //         this.registerDto.password='';
  //       }
  //       else {
  //         this.message = 'Error during user registration';
  //       }
  //     }
  //     ,
  //     (error) => {
  //       this.message = 'Error during user registration';
  //       console.error('Error during user registration:', error);
  //     }
  //   );
  // }


   
  register(registerDto: Register): void {
    // Check if the provided DTO is valid
    if (!registerDto || !registerDto.name || !registerDto.email || !registerDto.password) {
      this.message = 'Please provide all required fields.';
      return;
    }
  
    // Retrieve existing users from local storage
    const existingUsers: Register[] = JSON.parse(localStorage.getItem('users') || '[]');
  
    // Check if the user already exists based on the email
    const userExists = existingUsers.some((user) => user.email === registerDto.email);
  
    if (userExists) {
      this.message = 'User with this email already exists!';
      return;
    }
  
    // Add the new user to the users array
    existingUsers.push(registerDto);
  
    // Save updated users back to local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    // Clear error message and show success notification
    this.message = '';
    alert('Signup successful!');
  }

 

}
