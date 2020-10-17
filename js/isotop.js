const isotop = document.querySelector(".isotop-content");

// isotop create
const singleContent = [
   {
      name: "dev connector",
      dec: "This is a dev connactor mern stack project",
      img: "./image/dev-connactor.png",
      url: "https://devconnactor.herokuapp.com/",
      id: "mern react",
   },
   {
      name: "volunteer network",
      dec: "This is a volunteer network mern stack project",
      img: "./image/volunteer-network.png",
      url: "https://volunteer-network-sabuj.herokuapp.com/",
      id: "mern react",
   },
   {
      name: "Corona update",
      dec: "This corona-update reactjs project",
      img: "./image/corona-update.png",
      url: "https://corona-update-sabuj.netlify.com/",
      id: "react",
   },
   {
      name: "travel guru",
      dec: "This travel guru reactjs project",
      img: "./image/travel-guru.png",
      url: "https://travel-guru-c87a1.web.app/",
      id: "react",
   },
   {
      name: "agency ",
      dec: "This agency reactjs project",
      img: "./image/agency.png",
      url: "https://agency-sabuj.netlify.app/",
      id: "react",
   },
   {
      name: "Parking +",
      dec: "This parking+ html and css project",
      img: "./image/parkingplus.png",
      url: "https://sabujhasansarker.github.io/Parking/",
      id: "html",
   },
   {
      name: "amazon",
      dec: "This amazon reactjs project",
      img: "./image/amazon.png",
      url: "https://amazon-clone-kappa.vercel.app/",
      id: "react",
   },
   {
      name: "countdown",
      dec: "This countdown html and css project",
      img: "./image/countdown.png",
      url: "https://count-down.imfast.io/",
      id: "html",
   },
   {
      name: "click",
      dec: "This click leaders html and css project",
      img: "./image/click.png",
      url: "https://sabujhasansarker.github.io/Click-Leaders/",
      id: "html",
   },
   {
      name: "tailer",
      dec: "This tailer html and css project",
      img: "./image/tailer.png",
      url: "https://sabujhasansarker.github.io/Fiance-my-trailer/",
      id: "html",
   },
   {
      name: "solaris",
      dec: "This solaris html and css project",
      img: "./image/solaris.png",
      url: "https://sabujhasansarker.github.io/Solaris/",
      id: "html",
   },
];

for (let i = 0; i < singleContent.length; i++) {
   const single = singleContent[i];
   const div = document.createElement("div");
   // img
   const img = document.createElement("img");
   img.src = single.img;
   // content
   const div1 = document.createElement("div");
   const div2 = document.createElement("div");
   const h3 = document.createElement("h3");
   const a = document.createElement("a");
   div1.className = "content";
   div2.className = "content-value";
   h3.innerHTML = single.dec;
   a.innerHTML = "live preview";
   a.href = single.url;
   a.target = "_blank";

   div2.appendChild(h3);
   div2.appendChild(a);
   div1.appendChild(div2);

   div.id = single.id;
   div.className = "single-isotop-content active-isotop";

   div.appendChild(img);
   div.appendChild(div1);
   isotop.appendChild(div);
}

// isotop funtion
const header = document.getElementById("isotopButton");
const btns = header.getElementsByClassName("btn");
const isotopContent = document.querySelectorAll(".single-isotop-content");

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
