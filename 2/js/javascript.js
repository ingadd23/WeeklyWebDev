$(function(){
	var shrinkHeader = 100;
	var scrollImg = 200;
	$(window).scroll(function(){
		var scroll = getCurrentScroll();
		
		if (scroll >= shrinkHeader){
			$('.navbar').addClass('navbar_top');
		}
		else {
			$('.navbar').removeClass('navbar_top');
		}
		
		if (scroll >= scrollImg){
			$('.scroll_img').addClass('hidden_scroll');
		}
		else {
			$('.scroll_img').removeClass('hidden_scroll');
		}
	});
	
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
	
});