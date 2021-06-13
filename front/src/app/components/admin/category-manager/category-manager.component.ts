import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface CategoryElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: CategoryElement[] = [
  { position: 1, name: 'Cat1' },
  { position: 2, name: 'Cat2' },
  { position: 3, name: 'Cat3' },
  { position: 4, name: 'Cat4' },
  { position: 5, name: 'Cat5' },
  { position: 6, name: 'Cat6' },
];

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css'],
})
export class CategoryManagerComponent {
  displayedColumns: string[] = ['position', 'name','action'];
  dataSource = new MatTableDataSource<CategoryElement>(ELEMENT_DATA);

  newCategoryName:string='';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

  addCategory(name:string){
    //TODO: go to service
    console.log(name)
  }
}
