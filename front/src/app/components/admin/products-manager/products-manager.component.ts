import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

//component created for table with pagination and filter to manage products
//service product/product.service

export interface ProductElement {
  id: number;
  name: string;
  unit_price: number;
  available: boolean;
  category: string;
}

const ELEMENT_DATA: ProductElement[] = [
  { id: 1, name: 'Cat1', unit_price: 12, available: true, category: 'aaa' },
  { id: 2, name: 'Cat2', unit_price: 12, available: true, category: 'aaa' },
  { id: 3, name: 'Cat3', unit_price: 12, available: true, category: 'aaa' },
  { id: 4, name: 'Cat4', unit_price: 12, available: true, category: 'aaa' },
  { id: 5, name: 'Cat5', unit_price: 12, available: true, category: 'aaa' },
  { id: 6, name: 'Cat6', unit_price: 12, available: true, category: 'aaa' },
];
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
    'category',
    'action',
  ];
  dataSource = new MatTableDataSource<ProductElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {}

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

  addProduct(){
    //TODO:
    //send to service
    console.log(this.productName,this.price,this.category)
  };
}
