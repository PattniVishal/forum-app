import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { QuestionService } from 'src/app/core/services/question.service';
import { QuestionsUsersJoin } from 'src/app/shared/model/question-users-join.model';
import { AddQuestionComponent } from '../add-question/add-question.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questionList: QuestionsUsersJoin[] = [];
  errorMsg: string = "";
  questionAdded: boolean = false;

  constructor(
    private questionService: QuestionService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.questionService.questionList
      .subscribe((questions: QuestionsUsersJoin[]) => {
        console.log('questionList subscribed in QuestionList : ', questions);

        this.questionList = questions;
      });

    console.log('questions loaded : ', this.questionList?.length, this.questionList);

  }

  addQuestionDialog() {
    let matRefDialog = this.dialog.open(AddQuestionComponent, { width: '450px' });

    matRefDialog.afterClosed()
      .subscribe(result => {
        if (result == true) {
          console.log('result : ', result);

          this.questionAdded = true;
          this.openSnackBar();
        }
      })
  }

  openSnackBar() {
    let config: MatSnackBarConfig = new MatSnackBarConfig();
    config.duration = 3000;

    this.snackBar.open("Question Added !!", "", config);
  }

}
