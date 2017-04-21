function openTab(evt, cityName) {
    var i, tabContent, tab;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" tab--active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " tab--active";
}

document.getElementById("tabOpen").click();