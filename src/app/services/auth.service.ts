import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ConfigService } from './ConfigService';
import { User } from '../models/UserModel';
import {Designation} from '../models/DesignationModel';
import {Department} from '../models/DepartmentModel';
import {BehaviorSubject} from 'rxjs';

import {map} from 'rxjs/Operators';
import { SubDepartment,ISubDepartment } from '../models/SubDepartmentModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AppName:string;
  ApiUrl:string;
  error:string;
  errorMessage:string;
  formStatus:string

  private authenticated = new BehaviorSubject(false);
  isAuthenticated = this.authenticated.asObservable();

  private empId = new BehaviorSubject('');
  employeeId = this.empId.asObservable();

  
  constructor(private http:HttpClient,private _config:ConfigService) {
    this.ApiUrl = _config.Config.ApiUrl;
    this.AppName = _config.Config.AppName;
    this.error = _config.Config.error;
    this.errorMessage = _config.Config.errorMessage;
    this.formStatus = _config.Config.formStatus;
  }

  userAuthentication(Data:User)
  {
    return this.http.post<any>(`${this.ApiUrl}/auth/signin`,Data).pipe(
      map(data=>{
        if(data && data.payload.accessToken)
        {
          localStorage.setItem("user_token",data.payload.accessToken);
          localStorage.setItem("employee_id",data.payload.employeeId);
          this.setAuthToken(true);
          this.setEmployeeId(data.payload.employeeId);
        }
        return data;
      })
    )
  }

  userRegistration(Data:any)
  {
    return this.http.post<any>(`${this.ApiUrl}/auth/signup`,Data);
  }

  setAuthToken(token: boolean) {
    this.authenticated.next(token);
  }
  setEmployeeId(id:string)
  {
    this.empId.next(id);
  }
  getEmployeeId()
  {
    return this.empId;
  }
  deleteEmployeeId()
  {
    this.empId.next('');
  }
  deleteAuthToken(){
    this.authenticated.next(false);
  }
  getAuthToken(){
    return this.authenticated;
  }


  addDesignation(Data:Designation)
  {
    return this.http.post<any>(`${this.ApiUrl}/designation/new?departmentId=${Data.department.id}`,{"name":Data.name});
  }
  updateDesignation(Data:Designation)
  {
    return this.http.put<any>(`${this.ApiUrl}/designation/${Data.id}`,Data);
  }
  getAllDesignation()
  {
    return this.http.get<any>(`${this.ApiUrl}/designation/all`);
  }
  getAllSubDepartments()
  {
    return this.http.get<any>(`${this.ApiUrl}/subdepartments/all`)
  }
  addSubDepartment(Data:SubDepartment)
  {
    return this.http.post<any>(`${this.ApiUrl}/subdepartments/new?departmentId=${Data.department.id}`,{"name":Data.name});
  }
  addDepartment(Data:Department)
  {
    return this.http.post<any>(`${this.ApiUrl}/departments/new`,{"name":Data.name});
  }
  updateDepartment(Data:Department)
  {
    return this.http.put<any>(`${this.ApiUrl}/departments/${Data.id}`,Data);
  }
  getAllDepartments()
  {
    return this.http.get<any>(`${this.ApiUrl}/departments/all`);
  }

  getEmployeeDetail(userId:string)
  {
    return this.http.get<any>(`${this.ApiUrl}/user/profile/${userId}`);
  }



}
