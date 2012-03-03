package com.projectspine.service;

import java.util.List;

import com.projectspine.model.Comment;
import com.projectspine.model.CommentThread;

public interface CommentService {

	
	List<CommentThread> listThreads();
	List<Comment> getComments(long threadId);

	Comment getComment(long id);
	CommentThread getThread(long threadId);
	
}
