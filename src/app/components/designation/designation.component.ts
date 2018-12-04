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

  constructor(private fb: FormBuilder, private _AuthService: AuthService, private notification: NzNotificationService) {
    this.notification.config({
      nzTop: '70px'
    });
  }

  showModal(): void {
    this.isVisible = true;
  }
  editDesignation(data:Designation):void{
    this.selectedDepartment =  (data.department);
    this.validateForm.controls['name'].setValue(data.name);
    this.showModal();
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  submitForm(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.status === "VALID") {
      this.isConfirmLoading = true;
      this.Designation = new Designation(this.validateForm.value);
      this._AuthService.addDesignation(this.Designation).subscribe(
        (data: any) => {
          if (data.status === "SUCCESS") {
            this.isConfirmLoading = false;
            this.isVisible = false;
            this.notification.create('success', 'HRMS', 'Designation added successfully!', { nzDuration: 2000 });
            this.getAllDesignations();
            this.validateForm.reset();
          }
        },
        error => {
          console.log(error);
          this.isConfirmLoading = false;
          this.isVisible = false;

          this.notification.create('error', 'HRMS', 'Some error occurred', { nzDuration: 2000 }, );
        }
      );
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
