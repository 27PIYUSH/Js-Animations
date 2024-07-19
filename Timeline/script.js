var t1 = gsap.timeline();

t1.from("#nav h3", {
    y: -50,
    opacity: 0,
    delay: 0.4,
    duration: 0.6,
    stagger: 0.3
})

t1.from("#main h1", {
    x: -500,
    opacity: 0,
    delay: 0.4,
    duration: 0.8,
    stagger: 0.3
})

t1.from("img",{
    x:100,
    rotate:27,
    opacity:0,
    duration:0.5,
    stagger: 0.3
})

t1.from("#footer h3",{
    y:20,
    opacity:0,
    duration:0.3,
    stagger:0.3
})
