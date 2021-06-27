import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product/product.service';
import {RegisterService} from './services/register/register.service';
import { UsersService } from './services/users-manager/users-manager.service';
import {OrdersManagerService} from './services/orders-manager/orders-manager.service';
import {OrderService} from './services/order/order.service';
import {LoginService} from './services/login/login.service'
import {CategoryManagerService} from './services/categories/category-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { ClientOrderStatusComponent } from './components/client-order-status/client-order-status.component';
import { ClientOrderService } from './services/client-order.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ProductService,
    RegisterService,
    UsersService,
    OrdersManagerService,
    LoginService,
    ClientOrderService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
