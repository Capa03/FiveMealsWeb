import { Token } from 'src/app/Auth/models/Token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
import { OrderProductPatchDTO } from 'src/app/Auth/models/OrderProductPatchDTO';
import { Restaurant } from 'src/app/Auth/models/Restaurant';
import { RestaurantTerminal } from 'src/app/Auth/models/RestaurantTerminal';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  httpOptions ;

  constructor(private http : HttpClient) {
    let token = localStorage.getItem('Token');
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  public getQueueProducts(restaurantid:number): Observable<OrderProduct[]>
  {
    return this.http.get<OrderProduct[]>('https://fivemealsapi.azurewebsites.net/QueueProduct?restaurantId='+`${restaurantid}`, this.httpOptions);
  }

  public getOnProgressProducts(restaurantid:number): Observable<OrderProduct[]>
  {
    return this.http.get<OrderProduct[]>('https://fivemealsapi.azurewebsites.net/OnProgressProduct?restaurantId='+`${restaurantid}`, this.httpOptions);
  }

  public getForDeliveryProducts(restaurantid:number): Observable<OrderProduct[]>
  {
    return this.http.get<OrderProduct[]>('https://fivemealsapi.azurewebsites.net/ForDeliveryProduct?restaurantId='+`${restaurantid}`, this.httpOptions);
  }

  public updateOrderProducts(orderProduct : OrderProductPatchDTO[])
  {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    });

    return this.http.patch('https://fivemealsapi.azurewebsites.net/OrderProduct',orderProduct,{headers});
  }

  public getAllRestaurant(): Observable<Restaurant[]>
  {
    return this.http.get<Restaurant[]>('https://fivemealsapi.azurewebsites.net/Restaurant',this.httpOptions);
  }

  public restaurantTerminal(restaurantTerminal:RestaurantTerminal)
  {
    return this.http.post('https://fivemealsapi.azurewebsites.net/RestaurantTerminal',restaurantTerminal,this.httpOptions);
  }

}
