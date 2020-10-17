// display block
const block = (block) => {
   const section = document.querySelectorAll("section");
   for (let i = 0; i < section.length; i++) {
      section[i].style.display = block ? "block" : "none";
   }
   document.querySelector("footer").style.display = block ? "block" : "none";
};

// scrolling effect
const scrollEffect = () => {
   var pos = getVerticalScrollPercentage(document.body);
   root.style.setProperty("--beforeWidth", `${Math.round(pos)}%`);
};

function getVerticalScrollPercentage(elm) {
   var p = elm.parentNode,
      pos =
         ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) *
         100;

   return pos;
}
