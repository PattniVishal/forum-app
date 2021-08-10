package com.townscript.forum.service;

import org.springframework.stereotype.Service;

import com.townscript.forum.exception.UserNotFoundException;
import com.townscript.forum.model.User;

@Service
public interface UserService {

	public User login(User user) throws UserNotFoundException;
	
	public User register(User user);
	
}
