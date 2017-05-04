var styles = [{
        featureType: "landscape",
        stylers: [{
            saturation: -100
        }, {
            lightness: 65
        }, {
            visibility: "on"
        }]
    }, {
        featureType: "poi",
        stylers: [{
            saturation: -100
        }, {
            lightness: 51
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "road.highway",
        stylers: [{
            saturation: -100
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "road.arterial",
        stylers: [{
            saturation: -100
        }, {
            lightness: 30
        }, {
            visibility: "on"
        }]
    }, {
        featureType: "road.local",
        stylers: [{
            saturation: -100
        }, {
            lightness: 40
        }, {
            visibility: "on"
        }]
    }, {
        featureType: "transit",
        stylers: [{
            saturation: -100
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "administrative.province",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative.locality",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative.neighborhood",
        stylers: [{
            visibility: "on"
        }]
    }, {
        featureType: "water",
        elementType: "labels",
        stylers: [{
            visibility: "on"
        }, {
            lightness: -25
        }, {
            saturation: -100
        }]
    }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
            hue: "#ffff00"
        }, {
            lightness: -25
        }, {
            saturation: -97
        }]
    }]


 function openMap() {
    var e = document.createElement("script");
    e.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBeEkmJiDqbMQxX2RzIJVCZv1BAyik8Ios&callback=initMap", document.body.appendChild(e)
};
openMap();


function initMap() {
    var uluru = {
        lat: 50.055418,
        lng: 19.934034
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        styles: styles,
        scrollwheel: false,
        scaleControl: false,
        //disableDefaultUI: false
    });

    var image = 'images/location.png';
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image
    });

    var contentString =
        '<h2 class="info__header">Piotr Ćwiertnia</br>Kancelaria Adwokacka</h2>' +
        '<p class="info__text">ul. Podzamcze 22/1</br> 31-003 Kraków</br> tel: 696 728 401</br> fax: 12 422 70 35 </p>';
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}


