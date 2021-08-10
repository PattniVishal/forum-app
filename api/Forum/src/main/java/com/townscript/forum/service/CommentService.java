package com.townscript.forum.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.townscript.forum.model.Comment;

@Service
public interface CommentService {
	
	List<Comment> getCommentsByQuestionId(Long questionId);
	
	Comment addComment(Comment comment);

}
