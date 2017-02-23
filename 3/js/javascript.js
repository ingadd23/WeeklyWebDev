$(function () {
	var lastId;
	var menuItems = $("#menu a");
	var scrollItems = menuItems.map(function () {
		var item = $(this.hash);
		if (item.length) {
			return item;
		}
	});
	
	
	$(window).scroll(function () {
		
		var fromTop = $(this).scrollTop() + 51;
		
		var lastSection = scrollItems.map(function () { 
			if ($(this).offset().top < fromTop + 600)  return this;
		});
		
		lastSection = lastSection[lastSection.length - 1];
		var lastSectionName = lastSection && lastSection.length ? lastSection[0].id : "";
	
	
		var windowHeight = window.innerHeight;
		var lastSectionHeight = $('#top-footer').height() + 100 + $('footer').height() + 60;

		var cur = scrollItems.map(function () { 
			if(lastSectionName=='top-footer'){
				if(windowHeight > lastSectionHeight){
					if ($(this).offset().top < fromTop + 600 ) return this;
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
			menuItems.parent().removeClass("menu__li--active").end().filter("[href='#" + id + "']").parent().addClass("menu__li--active");
		}
		
		var shrinkHeader = 100;
		var scroll = getCurrentScroll();
		if (scroll >= shrinkHeader){
			$('nav').addClass('nav--scroll');
		}
		else {
			$('nav').removeClass('nav--scroll');
		}
		
		function getCurrentScroll() {
			return window.pageYOffset || document.documentElement.scrollTop;
		}
	});
	
	
	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			
			$('#menu').removeClass('menu--in'); // close right menu after click
			$('#menu-button').removeClass('menu-button--open');
				$('html, body').animate({
					scrollTop: $(hash).offset().top - 50 // top margin
				}, 900, function () {
				});
		}
	});
});


$(function(){
	$('#menu-button').click(function(){
		$(this).toggleClass('menu-button--open');
	});
	
	$('#menu-button').click(function(){
		$('#menu').toggleClass('menu--in');
	});
});