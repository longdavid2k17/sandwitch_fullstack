import { Component, OnInit,Input } from '@angular/core';
import { OrdersManagerService } from 'src/app/services/orders-manager/orders-manager.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() orderData:any;
  constructor(private OrderManager:OrdersManagerService) {}

  ngOnInit(): void {}

  changeStatus(trackingNumber:string){
    this.OrderManager.updateOrder(trackingNumber)
  }

}
