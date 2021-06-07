
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'products/:id',component:ProductDetailsComponent},
  {path: 'search/:keyword',component:ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '',redirectTo: '/products',pathMatch:'full'},
  {path: '**',redirectTo: '/products',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent, 
    ProductCategoryMenuComponent,
     ProductListComponent, 
     ProductDetailsComponent],
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
