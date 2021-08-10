package com.townscript.forum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.townscript.forum.dto.ApiResponseDTO;
import com.townscript.forum.model.Question;
import com.townscript.forum.service.QuestionService;
import com.townscript.forum.util.ResponseBuilder;

@RestController
@RequestMapping("/api/v1/questions")
public class QuestionController {
	
	@Autowired
	QuestionService questionService;

	@GetMapping
	public ApiResponseDTO getAllQuestions() {
		ResponseBuilder responseBuilder = new ResponseBuilder();
		ApiResponseDTO apiResponse;
		try {
			Object data = questionService.getAllQuestions();
			apiResponse = responseBuilder.createSuccessResponse(data, "found all questions.");
		}
		catch(Exception e) {
			apiResponse = responseBuilder.createErrorResponse("ERROR!! questions not found.");
		}
		
		return apiResponse;
	}
	
	@GetMapping("{questionId}")
	public ApiResponseDTO getQuestion(@PathVariable("questionId") String questionId) {
		ResponseBuilder responseBuilder = new ResponseBuilder();
		ApiResponseDTO apiResponse;
		try {
			Object data = questionService.getQuestionByQuestionId( Long.parseLong(questionId) );
			apiResponse = responseBuilder.createSuccessResponse(data, "question found.");
		}
		catch(Exception e) {
			apiResponse = responseBuilder.createErrorResponse("ERROR!! question not found.");
		}
		
		return apiResponse;
	}
	
	@PostMapping
	public ApiResponseDTO addQuestion(@RequestBody Question question) {
		ResponseBuilder responseBuilder = new ResponseBuilder();
		ApiResponseDTO apiResponse;
		try {
			Object data = questionService.addQuestion(question);
			apiResponse = responseBuilder.createSuccessResponse(data, "question added.");
		}
		catch(Exception e) {
			apiResponse = responseBuilder.createErrorResponse("ERROR!! question not added .");
		}
		
		return apiResponse;
	}
	
	@GetMapping("/ques/{questionId}")
	public ApiResponseDTO loadQuestion(@PathVariable("questionId") String questionId) {
		ResponseBuilder responseBuilder = new ResponseBuilder();
		ApiResponseDTO apiResponse;
		try {
			Object data = questionService.loadQuestion( Long.parseLong(questionId) );
			apiResponse = responseBuilder.createSuccessResponse(data, "question found.");
		}
		catch(Exception e) {
			apiResponse = responseBuilder.createErrorResponse("ERROR!! question not found.");
		}
		
		return apiResponse;
	}
	
}
