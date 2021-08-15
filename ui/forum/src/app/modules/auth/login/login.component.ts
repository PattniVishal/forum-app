import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsg: string = "";

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onLoginClicked(loginForm: NgForm) {
    const email: string = loginForm.value.email;
    const password: string = loginForm.value.password;

    this.authService.login(email, password)
      .subscribe(response => {
        if (response.status == 0)
          this.errorMsg = response.message;
      });
  }

}
