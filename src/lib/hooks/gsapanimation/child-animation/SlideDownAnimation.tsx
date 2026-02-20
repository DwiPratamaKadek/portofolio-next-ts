import { gsap } from "@/lib/utils/GsapHalper";

export default function SlideDownAnimation(
    triggerElement : HTMLElement
){
    return gsap.fromTo(triggerElement, 
        { opacity : 0, y : -20}, 
        {
            y : 0,
            duration : 0.5,
            opacity : 1, 
            ease : "back.inOut"
        }
    )
}