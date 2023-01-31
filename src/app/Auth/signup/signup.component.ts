import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/authService';
import { User } from '../models/User'
import { Router } from '@angular/router';
import { HttpHeaderResponse } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = new User();
  constructor(private authService: AuthService, public router: Router) { }
  errorMessage = "";
  confirmPasswords = "";
  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  })

  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  register(user: User) {

    if (user.password !== this.confirmPasswords || user.password == "") {
      this.errorMessage = "Password not Match";
    } else {
      this.authService.register(user).subscribe(() => {
        this.router.navigate(['/main'])
      }, (error: HttpHeaderResponse) => {
        this.errorMessage = "Bad Credentials";
      });
    }
  }
}
