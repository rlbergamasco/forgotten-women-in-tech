var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("active");
    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
var overlay = document.getElementById("overlay");

function toggleMenu() {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

