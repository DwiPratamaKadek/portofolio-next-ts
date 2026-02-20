"use client"

import { azeretMono } from "@/app/fonts";

import CardStack from "@/lib/hooks/gsapanimation/scroll-animation/CardStack";
import BacgroundAnimate from "../../../lib/hooks/gsapanimation/background-animation/BackgroundAnimate";

import { useEffect, useRef, useState } from "react";

export default function AboutMeSection(){
    const triggerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const [page, setPage] = useState(null)

    useEffect(() => {
            const tl = CardStack(triggerRef.current!, scrollRef.current!);

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        }
    }, [])

    const cardData = [
        {page: "1", content: "Hello, Im Dwi! I a Web Developer and i kocak"},
        {page: "2", content: "My Experient for my life : "},
        {page: "3", content: "I hate this life"},
        {page: "4", content: "I dont know what to write here"},
        {page: "5", content: "Please help me what i write here"} 
    ]

    return (
        <>  
            {/* background */}
            <div className="absolute inset-0 z-[-1] h-[500vh]">
                <BacgroundAnimate />
            </div>
            {/* backgorund */}
            <section ref={triggerRef} className="relative w-full h-[500vh] ">
                <div ref={scrollRef} className="sticky top-0 flex justify-center items-center w-full h-screen"> 
                    {cardData.map((card, i) => (    
                        <div key={i} className="card absolute border-2 bg-white rounded-4xl shadow-xl border-gray-500 w-md h-72 ">
                            <div className="flex flex-col gap-5 p-10 h-full ">
                                <div className="flex justify-end ">
                                    <p>{card.page} / {cardData.length}</p>
                                </div>
                                <div className="flex  items-center justify-center">
                                    <p className={`${azeretMono.className} text-3xl flex justify-center`}> {card.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>  
        </>
    )
}