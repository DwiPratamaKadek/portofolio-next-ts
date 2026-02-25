import { gsap } from "@/lib/utils/GsapHalper";

export default function LeftSlideAnimation(
    triggerElement : HTMLElement

){
    return gsap.from(triggerElement, {
        x: -60,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
    })
}