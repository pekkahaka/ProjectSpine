package com.projectspine.service;

import java.util.ArrayList;
import java.util.List;

import com.projectspine.model.Comment;
import com.projectspine.model.CommentThread;

public class DummyCommentService implements CommentService {
	

	public List<CommentThread> listThreads() {
		List<CommentThread> th = new ArrayList<CommentThread>();
		th.add(new CommentThread(10L, "Thread number uno", "FooBar"));
		th.add(new CommentThread(20L, "Thread number two", "FooBar"));
		return th;
	}

	public List<Comment> getComments(long threadId) {
		List<Comment> ch = new ArrayList<Comment>();
		for( long i = 0 ; i < 9 ; i++) {
			ch.add(new Comment(i, threadId, "Comment " + i, "Fooabarofasofiu sdf", "FB"));
		}
		return ch;
	}

	public Comment getComment(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	public CommentThread getThread(long threadId) {
		return new CommentThread(10L, "Thread number uno", "FooBar");
	}

}
