import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { ClientOrderService } from 'src/app/services/client-order.service';

//component created to manage client order
//client can check order status
//add address
//service order/order.service
@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.css']
})
export class ClientOrderComponent implements OnInit {

  cartItems:CartItem[]=[];
  totalPrice:number=0;
  totalQuantity:number=0;
  constructor(private clientService:ClientOrderService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
    this.cartItems=this.clientService.cartItems;
    this.clientService.totalPrice.subscribe(
      data=>this.totalPrice=data
    );
    this.clientService.totalQuantity.subscribe(
      data=>this.totalQuantity=data
    );
    this.clientService.computeCartTotals();
  }
  incrementQuantity(theCartItem:CartItem)
  {
this.clientService.addToCart(theCartItem);
  }
  decrementQuantity(theCartItem:CartItem)
  {
    this.clientService.decrementQuantity(theCartItem);
  }
  remove(theCartItem:CartItem)
  {
    this.clientService.remove(theCartItem);
  }
}
