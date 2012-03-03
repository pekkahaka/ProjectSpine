package com.projectspine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.projectspine.model.CommentThread;
import com.projectspine.service.CommentService;

@Controller
@RequestMapping("/threads")
public class ThreadController {

	@Autowired
	CommentService commentService;
	
	@RequestMapping("")
	public @ResponseBody List<CommentThread> listThreads() {
		return commentService.listThreads();
	}
	
	@RequestMapping("page")
	public  String getPage() {
		return "pages/page_threads";
	}
	
}
