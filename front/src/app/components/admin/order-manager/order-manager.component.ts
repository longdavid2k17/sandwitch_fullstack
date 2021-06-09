import { Component, OnInit } from '@angular/core';

//component created for display and manage orders to prepare and manage their status
//service orders-manager/orders-manager.service
@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
