import { Component, Input, OnInit } from '@angular/core';
import { QuestionsUsersJoin } from 'src/app/shared/model/question-users-join.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {

  @Input() question !: QuestionsUsersJoin;
  title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
