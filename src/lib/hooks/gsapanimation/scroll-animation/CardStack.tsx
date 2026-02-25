import { gsap, ScrollTrigger } from "@/lib/utils/GsapHalper"

export default function CardStack(
    triggerElement : HTMLElement,
    scrollElement : HTMLElement
) {
    const cards = gsap.utils.toArray<HTMLElement>(scrollElement.querySelectorAll(".card"))

    // aturan untuk membuat stack card
    gsap.set(cards, {
        zIndex : (i) => cards.length - i,
        y: (i) => i * 10,
        x: (i) => i * 5, 
        scale: 1 
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger : triggerElement,
            start : "top top", 
            end : () => `+=${cards.length * window.innerHeight}`, 
            scrub : 1,
            pin : true, 
            anticipatePin : 1,
            markers : true
        }
    })

    cards.forEach((card, i) => {
        tl.to(card, {
            y: -window.innerHeight,
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        })
    });

    return tl
}