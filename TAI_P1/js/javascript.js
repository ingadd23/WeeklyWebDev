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
            if ($(this).offset().top < fromTop + 600) return this;
        });
        lastSection = lastSection[lastSection.length - 1];
        var lastSectionName = lastSection && lastSection.length ? lastSection[0].id : "";
        var windowHeight = window.innerHeight;
        var lastSectionHeight = $('#top-footer').height() + 100 + $('footer').height() + 60;
        var cur = scrollItems.map(function () {
            if (lastSectionName == 'top-footer') {
                if (windowHeight > lastSectionHeight) {
                    if ($(this).offset().top < fromTop + 600) return this;
                }
                else {
                    if ($(this).offset().top < fromTop) return this;
                }
            }
            else {
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
        if (scroll >= shrinkHeader) {
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
            }, 900, function () {});
        }
    });
});

$(function () {
    $('#menu-button').click(function () {
        $(this).toggleClass('menu-button--open');
    });
    $('#menu-button').click(function () {
        $('#menu').toggleClass('menu--in');
    });
});

$(function () {
    $('.cztery__table--wiersze tr').click(function () {
        $(this).toggleClass('selected--row');
    });
    $('#usun__wiersze').click(function () {
        $('.cztery__table--wiersze .selected--row').remove();
    });
});

lightbox.option({
    'resizeDuration': 200
    , 'wrapAround': true
    , 'albumLabel': "Kot numer %1 z %2"
});

$(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#7cc576";
    ctx.fillRect(50, 50, 250, 125);
    var grd = ctx.createLinearGradient(0, 0, 0, 300);
    grd.addColorStop(0, "#7cc576");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(350, 10, 250, 225);
    ctx.fillStyle = "#7cc576";
    ctx.fillRect(650, 50, 250, 125);
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.arc(170, 175, 70, 0, 2 * Math.PI);
    var gradient = ctx.createLinearGradient(100, 100, 200, 100);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 5;
    ctx.fill();
    ctx.stroke();
    if (window.innerWidth < 940) {
        $('#canvas').width("85vw");
    }
    else {
        $('#canvas').width("");
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth < 940) {
        $('#canvas').width("85vw");
    }
    else {
        $('#canvas').width("");
    }
});

$("#osiem__button--1").on('click', function (event) {
    alert("To jest alert statyczny");
});

$("#osiem__button--2").on('dblclick', function (event) {
    var res = confirm("Kliknij OK lub Anuluj");
    if (res == true) {
        alert("kliknąłeś OK!");
    }
    else {
        alert("kliknąłeś Anuluj!");
    }
});

$("#osiem__button--3").on('click', function (event) {
    var name = prompt("Jak masz na imię?", "Wpisz swoje imię...");
    alert("Witaj " + name + "! ");
});

const range = document.querySelector('input[type=range]');
const output = document.querySelector('output');
output.value = "Wiek: " + range.value;
range.oninput = function () {
    output.value = "Wiek: " + range.value;
};