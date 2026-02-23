'use client'

import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import gsap from 'gsap';

import { azeretMono } from "@/lib/hooks/style/fonts";
import { useEffect} from 'react';
import SlideUpAnimation from '@/lib/hooks/gsapanimation/child-animation/SlideUpAnimation';



const link = [
    {href : 'https://github.com/DwiPratamaKadek', label : 'DwiPratamaKadek', icon : '/icon/github.png', alt : 'github'},
    {href : 'mailto:dwipratamaikadek@gmail.com ', label : 'dwipratamaikadek@gmail.com', icon : '/icon/email.png', alt : 'email'},
    {href : 'https://www.linkedin.com/in/dwi-pratama-923a3b34a/', label : 'Dwi Pratama', icon : '/icon/linkedin.png', alt : 'linkedin'}
]

export default function ContactSection () {
    
    useEffect(() => {
        const linkRef = gsap.utils.toArray<HTMLElement>(".linkRef")
        const tl = gsap.timeline()

        linkRef.forEach((el) => {
            tl.add(SlideUpAnimation(el))
        })

    },[])
    
    
    return (
        <>
            <div className={` ${azeretMono.className} flex flex-col justify-center h-screen text-8xl mx-10`}>
                <Typewriter 
                    options={{
                        strings :['Let’s Talk', 'Let’s Collaborate', 'Let’s Create', 'Let’s Work Together'],
                        autoStart : true,
                        loop : true
                    }}
                />
                <div className='flex gap-5 my-10'>
                    {link.map((items) => (
                        <div className='hover:scale-110 hover:shadow-xl hover:bg-gray-50 transition-all ' key={items.label}>
                            <a href={items.href} className="linkRef flex items-center gap-2 p-3 rounded-xl" >
                                <Image 
                                    src={items.icon} 
                                    alt={items.alt}
                                    width={ 25 }
                                    height={ 25 }
                                />
                                <p className="font-thin text-sm">{items.label}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
