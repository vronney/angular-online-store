import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../../../model/auth.service';

@Injectable()
export class AuthGuard {

    constructor(private route: Router, private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: ActivatedRouteSnapshot): boolean {
        if (!this.auth.authenticated) {
            this.route.navigateByUrl('/admin/auth');
            return false;
        }
        return true;
    }
}
