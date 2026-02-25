import { gsap, ScrollTrigger } from "@/lib/utils/GsapHalper";

export default function HorizontalScroll(
    triggerElement: HTMLElement,
    scrollElement: HTMLElement,
) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 10%",
        end: () =>
          "+=" + (scrollElement.scrollWidth - window.innerWidth),
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    tl.to(scrollElement, {
      x: () => -(scrollElement.scrollWidth - window.innerWidth),
      ease: "none",
      
    });
    
    return tl
}


