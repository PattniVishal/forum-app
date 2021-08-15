import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionService } from 'src/app/core/services/question.service';
import { QuestionsUsersJoin } from 'src/app/shared/model/question-users-join.model';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {

  questionId !: number;
  question!: QuestionsUsersJoin;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe( (params: Params) => {
      this.questionId = params['id'];

      this.questionService.getQuestionByQuestionId(this.questionId)
      .subscribe( question => {
        this.question = question;
        console.log('question loaded in ViewQuestion : ', this.question);
        
      });

    });
  }

}
