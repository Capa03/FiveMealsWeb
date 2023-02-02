import { Component } from '@angular/core';
import {MainService} from '../mainService/main.service'
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
@Component({
  selector: 'app-delevery-component',
  templateUrl: './delevery-component.component.html',
  styleUrls: ['./delevery-component.component.css']
})
export class DeleveryComponentComponent {
  orderDelivery : OrderProduct[] = [];
  constructor(private mainService : MainService){
    this.getForDeliveryProducts(1);
  }

  getForDeliveryProducts(restaurantid:number)
  {
    this.mainService.getForDeliveryProducts(restaurantid).subscribe((orderProduct : OrderProduct[])=>{
      console.log("Delivery" + orderProduct);
      this.orderDelivery = orderProduct;
    });
  }
}
