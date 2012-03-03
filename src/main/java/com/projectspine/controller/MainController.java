package com.projectspine.controller;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.projectspine.model.CommentThread;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String createMainPage(Model m) {
		
		return "pages/index";
	}
	
	@RequestMapping("/json")
	public @ResponseBody CommentThread createMainJSON(Model m) {
		return new CommentThread(20L, "Test title", "The man behind it all");
	}
}
