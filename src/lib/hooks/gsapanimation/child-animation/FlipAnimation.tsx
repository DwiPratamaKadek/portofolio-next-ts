import { gsap } from "@/lib/utils/GsapHalper";

export default function FlipAnimation(
    triggerElement : HTMLElement | null

){
    return gsap.fromTo(triggerElement, 
        {
            rotationX: -90,
            opacity: 0,
            transformOrigin: "top center",
            
        },
        {
            rotationX: 0,
            opacity: 1,
            duration: 0.5,
            ease: "back.out",
            overwrite: "auto",

        }

    )
}