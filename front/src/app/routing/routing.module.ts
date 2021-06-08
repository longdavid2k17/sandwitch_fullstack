import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { ProductsManagerComponent } from '../components/admin/products-manager/products-manager.component';
import { UserManagerComponent } from '../components/admin/user-manager/user-manager.component';
import { CategoryManagerComponent } from '../components/admin/category-manager/category-manager.component';
import { OrderManagerComponent } from '../components/admin/order-manager/order-manager.component';
import { Custom404Component } from '../components/custom404/custom404.component';
import { ProductCategoryMenuComponent } from '../components/product-category-menu/product-category-menu.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { ClientOrderComponent } from '../components/client-order/client-order.component';

//Import components, declare components, add routes and export components
const routes: Routes = [
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'search/:keyword', component: ProductListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
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
  ],
})
export class RoutingModule {}
