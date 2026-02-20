'use client'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"


import { azeretMono } from "../../../app/fonts"

// export async function getStaticProps() {
//     const dir = path.join(process.cwd(), 'public/images/photos')
//     const filenames = fs.readdirSync(dir)

//     const images = filenames.map((name) => ({
//         src: `/images/photos/${name}`,
//     }))

//     return {
//         props: {
//         images,
//         },
//     }
// }

const linkProject = [
    {
        file : '/images/p1.png', 
        link : 'https://note-shop-dwi-pratamas-projects.vercel.app/', 
        desc : 'Aplikasi untuk membuat sebuah catatan belanja yang mempermudahkan pengguna untuk mencatat dan mengelola daftar belanja mereka', 
        title : "Catatan Belanja",
        tool : "react, tailwindcss, javascript ",
        github : "https://github.com/DwiPratamaKadek/catatan-belanja"
    },
    {
        file : '/images/p2.png', 
        link : 'https://weather-map-psi.vercel.app/', 
        desc : 'Weather Map adalah aplikasi web sederhana yang digunakan untuk mengetahui kondisi cuaca terkini di berbagai wilayah di Indonesia secara praktis dan cepat.', 
        title : "Weather Map" ,
        tool : "rect, tailwindcss, typescript, Open Api",
        github : "https://github.com/DwiPratamaKadek/weather-map"
    },
    {
        file : '/images/p3.png', 
        link : 'https://frontend-chatbot-sejarah.vercel.app/', 
        desc : 'Chatbot sejarah Indonesia adalah aplikasi yang memberikan informasi sejarah secara interaktif dan mudah dipahami. Teknologi ini membantu pengguna belajar tentang tokoh, peristiwa, dan kerajaan Indonesia dengan lebih menarik.', 
        title : "Chat Bot Sejarah" ,
        tool : "react, tailwindcss, typescript, Open Api Gemini, python",
        github: "https://github.com/DwiPratamaKadek/beckend-chatbot-sejarah"

    },
    
]

gsap.registerPlugin(ScrollTrigger)

export default function ProjectSections() {
    
  const index = useRef(0)
  

    return (
        <>
            <section className="viewport overflow-hidden">

            </section>
        </>
    )
}