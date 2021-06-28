import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/common/product-category';
import { CategoryManagerService } from 'src/app/services/categories/category-manager.service';
import { ProductService } from 'src/app/services/product/product.service';
import {Product} from "../../../common/product"

//component created for table with pagination and filter to manage products
//service product/product.service
@Component({
  selector: 'app-products-manager',
  templateUrl: './products-manager.component.html',
  styleUrls: ['./products-manager.component.css'],
})
export class ProductsManagerComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'unit_price',
    'available',
    'action',
  ];
  productFormGroup!:FormGroup;
  dataSource = new MatTableDataSource<Product>();
  //product:Product[]=[] ;
  categories:ProductCategory[]=[] ;
  //storage:Storage =sessionStorage;

  constructor(private router: Router,private productService:ProductService,private categoryService:CategoryManagerService,private formBuilder:FormBuilder) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data:Product[])=>{
      this.dataSource.data=data
    })
    this.productService.getProductCategories().subscribe(data=>{
      this.categories=data;
    })
    this.productFormGroup=this.formBuilder.group(
      {
        product:this.formBuilder.group(
          {
            name:new FormControl('',[Validators.required,Validators.minLength(2)]),
            description:new FormControl('',[Validators.required,Validators.minLength(2)]),
            unit_price:new FormControl('',[Validators.required,Validators.minLength(2)]),
            available:new FormControl('',[Validators.required,Validators.minLength(2)]),
            imgUrl:new FormControl('',[Validators.required,Validators.minLength(2)]),
            category:new FormControl('1',[Validators.required,Validators.minLength(2)])
          }
        )
      }
    )

  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  get name(){return this.productFormGroup.get('product.name')};
  get description(){return this.productFormGroup.get('product.description')};
  get unit_price(){return this.productFormGroup.get('product.unit_price')};
  get available(){return this.productFormGroup.get('product.available')};
  get imgUrl(){return this.productFormGroup.get('product.imgUrl')};
  get categoryProduct(){return this.productFormGroup.get('product.category')}

  
 
  addProduct() {
   // this.product.name=this.productName;
    let product = new Product();
    product=this.productFormGroup.controls['product'].value;
    console.log(product)
    this.productService.addProduct(product).subscribe((data:any)=>{
      console.log(data)
    })
  }

  editProduct(row: any) {
    this.router.navigate(['products-manager/edit-product'], {
      state: { data: row },
    });
  }
  deleteProduct(row: any) {
    this.productService.deleteProduct(row.id).subscribe((data)=>{
      console.log(data)
    })
  }
}
