import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import {User,IUser} from '../../../models/UserModel';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  validateForm: FormGroup;
  
  isConfirmLoading=false;
  User:User;
  returnUrl:string;
  
  constructor(private notificationService:NzNotificationService,private route:ActivatedRoute,private fb: FormBuilder,private _AuthService:AuthService,private router:Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      confirmPassword:[ null, [ Validators.required ] ]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(this.validateForm.status === "VALID")
    {
      this.isConfirmLoading = true;
      const data = {"username":this.validateForm.value.email,"email":this.validateForm.value.email,"password":this.validateForm.value.password}
      this._AuthService.userRegistration(data).subscribe(
        (success:IUser)=>{
          this.isConfirmLoading = false;
          this.notificationService.create("success",this._AuthService.AppName,"Employee Registered successfully!");
        },
        error=>{
          console.log(error);
        }
      );
    }
  }
}
