"use client";

import { azeretMono } from "@/app/fonts";
import BacgroundAnimate from "../../../lib/hooks/gsapanimation/background-animation/BackgroundAnimate";

import  TypingAnimation  from "@/lib/hooks/gsapanimation/text-animation/TypingAnimation";
import TextPlugin from "gsap/TextPlugin";
import { gsap } from "@/lib/utils/GsapHalper";

import { useRef, useEffect } from "react";
import WidthExpandAnimation from "@/lib/hooks/gsapanimation/child-animation/WidthExpandAnimation";
import SlideDownAnimation from "@/lib/hooks/gsapanimation/child-animation/SlideDownAnimation";


gsap.registerPlugin(TextPlugin)



export default function Hero() {
    const text1Ref = useRef(null)
    const text2Ref = useRef(null)
    const text3Ref = useRef(null)
    const lineRef = useRef(null)

    useEffect(() => {
      if(!text1Ref.current || !text2Ref.current || !text3Ref.current || !lineRef.current) return
      
      const tl = gsap.timeline()
       
      tl.from(text1Ref.current,{opacity : 0})
      .add(TypingAnimation(text1Ref.current, "Helo, !."))
      .add(TypingAnimation(text2Ref.current, "I Am Dwi"))
      .add(WidthExpandAnimation(lineRef.current))
      .add(SlideDownAnimation(text3Ref.current))
    }, [])
    
    return (
        <div>
            {/* Bacground */}
            <div className="absolute inset-0 z-[-1]"> 
                <BacgroundAnimate/>
            </div>

  <section className="flex justify-center items-center h-screen px-4 sm:px-8">
        <div className={`${azeretMono.className} relative z-10 text-center sm:text-left`}>
          {/* Judul */}
          <h1
            ref={text1Ref}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl"
          ></h1>
          <h1
            ref={text2Ref}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl"
          ></h1>

          {/* Garis */}
          <div
            ref={lineRef}
            className="bg-gray-700 rounded-xl h-2 sm:h-3 mt-6 sm:mt-10 mx-auto sm:mx-0"
          />
          {/* Deskripsi */}
          <p
            ref={text3Ref}
            className="text-gray-500 font-thin opacity-0 mt-5 text-sm sm:text-base md:text-lg lg:text-xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto sm:mx-0 transition-all duration-300 hover:scale-105"
          >
            I build how things look and feel — from rough sketches to websites
            that actually work.
          </p>
        </div>
      </section>
            
        </div>
    );
}
