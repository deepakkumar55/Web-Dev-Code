function slideCircle(){
    document.querySelectorAll(".slide")
        .forEach(function(slide){
            slide.addEventListener("mousemove", function(dets){
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(15% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });

            slide.addEventListener("mouseleave", function(dets){
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });
        })
}

function slidesSkewMaker(){
    
    var dim = document.querySelector(".slide")
    .getBoundingClientRect();

    var prev = dim.left;

    document.querySelector("#projects")
    .addEventListener("scroll", function(){
        var dim2 = document.querySelector(".slide")
        .getBoundingClientRect();
        var diff = prev - dim2.left;
        document.querySelectorAll(".slide")
        .forEach(function(elem){
            elem.style.transform = `skewX(${diff*.2}deg)`; 
        });
        prev = dim2.left;
    })
}

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });    
}

loco();
slidesSkewMaker();
slideCircle();