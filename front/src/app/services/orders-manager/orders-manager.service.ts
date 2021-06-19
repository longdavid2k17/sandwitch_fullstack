import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class OrdersManagerService {
  private ordersUrl = 'http://localhost:8080/api/orders';

  constructor(private httpClient: HttpClient) {}

  //READ
  getAllOrders(){
    return this.httpClient.get<any>(this.ordersUrl)
    .pipe(map((response)=>response._embedded.orders))
  }
  //UPDATE
  updateOrder(trackingNumber:string){
    return this.httpClient.put<any>(this.ordersUrl,{trackingNumber})
  }
}
