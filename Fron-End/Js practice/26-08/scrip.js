var menu = document.querySelector(".ri-menu-line");
var cclosethis = document.querySelector(".ri-close-line");
var nav = document.querySelector("#nav");
menu.addEventListener("click", function () {
    cclosethis.style.display = "flex";
    nav.style.display = "block";
    menu.style.display = "none";
    nav.style.animationName = "raaj";


});
cclosethis.addEventListener("click", function () {
    cclosethis.style.display = "none";
    nav.style.display = "none";
    menu.style.display = "flex";

});
