import { Component, OnInit } from '@angular/core';

//component created for table with pagination and filter to manage products
//service product/product.service
@Component({
  selector: 'app-products-manager',
  templateUrl: './products-manager.component.html',
  styleUrls: ['./products-manager.component.css']
})
export class ProductsManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
