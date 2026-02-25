import { gsap } from "gsap/gsap-core";

export default function HighExpandAnimation(
    tirggerElement : HTMLElement
){
    return gsap.fromTo(tirggerElement,
        {height : 0, opacity : 0},
        {height : "40%",  opacity : 1, ease : "back.inOut" }
    )   
}