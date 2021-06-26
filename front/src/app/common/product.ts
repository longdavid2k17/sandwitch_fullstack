import { ProductCategory } from "./product-category";

export class Product {
    id:number=0;
    name:string='';
    description:string='';
    unit_price:number=0;
    imgUrl:string='';
    available:boolean=false;
    category!:ProductCategory;
    
}
