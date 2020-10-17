const isotopContent = document.querySelectorAll(".isotop-content div");
var header = document.getElementById("isotopButton");
var btns = header.getElementsByClassName("btn");
const root = document.querySelector(":root");

const active = (hash) => {
   for (let i = 0; i < isotopContent.length; i++) {
      const element = isotopContent[i];
      if (element.id.split(" ").includes(hash)) {
         element.classList.add("active-isotop");
         element.classList.remove("inactive-isotop");
      } else if (hash === "all") {
         element.classList.add("active-isotop");
         element.classList.remove("inactive-isotop");
      } else {
         element.classList.add("inactive-isotop");
         element.classList.remove("active-isotop");
      }
   }
};

for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function (e) {
      active(e.target.id);
      var current = document.getElementsByClassName("active-btn");
      current[0].className = current[0].className.replace(" active-btn", "");
      this.className += " active-btn";
   });
}

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

// responsive
const responsive = document.querySelector(".responsive");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
responsive.addEventListener("click", () => {
   ul.classList.toggle("active-ul");
   nav.classList.toggle("active-nav");
});

// onload

window.addEventListener("load", () => {
   function loader(_success) {
      var width = 0,
         t = setInterval(function () {
            width = width + 1;
            root.style.setProperty("--afterWidth", `${width}%`);
            if (width === 100) {
               clearInterval(t);
               width = 0;
               if (_success) {
                  return _success();
               }
            }
         }, 0);
   }
   loader();
});

// scroll
window.addEventListener("scroll", () => {
   var pos = getVerticalScrollPercentage(document.body);
   document.querySelector("header").classList.add("scroll-position");
   root.style.setProperty("--beforeWidth", `${Math.round(pos)}`);
});

function getVerticalScrollPercentage(elm) {
   var p = elm.parentNode,
      pos =
         ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) *
         100;

   return pos;
}
