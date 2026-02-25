import { gsap } from "@/lib/utils/GsapHalper";

export default function SlideUpAnimation(
    triggerElement : HTMLElement 
){
    return gsap.fromTo(triggerElement,
        {opacity : 0, y: 50}, 
        {opacity : 1, y: 0, duration : 0.5, stagger : 0.5, ease : "power3.inOut"}
    )
}