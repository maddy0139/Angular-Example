import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { EmployeeDetails } from '../../../models/EmpDetailModel';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() type: string;
  constructor(private _data:AuthService,private route:ActivatedRoute) { }
  ngOnInit() {
    this.type = this.route.snapshot.queryParamMap.get('action');

  }

}
