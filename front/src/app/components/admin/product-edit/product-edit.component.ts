import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm:FormGroup;
  productId:number|undefined;

  constructor(private router:Router,private formBuilder:FormBuilder,private productService:ProductService) {
    //TODO: get by ID from api
    //TODO: get all categories from API with ID
    console.log(router.getCurrentNavigation()?.extras.state?.data)
    let productData = router.getCurrentNavigation()?.extras.state?.data;
    console.log(productData.name)
    
    this.productForm = this.formBuilder.group({
      name: [productData.name, [Validators.required]],
      description: [productData.description, [Validators.required]],
      unit_price: [productData.unit_price, [Validators.required]],
      image_url: [productData.imgUrl, [Validators.required]],
      available: [productData.available, [Validators.required]],
      category_id: [null, [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  updateProduct(){
    if (!this.productForm.valid) return;
    this.productService.updateProduct(this.productForm.value);
  }

}
