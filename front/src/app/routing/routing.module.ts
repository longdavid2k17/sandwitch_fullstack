import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { ProductsManagerComponent } from '../components/admin/products-manager/products-manager.component';
import { UserManagerComponent } from '../components/admin/user-manager/user-manager.component';
import { CategoryManagerComponent } from '../components/admin/category-manager/category-manager.component';
import { OrderManagerComponent } from '../components/admin/orders/order-manager/order-manager.component';
import { Custom404Component } from '../components/custom404/custom404.component';
import { ProductCategoryMenuComponent } from '../components/product-category-menu/product-category-menu.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { ClientOrderComponent } from '../components/client-order/client-order.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { OrderItemComponent } from '../components/admin/orders/order-item/order-item.component';

//Import components, declare components, add routes and export components
const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
    ],
  },
  { path: 'order', component: ClientOrderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'category-manager', component: CategoryManagerComponent },
  { path: 'order-manager', component: OrderManagerComponent },
  { path: 'products-manager', component: ProductsManagerComponent },
  { path: 'user-manager', component: UserManagerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    ProductCategoryMenuComponent,
    ProductListComponent,
    ProductDetailsComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
    ProductsManagerComponent,
    UserManagerComponent,
    CategoryManagerComponent,
    OrderManagerComponent,
    Custom404Component,
    ClientOrderComponent,
    OrderItemComponent,
  ],
  declarations: [
    ProductCategoryMenuComponent,
    ProductListComponent,
    ProductDetailsComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
    ProductsManagerComponent,
    UserManagerComponent,
    CategoryManagerComponent,
    OrderManagerComponent,
    Custom404Component,
    ClientOrderComponent,
    OrderItemComponent,
  ],
})
export class RoutingModule {}
