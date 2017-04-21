var slideIndex = 0;
var slideAuto = true;

carouselSlider();

function carouselSlider() {
    if (slideAuto == true) {
        var i;
        var x = document.getElementsByClassName("slider-img");
        var dots = document.getElementsByClassName("slider-indicator");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" slider-indicator__active", "");
        }
        if (slideIndex > x.length) {
            slideIndex = 1
        }
        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " slider-indicator__active";
        setTimeout(carouselSlider, 10000);
    }
}

function plusDivsSlider(n) {
    slideAuto = false;
    showDivsSlider(slideIndex += n);
}

function currentDivSlider(n) {
    slideAuto = false;
    showDivsSlider(slideIndex = n);
}

function showDivsSlider(n) {
    var i;
    var x = document.getElementsByClassName("slider-img");
    var dots = document.getElementsByClassName("slider-indicator");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider-indicator__active", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slider-indicator__active";
}


