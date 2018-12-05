import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Designation, IDesignation } from '../../models/DesignationModel';
import { AuthService } from 'src/app/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Department } from '../../models/DepartmentModel';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {
  validateForm: FormGroup;
  isVisible = false;
  isConfirmLoading = false;
  Designation: Designation;
  departments: Department[];
  designations: Designation[];
  selectedDepartment = {};
  designationId;

  constructor(private fb: FormBuilder, private _AuthService: AuthService, private notification: NzNotificationService) {
    this.notification.config({
      nzTop: '70px'
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  editDesignation(data:Designation):void{
    let depIndex = -1;
    this.departments.map((item,index)=>{
      if(item.name === data.department.name)
        depIndex = index;
    });
    this.validateForm.controls['department'].setValue(this.departments[depIndex]);
    this.validateForm.controls['name'].setValue(data.name);
    this.designationId = data.id;
    this.showModal();
  }
  handleCancel(): void {
    this.validateForm.reset();
    this.isVisible = false;
  }
  submitForm(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.status === this._AuthService.formStatus) {
      this.isConfirmLoading = true;
      this.Designation = new Designation(this.validateForm.value);
      
      if(this.designationId)
      {
        this.Designation.id = this.designationId;
        this.updateDesignation(this.Designation);
      }
      else
      {
        this.addDesignation(this.Designation);
      }
    }
  }
  addDesignation(designation:Designation):void{
    this._AuthService.addDesignation(designation).subscribe(
      (data: any) => {
        this.successOrErrorHandle(true,data.payload.message,data.status.toLowerCase());
        this.getAllDesignations();
      },
      error => {
        console.log(error);
        this.successOrErrorHandle(false,this._AuthService.errorMessage,this._AuthService.error);
        this.getAllDesignations();
      }
    );
  }
  updateDesignation(designation:Designation):void{
    this._AuthService.updateDesignation(designation).subscribe(
      (data: any) => {
        this.successOrErrorHandle(true,data.payload.message,data.status.toLowerCase());
        this.getAllDesignations();
        this.designationId = undefined;
      },
      error => {
        console.log(error);
        this.successOrErrorHandle(false,this._AuthService.errorMessage,this._AuthService.error);
        this.getAllDesignations();
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
  getAllDepartments(): void {
    this._AuthService.getAllDepartments().subscribe(
      (data: any) => {
        this.departments = data.payload;
      }
    );
  }
  getAllDesignations(): void {
    this._AuthService.getAllDesignation().subscribe(
      (data) => {
        this.designations = data.payload
      }, error => {
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
    this.getAllDepartments();
    this.getAllDesignations();
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      department: [null, [Validators.required]]
    });
  }

}
