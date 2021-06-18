import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm:FormGroup
 /* name:string;
  last_name:string;
  email:string;
  role:string;
  phone_number:number;*/

  constructor(private router:Router,private formBuilder:FormBuilder) { 
    console.log(router.getCurrentNavigation()?.extras.state?.data);

    //TODO: connect to BE
    this.userForm=this.formBuilder.group({
      name: [null,[Validators.required]],
      last_name: [null,[Validators.required]],
      email: [null,[Validators.required]],
      role: [null,[Validators.required]],
      phone_number:[null,[Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  updateUser(){
    //TODO: connect to BE
  }

}
