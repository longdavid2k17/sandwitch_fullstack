import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryManagerService } from 'src/app/services/categories/category-manager.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryForm:FormGroup;
  categoryName:string="";
  id_product_category:number;
  categories:any;
  category:any;
  
  constructor(private router:Router,private formBuilder:FormBuilder,private categoryManager:CategoryManagerService) {
    this.categoryName=this.router.getCurrentNavigation()?.extras?.state?.data.name;
    this.id_product_category =
      this.router.getCurrentNavigation()?.extras?.state?.data.id;
    this.categoryForm=this.formBuilder.group({
      category: [this.categoryName,[Validators.required]],
      id_product_category: [this.id_product_category]
    })
   }

  ngOnInit(): void {
    this.categoryManager.getAllCategories().subscribe((data:any)=>{
      this.categories=data;})
  }

  updateCategory(){
    if(!this.categoryForm.valid) return;
    this.categoryManager
      .updateCategory(this.categoryForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  }

}

