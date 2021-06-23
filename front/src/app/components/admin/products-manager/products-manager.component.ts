import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
  dataSource = new MatTableDataSource<Product>();

  categories:any;

  constructor(private router: Router,private productService:ProductService,private categoryService:CategoryManagerService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data:Product[])=>{
      console.log(data)
      this.dataSource.data=data
    })
    this.categoryService.getAllCategories().subscribe((data:any)=>{
      console.log(data)
      this.categories=data;
    })
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

  productName: string = '';
  price: number = 0;
  category: string = '';

  addProduct() {
    this.productService.addProduct(this.productName, this.price, this.category).subscribe((data:any)=>{
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
