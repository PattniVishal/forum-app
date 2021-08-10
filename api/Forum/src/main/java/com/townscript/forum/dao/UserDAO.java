package com.townscript.forum.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.townscript.forum.model.User;

@Repository
public interface UserDAO extends CrudRepository<User, Long> {

	User findByEmail(String email);
	
}
