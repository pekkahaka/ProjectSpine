<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
	<title>Forum Example</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<script type='text/javascript' src="/lib/steal/steal.js?/components/main.js"></script>
</head>
<body>
	<div id="header"></div>
	<div id="page_container">
	<script type='text/javascript'>
	$(function() {
		// Create documents list element
		var pageController = new PageController('#page_container', {home: "threads"});
	});
	</script>
	</div>
</body>
</html>