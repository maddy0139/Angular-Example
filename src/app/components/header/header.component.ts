import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated=false;
  constructor(private _AuthService:AuthService,private router:Router) { }

  logout():void{
    localStorage.removeItem("user_token");
    this._AuthService.deleteAuthToken();
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }
  ngOnInit() {
    this._AuthService.isAuthenticated.subscribe(
      isAuthenticated=>{
        if(isAuthenticated)
        {
          this.isAuthenticated = true;
        }
      }
    );
  }

}
