<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div id="thread_list"></div>
<script type='text/javascript'>
// Create documents list element
var documentsList = new ListController('#thread_list', {});
</script>