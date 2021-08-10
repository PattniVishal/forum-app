package com.townscript.forum.model;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class QuestionAndComments {
	
	private Question question;
	private List<Comment> comments;

}
