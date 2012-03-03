
Design principles:
-Break the files according functionality rather then file type
-Pros: 
	+ Easier to find stuff as the layout follows the structure visible to enduser
	+ High level of modularity
-Cons:
	-Build structure is not the same as runtime/deployed structure
	-Needs higher level of customization in the build process

#TODO should we use the same modular approach on the java sources as we have on web

ProjectSpine file structure
/ROOT
	|-src
	|	|-main
	|	|	|-java
	|	|	| 	|-service
	|	|	| 	|-model
	|	|	| 	|-controller
	|	|	|
	|	|	|-resources
	|	|	|	|-spring-config.xml
	|	|	|-config
	|	|	|-webapp
	|	|		|-WEB-INF
	|	|		|	|-web.xml
	|	|		|-libs (3th party javascript/webresources)
	|	|		|	|-documentjs
	|	|		|	|-jquery
	|	|		|	|-funcunit
	|	|		|	|-steal
	|	| 		|
	|	|	   	|-pages
	|   |      	|-components
	|   |      		|-tab
	|	| 	 	  	|-autocomplete
	|   |   			|-autocomplete.ejs
	|   |   			|-autocomplete.js
	|	|				|-autocomplete.less
	|	|				|-autocomplete.jsp !!! .jsp file will be parsed and moved under WEB-INF/jsp at build time
	|   |   
	|	|-test
	|		|-java
	|		|-resources
	|
	|-target