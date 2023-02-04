import { Component } from '@angular/core';
import {MainService} from '../mainService/main.service'
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
import { OrderProductPatchDTO } from 'src/app/Auth/models/OrderProductPatchDTO';
import { User } from 'src/app/Auth/models/User';
import { AuthService } from 'src/app/Auth/services/authService';
import { HttpHeaderResponse } from '@angular/common/http';
@Component({
  selector: 'app-progress-content',
  templateUrl:'./progress-content.component.html',
  styleUrls: ['./progress-content.component.css']
})
export class ProgressContentComponent {
  orderProgress : OrderProduct[] = [];
  user : User = new User() ;
  restaurantId = localStorage.getItem('RESTAURANT_KEY');
  constructor(private mainService : MainService,private authService :AuthService){
    this.getOnProgressProducts(Number(this.restaurantId));
  }

  getOnProgressProducts(restaurantid:number)
  {
    this.mainService.getOnProgressProducts(restaurantid).subscribe((orderProduct: OrderProduct[])=>{
      this.orderProgress = orderProduct;
    },(error : HttpHeaderResponse)=>{
        if(error.status === 401){
          let email = localStorage.getItem('EMAIL_KEY');
          let password = localStorage.getItem('PASSWORD_KEY');

          if(email && password){
            this.user.email = email;
            this.user.password = password;
            this.authService.login(this.user).subscribe(() =>{
              this.getOnProgressProducts(Number(this.restaurantId));
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
      this.getOnProgressProducts(Number(this.restaurantId));
    });
  }




}
