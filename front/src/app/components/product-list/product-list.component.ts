import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { ClientOrderService } from 'src/app/services/client-order.service';
import { ProductService } from 'src/app/services/product/product.service';

//service product/product.service
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]=[];
  currentCategoryId: number=0;

  searchMode: boolean=false;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,private clientService:ClientOrderService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
        console.log(data);
      }
    )
  }

  handleListProducts() {


    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
    }

    // now get the products for the given category id
    this.productService.getProductsList(this.currentCategoryId).subscribe(
      data => {
        console.log(data);
        this.products = data;
      }
    )
  }

  addToCart(theProduct:Product){
    console.log(`Adding to cart:${theProduct.name},${theProduct.unit_price}`);
    const theCartItem= new CartItem(theProduct);

    this.clientService.addToCart(theCartItem);
  }
}
