package com.townscript.forum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.townscript.forum.dto.ApiResponseDTO;
import com.townscript.forum.model.Comment;
import com.townscript.forum.service.CommentService;
import com.townscript.forum.util.ResponseBuilder;

@RestController
@RequestMapping("api/v1/comments")
public class CommentController {
	
	@Autowired
	CommentService commentService;

	@GetMapping("{questionId}")
	public ApiResponseDTO getComments(@PathVariable("questionId") String questionId) {
		ResponseBuilder responseBuilder = new ResponseBuilder();
		ApiResponseDTO apiResponse;
		try {
			Object data = commentService.getCommentsByQuestionId( Long.parseLong(questionId) );
			apiResponse = responseBuilder.createSuccessResponse(data, "comments found.");
		}
		catch(Exception e) {
			apiResponse = responseBuilder.createErrorResponse("ERROR!! comments not found.");
		}
		
		return apiResponse;
	}
	
	@PostMapping
	public ApiResponseDTO addComment(@RequestBody Comment comment) {
		ResponseBuilder responseBuilder = new ResponseBuilder();
		ApiResponseDTO apiResponse;
		try {
			Object data = commentService.addComment(comment);
			apiResponse = responseBuilder.createSuccessResponse(data, "comment added.");
		}
		catch(Exception e) {
			apiResponse = responseBuilder.createErrorResponse("ERROR!! comment not added.");
		}
		
		return apiResponse;
	}
	
}
