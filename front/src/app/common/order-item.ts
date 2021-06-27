import { CartItem } from "./cart-item";

export class OrderItem {
    unitPrice:number=0;
    quantity:number=0;
    productId:number=0;
    constructor(carItem:CartItem)
    {
        
        this.quantity=carItem.quantity;
        this.unitPrice=carItem.unitPrice;
        this.productId=carItem.id;
    }
}
