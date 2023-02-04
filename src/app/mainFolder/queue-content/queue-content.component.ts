import { Component } from '@angular/core';
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
import { MainService } from '../mainService/main.service';
import { OrderProductPatchDTO } from 'src/app/Auth/models/OrderProductPatchDTO';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-queue-content',
  templateUrl: './queue-content.component.html',
  styleUrls: ['./queue-content.component.css']
})
export class QueueContentComponent {

  orderProducts: OrderProduct[] = [];
  restaurantId = localStorage.getItem('RESTAURANT_KEY');

  constructor(private mainService: MainService, private router: Router, private route: ActivatedRoute) {
    this.getProducts(Number(this.restaurantId));
  }

  getProducts(restaurantId: number) {
    this.mainService.getQueueProducts(restaurantId).subscribe((orderProducts: OrderProduct[]) => {
      this.orderProducts = orderProducts;
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
