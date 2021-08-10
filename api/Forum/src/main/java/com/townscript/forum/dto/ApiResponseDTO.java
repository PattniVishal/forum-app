package com.townscript.forum.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ApiResponseDTO {
	
	private String message;
	private int status;
	private Object data;

}
