import { gsap } from "@/lib/utils/GsapHalper";

export default function SlideTopAnimation(
    triggerElement : HTMLElement
){
    return gsap.from(triggerElement, {
        y : -20,
        duration : 1,
        opacity : 0, 
        ease : "back.inOut"
    })
}