import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class ClientOrderService {

  cartItems: CartItem[]=[];
  totalPrice:Subject<number>=new BehaviorSubject<number>(0);
  totalQuantity:Subject<number>=new BehaviorSubject<number>(0);

  //storage:Storage = sessionStorage;
  storage:Storage = localStorage;

  constructor() {

    let data = JSON.parse(this.storage.getItem('cartItems')!);
    if(data!=null)
    {
      this.cartItems=data;
      this.computeCartTotals();
    }
   }

  addToCart(theCartItem:CartItem)
  {
    let alredyExistsInCart:boolean=false;
    let existingCartItem:CartItem;

    if(this.cartItems.length>0)
    {
      existingCartItem=this.cartItems.find(tempCartItem=>tempCartItem.id==theCartItem.id)!;
      alredyExistsInCart=(existingCartItem!=undefined);

    }
    if(alredyExistsInCart)
    {
      existingCartItem!.quantity++;
    }else{
      this.cartItems.push(theCartItem);
    }
    this.computeCartTotals();
  }
  computeCartTotals()
  {
    let totalPriceValue:number=0;
    let totalQuantityValue:number=0;

    for(let currentCartItem of this.cartItems)
    {
      totalPriceValue+=currentCartItem.quantity*currentCartItem.unitPrice;
      totalQuantityValue+=currentCartItem.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCartData(totalPriceValue,totalQuantityValue);

    this.presistCartItems();
  }
  presistCartItems()
  {
    this.storage.setItem('cartItems',JSON.stringify(this.cartItems));
  }
  logCartData(totalPriceValue:number,totalQuantityValue:number)
  {
    console.log('Contents of the cart');
    for(let tempCartItem of this.cartItems)
    {
      const subTotalPrice =tempCartItem.quantity*tempCartItem.unitPrice;
      console.log(`name${tempCartItem.name},quantity=${tempCartItem.quantity}, price=${tempCartItem.unitPrice},subTotalPrice=${subTotalPrice}`);
      console.log(`totalPrice: ${totalPriceValue.toFixed(2)}`)
      console.log('------');
    }
  }
  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;
    if(theCartItem.quantity==0)
    {
      this.remove(theCartItem);
    }
    else{
      this.computeCartTotals();
    }
  }
  remove(theCartItem: CartItem) {
    const itemIndex = this.cartItems.findIndex(tempCartItem=>tempCartItem.id==theCartItem.id);

    if(itemIndex>-1)
    {
      this.cartItems.splice(itemIndex,1);
      this.computeCartTotals();
    }
  }
}
