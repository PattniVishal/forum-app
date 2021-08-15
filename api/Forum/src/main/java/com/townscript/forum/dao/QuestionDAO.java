package com.townscript.forum.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.townscript.forum.model.Question;
import com.townscript.forum.model.QuestionUserJoin;

@Repository
public interface QuestionDAO extends CrudRepository<Question, Long> {
	
	@Query(value = "select new com.townscript.forum.model.QuestionUserJoin(q.id, q.title, q.description, q.creationDate, u.id, u.email, u.username) from User u, Question q where u.id=q.userId")
	List<QuestionUserJoin> findAllQuestionAndUser();
	
	@Query(value = "select new com.townscript.forum.model.QuestionUserJoin(q.id, q.title, q.description, q.creationDate, u.id, u.email, u.username) from Question q, User u where u.id=q.userId and q.id= ?1")
	QuestionUserJoin findQuestionAndUserUsingQuestionID(Long questionId);
	
}
