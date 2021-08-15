package com.townscript.forum.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.townscript.forum.dao.CommentDAO;
import com.townscript.forum.model.Comment;
import com.townscript.forum.model.CommentUserJoin;
import com.townscript.forum.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {
	
	@Autowired
	CommentDAO commentDAO;

	@Override
	public List<Comment> getCommentsByQuestionId(Long questionId) {
		List<Comment> comments = commentDAO.findByQuestionId(questionId);
		return comments;
	}
	
	public List<CommentUserJoin> getAllCommentAndUser(Long questionId){
		List<CommentUserJoin> data = commentDAO.findAllCommentAndUserByQuestionID(questionId);
		return data;
	}

	@Transactional
	@Override
	public Comment addComment(Comment comment) {
		return commentDAO.save(comment);
	}

}
