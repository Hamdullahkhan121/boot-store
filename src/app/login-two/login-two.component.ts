import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-two',
  standalone: true,
  // imports: [],
  templateUrl: './login-two.component.html',
  styleUrl: './login-two.component.css',
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginTWOComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Login form submitted:', formData);
      // Handle login logic here, e.g., call an authentication service
    } else {
      console.log('Login form is not valid');
    }
  }
}
