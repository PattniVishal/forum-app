import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorMsg: string = "";

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onRegisterClicked(registerForm: NgForm){
    const email = registerForm.value.email;
    const username = registerForm.value.username;
    const password = registerForm.value.password;
    
    this.authService.register(email, username, password)
    .subscribe( response => {
      this.errorMsg = response.message;
    });
  }

}
