import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { map, take } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        return this.authService.user
        .pipe( 
            take(1),
            map( user => {
                const isAuth = !!user;
                if( isAuth ){
                    return true;
                }
                return this.router.createUrlTree(['/auth']);
            })
        );

    }
}