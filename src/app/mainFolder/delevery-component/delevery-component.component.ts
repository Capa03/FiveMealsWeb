import { Component } from '@angular/core';
import {MainService} from '../mainService/main.service'
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
import { OrderProductPatchDTO } from 'src/app/Auth/models/OrderProductPatchDTO';
@Component({
  selector: 'app-delevery-component',
  templateUrl: './delevery-component.component.html',
  styleUrls: ['./delevery-component.component.css']
})
export class DeleveryComponentComponent {
  orderDelivery : OrderProduct[] = [];
  restaurantId = localStorage.getItem('RESTAURANT_KEY');
  constructor(private mainService : MainService){
    this.getForDeliveryProducts(Number(this.restaurantId));
  }

  getForDeliveryProducts(restaurantid:number)
  {
    this.mainService.getForDeliveryProducts(restaurantid).subscribe((orderProduct : OrderProduct[])=>{
      console.log("Delivery" + orderProduct);
      this.orderDelivery = orderProduct;
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
