import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users-manager/users-manager.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm:FormGroup

  constructor(private router:Router,private formBuilder:FormBuilder,private userManager:UsersService) {
   const {id,name,last_name,phone_number,role,email} =router.getCurrentNavigation()?.extras.state?.data;

    this.userForm = this.formBuilder.group({
      name: [name, [Validators.required]],
      last_name: [last_name, [Validators.required]],
      email: [email, [Validators.required]],
      role: [role, [Validators.required]],
      phone_number: [phone_number, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  updateUser(){
    if (!this.userForm.valid) return;
    this.userManager.updateUser(this.userForm.value).subscribe((data)=>{console.log(data)});
  }

}
