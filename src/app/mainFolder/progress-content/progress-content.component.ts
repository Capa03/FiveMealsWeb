import { Component } from '@angular/core';
import {MainService} from '../mainService/main.service'
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
@Component({
  selector: 'app-progress-content',
  templateUrl: './progress-content.component.html',
  styleUrls: ['./progress-content.component.css']
})
export class ProgressContentComponent {
  orderProgress : OrderProduct[] = [];  
  constructor(private mainService : MainService){
    this.getOnProgressProducts(1);
    
  }

  getOnProgressProducts(restaurantid:number)
  {
    this.mainService.getOnProgressProducts(restaurantid).subscribe((orderProduct: OrderProduct[])=>{
      this.orderProgress = orderProduct;
    });
  }



}
