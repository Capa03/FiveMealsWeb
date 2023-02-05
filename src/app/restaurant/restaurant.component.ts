import { AuthService } from './../Auth/services/authService';
import { HttpHeaderResponse} from '@angular/common/http';
import { Component } from '@angular/core';
import { Restaurant } from '../Auth/models/Restaurant';
import { MainService } from '../mainFolder/mainService/main.service';
import { Router } from '@angular/router';
import { User } from '../Auth/models/User';
import {Token} from "src/app/Auth/models/Token";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  restaurantList: Restaurant[] = [];

  constructor(private mainService: MainService,private authService :AuthService, public router: Router){ this.getRestaurant();}

  user : User = new User() ;

  getRestaurant(){
    this.mainService.getAllRestaurant().subscribe((restaurants:Restaurant[])=>{
      this.restaurantList = restaurants;
    },(error : HttpHeaderResponse)=>{
      if(error.status === 401){
        let email = localStorage.getItem('EMAIL_KEY');
        let password = localStorage.getItem('PASSWORD_KEY');

        if(email && password){
          this.user.email = email;
          this.user.password = password;
          console.log("Fetching new Token");
          this.authService.login(this.user).subscribe((token: Token) =>{
            localStorage.setItem('Token', token.token);
            this.getRestaurant();
          });
        }else{
          console.log("localstorage -> Email/Password Empty")
        }

      }
    });
  }

  getSelected(restaurantId : number){
    localStorage.setItem('RESTAURANT_KEY', String(restaurantId));
    this.router.navigate(['/main']);
  }
}
