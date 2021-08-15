import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { QuestionsUsersJoin } from "src/app/shared/model/question-users-join.model";
import { Question } from "src/app/shared/model/question.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    currentQuestionId : BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
    questions: QuestionsUsersJoin[] = [];
    questionList: BehaviorSubject<QuestionsUsersJoin[]> = new BehaviorSubject<QuestionsUsersJoin[]>(this.questions);

    constructor(
        private http: HttpClient
    ) { }

    getAllQuestions() {
        return this.http.get(environment.questionListURL)
            .pipe(
                tap((response: any) => {
                    if (response.status == 1) {
                        console.log(response.data);
                        
                        this.questions = response.data;
                        this.questionList.next(this.questions);
                    }
                })
            );
    }

    getQuestionByQuestionId(questionId: number){
        return this.http.get(environment.getQuestionByQuestionIdURL+'/'+questionId)
        .pipe(
            map( (response:any) => {
                if( response.status == 1 ){
                    console.log('currentQuestionId Behaviour : ', this.currentQuestionId);
                    
                    this.currentQuestionId.next(questionId);
                    return response.data;
                }
            })
        );
    }

    addQuestion(question: Question) {
        return this.http.post(environment.addQuestionURL, question)
            .pipe(
                tap((response: any) => {
                    if (response.status == 1) {
                        this.getAllQuestions().subscribe();
                    }
                })
            );
    }

    getQuestionsFromLocal(){
        return this.questions.slice();
    }

    getCurrentQuestionId(){
        return this.currentQuestionId;
    }
}