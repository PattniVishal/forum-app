import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { QuestionService } from 'src/app/core/services/question.service';
import { Question } from 'src/app/shared/model/question.model';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  loggedInUser !: User | null;
  errorMsg !: string;

  constructor(
    private authService: AuthService,
    private questionService: QuestionService,
  ) { }

  ngOnInit(): void {
    this.authService.user
    .subscribe( user => {
      this.loggedInUser = user;
    });
  }

  onQuestionAdded(question: NgForm){
    const title = question.value.question_title;
    const description = question.value.question_description;

    let newQuestion = new Question(title, description, new Date(), this.loggedInUser!.id);
    console.log('question to add: ', newQuestion);
    

    this.questionService.addQuestion(newQuestion)
    .subscribe( response => {
      if( response.status == 0 )
        this.errorMsg = response.message;
    });
  }

}
