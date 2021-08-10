package com.townscript.forum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.townscript.forum.dto.ApiResponseDTO;
import com.townscript.forum.model.User;
import com.townscript.forum.service.UserService;
import com.townscript.forum.util.ResponseBuilder;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/login")
	public ApiResponseDTO login(@RequestBody User user) {
		ResponseBuilder responseBuilder = new ResponseBuilder();
		ApiResponseDTO apiResponse;
		try {
			Object data = userService.login(user);
			apiResponse = responseBuilder.createSuccessResponse(data, "user found.");
		} catch (Exception e) {
			apiResponse = responseBuilder.createErrorResponse("ERROR!! user not found.");
		}
		
		return apiResponse;
	}

	@PostMapping("/register")
	public ApiResponseDTO register(@RequestBody User user) {
		ResponseBuilder responseBuilder = new ResponseBuilder();
		ApiResponseDTO apiResponse;
		try {
			Object data = userService.register(user);
			apiResponse = responseBuilder.createSuccessResponse(data, "user added.");
		} catch (Exception e) {
			apiResponse = responseBuilder.createErrorResponse("ERROR!! user not added.");
		}
		
		return apiResponse;
	}

}
