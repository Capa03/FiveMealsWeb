import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http : HttpClient) { }

  public getQueueProducts(){}

  public getOnProgressProducts(){}

  public getForDeliveryProducts(){}

  public updateOrderPrdoucts(){}
}
