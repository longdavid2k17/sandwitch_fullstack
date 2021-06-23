import { AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoryManagerService } from 'src/app/services/categories/category-manager.service';

export interface CategoryElement {
  name: string;
  id: number;
}

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css'],
})
export class CategoryManagerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<CategoryElement>();

  newCategoryName: string = '';

  constructor(
    private router: Router,
    private categoryManager: CategoryManagerService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.categoryManager.getAllCategories().subscribe((data: any) => {
      this.dataSource.data=data;
    });
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

  addCategory(name: string) {
    this.newCategoryName="";
    this.categoryManager.createCategory(name).subscribe(data=>{
      console.log(data)
    })
    window.location.reload();
  }
  editCategory(row: any) {
    this.router.navigate(['category-manager/edit-category'], {
      state: { data: row },
    });
  }
  deleteCategory(row: any) {
    this.categoryManager.deleteCategory(row.id).subscribe(data=>{
      console.log(data)
    })
    window.location.reload();
  }
}
