import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/shared/model/user.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user!: User;

    constructor(
        private http: HttpClient
    ) { }

    login(email: string, password: string) {
        return this.http.post(environment.loginURL,
            {
                email: email,
                password: password
            });
    }
}