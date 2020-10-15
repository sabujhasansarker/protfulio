const isotopButton = document.querySelectorAll(".isotopButton li");
const isotopContent = document.querySelectorAll(".isotop-content div");

const active = (hash) => {
   for (let i = 0; i < isotopContent.length; i++) {
      const element = isotopContent[i];
      if (element.id.split(" ").includes(hash.slice(1))) {
         element.classList.add("active-isotop");
         element.classList.remove("inactive-isotop");
      } else if (hash === "#all") {
         element.classList.add("active-isotop");
         element.classList.remove("inactive-isotop");
      } else {
         element.classList.add("inactive-isotop");
         element.classList.remove("active-isotop");
      }
   }
};

for (let i = 0; i < isotopButton.length; i++) {
   const button = isotopButton[i];
   button.addEventListener("click", (e) => {
      active(e.target.hash);
   });
}
