import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderProduct } from 'src/app/Auth/models/OrderProduct';
import { OrderProductPatchDTO } from 'src/app/Auth/models/OrderProductPatchDTO';

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

  public updateOrderProducts(orderProduct : OrderProductPatchDTO): void
  {
    this.http.put<void>('http://localhost:5168/OrderProduct',orderProduct,this.httpOptions);
  }

  public creater() : void {
    let order = {
    userEmail: "f@gf.com",
    orderId: 10,
    productID: 10
    }
    this.http.post<void>('http://localhost:5168/OrderProduct', order ,this.httpOptions);
  }

  
}
