import { Component, OnInit } from '@angular/core';
import { ClientOrderService } from 'src/app/services/client-order.service';

@Component({
  selector: 'app-client-order-status',
  templateUrl: './client-order-status.component.html',
  styleUrls: ['./client-order-status.component.css']
})
export class ClientOrderStatusComponent implements OnInit {

  totalPrice:number=0.00;
  totalQuantity:number=0;
  constructor(private clientService:ClientOrderService) { }

  ngOnInit(): void {
    this.updateCartStatus()
  }
  updateCartStatus() {
    this.clientService.totalPrice.subscribe(
      data=>this.totalPrice=data
    );
    this.clientService.totalQuantity.subscribe(
      data=>this.totalQuantity=data
    );

  }

}
