import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { EmployeeDetails } from '../../../models/EmpDetailModel';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  employeeDetails?:EmployeeDetails;
  employeeId:string
  constructor(private _data:AuthService) { }

  ngOnInit() {
    this._data.employeeId.subscribe(
      employeeId=>{
        this.employeeId = employeeId;
    });
    this.getEmployeeDetail();
  }

  getEmployeeDetail():void
  {
    this._data.getEmployeeDetail(this.employeeId).subscribe(
      (data:any)=>{
        console.log(data);
        this.employeeDetails = data.payload;
      },error=>{
        console.log(error);
      }
    );
  }

}
