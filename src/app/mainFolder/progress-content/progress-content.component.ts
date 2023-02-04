import { Component } from '@angular/core';
import {MainService} from '../mainService/main.service'
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
import { OrderProductPatchDTO } from 'src/app/Auth/models/OrderProductPatchDTO';
@Component({
  selector: 'app-progress-content',
  templateUrl:'./progress-content.component.html',
  styleUrls: ['./progress-content.component.css']
})
export class ProgressContentComponent {
  orderProgress : OrderProduct[] = [];  
  restaurantId = localStorage.getItem('RESTAURANT_KEY');
  constructor(private mainService : MainService){
    this.getOnProgressProducts(Number(this.restaurantId));
  }

  getOnProgressProducts(restaurantid:number)
  {
    this.mainService.getOnProgressProducts(restaurantid).subscribe((orderProduct: OrderProduct[])=>{
      this.orderProgress = orderProduct;
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
