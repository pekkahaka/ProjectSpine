
steal('jquery/class',
      'jquery/model',
      'jquery/view/ejs',
      'jquery/controller',
      'jquery/dom/form_params',
      'jquery/effects/jquery.ui.core.min.js',
      'jquery/effects/jquery.effects.core.min.js',
      'jquery/effects/jquery.effects.slide.min.js'
      ,function(){
	
	/* CONTROLLERS */
	/**
	 * A general list controller that handels basic list features
	 */
	$.Controller('PageController', {
		  defaults : {
			    baseurl: "/"
		  }
		},
		{
		"init": function(element , options ) {
			console.log("init called");
			var homePage = this.createPage(options.home);
			this.animateIn(homePage);
		},
		"{window} page_changed" : function(li, event, data){
			event.preventDefault();
			console.log("Change page to: " + data);
		    
			changePage(url);
		 },
		 "changePage" :function(url) {
			 
			 //TODO check if page has been downloaded
			 
			 //1# Create page element
			 var newPage = this.createPage(url);
			 //1# Hide the old page
			 this.animateOut(this.animateIn(newPage))
			 
		 },
		 "animateOut" : function(secondAnimation) {
			 this.element.children(":first").hide('slide', {direction: 'left'}, 300, function(){
				 secondAnimation();
			 });
		 },
		 "animateIn" : function(element) {
			// element.show('slide',{}, 600, function(){
			 var theID = element.attr('id');
				 var url = "/" + theID + "/page";
				 console.log("load page from: " + url)
				 element.load(url);
			// });
		 },
		 "createPage" : function(url) {
			 return $('<div/>', {
				    id: url,
				    "class": 'page',
				    style: 'display:none;',
				    text: "Loading.."
				}).appendTo( this.element);
		 }
	});

})