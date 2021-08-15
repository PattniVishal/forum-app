import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { MaterialModule } from "../material/material.module";
import { AddQuestionComponent } from "./add-question/add-question.component";
import { CommentSectionComponent } from "./comment-section/comment-section.component";
import { QuestionCardComponent } from "./question-list/question-card/question-card.component";
import { QuestionListComponent } from "./question-list/question-list.component";
import { QuestionRoutingModule } from "./question-routing.module";
import { QuestionComponent } from "./question.component";
import { ViewQuestionComponent } from "./view-question/view-question.component";

@NgModule({
    declarations: [
        QuestionListComponent,
        QuestionCardComponent,
        AddQuestionComponent,
        QuestionComponent,
        ViewQuestionComponent,
        CommentSectionComponent
    ],
    imports: [
        FormsModule,
        QuestionRoutingModule,
        MaterialModule,
        CoreModule,
        SharedModule
    ]
})
export class QuestionModule { }