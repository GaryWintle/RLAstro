import { gsap, ScrollTrigger } from "gsap/all";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase } from "gsap/EasePack";
gsap.registerPlugin(ScrollTrigger, RoughEase, CustomEase);

export function gsapAnimations() {
  // testimonials
  gsap.from(".testimonial", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power1.in",
    stagger: {
      each: 0.1,
      grid: [2, 7], // Grid configuration
      from: "start", // Start point of the stagger
      amount: 1.2, // Total time to distribute animations
    },
    scrollTrigger: {
      trigger: ".testimonial",
      //   scrub: true,
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play none none none",
      // onEnter onLeave onEnterBack onLeaveBack
      //   markers: true,
    },
  });

  //   ScrollTrigger.create({
  //     trigger: "document",
  //     start: "top",
  //     markers: true,
  //     toggleClass: { targets: "h1 > span", className: "--green-text" },
  //     toggleActions: "restart none restart none",
  //     scrub: 1,
  //   });
  //   gsap.to("span", {
  //     duration: 11,
  //     scrollTrigger: {
  //       trigger: "h1",
  //       start: "top -40px",
  //       markers: true,
  //       toggleClass: "--green-text",
  //     },
  //   });
}
