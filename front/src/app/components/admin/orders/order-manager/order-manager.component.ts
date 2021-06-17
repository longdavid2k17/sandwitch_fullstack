import { Component, OnInit } from '@angular/core';

//component created for display and manage orders to prepare and manage their status
//service orders-manager/orders-manager.service
@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css'],
})
export class OrderManagerComponent implements OnInit {
  
  OrdersMock = [
    {
      order_tracking_number: '1',
      total_price: 21,
      total_quantity: 10,
      status: 0,
      date_created: '27-10-2122',
    },
    {
      order_tracking_number: '2',
      total_price: 21,
      total_quantity: 10,
      status: 0,
      date_created: '27-10-2122',
    },
    {
      order_tracking_number: '3',
      total_price: 21,
      total_quantity: 10,
      status: 0,
      date_created: '27-10-2122',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
