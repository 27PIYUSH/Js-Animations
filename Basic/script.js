// Set method:::
// gsap.set("#box",{
//      opacity:0,
//      background:"yellow"
// })

// 2 main methods in gsap --> 
//1) initial to final (to):::
// gsap.to("#box",{
//     x: 1000,
//     rotate: 360,
//     backgroundColor: "skyBlue",
//     delay: 1,
//     duration: 2
// })


// 2) final to initial (from):::
// gsap.from("#box",{
//     x: 1000,
//     rotate: 360,
//     backgroundColor: "skyBlue",
//     delay: 1,
//     duration: 2
// })

// from and fromTo method:::
// from -> you don't have to specify the initial state(it will figure out by itself)
// fromTo -> you have to specify the initial state and new animation state
// gsap.fromTo("#box",{
//     opacity:0
// },{
//     opacity:1,
//     x: 1000,
//     rotate: 360,
//     backgroundColor: "skyBlue",
//     delay: 1,
//     duration: 2
// })


// Timeline:::
var t1 = gsap.timeline()

t1.to("#box1",{
    x: 1000,
    rotate: 360,
    scale: 0.6,
    delay: 1,
    duration: 2
})
t1.to("#box2",{
    x: 1000,
    rotate: 360,
    scale: 0.5,
    delay: 1,
    duration: 1
})
t1.to("#box3",{
    x: 1000,
    rotate: 360,
    scale: 0.4,
    delay: 1,
    duration: 1
})
