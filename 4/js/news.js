var slideIndexNews = 1;
showDivsNews(slideIndexNews);


function currentDivNews(n) {
    showDivsNews(slideIndexNews = n);
}

function showDivsNews(n) {
    var i;
    var x = document.getElementsByClassName("news-bg");
    var dots = document.getElementsByClassName("news-indicator");
    if (n > x.length) {
        slideIndexNews = 1
    }
    if (n < 1) {
        slideIndexNews = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" news-indicator__active", "");
    }
    x[slideIndexNews - 1].style.display = "block";
    dots[slideIndexNews - 1].className += " news-indicator__active";
}