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
  departmentId;
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
    this.validateForm.reset();
  }
  getAllDepartments():void{
    this._AuthService.getAllDepartments().subscribe(
      (data:any)=>{
        this.departments = data.payload;
        this.departments = [...this.departments];
      }
    );
  }
  editDepartment(data:Department):void{
    this.validateForm.controls['name'].setValue(data.name);
    this.departmentId = data.id;
    this.showModal();
  }
  submitForm(): void {
    
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(this.validateForm.status === this._AuthService.formStatus)
    {
      this.isConfirmLoading = true;
      this.Department = new Department(this.validateForm.value);
      if(this.departmentId)
      {
        this.Department.id = this.departmentId;
        this.updateDepartment(this.Department);
      }
      else
      {
        this.addDepartment(this.Department);
      }
    }
  }
  addDepartment(Department:Department):void{
    this._AuthService.addDepartment(this.Department).subscribe(
      (data:any)=>{
        this.successOrErrorHandle(true,data.payload.message,data.status.toLowerCase());
        this.getAllDepartments();
      },
      error=>{
        this.successOrErrorHandle(false,this._AuthService.errorMessage,this._AuthService.error);
      }
    );
  }
  updateDepartment(Department:Department):void{
    this._AuthService.updateDepartment(this.Department).subscribe(
      (data:any)=>{
        this.successOrErrorHandle(true,data.payload.message,data.status.toLowerCase());
        this.getAllDepartments();
        this.departmentId = undefined;
      },
      error=>{
        this.successOrErrorHandle(false,this._AuthService.errorMessage,this._AuthService.error);
      }
    );
  }
  successOrErrorHandle(isSuccess:boolean,message:string,status:string):void{
    if(isSuccess)
    {
      this.isConfirmLoading = false;
      this.isVisible = false;
      this.notification.create(status, 'HRMS', message, { nzDuration: 2000 });
      this.validateForm.reset();
    }
    else
    {
      this.isConfirmLoading = false;
      this.notification.create(status, 'HRMS', message, { nzDuration: 2000 });
      this.validateForm.reset();
    }
  }
  ngOnInit(): void {
    this.getAllDepartments();
    this.validateForm = this.fb.group({
      name: [ null, [ Validators.required ] ]
    });
  }

}

