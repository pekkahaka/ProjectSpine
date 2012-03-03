package com.projectspine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.projectspine.model.Comment;
import com.projectspine.model.CommentThread;
import com.projectspine.service.CommentService;

@Controller
@RequestMapping("/comments")
public class CommentController {
	
	@Autowired
	CommentService commentService;
	
	/****************************
	 *  COMMENTS
	 ****************************/
	@RequestMapping("{id}")
	public @ResponseBody Comment getComment(@PathVariable long id) {
		return commentService.getComment(id);
	}
	
	@RequestMapping("")
	public @ResponseBody List<Comment> getAllComments(@RequestParam long thread) {
		return commentService.getComments(thread);
	}
	
	@RequestMapping("page")
	public  String getCommentsPage() {
		return "pages/page_comments";
	}
	

}
