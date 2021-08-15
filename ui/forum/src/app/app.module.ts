import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { AuthComponent } from './modules/auth/auth.component';
import { QuestionListComponent } from './modules/question/question-list/question-list.component';
import { QuestionCardComponent } from './modules/question/question-list/question-card/question-card.component';
import { AddQuestionComponent } from './modules/question/add-question/add-question.component';
import { QuestionComponent } from './modules/question/question.component';
import { MaterialModule } from './modules/material/material.module';
import { ViewQuestionComponent } from './modules/question/view-question/view-question.component';
import { CommentSectionComponent } from './modules/question/comment-section/comment-section.component';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegisterComponent,
    // HeaderComponent,
    // AuthComponent,
    // QuestionListComponent,
    // QuestionCardComponent,
    // AddQuestionComponent,
    // QuestionComponent,
    // ViewQuestionComponent,
    // CommentSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MaterialModule,
    AuthModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
