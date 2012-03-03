
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
		  },
		  listensTo: ["pageChanged"]
		},
		{
		pages : {},
		"init": function(element , options ) {
			console.log("init called");
			this.pages[options.home] = this.createPage(options.home);
			this.animateIn(this.pages[options.home] );
		},
		"pageChanged" : function (el, event, data){
			console.log("Change page to: " + data.url);
		    
			this.changePage(data.url, data.params);
		 },
		 "changePage" :function(url, param) {
			 
			 //TODO check if page has been downloaded
			 if(!this.pages[url]) {
				 this.pages[url] = this.createPage(url, param);
			 }
			 //1# Hide the old page
			 this.animateOut( this.pages[url])
			 
		 },
		 "animateOut" : function(newPage) {
			 var slideIn = this.animateIn;
			 this.element.children(":visible").hide('slide', {direction: 'left'}, 300, function(){
				 slideIn(newPage);
			 });
		 },
		 "animateIn" : function(element) {
			 element.show('slide',{direction:'right'}, 600, function(){
				
			 });
		 },
		 "createPage" : function(url, param) {
			 var newPage = $('<div/>', {
				    id: url,
				    "class": 'page',
				    "param": param,
				    style: 'display:none;',
				    text: "Loading.."
				}).appendTo( this.element);
			 this.loadPage(newPage, url);
			 return newPage;
		 },
		 "loadPage" : function(element, url) {
			 var theID = element.attr('id');
			 var url = "/" + theID + "/page";
			 console.log("load page from: " + url)
			 element.load(url);
		 }
	});

})