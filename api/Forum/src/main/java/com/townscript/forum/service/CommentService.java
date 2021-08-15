package com.townscript.forum.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.townscript.forum.model.Comment;
import com.townscript.forum.model.CommentUserJoin;

@Service
public interface CommentService {
	
	List<Comment> getCommentsByQuestionId(Long questionId);
	List<CommentUserJoin> getAllCommentAndUser(Long questionId);
	
	Comment addComment(Comment comment);

}
