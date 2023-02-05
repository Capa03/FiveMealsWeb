import { Component } from '@angular/core';
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
import { MainService } from '../mainService/main.service';
import { OrderProductPatchDTO } from 'src/app/Auth/models/OrderProductPatchDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaderResponse} from '@angular/common/http';
import { User } from 'src/app/Auth/models/User';
import { AuthService } from 'src/app/Auth/services/authService';
import {Token} from "src/app/Auth/models/Token";


@Component({
  selector: 'app-queue-content',
  templateUrl: './queue-content.component.html',
  styleUrls: ['./queue-content.component.css']
})
export class QueueContentComponent {
  user : User = new User() ;
  orderProducts: OrderProduct[] = [];
  restaurantId = localStorage.getItem('RESTAURANT_KEY');

  constructor(private mainService: MainService, private router: Router, private route: ActivatedRoute,private authService :AuthService) {
    this.getProducts(Number(this.restaurantId));
  }

  getProducts(restaurantId: number) {
    this.mainService.getQueueProducts(restaurantId).subscribe((orderProducts: OrderProduct[]) => {
      this.orderProducts = orderProducts;
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
            this.getProducts(Number(this.restaurantId));
          });
        }else{
          console.log("localstorage -> Email/Password Empty")
        }
      }
    });
  }

  updateOrderProduct(orderProduct: OrderProduct) {
    orderProduct.stepsMade++;
    let list: OrderProductPatchDTO[] = [orderProduct];
    this.mainService.updateOrderProducts(list).subscribe(res =>{
      console.log(res);
      this.getProducts(Number(this.restaurantId));
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./main']), {
        relativeTo: this.route
      }
  }
}
