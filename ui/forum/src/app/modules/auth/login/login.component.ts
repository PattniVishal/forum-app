import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLoginClicked(loginForm: NgForm){
    const email: string = loginForm.value.email;
    const password: string = loginForm.value.password;

    console.log('loginForm', email, password);

    this.authService.login(email, password)
    .subscribe( response => {
      console.log('responseData : ', response);
    });
  }

}
