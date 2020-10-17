const isotopContent = document.querySelectorAll(".isotop-content div");
const header = document.getElementById("isotopButton");
const btns = header.getElementsByClassName("btn");

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
