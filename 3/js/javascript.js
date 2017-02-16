$(function () {
	var lastId;
	var menuItems = $("#menu a");
	var scrollItems = menuItems.map(function () {
		var item = $(this.hash);
		if (item.length) {
			return item;
		}
	});
	
	lastSection = scrollItems[scrollItems.length - 1];
	var lastSectionName = lastSection && lastSection.length ? lastSection[0].id : "";
		
	
	$(window).scroll(function () {
		var windowHeight = window.innerHeight;
		var lastSectionHeight = $('#top_footer').height() + 100 + $('footer').height() + 60;

		var fromTop = $(this).scrollTop() + 51;
		var cur = scrollItems.map(function () { 
			
			if(lastSectionName=='top_footer'){
				if(windowHeight > lastSectionHeight){
					if ($(this).offset().top < fromTop ) return this; // + 600
				}
				else{
					if ($(this).offset().top < fromTop) return this;
				}
			}
			else{
				if ($(this).offset().top < fromTop) return this;
			}
		});
		
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";
		
		if (lastId !== id) {
			lastId = id;
			menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
		}
		
		var shrinkHeader = 100;
		var scroll = getCurrentScroll();
		if (scroll >= shrinkHeader){
			$('nav').addClass('nav_scroll');
		}
		else {
			$('nav').removeClass('nav_scroll');
		}
		
		function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
	});
	
	
	menuItems.on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			
			$('#menu').removeClass('in'); // close right menu after click
			$('#menu_button').removeClass('open');
				$('html, body').animate({
					scrollTop: $(hash).offset().top - 50 // top margin
				}, 900, function () {
				});
		}
	});
});



$(function(){
	$('#menu_button').click(function(){
		$(this).toggleClass('open');
	});
	
	$('#menu_button').click(function(){
		$('#menu').toggleClass('in');
	});
});