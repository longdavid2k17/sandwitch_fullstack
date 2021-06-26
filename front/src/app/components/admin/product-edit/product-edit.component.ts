import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { CategoryManagerService } from 'src/app/services/categories/category-manager.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  productId!: number ;
  categoryid!: number;
  categories: ProductCategory[]=[];
  

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryManager: CategoryManagerService
  ) {
    this.productService.getProductCategories().subscribe(data=>{
      this.categories=data;
    })
    //let product =productService.getProduct(1);
    let productData = new Product();
    productData = router.getCurrentNavigation()?.extras.state?.data;
    
  
    this.productForm=this.formBuilder.group(
      {
        
        product:this.formBuilder.group(
          {
            id:new FormControl(productData.id,[Validators.required,Validators.minLength(2)]),
            name:new FormControl(productData.name,[Validators.required,Validators.minLength(2)]),
            description:new FormControl(productData.description,[Validators.required,Validators.minLength(2)]),
            unit_price:new FormControl(productData.unit_price,[Validators.required,Validators.minLength(2)]),
            available:new FormControl(productData.available,[Validators.required,Validators.minLength(2)]),
            imgUrl:new FormControl(productData.imgUrl,[Validators.required,Validators.minLength(2)]),
           // category:new FormControl(1,[Validators.required,Validators.minLength(2)])
          }
        )
      }
    )
   

    //TODO: get by ID from api
    //TODO: get all categories from API with ID
    /*
    console.log(router.getCurrentNavigation()?.extras.state?.data);
    let productData = router.getCurrentNavigation()?.extras.state?.data;
    console.log(productData.name);

    this.productForm = this.formBuilder.group({
      name: [productData.name, [Validators.required]],
      description: [productData.description, [Validators.required]],
      unit_price: [productData.unit_price, [Validators.required]],
      image_url: [productData.imgUrl, [Validators.required]],
      available: [productData.available, [Validators.required]],
      category_id: [this.categoryid, [Validators.required]],
    });*/
  }

  get id(){return this.productForm.get('product.id')};
  get name(){return this.productForm.get('product.name')};
  get description(){return this.productForm.get('product.description')};
  get unit_price(){return this.productForm.get('product.unit_price')};
  get available(){return this.productForm.get('product.available')};
  get imgUrl(){return this.productForm.get('product.imgUrl')};
  //get categoryProduct(){return this.productForm.get('product.category')}
  ngOnInit(): void {
    this.categoryManager.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  updateProduct() {
  
    let product = new Product();
    product=this.productForm.controls['product'].value;
    console.log(`id:${product.id}`)
    
    this.productService.updateProduct(product,product.id).subscribe((data:any)=>{
      console.log(data)
    });
  }
}
