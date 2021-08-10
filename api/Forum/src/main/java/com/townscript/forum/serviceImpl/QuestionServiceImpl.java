package com.townscript.forum.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.townscript.forum.dao.QuestionDAO;
import com.townscript.forum.model.Comment;
import com.townscript.forum.model.Question;
import com.townscript.forum.model.QuestionAndComments;
import com.townscript.forum.service.CommentService;
import com.townscript.forum.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	QuestionDAO questionDAO;
	
	@Autowired
	CommentService commentService;
	
	@Override
	public List<Question> getAllQuestions() {
		List<Question> questions = (List<Question>) questionDAO.findAll();
		return questions;
	}

	@Override
	public Question getQuestionByQuestionId(Long questionId) {
		Question question = questionDAO.findById(questionId).get();
		return question;
	}
	
	@Transactional
	@Override
	public Question addQuestion(Question question) {
		Question newQuestion = questionDAO.save(question);
		return newQuestion;
	}
	
	@Transactional(readOnly = true)
	@Override
	public QuestionAndComments loadQuestion(Long questionId) {
		QuestionAndComments data = new QuestionAndComments();
		
		Question question = questionDAO.findById(questionId).get();
		data.setQuestion(question);
		
		List<Comment> comments = commentService.getCommentsByQuestionId(questionId);
		data.setComments(comments);
		
		return data;
	}

}
