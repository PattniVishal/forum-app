import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommentService } from 'src/app/core/services/comment.service';
import { QuestionService } from 'src/app/core/services/question.service';
import { CommentUserJoin } from 'src/app/shared/model/comment-user-join.model';
import { Comment } from 'src/app/shared/model/comment.model';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit, OnDestroy {

  user : User | null = null;
  questionId : number | null = null;
  commentList: CommentUserJoin[] = [];
  newComment: string = "";
  errorMsg: string = "";

  questionIdSub !: Subscription;
  authSub !: Subscription;
  commentListSub !: Subscription;

  constructor(
    private authService: AuthService,
    private questionService: QuestionService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {

    this.questionIdSub = this.questionService.currentQuestionId
    .subscribe( (questionId: number | null) => {
      this.questionId = questionId;
      this.commentService.getAllCommentsByQuestionID(questionId!).subscribe();
    });
    
    this.authSub = this.authService.user
    .subscribe( user => {
      this.user = user;
    });

    this.commentListSub = this.commentService.commentList
    .subscribe( (comments: CommentUserJoin[]) => {
      this.commentList = comments;

      console.log('comments for question number : ', this.questionId, comments);
      
    });

  }

  onCancelComment(){
    this.newComment = "";
  }

  onPostComment(){
    let commentObj: Comment = new Comment(this.newComment, new Date(), this.questionId!, this.user!.id);
    this.commentService.addComment(commentObj).subscribe();
    this.newComment = "";
  }

  ngOnDestroy(){
    this.questionIdSub.unsubscribe();
    this.authSub.unsubscribe();
    this.commentListSub.unsubscribe();
  }

}
