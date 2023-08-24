var btn = document.querySelector("button");
var h3 = document.querySelector("#h3")
var btnclick = 0;
btn.addEventListener("click", function () {
    if (btnclick === 0) {
        btn.innerHTML = "Following";
        h3.innerHTML = "956 followers";
        btn.style.backgroundColor = "white";
        btnclick = 1;
        console.log("Hey Raaj Aryan I'm working properly");
    } else {
        btn.innerHTML = "Follow";
        console.log("Hey Raaj Aryan I'm working properly");
        h3.innerHTML = "955 followers";
        btn.style.backgroundColor = "#0095f6";


        btnclick = 0;
    }
})