import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuestionResolver } from "src/app/core/resolvers/question-resolver.service";
import { QuestionListComponent } from "./question-list/question-list.component";
import { ViewQuestionComponent } from "./view-question/view-question.component";

const routes: Routes = [
    { path: '', redirectTo: 'question-list', pathMatch: 'full' },
    { path: 'question-list', component: QuestionListComponent, resolve: [QuestionResolver] },
    { path: ':id', component: ViewQuestionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionRoutingModule { }