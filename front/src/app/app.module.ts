import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsManagerComponent } from './components/admin/products-manager/products-manager.component';
import { UserManagerComponent } from './components/admin/user-manager/user-manager.component';
import { CategoryManagerComponent } from './components/admin/category-manager/category-manager.component';
import { OrderManagerComponent } from './components/admin/order-manager/order-manager.component';
import { Custom404Component } from './components/custom404/custom404.component';

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
  declarations: [
    AppComponent,
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
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
