import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HeaderComponent } from './core/header/header.component';
import { AuthComponent } from './modules/auth/auth.component';
import { QuestionListComponent } from './modules/question/question-list/question-list.component';
import { QuestionCardComponent } from './modules/question/question-list/question-card/question-card.component';
import { AddQuestionComponent } from './modules/question/add-question/add-question.component';
import { QuestionComponent } from './modules/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AuthComponent,
    QuestionListComponent,
    QuestionCardComponent,
    AddQuestionComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
