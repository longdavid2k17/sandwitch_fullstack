import { Component, OnInit } from '@angular/core';
import { OrdersManagerService } from 'src/app/services/orders-manager/orders-manager.service';

//component created for display and manage orders to prepare and manage their status
//service orders-manager/orders-manager.service
@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css'],
})
export class OrderManagerComponent implements OnInit {

  orders:any
  constructor(private OrdersManager:OrdersManagerService) {}

  ngOnInit(): void {
    this.OrdersManager.getAllOrders().subscribe(data=>{
      console.log(data)
      this.orders=data
    })
  }
}
