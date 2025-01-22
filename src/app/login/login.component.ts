import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
// import { first } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage = '';

  // onSubmit() {
  //   // Implement your login logic here
  //   console.log('Username:', this.username);
  //   console.log('Password:', this.password);
  //   // Add authentication logic and navigate to the next page upon successful login
  // }

  

  login() {
    if (this.username === 'testuser' && this.password === 'password') {
      // Successful login - Redirect or store token
      console.log('Login successful!');
      this.errorMessage = ''; // Clear any previous error messages
      // Example redirect using Angular Router (you'll need to inject Router in the constructor)
      // this.router.navigate(['/dashboard']); 
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
}
