package com.townscript.forum.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.townscript.forum.dao.UserDAO;
import com.townscript.forum.exception.UserNotFoundException;
import com.townscript.forum.model.User;
import com.townscript.forum.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDAO userDAO;

	public User login(User user) throws UserNotFoundException {
		User userFound = userDAO.findByEmail(user.getEmail());
		if( user.getPassword().equals(userFound.getPassword())) {
			return userFound;
		}
		else {
			throw new UserNotFoundException("no such user found !");
		}
	}
	
	@Transactional
	public User register(User user) {
		return userDAO.save(user);
	}

	
}
