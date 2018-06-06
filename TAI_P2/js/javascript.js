
$("zarejestrujUzytkownika").submit(function () {
    event.preventDefault();

    var imie = $("#imie").val();
    var nazwisko = $("#nazwisko").val();
    var login = $("#login").val();
    var haslo = $("#haslo").val();
    var email = $("#email").val();

    $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: JSON.stringify(show),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            alert(response.d);
        },
        failure: function (response) {
            alert("Falla - " + response.d);
        }
    });
});

$("zalogujUzytkownika").submit(function () {
    event.preventDefault();
    
    var login = $("#login").val();
    var haslo = $("#haslo").val();

    $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: JSON.stringify(show),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            alert(response.d);
        },
        failure: function (response) {
            alert("Falla - " + response.d);
        }
    });
});


function getUzytkownik() {
    if(window.location.hash) {
        window.location = 'panelZalogowanego' +'#loaded';  
    } 
    if(!window.location.hash) {
        window.location = window.location +'#loaded';  
        window.location.reload();
    } 
    
    $.ajax({
        type: "GET",
        url: "/getUzytkownik"
    }).then(function(data) {
       $('#id').append(data.id);
       $('#imie').append(data.imie);
       $('#nazwisko').append(data.nazwisko);
       $('#login').append(data.login);
       $('#haslo').append(data.haslo);
       $('#email').append(data.email); 
    });
};




function getFilm() {
    
    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    };
    
    $.ajax({
        type: "GET",
        url: "/getFilm?id="+$.urlParam('id')
    }).then(function(data) {
       $('#id').append(data.id);
       $('#tytul').append(data.tytul);
       $('#tytul1').append(data.tytul);
       $('#rok').append(data.rok);
       $('#opis').append(data.opis);
       $('#gatunek').append(data.gatunek);
       $('#rezyseria').append(data.rezyseria); 
       $('#scenariusz').append(data.scenariusz);
       $('#premiera').append(data.premiera);
       document.getElementById('img').src = data.img;
    });
};


function getUzytkownikId(){
    $.ajax({
        type: "GET",
        url: "/getUzytkownikId"
    }).then(function(data) {
        console.log("user id " + data);
        if(data === -2){
            
          
            $('#logButton').append("zaloguj się");
            document.getElementById('logButton').href = "/panelLogowania";
            
            $('#menuHref').append("strona główna");
            document.getElementById('menuHref').href = "http://localhost:8080/";
            document.getElementById('navHref').href = "http://localhost:8080/";
        } else {
            $('#film-button').removeClass('film-button--hidden');
            $('#film-button').addClass('film-button');
            document.getElementById('logButton').href = "/wylogujSie";
            $('#logButton').append("wyloguj się");
            
            $('#menuHref').append("mój panel");
            document.getElementById('menuHref').href = "/panelZalogowanego";
            document.getElementById('navHref').href = "/panelZalogowanego";
        }
        
    });
};


function getUlubione(){
    $.ajax({
        type: "GET",
        url: "/getUlubione"
    }).then(function(data) {

        console.log(data);
        
        
        
        
        for (i=0;i<data.length; i++){
            console.log(data[i].idFilmu);
            
            if(data[i].idFilmu===1){image='images/nowe3.jpg';tytul='Avengers: Wojna bez granic'}
            if(data[i].idFilmu===2){image='images/nowe2.jpg';tytul='Tomb Rider'}
            if(data[i].idFilmu===3){image='images/nowe5.jpg';tytul='Deadpool 2'}
            if(data[i].idFilmu===4){image='images/nowe1.jpg';tytul='Czarna Pantera'}
            if(data[i].idFilmu===5){image='images/nowe4.jpg';tytul='Futrzaki ruszają na ratunek'}
            if(data[i].idFilmu===6){image='images/nowe7.jpg';tytul='Wyszczekani'}
            if(data[i].idFilmu===7){image='images/nowe8.jpg';tytul='Ella i John'}
            
            

            var aCreate = document.createElement('a');
            aCreate.setAttribute("href", "panelFilmu?id="+data[i].idFilmu);
            aCreate.setAttribute("class", "ulubione-row");
            
            var imgCreate = document.createElement('img');
            imgCreate.setAttribute("src", image);
            imgCreate.setAttribute("class", "ulubione__img");
            imgCreate.setAttribute("alt", "img");
            
            var pCreate = document.createElement('p');
            pCreate.setAttribute("class", "subtitle subtitle--margin");
            pCreate.innerHTML = tytul;
        
            aCreate.appendChild(imgCreate);
            aCreate.appendChild(pCreate);
            document.getElementById("ulubione-column").appendChild(aCreate);
            
        }
        

    });
}

function czyLubi() {

    var idUzytkownika;
    var idFilmu;

    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    };
    idFilmu = $.urlParam('id');

    $.ajax({
        type: "GET",
        url: "/getUzytkownikId"
    }).then(function (data) {
        idUzytkownika = data;

        $.ajax({
            type: "GET",
            url: "/czyLubi?idUzytkownika=" + idUzytkownika + "&idFilmu=" + idFilmu
        }).then(function (data1) {
            if (data1 === true) {
                $('#film-button').append("usuń z ulubionych");
                document.getElementById('film-button').onclick = function () {
                    usunZUlubionych(idUzytkownika,idFilmu);
                };
            } else {
                $('#film-button').append("dodaj do ulubionych");
                document.getElementById('film-button').onclick = function () {
                    dodajDoUlubionych(idUzytkownika,idFilmu);
                };
            }

        });

    });

};



function usunZUlubionych(idUzytkownika, idFilmu) {
    $.ajax({
        type: "GET",
        url: "/usunZUlubionych?idUzytkownika=" + idUzytkownika + "&idFilmu=" + idFilmu
    });
    window.location.reload();
};

function dodajDoUlubionych(idUzytkownika, idFilmu) {
    $.ajax({
        type: "GET",
        url: "/dodajDoUlubionych?idUzytkownika=" + idUzytkownika + "&idFilmu=" + idFilmu
    });
    window.location.reload();
};

function autoWylogowanie() {
    console.log("lalal");
    $.ajax({
        type: "GET",
        url: "/autoWylogowanie"
    });
};




function sprawdz() { 

    var haslo = $("#haslo").val();
    var haslo1 = $("#haslo1").val();
    
    if(haslo !== haslo1){
        
        $('#haslo').val(""); 
        $('#haslo1').val(""); 
        $('#blad').append("hasła różnią się"); 
    }
};


function loadOnce() { 
{
  if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
 };}
 
 function brakKonta() { 
{
  if(!window.location.hash) {
        window.location =  'brakKonta#';  
    }
 };}

