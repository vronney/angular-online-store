import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StoreComponent } from './../app/store/store.component';

@Injectable()

export class StoreGuard {
    private firstNavigation = true;

    constructor(private router: Router) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (router.component !== StoreComponent) {
                this.router.navigateByUrl('/');
                return false;
            }
        }
        return true;
    }
}
