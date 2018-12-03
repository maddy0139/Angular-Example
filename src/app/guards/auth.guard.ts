import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
isAuthenticated=false;

    constructor(private router: Router,private _data:AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        const user_token = localStorage.getItem("user_token");
        if (user_token) {
            // logged in so return true
            this._data.setAuthToken(true);
            return true;
        }
        
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}