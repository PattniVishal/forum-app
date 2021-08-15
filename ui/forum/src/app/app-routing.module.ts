import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './core/gaurds/auth.gaurd';
import { QuestionResolver } from './core/resolvers/question-resolver.service';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { QuestionListComponent } from './modules/question/question-list/question-list.component';
import { QuestionComponent } from './modules/question/question.component';
import { ViewQuestionComponent } from './modules/question/view-question/view-question.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  // { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'auth', component: AuthComponent, children:
    [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

  { path: 'questions', component: QuestionComponent, canActivate: [AuthGaurd], loadChildren: () => import('./modules/question/question.module').then(m => m.QuestionModule) },
  // {
  //   path: 'questions', component: QuestionComponent, canActivate: [AuthGaurd], children:
  //     [
  //       { path: '', redirectTo: 'question-list', pathMatch: 'full' },
  //       { path: 'question-list', component: QuestionListComponent, resolve: [QuestionResolver] },
  //       { path: ':id', component: ViewQuestionComponent }
  //     ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
