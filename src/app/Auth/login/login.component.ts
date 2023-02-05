
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User'
import { Token } from '../models/Token'
import { AuthService } from '../services/authService';
import { Router } from '@angular/router';
import { HttpHeaderResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user = new User();
  errormessage = "";


  constructor(private authService: AuthService, public router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('')
  })


  login(user: User) {
    this.authService.login(user).subscribe((token: Token) => {
      
      if (token.token != 'undefined') {
        localStorage.setItem('Token', token.token);
        localStorage.setItem('EMAIL_KEY',user.email);
        localStorage.setItem('PASSWORD_KEY',user.password);
        this.router.navigate(['/restaurant']);

        this.errormessage = "";
      }
    },(error : HttpHeaderResponse)=>{
      this.errormessage = "Email or Password are not correct or not exist!";
    }
    )
  }


  get email() {
    return this.loginForm.get('email');
  }

}


