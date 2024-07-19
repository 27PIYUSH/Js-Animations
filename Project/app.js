let allH1 = document.querySelectorAll("#page2 h1");

function textSplit() {
  allH1.forEach(function (elem) {
      let clutter = "";
      let h1Text = elem.textContent;
      let splittedText = h1Text.split("");
      splittedText.forEach(function (e) {
          clutter += `<span>${e}</span>`;
      });
      elem.innerHTML = clutter;
  });

  // Debugging: Check if text was split correctly
  console.log("Text split completed");
}

function gsapAnimation() {
  gsap.to("#page2 h1 span", {
      color: "#E3E3C4",
      stagger: 0.1,
      scrollTrigger: {
          trigger: "#page2 h1",
          scroller: "#main",
          markers: true,
          start: "top 45%",
          end: "top -15%",
          scrub: 2
      }
  });

  // Debugging: Check if GSAP animation was initialized
  console.log("GSAP animation initialized");
}

function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
  });

  // Debugging: Check if locoScroll initialized
  console.log("Locomotive Scroll initialized", locoScroll);

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locoScroll();
textSplit();
gsapAnimation();
