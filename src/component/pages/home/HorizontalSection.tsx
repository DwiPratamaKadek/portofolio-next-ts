"use client";

import { azeretMono } from "@/app/fonts";
import FlipAnimation from "@/lib/hooks/gsapanimation/child-animation/FlipAnimation";
import LeftSlideAnimation from "@/lib/hooks/gsapanimation/child-animation/LeftSlideAnimation";
import SlideDownAnimation from "@/lib/hooks/gsapanimation/child-animation/SlideDownAnimation";


import HorizontalScroll from "@/lib/hooks/gsapanimation/scroll-animation/HorizontalScroll";
import { gsap, ScrollTrigger } from "@/lib/utils/GsapHalper";

import { useEffect, useRef } from "react";


export default function HorizontalSection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const trigger1 = useRef(null)
  const trigger2 = useRef(null)

  const span2 = useRef(null)
  const span3 = useRef(null)
  const span4 = useRef(null)

  const span5 = useRef(null)
  const span6 = useRef(null)
  const span7 = useRef(null)
  const span8 = useRef(null)


  useEffect(() => {
    if( !triggerRef.current || !horizontalRef.current ) return;
    // apa itu gsap context? 
      const ctx = gsap.context(() => {
      const horizontalTl = HorizontalScroll(triggerRef.current!, horizontalRef.current!,);
      
      const saction1Tl = gsap.timeline({
        scrollTrigger : {
          trigger : trigger1.current!,
          containerAnimation : horizontalTl,
          start : "left center",
          markers : true,
          toggleActions: "play none none reverse",  
        }
      })
      saction1Tl.add(LeftSlideAnimation(span2.current!))
      saction1Tl.add(FlipAnimation(span3.current!));
      saction1Tl.add(LeftSlideAnimation(span4.current!));
      
      const saction2Tl = gsap.timeline({
        scrollTrigger : {
          trigger : trigger2.current!,
          containerAnimation : horizontalTl,
          start : "left center",
          markers : true,
          toggleActions: "play none none reverse",  
        }
      })
      saction2Tl.add(LeftSlideAnimation(span5.current!))
      saction2Tl.add(SlideDownAnimation(span6.current!))
      saction2Tl.add(LeftSlideAnimation(span8.current!))
      saction2Tl.add(FlipAnimation(span7.current!))
    })

    
    return () => ctx.revert();
  },[])
   

  return (
    <section ref={triggerRef} className="relative h-screen overflow-hidden">
        <div ref={horizontalRef} className="flex flex-row w-max h-screen">

          {/* Section 1 */}
          <div  className="panel w-screen h-screen flex items-center justify-center">
            <div className="mx-20">
              <h1
                className={`${azeretMono.className} text-6xl leading-snug`}
              >
                Programming is like painting — each line of code brings <br />
                <span
                  className="inline-block bg-amber-300 rounded-2xl p-3"
                >
                  the canvas to Left.
                </span>
                {/* <div  className="bg-gray-700 rounded-xl h-3 mt-10  " /> */}
              </h1>
            </div>
          </div>

          {/* Section 2 */}
          <div ref={trigger1} className="panel w-screen h-screen flex justify-around items-center ">
            <div
              className={`${azeretMono.className}  relative flex text-3xl sm:text-5xl mx-10 md:text-6xl lg:text-7xl gap-10`}
            >
              <h1 ref={span2} className="span absolute bg-amber-500 p-3 rounded-xl mx-2 sm:-mx-7 -my-20 z-10 ">
                What
              </h1>
              <h1 ref={span3} className="span bg-amber-300 p-3 rounded-xl my-2">
                i am doing ?
              </h1>
              <h1 ref={span4} className="span "> I’m a web developer who </h1>
            </div>
          </div>

          {/* Section 3 */}
          <div ref={trigger2} className="panel w-screen h-screen flex items-center justify-center ">
            <div className={`${azeretMono.className} flex flex-col sm:flex-row text-3xl md:text-6xl lg:text-7xl gap-5 `}>
              <h1 ref={span5} className="span  relative p-3 bg-gray-400 text-white rounded-2xl z-10 sm:absolute md:-my-28 md:-mx-16">
                enjoys creating
              </h1>
              <h1 ref={span6} className="span p-3 bg-amber-400  rounded-2xl ">
                interactive
              </h1>
              <h1 ref={span8} className="span bg-amber-500 p-3 rounded-3xl text-white w-11 sm:w-16 ">
                &
              </h1>
              <h1 ref={span7} className="span "> engaging websites. </h1>
            </div>
          </div>
        </div>
    </section>

  );
}
