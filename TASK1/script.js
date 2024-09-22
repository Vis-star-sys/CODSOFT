const mobileMenu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});


// gsap content for animation

gsap.from("#profile", {
  duration: 2,
  delay: 1,
  opacity: 0,
  scale: 0.5
})

gsap.from("#title-2, #bar1, #bar2, #bar3, #bar4, #bar5", {
  y: -100,
  duration: 2,
  delay: 1,
  opacity: 0,
  stagger: 0.5
})

gsap.from("#line-1, .title-1, #main_title1, .btn1, .btn2", {
  opacity: 0,
  duration: 2,
  delay: 1,
  scale: 0.5,
  stagger: 0.5
})



gsap.from("h2, .main_paragraph, #design", {
  x: -50,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "h2, .main_paragraph, #design",
    scroller: "body",
    start: "top 90%",
    end: "top 80%"
  }
})


gsap.from(".skills_saction", {
  x: -50,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".skills_saction",
    scroller: "body",
    start: "top 90%",
    end: "top 90%",
  }
})

gsap.from(".skills, .images", {
  scale: 0.1,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".skills",
    scroller: "body",
    start: "top 50%",
    end: "top 60%",
  }
})

gsap.from(".experiance_saction", {
  x: -50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".experiance_saction",
    scroller: "body",
    start: "top 50%",
    end: "top 43%"
  }
})

gsap.from(".experiance_p", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".experiance_p",
    scroller: "body",
    start: "top 50%",
    end: "top 43%"
  }
})


gsap.from("#card_one, #card_two", {
  opacity: 0,
  duration: 1,
  delay: 1,
  scale: 0.1,
  scrollTrigger: {
    trigger: "#card_one, #card_two",
    scroller: "body",
    start: "top 85%",
    end: "top 75%"
  }
})

gsap.from(".linefite", {
  x: -400,
  opacity: 0,
  duration: 2,
  delay: 1,
  stagger: 0.5
})