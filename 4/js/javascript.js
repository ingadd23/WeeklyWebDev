var config = {
    origin: 'bottom',
    viewFactor : 0.15,
    duration   : 800,
    distance   : "20px",
    scale      : 0.8,
    reset: true,
}

window.sr = new ScrollReveal(config);
sr.reveal('.header');
sr.reveal('.menu-bar');
sr.reveal('.social-menu');
sr.reveal('.facebook-widget');
sr.reveal('.twitter-widget');
sr.reveal('.sign-in');
sr.reveal('.newsletter');
sr.reveal('.slider');
sr.reveal('.video-container');
sr.reveal('.photo-buttons');
sr.reveal('.photo-section, .photo');
sr.reveal('.twitter-section');
sr.reveal('.calendar');
sr.reveal('.view-more-stories');
sr.reveal('.post-photo');
sr.reveal('.news');
sr.reveal('.post-section');
sr.reveal('.quote-section');
sr.reveal('.mail');
sr.reveal('.tab-container');


$(".nav-list__ul").clone().appendTo("#slide-nav");
$(".nav-icon__ul").clone().appendTo("#slide-nav");


$(".submenu-bar__category").clone().appendTo("#submenu-bar1");


 var slideout = new Slideout({
 	'panel': document.getElementById('panel')
 	, 'menu': document.getElementById('slide-nav')
 	, 'padding': 206
 	, 'tolerance': 70
 });


 function close(eve) {
 	eve.preventDefault();
 	slideout.close();
 }
 slideout.on('beforeopen', function () {
 	this.panel.classList.add('panel-open');
 }).on('open', function () {
 	this.panel.addEventListener('click', close);
 }).on('beforeclose', function () {
 	this.panel.classList.remove('panel-open');
 	this.panel.removeEventListener('click', close);
 });

	

$('#nav-button').click(function(){
	if($(window).width()>767){
		$('#nav').toggleClass('nav--in');
	}
	else{
		slideout.toggle();
	}
});

$('#slide-nav a').click(function(){
	slideout.close();
});


function checkSize(){
	if($(window).width() > 767){
		if($('#nav').hasClass('nav--in') == false){
			$('#nav').addClass('nav--in');
		}

		if($('html').hasClass('slideout-open') == true){
			slideout.close();
		}
	}
	else{
		$('#nav').removeClass('nav--in');
	}
};
$(window).resize(checkSize);



$('.search-button').click(function(){
	$('.search-input').toggleClass('search-input--in');
});


$(window).on('load', function(){
    
    /*
    var numberFb = 156;
    var numberTwitter = 89;

    var idFb = document.getElementById("widget__number--facebook");   
    var idTwitter = document.getElementById("widget__number--twitter");  

    var numberWidget = 0;

    function frame(nr,elem, inter) {
        if (numberWidget >= nr) {
          clearInterval(inter);
        } else {
          numberWidget++; 

         elem.innerHTML = numberWidget  + 'K';
        }
    };
    var interval1 = setInterval(function(){ frame(numberTwitter, idTwitter, interval1); }, 15);
    var interval = setInterval(function(){ frame(numberFb, idFb, interval); }, 10);
*/

    var idFb = document.getElementById("widget__number--facebook");   
    var numberWidgetFb = 0;
    
    var idIntervalFb = setInterval(frame, 10);

    function frame() {
        if (numberWidgetFb >= 156) {
            clearInterval(idIntervalFb);
        } else {
            numberWidgetFb++;
     
            idFb.innerHTML = numberWidgetFb * 1 + 'K';
        }
    }
    
    
    var idTwitter = document.getElementById("widget__number--twitter");    
    var numberWidgetTw = 0;
    
    var idIntervalTw = setInterval(frame1, 20);

    function frame1() {
        if (numberWidgetTw >= 89) {
            clearInterval(idIntervalTw);
        } else {
            numberWidgetTw++;
     
            idTwitter.innerHTML = numberWidgetTw * 1 + 'K';
        }
    }
});


 $('.widget__follow').click(function() { 
	 
     var id = $(this).attr('id');
	 
	 if($("#" + id + " span").hasClass('follow') == true){
		 $("#" + id + " span").removeClass('follow');
		 $("#" + id + " span").addClass('following');
		 
		 $("#" + id + " i").removeClass('widget__icon--follow icon-plus-1');
		 $("#" + id + " i").addClass('widget__icon--following icon-ok-circle');
	 }
	 
	  else if($("#" + id + " span").hasClass('following') == true){
		 $("#" + id + " span").removeClass('following');
		 $("#" + id + " span").addClass('follow');
		  
		 $("#" + id + " i").addClass('widget__icon--follow icon-plus-1');
		 $("#" + id + " i").removeClass('widget__icon--following icon-ok-circle');
	 }
}); 


$('#blog-toggle').click(function(){
	if ( $(window).width() > 767 ){

		$('#submenu-bar').toggleClass('submenu-bar--in');

		if($('#submenu-bar').hasClass('submenu-bar--in') == true){
			document.getElementById("menu-right").style.width = '50%';
			document.getElementById("menu-right").style.transition = 'all 1s ease';
			document.getElementById("menu-bar__icon--double-right").style.transition = 'transform 1s';
			document.getElementById("menu-bar__icon--double-right").style.transform = 'rotate(180deg)';
		}
		else{
			$('#submenu-bar').removeClass('submenu-bar--in');
			document.getElementById("menu-right").style.width = '75%';
			document.getElementById("menu-right").style.transition = 'all 1s ease';
			document.getElementById("menu-bar__icon--double-right").style.transition = 'transform 1s';
			document.getElementById("menu-bar__icon--double-right").style.transform = 'rotate(0deg)';
		}
	}
	else{
		$('#submenu-bar1').toggleClass('submenu-bar--in1');
	}
});	



function checkSize(){
	if ( $(window).width() < 768 ){
		$('#submenu-bar').removeClass('submenu-bar--in');
        $('#submenu-bar1').removeClass('submenu-bar--in1');
		document.getElementById("menu-right").style.width = '100%';
		document.getElementById("menu-right").style.transition = 'none';
		document.getElementById("menu-bar__icon--double-right").style.transition = 'transform 1s';
		document.getElementById("menu-bar__icon--double-right").style.transform = 'rotate(90deg)';
		document.getElementById("menu-bar__icon--double-right").style.marginTop = '10px';
	}
    else{
        $('#submenu-bar').removeClass('submenu-bar--in');
        $('#submenu-bar1').removeClass('submenu-bar--in1');
		document.getElementById("menu-right").style.width = '75%';
		document.getElementById("menu-right").style.transition = 'all 1s ease';
		document.getElementById("menu-bar__icon--double-right").style.transition = 'transform 1s';
		document.getElementById("menu-bar__icon--double-right").style.transform = 'rotate(0deg)';

    }
}

$(document).ready(function(){
  //Add a listener to check the size of the document when you load
  $(window).resize(checkSize);
  //Check the size now.
  checkSize();

});



function showLess(idText,lengthText,content,contentName){
    var contentNameNext = "'"+contentName+"'";
    var text = content;
    var lengthTextB = document.getElementById(idText).textContent.length;

    if(lengthTextB > lengthText){

        document.getElementById(idText).innerHTML = text.substr(0,lengthText) + "..." + "<span class='read-more' onClick=showMore('" + idText + "'," + lengthText + "," + contentName + "," + contentNameNext+ ")>Read more</span>" ;
    }
        
}


function showMore(idText,lengthText,content,contentName){
    var contentNameNext = "'"+contentName+"'";
    var text = content;
    document.getElementById(idText).innerHTML = text + "<span class='read-more' onClick=showLess('" + idText + "'," + lengthText + "," + contentName +"," + contentNameNext+ ")>Read less</span>";

}


var videoText = document.getElementById('video__text').textContent;
showLess("video__text", 110, videoText, 'videoText');


var photoText = document.getElementById('photo__text').textContent;
showLess("photo__text", 75, photoText, 'photoText');

var postText = document.getElementById('post__text').textContent;
showLess("post__text", 332, postText, 'postText');







