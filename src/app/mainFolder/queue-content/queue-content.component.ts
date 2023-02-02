import { Component } from '@angular/core';
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
import { MainService } from '../mainService/main.service';
import { OrderProductPatchDTO } from 'src/app/Auth/models/OrderProductPatchDTO';
@Component({
  selector: 'app-queue-content',
  templateUrl: './queue-content.component.html',
  styleUrls: ['./queue-content.component.css']
})
export class QueueContentComponent {

  orderProducts: OrderProduct[] = [];

  constructor(private mainService: MainService) {
    this.getProducts(1);
  }


  getProducts(restaurantId: number) {
    this.mainService.getQueueProducts(restaurantId).subscribe((orderProducts: OrderProduct[]) => {

      this.orderProducts = orderProducts;
    });
  }

  updateOrderProduct(orderProduct: OrderProduct) {
   
    orderProduct.stepsMade++;

    let dto: OrderProductPatchDTO = new OrderProductPatchDTO();

    dto.orderProductID = orderProduct.orderProductID;
    dto.orderId = orderProduct.orderId;
    dto.stepsMade = orderProduct.stepsMade;
    dto.paid = orderProduct.paid;

    
    this.mainService.updateOrderProducts(dto);
  }
}
