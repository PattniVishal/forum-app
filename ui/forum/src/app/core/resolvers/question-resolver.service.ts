import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { QuestionsUsersJoin } from "src/app/shared/model/question-users-join.model";
import { QuestionService } from "../services/question.service";

@Injectable({
    providedIn: 'root'
})
export class QuestionResolver implements Resolve<QuestionsUsersJoin[]>{

    constructor(
        private questionService: QuestionService
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const questions = this.questionService.getQuestionsFromLocal();

        console.log("QuestionResolver called !!");
        

        if(questions.length == 0){
            console.log('list was fetched from API');
            
            return this.questionService.getAllQuestions();
        }

        else{
            console.log('question list was already present');
            
            return questions;
        }
    }

}