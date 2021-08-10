package com.townscript.forum.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.townscript.forum.model.Question;
import com.townscript.forum.model.QuestionAndComments;

@Service
public interface QuestionService {

	List<Question> getAllQuestions();
	
	Question getQuestionByQuestionId(Long questionId);
	
	Question addQuestion(Question question);
	
	QuestionAndComments loadQuestion(Long questionId);
	
}
