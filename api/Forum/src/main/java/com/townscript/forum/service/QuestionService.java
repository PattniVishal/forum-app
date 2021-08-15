package com.townscript.forum.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.townscript.forum.model.Question;
import com.townscript.forum.model.QuestionUserJoin;

@Service
public interface QuestionService {

	List<Question> getAllQuestions();	
	List<QuestionUserJoin> getAllQuestionUserJoin();
	
	Question getQuestionByQuestionId(Long questionId);
	QuestionUserJoin getQuestionUserJoin(Long questionId);
	
	Question addQuestion(Question question);
	
}
