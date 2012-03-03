steal('steal/less').then('./thread.less');
steal('jquery/class',
      'jquery/model',
      'jquery/view/ejs',
      'jquery/controller',
      'jquery/dom/form_params',function(){
  
	/*  MODEL */
	$.Model('Thread', {
		findAll: "GET /threads",
		findOne: "GET /threads/{id}",
		create: "POST /threads",
		update: "PUT /threads/{id}",
		destroy: "DELETE /threads/{id}"
	}, {});
	
	
	
	/* CONTROLLERS */
	/**
	 * A general list controller that handels basic list features
	 */
	$.Controller('ListController', {
		  defaults : {
			    itemTag: "li"
		  }
		},
		{
		"init": function(element , options ) {
			console.log("init called");
			this.element.html('components/threadlist/thread.ejs', Thread.findAll());
		},
		"{itemTag} click" : function(li, event){
			console.log("thread click");
			event.preventDefault();
		    // let other controls know what happened
			var commentPage="comments";
		    li.trigger('pageChanged', {url: "comments", params: li.model().id});
		 },
		 "{itemTag} dblclick" : function(li, event){
			 
		 },
		 ".editable click": function(span, event) {
			var attr = span.attr('prop');
			var model = span.closest('li').model();
			
		 },
		 '.destroy click' : function(el, ev) {
			 el.closest('li').model().destroy();
		 },
		 '{Thread} destroyed': function(Todo, ev, destroyedTodo){
			    var destroydElem = destroyedTodo.elements(this.element);
			    destroydElem.slideUp(function() {destroydElem.remove();});
		 },
		 '{Thread} created': function(Todo, ev, newThread){
			    console.log("Created ");
			    this.element.append('documents_ejs.ejs', [newThread]);
		 },
	});

})