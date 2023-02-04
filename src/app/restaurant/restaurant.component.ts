import { Component } from '@angular/core';
import { Restaurant } from '../Auth/models/Restaurant';
import { MainService } from '../mainFolder/mainService/main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  restaurantList: Restaurant[] = [];

  constructor(private mainService: MainService, public router: Router){ this.getRestaurant();}

  getRestaurant(){
    this.mainService.getAllRestaurant().subscribe((restaurants:Restaurant[])=>{
      this.restaurantList = restaurants;
    });
  }

  getSelected(restaurantId : number){
    localStorage.setItem('RESTAURANT_KEY', String(restaurantId));
    this.router.navigate(['/main']);
  }
}
