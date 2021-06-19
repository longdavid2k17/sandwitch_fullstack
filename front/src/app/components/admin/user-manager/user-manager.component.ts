import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {Router} from "@angular/router"
import {
  UsersService,
  User,
} from 'src/app/services/users-manager/users-manager.service';

//component created for table with pagination and filter to manage users in app
//service users-manager/users-manager.service
@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css'],
})
export class UserManagerComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'last_name',
    'email',
    'role',
    'phone_number',
    'action',
  ];

  dataSource = new MatTableDataSource<User>();
  
  constructor(private router: Router,private userService:UsersService) {}
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data)=>{
      this.dataSource.data=data
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

  updateUser(row: any) {
    this.router.navigate(['user-manager/edit-user'], {
      state: { data: row },
    });
  }

  deleteUser(row: any) {
    this.userService.deleteUser(row).subscribe(data=>{
      console.log(data)
    })
  }
}
