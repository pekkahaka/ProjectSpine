steal('jquery')
.then('jquery/class',
      'jquery/model',
      'jquery/view/ejs',
      'jquery/controller',
      'jquery/dom/form_params')
.then('jquery/effects/jquery.ui.core.min.js')
.then('jquery/effects/jquery.effects.core.min.js')
.then('jquery/effects/jquery.effects.slide.min.js')
.then('../components/threadlist/threadlist.js',
      '../components/pagearea/page.js',
      '../components/commentlist/comments.js'
      ,function(){
	console.log("JS -Loading done !")
	//Init main window
	var pageController = new PageController('#page_container', {home: "threads"});
})