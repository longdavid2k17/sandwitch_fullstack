import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryForm:FormGroup;
  categoryName:string="";
  id_product_category:number;
  
  constructor(private router:Router,private formBuilder:FormBuilder) {
    this.categoryName=this.router.getCurrentNavigation()?.extras?.state?.data.name;
    this.id_product_category =
      this.router.getCurrentNavigation()?.extras?.state?.data.position;
    this.categoryForm=this.formBuilder.group({
      category: [this.categoryName,[Validators.required]],
      id_product_category: [this.id_product_category]
    })
   }

  ngOnInit(): void {
  }

  updateCategory(){
    if(!this.categoryForm.valid) return;

    //TODO: go to service
    console.log(this.categoryForm.value)
  }

}
