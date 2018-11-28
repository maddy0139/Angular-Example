import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ConfigService } from './ConfigService';
import { User } from '../models/UserModel';

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
    return this.http.post<any>(`${this.ApiUrl}/auth/signin`,Data);
  }
}
