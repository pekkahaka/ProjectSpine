package com.projectspine.model;


public class Comment {
	
	long id;
	
	//Id of parent thread
	long threadId;

	String title;
	String comment;
	String creator;
	
	
	
	/**
	 * Creates new comment
	 * 
	 * @param id -The id of the commment 
	 * @param threadId -The id of the parent thread
	 * @param title -The title of the comment
	 * @param comment -The comment body
	 * @param creator -The author of the comment
	 */
	public Comment(long id, long threadId, String title, String comment, String creator) {
		super();
		this.id = id;
		this.threadId = threadId;
		this.title = title;
		this.comment = comment;
		this.creator = creator;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getThreadId() {
		return threadId;
	}
	public void setThreadId(long threadId) {
		this.threadId = threadId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getCreator() {
		return creator;
	}
	public void setCreator(String creator) {
		this.creator = creator;
	}
	
	
	
}
