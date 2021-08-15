package com.townscript.forum.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.townscript.forum.model.Comment;
import com.townscript.forum.model.CommentUserJoin;

@Repository
public interface CommentDAO extends CrudRepository<Comment, Long> {

	List<Comment> findByQuestionId(Long questionId);
	
	@Query(value = "select new com.townscript.forum.model.CommentUserJoin(c.id, c.description, c.creationDate, c.questionId, u.id, u.email, u.username) from Comment c, User u where c.userId=u.id and c.questionId= ?1")
	List<CommentUserJoin> findAllCommentAndUserByQuestionID(Long questionId);
}
