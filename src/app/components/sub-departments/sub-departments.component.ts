import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import {Designation,IDesignation} from '../../models/DesignationModel';
import { AuthService } from 'src/app/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Department } from '../../models/DepartmentModel';
import { SubDepartment } from '../../models/SubDepartmentModel';

@Component({
  selector: 'app-sub-departments',
  templateUrl: './sub-departments.component.html',
  styleUrls: ['./sub-departments.component.scss']
})
export class SubDepartmentsComponent implements OnInit {
  validateForm: FormGroup;
  isVisible = false;
  isConfirmLoading = false;
  SubDepartment:SubDepartment;
  department:Department;
  subDepartments:SubDepartment[];
  departments:Department[];
  
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
  submitForm(): void {
    
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(this.validateForm.status === "VALID")
    {
      this.isConfirmLoading = true;
      this.SubDepartment = new SubDepartment(this.validateForm.value);
      this._AuthService.addSubDepartment(this.SubDepartment ).subscribe(
        (data:any)=>{
          if(data.status === "SUCCESS")
          {
            this.isConfirmLoading = false;
            this.isVisible = false;
            this.notification.create('success','HRMS', 'Sub Department added successfully!', { nzDuration: 2000 });
            this.getAllSubDepartments();
            this.validateForm.reset();
          }
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
  getAllDepartments():void{
    this._AuthService.getAllDepartments().subscribe(
      (data:any)=>{
        this.departments = data.payload;
        this.departments = [...this.departments];
      }
    );
  }
  getAllSubDepartments():void{
    this._AuthService.getAllSubDepartments().subscribe(
      (data)=>{
        this.subDepartments = data.payload;
      },error=>{
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
    this.getAllDepartments();
    this.getAllSubDepartments();
    this.validateForm = this.fb.group({
      name: [ null, [ Validators.required ] ],
      department :[null,[Validators.required]]
    });
  }

}
