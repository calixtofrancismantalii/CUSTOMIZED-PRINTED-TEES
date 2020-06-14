//function initMap(){
//    var location, map;
//    location = {lat: 14.599512, lang: 120.984222};
//    map = new google.maps.Map(document.getElementById("map"), {
//        zoom: 4,
//        center: location
//    });
//    
//}



function myMap() {
var mapProp = {
    center:new google.maps.LatLng(14.599512,120.984222),
    zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}