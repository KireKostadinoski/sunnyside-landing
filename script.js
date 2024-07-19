const hamburger = document.getElementById('hamburger');
let mobileMenu = document.getElementById("mobileMenu");

function menuBtn(){
    mobileMenu.classList.toggle("hidden");
}

hamburger.addEventListener("click", menuBtn);