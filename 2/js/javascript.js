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


$(function(){
  $(".navbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
		$('#menu').removeClass('in'); // close right menu after click
		if(window.innerWidth > 768){ // screen width
			$('html, body').animate({
			scrollTop: $(hash).offset().top-79 // top margin
		  }, 900, function(){
			//window.location.hash = hash;

		  });
		}
		else {
			$('html, body').animate({
			scrollTop: $(hash).offset().top-50
		  }, 900, function(){
			//window.location.hash = hash;

		  });
		}
    }
  });

});

function viewMoreGallery(){
	document.getElementById("more").style.display = "block";
	document.getElementById("gallery_button").style.display = "none";
	$(".more > div  > a ").attr("data-toggle", "lightbox").attr("data-gallery", "gallery");
}

function viewMoreBlog(){
	document.getElementById("more_blog").style.display = "block";
	document.getElementById("blog_button").style.display = "none";
}


(function($) {
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
})(jQuery); 

