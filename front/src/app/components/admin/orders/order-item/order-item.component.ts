import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() orderData:any;
  constructor() {}

  ngOnInit(): void {}

  changeStatus(trackingNumber:string){
    //TODO:
    //call to api to change order number
    console.log("Zmiana", trackingNumber)
  }

}
