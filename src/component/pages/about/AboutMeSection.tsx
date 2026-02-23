"use client"

import { azeretMono } from "@/lib/hooks/style/fonts";

import CardStack from "@/lib/hooks/gsapanimation/scroll-animation/CardStack";
import BacgroundAnimate from "../../../lib/hooks/gsapanimation/background-animation/BackgroundAnimate";

import { useEffect, useRef} from "react";

export default function AboutMeSection(){
    const triggerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
            const tl = CardStack(triggerRef.current!, scrollRef.current!);

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        }
    }, [])

    const cardData = [
        {page: "1", content: "Hello, I’m Dwi! I a Web Developer "},
        {page: "2", content: "I’ve worked with React and Next.js for frontend development."},
        {page: "3", content: "I love creating smooth and interactive UI using GSAP."},
        {page: "4", content: "On the backend, I use Express + TypeScript and have also worked with Laravel."},
        {page: "5", content: "I built an ERP POS system as a personal project."},
        {page: "6", content: "Currently, I'm a final-year university student."},
        {page: "7", content: "I enjoy exploring new things beyond the tech world."},
        {page: "8", content: "And yes, I'm open to job opportunities ehe. 👀"}
    ]

    return (
        <>  
            {/* background */}
            <div className="absolute inset-0 z-[-1] h-[800vh]">
                <BacgroundAnimate />
            </div>
            {/* backgorund */}
            <section ref={triggerRef} className="relative w-full h-[800vh] ">
                <div ref={scrollRef} className="sticky top-0 flex justify-center items-center w-full h-screen"> 
                    {cardData.map((card, i) => (    
                        <div key={i} className="card absolute border-2 bg-white rounded-4xl shadow-xl border-gray-500 w-72 md:w-md h-72 ">
                            <div className={`${azeretMono.className} flex flex-col gap-5 p-10 h-full`}>
                                <div className="text-xl flex justify-end">
                                    <p>{card.page} / {cardData.length}</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-xl md:text-3xl flex justify-end">{card.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>  
        </>
    )
}