import { gsap, ScrollTrigger } from "@/lib/utils/GsapHalper";

export default function TypingAnimation(
   triggerElement : HTMLElement | null,
   text : string
){
    if(!triggerElement) return gsap.timeline()

    return gsap.to(triggerElement, {
        x : -50,
        opacity : 1, 
        delay : 0.2,
        duration : 1.5,
        text : text,
        ease : "back.inOut",

    })
}