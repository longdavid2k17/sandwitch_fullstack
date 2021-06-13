import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface UserElement{
  id:number;
  name:string;
  last_name:string;
  email:string;
  role:string;
  phone_number:number;
}

const ELEMENT_DATA: UserElement[] = [
  {
    id: 1,
    name: 'Name1',
    last_name: 'Last1',
    email: 'a@a.pl',
    role: 'admin',
    phone_number: 123456789,
  },
  {
    id: 2,
    name: 'Name1',
    last_name: 'Last1',
    email: 'a@a.pl',
    role: 'admin',
    phone_number: 123456789,
  },
  {
    id: 3,
    name: 'Name1',
    last_name: 'Last1',
    email: 'a@a.pl',
    role: 'admin',
    phone_number: 123456789,
  },
  {
    id: 4,
    name: 'Name1',
    last_name: 'Last1',
    email: 'a@a.pl',
    role: 'admin',
    phone_number: 123456789,
  },
  {
    id: 5,
    name: 'Name1',
    last_name: 'Last1',
    email: 'a@a.pl',
    role: 'admin',
    phone_number: 123456789,
  },
  {
    id: 6,
    name: 'Name1',
    last_name: 'Last1',
    email: 'a@a.pl',
    role: 'admin',
    phone_number: 123456789,
  },
];
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

  dataSource = new MatTableDataSource<UserElement>(ELEMENT_DATA);
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
}
