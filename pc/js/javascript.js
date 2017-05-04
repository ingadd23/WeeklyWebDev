$(window).on('load', function(){	
    $(".loader-container").fadeOut("slow");
    
    var config = {
        origin: 'bottom',
        viewFactor : 0.15,
        duration   : 800,
        distance   : "20px",
        scale      : 0.9,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    }

    window.sr = new ScrollReveal(config);

    sr.reveal('.paralax__quote', {scale : 0.2});
    sr.reveal('.o-kancelarii');
    sr.reveal('.o-mnie');
    sr.reveal('.zakres-uslug');
    sr.reveal('.wynagrodzenie');
    sr.reveal('.kontakt');
    sr.reveal('.map');
});
    




$('#nav-menu-button').click(function(){
    $(this).toggleClass('nav-menu-button--open');
    $('#nav-menu').toggleClass('nav-menu-container--in');
    $('#overlay').toggleClass('overlay');
});


$('#overlay').click(function(){
    $(this).removeClass('overlay');
    $('#nav-menu').removeClass('nav-menu-container--in');
    $('#nav-menu-button').removeClass('nav-menu-button--open');
});


$(function(){
	var shrinkHeader = 100;
    var gotop = 500;
    
	$(window).scroll(function(){
		var scroll = getCurrentScroll();
		
		if (scroll >= shrinkHeader){
			$('.navbar-container').addClass('navbar-container--top');
		}
		else {
			$('.navbar-container').removeClass('navbar-container--top');
		}
        
        if(scroll >= gotop){
            $('.gotop').addClass('gotop--visible');
        }
        else{
            $('.gotop').removeClass('gotop--visible');
        }
	});
	
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});


$(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('#overlay').removeClass('overlay');
            $('#nav-menu').removeClass('nav-menu-container--in');
            $('#nav-menu-button').removeClass('nav-menu-button--open');
            if (window.innerWidth > 768) {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function () {
                    window.location.hash = hash;

                });
            } else {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function () {
                    window.location.hash = hash;

                });
            }
        }
    });
});