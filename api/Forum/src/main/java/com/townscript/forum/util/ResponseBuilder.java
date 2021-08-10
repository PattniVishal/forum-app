package com.townscript.forum.util;

import com.townscript.forum.dto.ApiResponseDTO;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ResponseBuilder {

	public ApiResponseDTO createSuccessResponse(Object data, String message) {
		ApiResponseDTO response = new ApiResponseDTO(message, 1, data);
		return response;
	}
	
	public ApiResponseDTO createErrorResponse(String message) {
		ApiResponseDTO response = new ApiResponseDTO(message, 0, null);
		return response;
	}
	
}
