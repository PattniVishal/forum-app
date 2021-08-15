package com.townscript.forum.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentUserJoin {
	
	private Long comment_id;
	private String description;
	private Date creationDate;
	private Long questionId;
	private Long userId;
	private String email;
	private String username;

}
