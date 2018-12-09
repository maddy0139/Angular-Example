import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Department } from 'src/app/models/DepartmentModel';
import { SubDepartment } from 'src/app/models/SubDepartmentModel';
import { Designation } from 'src/app/models/DesignationModel';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {
  validateForm:FormGroup;
  departments:Department[];
  selectedDepartment:Department;
  selectedDateOfBirth:Date;

  subDepartments:SubDepartment[];
  subDepartment:SubDepartment;
  selectedSubDepartment:SubDepartment;

  designations:Designation[];
  designation:Designation;
  selectedDesignation:Designation;

  employmentType:string;
  selectedEmploymentType:string;
  employmentStatus:string;
  selectedEmploymentStatus:string;
  experience:string;
  

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: [ null, [ Validators.required ] ],
      middleName: [ null, [ Validators.required ] ],
      lastName:[ null, [ Validators.required ] ],
      dateOfBirth:[ null, [ Validators.required ] ],
      dateOfjoining:[ null, [ Validators.required ] ],
      gender:[ null, [ Validators.required ] ],
      email:[ null, [ Validators.required ] ],
      phoneNumber:[ null, [ Validators.required ] ],
      department:[ null, [ Validators.required ] ],
      subDepartment:[ null, [ Validators.required ] ],
      designation:[ null, [ Validators.required ] ],
      employmentType:[ null, [ Validators.required ] ],
      employmentStatus:[ null, [ Validators.required ] ],
      experience:[ null, [ Validators.required ] ]
    });
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

}
