import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/shared/model/user.model";
import { environment } from "src/environments/environment";

import { tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user : BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null) ;

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    login(email: string, password: string) {
        return this.http.post(environment.loginURL,
            {
                email: email,
                password: password
            })
            .pipe(
                tap((response: any) => {
                    if( response.status == 1 ){
                        this.handleAuthentication(response.data);
                        this.router.navigate(['/questions']);
                    }
                })
            );
    }

    register(email: string, username: string, password: string){
        return this.http.post(environment.registerURL,
            {
                email: email,
                username: username,
                password: password
            })
            .pipe(
                tap((response: any) => {
                    if( response.status == 1 ){
                        this.handleAuthentication(response.data);
                        this.router.navigate(['/questions']);
                    }
                })
            );
    }

    logout(){
        this.user.next(null);
        localStorage.removeItem("townscript_forum_user");
        this.router.navigate(['/']);
    }

    autoLogin(){
        const userData: User = JSON.parse(localStorage.getItem('townscript_forum_user')!);

        if( !userData ){
            return;
        }

        const loadedUser = new User(userData.id, userData.email, userData.username);

        this.user.next(loadedUser);
    }

    handleError(errorMsg : string){
        return throwError(errorMsg); 
    }

    handleAuthentication(user: User) {
        const loggedInUser = new User(user.id, user.email, user.username);
        localStorage.setItem("townscript_forum_user", JSON.stringify(loggedInUser));
        this.user.next(loggedInUser);
    }
}