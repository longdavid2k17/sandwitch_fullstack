import { Product } from "./product";

export class CartItem {
    id:number=0;
    name:string="";
    imageUrl:string="";
    unitPrice:number=0;
    quantity:number=0;
    constructor(product:Product)
    {
        this.id=product.id;
        this.name=product.name;
        this.imageUrl=product.imgUrl;
        this.unitPrice=product.unit_price;
        this.quantity=1;
    }
}
