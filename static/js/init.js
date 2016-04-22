(function($){
  $(function(){

    $('.button-collapse').sideNav();
    
    $(".dropdown-button").dropdown();
    
    var editorURL = "http://githubdemo-1285.appspot.com/edit";
    
    var pathToPage = window.location.pathname;
    
    if (pathToPage.contains("index.html"){
    	pathToPage = pathToPage.replace("index.html","");
    }
    
    if (pathToPage.contains("website")){
    	pathToPage = pathToPage.replace("website", "");
    }
    
    if (pathToPage.length > 0 && pathToPage[pathToPage.length - 1] == '/'){
    	pathToPage = pathToPage.substring(0, pathToPage.length - 1);
    }
    
    if (pathToPage.length > 0 && pathToPage[0] == '/'){
    	pathToPage = pathToPage.substring(1);
    }
    
	$("#edit-now-link").attr("href", editorURL + "/" + pathToPage);
		
  });
})(jQuery);