
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from '../models/User'
import {Token} from '../models/Token'
import { AuthService } from '../services/authService';
import { Product } from '../models/Product';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user = new User();
  
  constructor(private authService: AuthService){}

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('')
  })
  

  login(user: User){
    this.authService.login(user).subscribe((token : Token)=>
      localStorage.setItem('Token',token.Token)
    );
  }

  getProducts(){
    this.authService.getProducts().subscribe((product : Product[]) =>{
      console.log(product)
    })
  }

  get email(){
    return this.loginForm.get('email');
  }
}


