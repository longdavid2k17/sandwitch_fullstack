import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm:FormGroup;
  productId:number;

  constructor(private router:Router,private formBuilder:FormBuilder) {
    //TODO: get by ID from api
    //TODO: get all categories from API with ID
    console.log(router.getCurrentNavigation()?.extras.state?.data)
    this.productId = router.getCurrentNavigation()?.extras.state?.data;
    
    this.productForm=this.formBuilder.group({
      name: [null,[Validators.required]],
      description: [null,[Validators.required]],
      unit_price:[null,[Validators.required]],
      image_url:[null,[Validators.required]],
      available:[null,[Validators.required]],
      category_id: [null,[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  updateProduct(){
    
  }

}
