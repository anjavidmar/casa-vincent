var apiKey = "AIzaSyAR_M6OinKmdAXP626xgZGXqfUsgjBxSKQ";

console.log("hello location!");

var lang;
var mapContainer = document.querySelector('.map-container')
var map_h = h;

if (w > 405) {
    map_h = h - 105;
} else {
    map_h = h - 155;
}

document.addEventListener('DOMContentLoaded', function () {
    mapContainer.style.height = map_h + 'px';

    if (document.querySelectorAll('#map').length > 0) {
        if (document.querySelector('html').lang) {
            lang = document.querySelector('html').lang;
        } else {
            lang = 'en';
        }
        
        var js_file = document.createElement('script');
        js_file.type = 'text/javascript';
        js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&key=' + apiKey + '&language=' + lang;
        document.getElementsByTagName('head')[0].appendChild(js_file);
    }
});

var map;
var marker;
var position = {lat: 45.161526, lng: 14.543894};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        // center: {lat: 45.162060, lng: 14.541309},
        center: position,
        zoom: 16
    });
    marker = new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
    })
}

window.addEventListener('resize', function() {
    h = window.innerHeight;
    w = window.innerWidth;

    if (w > 415) {
        map_h = h - 105;
    } else {
        map_h = h - 155;
    }

    mapContainer.style.height = map_h + 'px';
})