var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")
var main1 = document.querySelector("#main1")
var main2 = document.querySelector("#main2")
var main3 = document.querySelector("#main3")
clickbtn = 0
btn1.addEventListener('click', function () {
    if (clickbtn === 0) {
        main1.style.backgroundColor = "yellow"
        clickbtn = 1
    } else if (clickbtn === 1) {
        main2.style.backgroundColor = "red"
        clickbtn = 2
    } else if (clickbtn === 2) {
        main3.style.backgroundColor = "green"
        clickbtn = 3
    } else {
        btn2.addEventListener('click', function () {
            main1.style.backgroundColor = "white"
            main2.style.backgroundColor = "white"
            main3.style.backgroundColor = "white"
            clickbtn = 0
        })

    }
})


