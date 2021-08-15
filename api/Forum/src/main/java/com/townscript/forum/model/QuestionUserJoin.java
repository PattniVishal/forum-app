package com.townscript.forum.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuestionUserJoin {

	private Long questionId;
	private String title;
	private String description;
	private Date creationDate;
	private Long userId;
	private String email;
	private String username;
	
}
