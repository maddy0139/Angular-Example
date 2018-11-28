import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.scss']
})
export class EmploymentDetailsComponent implements OnInit {
  employeeDetails = [{
    "doj":"05/03/2018",
    "dob":"16/09/1990",
    "designation":"Solution Developer",
    "grade":"-",
    "department":"Delivery",
    "jobCategory":"",
    "jobDescription":"",
    "experience":"2.4",
    "location":"Pune",
    "costCenter":"India",
    "status":"Current",
    "employmentType":"Permanent",
    "company":"SpadeWorx",
    "probationEndDate":"05/09/2018",
    "confirmationDate":"10/09/2018",
    "subDepartment":"SharePoint",
    "region":"India"
}];
  constructor() { }
  
  ngOnInit() {
  }

}
