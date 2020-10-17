function init_map() {
   var myOptions = {
      zoom: 14,
      center: new google.maps.LatLng(23.8103, 90.4125),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
   };
   map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
   marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(23.8103, 90.4125),
   });
   infowindow = new google.maps.InfoWindow({
      content: "<strong>My Location</strong><br>Dhaka<br>",
   });
   google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
   });
   infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, "load", init_map);
