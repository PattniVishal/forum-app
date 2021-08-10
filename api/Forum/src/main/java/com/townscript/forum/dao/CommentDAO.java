package com.townscript.forum.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.townscript.forum.model.Comment;

@Repository
public interface CommentDAO extends CrudRepository<Comment, Long> {

	List<Comment> findByQuestionId(Long questionId);
	
}
