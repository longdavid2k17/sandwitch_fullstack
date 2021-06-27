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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderItemComponent } from '../components/admin/orders/order-item/order-item.component';
import { CategoryEditComponent } from '../components/admin/category-edit/category-edit.component';
import { ProductEditComponent } from '../components/admin/product-edit/product-edit.component';
import { UserEditComponent } from '../components/admin/user-edit/user-edit.component';
import { ClientOrderStatusComponent } from '../components/client-order-status/client-order-status.component';

//Import components, declare components, add routes and export components
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
    ],
  },
 
  { path: 'client-order', component: ClientOrderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'category-manager',
    children: [
      { path: '', component: CategoryManagerComponent },
      { path: 'edit-category', component: CategoryEditComponent },
    ],
  },
  { path: 'order-manager', component: OrderManagerComponent },
  {
    path: 'products-manager',
    children: [
      { path: '', component: ProductsManagerComponent },
      { path: 'edit-product', component: ProductEditComponent },
    ],
  },
  {
    path: 'user-manager',
    children: [
      { path: '', component: UserManagerComponent },
      { path: 'edit-user', component: UserEditComponent },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
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
    CategoryEditComponent,
    ProductEditComponent,
    ClientOrderStatusComponent,
    UserEditComponent,
    
    
   
    
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
    CategoryEditComponent,
    ProductEditComponent,
    UserEditComponent,
    ClientOrderStatusComponent
   
  ],
})
export class RoutingModule {}
