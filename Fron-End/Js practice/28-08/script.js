var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");
var img4 = document.querySelector("#img4");
var img5 = document.querySelector("#img5");
var more = document.querySelector(".ri-more-line");
var right = document.querySelector(".ri-arrow-right-s-line");
var left = document.querySelector(".ri-arrow-left-s-line");
var heart = document.querySelector(".ri-heart-fill");
var save = document.querySelector(".ri-bookmark-fill");
var img = document.querySelector("#img-div");
var h5 = document.querySelector("h3")
var btn = document.querySelector("button")
var clickbtn = 0;

heart.addEventListener("click", function () {
    if (clickbtn === 0) {
        heart.style.color = "red"
        h5.innerHTML = "Liked <b>29</b> others"
        clickbtn = 1
    } else {
        h5.innerHTML = "Liked <b>28</b> others"
        heart.style.color = "white"
        clickbtn = 0
    }
})
img.addEventListener("dblclick", function () {
    if (clickbtn === 0) {
        heart.style.color = "red"
        img5.style.opacity = ".9"
        img5.style.display = "flex"
        h5.innerHTML = "Liked <b>29</b> others"
        setTimeout(() => {
            img5.style.display = "none"
        }, 1000);


        clickbtn = 1
    } else {
        h5.innerHTML = "Liked <b>28</b> others"
        heart.style.color = "white"
        clickbtn = 0
    }
})
save.addEventListener("click", function () {
    if (clickbtn === 0) {
        save.style.color = "black"
        clickbtn = 1
    } else {
        save.style.color = "white"
        clickbtn = 0
    }
})
right.addEventListener("click", function () {
    if (clickbtn === 0) {
        img2.style.display = "flex"
        img1.style.display = "none"
        img3.style.display = "none"
        img4.style.display = "none"
        left.style.display = "flex"
        clickbtn = 1;

    }

    else if (clickbtn === 1) {
        img3.style.display = "flex"
        img1.style.display = "none"
        img2.style.display = "none"
        img4.style.display = "none"
        left.style.display = "flex"
        clickbtn = 2;
    }
    else {
        img1.style.display = "none"
        img2.style.display = "none"
        img3.style.display = "none"
        img4.style.display = "flex"
        right.style.display = "none"
        left.style.display = "flex"
        clickbtn = 0;
    }

})
left.addEventListener("click", function () {
    if (clickbtn === 0) {
        img3.style.display = "flex"
        img1.style.display = "none"
        right.style.display = "flex"
        img2.style.display = "none"
        img4.style.display = "none"
        clickbtn = 1;

    }

    else if (clickbtn === 1) {
        img2.style.display = "flex"
        img1.style.display = "none"
        img3.style.display = "none"
        right.style.display = "flex"
        img4.style.display = "none"
        clickbtn = 2;
    }
    else {
        img4.style.display = "none"
        img2.style.display = "none"
        img3.style.display = "none"
        img1.style.display = "flex"
        right.style.display = "flex"
        left.style.display = "none"
        clickbtn = 0;
    }

})
var timetaken;
btn.addEventListener("click", function () {
    if (clickbtn === 0) {
        btn.innerHTML = "Request send"
        btn.style.backgroundColor = "transparent"
        btn.style.color = "black"
        timetaken = setTimeout(() => {
            btn.innerHTML = "Following"
        }, Math.floor(Math.random() * 10 * 100));
        clickbtn = 1
    }
    else {
        clearTimeout(timetaken)
        btn.innerHTML = "Follow"
        btn.style.backgroundColor = "royalblue"
        btn.style.color = "white"

        clickbtn = 0
    }
})