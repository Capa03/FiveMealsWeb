import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
import { OrderProductPatchDTO } from 'src/app/Auth/models/OrderProductPatchDTO';
import { Restaurant } from 'src/app/Auth/models/Restaurant';

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
    return this.http.get<OrderProduct[]>('http://localhost:5168/QueueProduct?restaurantId='+`${restaurantid}`, this.httpOptions);
  }

  public getOnProgressProducts(restaurantid:number): Observable<OrderProduct[]>
  {
    return this.http.get<OrderProduct[]>('http://localhost:5168/OnProgressProduct?restaurantId='+`${restaurantid}`, this.httpOptions);
  }

  public getForDeliveryProducts(restaurantid:number): Observable<OrderProduct[]>
  {
    return this.http.get<OrderProduct[]>('http://localhost:5168/ForDeliveryProduct?restaurantId='+`${restaurantid}`, this.httpOptions);
  }

  public updateOrderProducts(orderProduct : OrderProductPatchDTO[])
  {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    });

    return this.http.patch('http://localhost:5168/OrderProduct',orderProduct,{headers});
  }

  public getAllRestaurant(): Observable<Restaurant[]>
  {
    return this.http.get<Restaurant[]>('http://localhost:5168/Restaurant',this.httpOptions);
  }

}
