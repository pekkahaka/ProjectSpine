package com.projectspine.model;



public class CommentThread {
	
	long id;
	
	/** The title of the thread */
	String title;
	
	/** The creator of the Thread */
	String creator;

	
	
	public CommentThread(long id, String title, String creator) {
		super();
		this.id = id;
		this.title = title;
		this.creator = creator;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public long getId() {
		return id;
	}
	
}
