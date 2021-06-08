import { Component, OnInit } from '@angular/core';

//component created for table with pagination and filter to manage users in app
//service users-manager/users-manager.service
@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
