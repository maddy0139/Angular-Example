import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
isAuthenticated=false;

    constructor(private router: Router,private _data:AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this._data.jwtToken.subscribe(
            jwtToken=>{
              if(jwtToken !="")
              {
                this.isAuthenticated = true;
              }
              else
              {
                  this.isAuthenticated = false;
              }
            }
          )
        if (this.isAuthenticated) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}