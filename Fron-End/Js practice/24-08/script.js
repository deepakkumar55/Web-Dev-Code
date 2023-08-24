var btn = document.querySelector("button")
var clickbtn = 0;
btn.addEventListener("click", function () {
    if (clickbtn === 0) {
        btn.innerHTML = "Unfriend";
        btn.style.backgroundColor = "white";
        clickbtn = 1;
    } else {
        btn.innerHTML = "Friend";
        btn.style.backgroundColor = "rgb(0, 89, 255)";
        clickbtn = 0;
    }
})