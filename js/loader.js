const root = document.querySelector(":root");

// onload
window.addEventListener("load", () => loader());

// loader
const loader = (_success) => {
   var width = 0,
      t = setInterval(function () {
         width = width + 1;
         root.style.setProperty("--afterWidth", `${width}%`);
         block(false);
         if (width === 100) {
            clearInterval(t);
            block(true);
            // scroll
            window.addEventListener("scroll", () => scrollEffect());
            width = 0;
            if (_success) {
               return _success();
            }
         }
      }, 0);
};
