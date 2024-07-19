gsap.from("#page1 #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720
})

// scrollTrigger and scrub
gsap.from("#page2 #circle",{
    scale:0,
    delay:1,
    rotate:720,
    duration:2,
    // scrollTrigger: "#page2 #circle"
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller: "body",
        markers: true,
        start:"top 60%",
        scrub: 2
    }
})

// pin property
gsap.to("#page3 img",{
    width:"70%",
    scrollTrigger:{
        trigger:"#page3",
        scroller: "body",
        start: "top 0",
        end:"top -100%",
        scrub: 2,
        pin:true
    }
})

// horizontal scroll
gsap.to("#page4 h1",{
    transform: "translateX(-130%)",
    scrollTrigger:{
        trigger:"#page4",
        scroller: "body",
        start: "top 0",
        end:"top -100%",
        scrub: 2,
        pin:true
    }
})
