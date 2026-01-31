import { gsap } from "@/lib/utils/GsapHalper";

export default function WidthExpandAnimation(
    triggerElement : HTMLElement
){
    return gsap.fromTo(triggerElement,
        {width : 0, opacity : 0},
        {width : "100%", opacity : 1, ease : "back.inOut" }
    )
}