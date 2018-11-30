import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated=false;
  constructor(private _AuthService:AuthService) { }

  ngOnInit() {
    this._AuthService.jwtToken.subscribe(
      jwtToken=>{
        if(jwtToken !="")
        {
          this.isAuthenticated = true;
        }
      }
    );
  }

}
