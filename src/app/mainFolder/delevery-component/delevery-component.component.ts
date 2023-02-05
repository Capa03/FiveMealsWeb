import { Component } from '@angular/core';
import {MainService} from '../mainService/main.service'
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
import { OrderProductPatchDTO } from 'src/app/Auth/models/OrderProductPatchDTO';
import { HttpHeaderResponse } from '@angular/common/http';
import { User } from 'src/app/Auth/models/User';
import { AuthService } from 'src/app/Auth/services/authService';
import {Token} from "src/app/Auth/models/Token";


@Component({
  selector: 'app-delevery-component',
  templateUrl: './delevery-component.component.html',
  styleUrls: ['./delevery-component.component.css']
})
export class DeleveryComponentComponent {
  orderDelivery : OrderProduct[] = [];
  restaurantId = localStorage.getItem('RESTAURANT_KEY');
  constructor(private mainService : MainService,private authService :AuthService){
    this.getForDeliveryProducts(Number(this.restaurantId));
  }
  user : User = new User() ;
  getForDeliveryProducts(restaurantid:number)
  {
    this.mainService.getForDeliveryProducts(restaurantid).subscribe((orderProduct : OrderProduct[])=>{
      console.log("Delivery" + orderProduct);
      this.orderDelivery = orderProduct;
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
              this.getForDeliveryProducts(Number(this.restaurantId));
            });
          }else{
            console.log("localstorage -> Email/Password Empty")
          }
        }
      });
  }

  updateOrderProduct(orderProduct: OrderProduct) {
    orderProduct.delivered = true;
    let list: OrderProductPatchDTO[] = [orderProduct];
    this.mainService.updateOrderProducts(list).subscribe(res =>{
      console.log(res);
      this.getForDeliveryProducts(Number(this.restaurantId));
    });
  }
}
