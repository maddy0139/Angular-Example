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

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {
  validateForm: FormGroup;
  isVisible = false;
  isConfirmLoading = false;
  Designation:Designation;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  constructor(private fb: FormBuilder, private _AuthService:AuthService,private notification:NzNotificationService) {
    this.notification.config({
      nzTop:'70px'
    });
  }

  submitForm(): void {
    
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(this.validateForm.status === "VALID")
    {
      this.isConfirmLoading = true;
      this.Designation = new Designation(this.validateForm.value);
      this._AuthService.addDesignation(this.Designation).subscribe(
        (data:any)=>{
          if(data.status === "SUCCESS")
          {
            this.notification.create('success','HRMS', 'Designation added successfully!', { nzDuration: 2000 });
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
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      designationName: [ null, [ Validators.required ] ],
      departmentId :[null,[Validators.required]]
    });
  }

}
