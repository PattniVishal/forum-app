import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    FormsModule,
    AuthRoutingModule,
    MaterialModule,
    CoreModule,
    SharedModule
  ]
})
export class AuthModule { }
