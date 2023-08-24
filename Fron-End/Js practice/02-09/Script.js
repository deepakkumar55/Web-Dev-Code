var cursor = document.querySelector("#cursor");
var h1 = document.querySelector("h1");
window.addEventListener("mousemove", function (dets) {
    cursor.style.left = `${dets.x}px`;
    cursor.style.top = `${dets.y}px`;

})
h1.addEventListener("mousemove", function () {
    this.animate({ fontSize: "22" }, 300);
}, function () {
    this.animate({ fontSize: "16" }, 300);

})