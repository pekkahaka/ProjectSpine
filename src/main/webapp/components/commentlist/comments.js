
steal('jquery/class',
      'jquery/model',
      'jquery/view/ejs',
      'jquery/controller',
      'jquery/dom/form_params',function(){
  
	/*  MODEL */
	$.Model('Comments', {
		findAll: "GET /comments",
		findOne: "GET /comments/{id}",
		create: "POST /comments",
		update: "PUT /comments/{id}",
		destroy: "DELETE /threads/{id}"
	}, {});
	
	
	
	/* CONTROLLERS */
	/**
	 * A general list controller that handels basic list features
	 */
	$.Controller('CommentController', {
		  defaults : {
			    itemTag: "li"
		  }
		},
		{
		"init": function(element , options ) {
			console.log("init called");
			var id = element.closest(".page").attr('param');
			this.element.html('components/commentlist/comments.ejs', Comments.findAll({thread: id}));
		},
		"{itemTag} click" : function(li, event){
			console.log("comment click");
			event.preventDefault();
		    // let other controls know what happened
		    li.trigger('pageChanged', {url: "threads", params: ""});
		 }
	});

})