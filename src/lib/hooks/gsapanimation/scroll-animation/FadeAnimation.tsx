import { gsap, ScrollTrigger } from "@/lib/utils/GsapHalper";

export default function FadeAnimation(
    triggerElement : HTMLElement
) {
    return gsap.fromTo(
        triggerElement,
        {opacity : 0},
        {opacity : 1, ease : "power4.out"}
    )
}