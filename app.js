const lenis = new Lenis()


lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// main
var text2H1 = document.querySelector(".text2 h1")
var text2Scroll = 0;

var text3H1 = document.querySelector(".text3 h1")
var text3Scroll = -200;
text3H1.style.left = text3Scroll + "%";

var text4H1 = document.querySelector(".text4 h1")
var text4Scroll = -50;
text4H1.style.left = text4Scroll + "%";

window.addEventListener("scroll", () => {
  window.onscroll = function (e) {
    // print "false" if direction is down and "true" if up
    var scrollScale = this.oldScroll - this.scrollY;
    if (isNaN(scrollScale)) {
      scrollScale = 0;
    }
    // console.log(scrollScale);
    if (scrollScale >= 0) {

      // horzontal animation
      text2Scroll += scrollScale * 0.025;
      text2H1.style.left = text2Scroll + "%";

      text3Scroll -= scrollScale * 0.05;
      text3H1.style.left = text3Scroll + "%";

      text4Scroll += scrollScale * 0.025;
      text4H1.style.left = text4Scroll + "%";
    } else {

      text2Scroll += 0.025 * scrollScale;
      text2H1.style.left = text2Scroll + "%";

      text3Scroll -= 0.05 * scrollScale;
      text3H1.style.left = text3Scroll + "%";

      text4Scroll += scrollScale * 0.025;
      text4H1.style.left = text4Scroll + "%";
    }
    this.oldScroll = this.scrollY;
  }
})

// intro
document.body.addEventListener("mousemove" , event=>{
  const x = event.clientX;
  const y = event.clientY;

  gsap.to(".shape" , {
      x : x,
      y: y,
      stagger : -0.05
  })
})

// gsap

gsap.registerPlugin(ScrollTrigger)

// project
gsap.to(".project", {
  scale: 1.05, stagger: 0.25, duration: 1,
  scrollTrigger: {
    trigger: ".project",
    start: 'top 80%',
    end: 'top 20%',
    toggleActions: 'play play reverse reverse',
    scrub: true
  }
});


gsap.fromTo(".title",

  { color: "rgba(128, 128, 128, 0)" },

  {
    color: "white",
    x: 200,
    stagger: 0.25,
    duration: .6,
    scrollTrigger: {
      trigger: ".project",
      start: 'top 60%',
      end: 'top 20%',
      toggleActions: 'play play reverse reverse',
      // scrub: true
    }
  }
);


// mobile
const pTab = document.querySelectorAll('.pTab');

pTab.forEach((p) => {
  gsap.to(p, {
    scale: 1,
    opacity: 1,
    duration: .2,
    scrollTrigger: {
      trigger: p,
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play play reverse reverse',
      scrub: true
    }
  });
})

// contact
gsap.to(".contact", {
  y: -200,
  stagger: 0.25,
  duration: .6,
  scrollTrigger: {
    trigger: ".contact",
    start: 'top 100%',
    end: 'top 0%',
    toggleActions: 'play play reverse reverse',
  }
}
);

gsap.to(".get", {
  x: 100,
  stagger: 0.25,
  duration: .6,
  scrollTrigger: {
    trigger: ".get",
    start: 'top 90%',
    end: 'top 20%',
    toggleActions: 'play play reverse reverse',
    scrub: true,
  }
}
);


// skill
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// locomotive

function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.cover'),
    smooth: true
  });
}


