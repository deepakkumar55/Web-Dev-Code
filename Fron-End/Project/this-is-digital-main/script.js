function show() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#bg"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#bg" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#bg", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
show()

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
});


var tl = gsap.timeline()
tl.from("#img1", {
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
    y: 100
})
tl.from("#img2", {
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
    x: 100
}, "-=0.8")
tl.from("#img3", {
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
    y: -100
}, "-=0.8")
tl.from("#page1 h1", {
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
}, "-=0.8")


gsap.from("#page2 h4, #page2 h1,#page2 #about-us", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2 h4",
        scroller: "#bg",
        // markers:true,
        start: "top 70%",
    },
    stagger: {
        amount: 0.8
    },
    y: 20
})


gsap.from("#page3 img", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#bg",
        // markers:true,
        start: "top 70%",
    },
    stagger: {
        amount: 0.8
    },
    y: 20
})

gsap.from("#page3-part2 h1, #page3-part2 p, #page3-part2 #koisa-div", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#bg",
        // markers:true,
        start: "top 70%",
    },
    stagger: {
        amount: 0.8
    },
    y: 20
})