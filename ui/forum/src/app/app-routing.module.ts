import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { QuestionListComponent } from './modules/question/question-list/question-list.component';
import { QuestionComponent } from './modules/question/question.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth', component: AuthComponent, children:
      [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
      ]
  },
  {
    path: 'questions', component: QuestionComponent, children:
      [
        { path: '', redirectTo: 'question-list', pathMatch: 'full' },
        { path: 'question-list', component: QuestionListComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
