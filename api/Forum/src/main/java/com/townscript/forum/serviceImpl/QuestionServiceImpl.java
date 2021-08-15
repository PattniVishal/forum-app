package com.townscript.forum.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.townscript.forum.dao.QuestionDAO;
import com.townscript.forum.model.Question;
import com.townscript.forum.model.QuestionUserJoin;
import com.townscript.forum.service.CommentService;
import com.townscript.forum.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	QuestionDAO questionDAO;
	
	@Autowired
	CommentService commentService;
	
//////////////////////////////////////////////////////////////////////////////	
	@Override
	public List<Question> getAllQuestions() {
		List<Question> questions = (List<Question>) questionDAO.findAll();
		return questions;
	}
	
	public List<QuestionUserJoin> getAllQuestionUserJoin(){
		List<QuestionUserJoin> data = questionDAO.findAllQuestionAndUser();
		return data;
	}
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////	
	@Override
	public Question getQuestionByQuestionId(Long questionId) {
		Question question = questionDAO.findById(questionId).get();
		return question;
	}
	
	public QuestionUserJoin getQuestionUserJoin(Long questionId){
		QuestionUserJoin data = questionDAO.findQuestionAndUserUsingQuestionID(questionId);
		return data;
	}
//////////////////////////////////////////////////////////////////////////////	
	
	@Transactional
	@Override
	public Question addQuestion(Question question) {
		Question newQuestion = questionDAO.save(question);
		return newQuestion;
	}

}
