
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User'
import { Token } from '../models/Token'
import { AuthService } from '../services/authService';
import { Router } from '@angular/router';
import { CategoryWithProducts } from '../models/CategoryWithProducts';
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
     // console.log(token.token)
      if (token.token != 'undefined') {
        localStorage.setItem('Token', token.token)
        this.router.navigate(['/main'])
        this.errormessage = "";
      } 
    },(error : HttpHeaderResponse)=>{
      this.errormessage = "Email or Password are not correct or not exist!";
    }
    )
  }

  getProducts() {
    this.authService.getProducts().subscribe((product: CategoryWithProducts) => {
      console.log(product)
    })
  }


  get email() {
    return this.loginForm.get('email');
  }

}


