import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { CommentUserJoin } from "src/app/shared/model/comment-user-join.model";
import { Comment } from "src/app/shared/model/comment.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    comments: CommentUserJoin[] = [];
    commentList: BehaviorSubject<CommentUserJoin[]> = new BehaviorSubject<CommentUserJoin[]>(this.comments);

    constructor(
        private http: HttpClient
    ) { }

    getAllCommentsByQuestionID(questionId: number) {
        console.log('please fetch comments for q_id : ', questionId);
        
        return this.http.get(environment.commentListByQuestionIdURL+'/'+questionId)
        .pipe(
            tap((response: any) => {
                if (response.status == 1) {
                    this.comments = response.data;
                    this.commentList.next(this.comments.slice());
                }
            })
        );
    }

    addComment(comment: Comment){
        return this.http.post(environment.addCommentURL, comment)
        .pipe(
            tap((response: any) => {
                if (response.status == 1) {
                    console.log('comment added : ', response);
                    
                    this.getAllCommentsByQuestionID(response.data.questionId).subscribe();
                }
            })
        );
    }
}