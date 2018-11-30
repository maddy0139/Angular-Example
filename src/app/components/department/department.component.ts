import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import {Department,IDepartment} from '../../models/DepartmentModel';
import { AuthService } from 'src/app/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  validateForm: FormGroup;
  isVisible = false;
  isConfirmLoading = false;
  Department:Department;
  departments=[];
  constructor(private fb: FormBuilder, private _AuthService:AuthService,private notification:NzNotificationService) {
    this.notification.config({
      nzTop:'70px'
    });
  }

  showModal(): void {
    this.isVisible = true;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  getAllDepartments():void{
    this._AuthService.getAllDepartments().subscribe(
      (data:any)=>{
        this.departments = data.payload;
        this.departments = [...this.departments];
      }
    );
  }
  submitForm(): void {
    
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(this.validateForm.status === "VALID")
    {
      this.isConfirmLoading = true;
      this.Department = new Department(this.validateForm.value);
      this._AuthService.addDepartment(this.Department).subscribe(
        (data:any)=>{
          this.isConfirmLoading = false;
          this.isVisible = false;
          if(data.status === "SUCCESS")
          {
            this.notification.create('success','HRMS', 'Department added successfully!', { nzDuration: 2000 });
          }
          this.departments = [];
          this.getAllDepartments();
          this.validateForm.reset();
        },
        error=>{
          console.log(error);
          this.isConfirmLoading = false;
          this.isVisible = false;
          this.notification.create('error','HRMS', 'Some error occurred', { nzDuration: 2000},);
        }
      );
    }
  }
  ngOnInit(): void {
    this.getAllDepartments();
    this.validateForm = this.fb.group({
      name: [ null, [ Validators.required ] ]
    });
  }

}

