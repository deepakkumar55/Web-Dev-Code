
var tl =gsap.timeline()

.from("#line1",{
    y:"-100%",
    duration:2,
    ease: Expo.easeInOut,
    stagger: 2,

})
.from("#line2",{
    y:"100%",
    duration:2,
    ease: Expo.easeInOut,
    stagger: 0.5,
})
.to("#loader",{
    y:"-100%",
    duration:2,
    ease: Expo.easeInOut
})

