import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ConfigService } from './ConfigService';
import { User } from '../models/UserModel';
import {Designation} from '../models/DesignationModel';

import {map} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ApiUrl:string;

  constructor(private http:HttpClient,private _config:ConfigService) {
    this.ApiUrl = _config.Config.ApiUrl;
  }

  userAuthentication(Data:User)
  {
    return this.http.post<any>(`${this.ApiUrl}/auth/signin`,Data).pipe(
      map(data=>{
        if(data && data.payload.accessToken)
        {
          localStorage.setItem("user",data);
        }
        return data;
      })
    )
  }

  addDesignation(Data:Designation)
  {
    return this.http.post<any>(`${this.ApiUrl}/designation/signin`,Data).pipe(
      map(data=>{
        if(data && data.payload.accessToken)
        {
          localStorage.setItem("user",data);
        }
        return data;
      })
    )
  }

}
