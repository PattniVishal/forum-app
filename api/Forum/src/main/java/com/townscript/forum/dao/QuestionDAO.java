package com.townscript.forum.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.townscript.forum.model.Question;

@Repository
public interface QuestionDAO extends CrudRepository<Question, Long> {

}
