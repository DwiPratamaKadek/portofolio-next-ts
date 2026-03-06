'use client'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"


import { azeretMono } from "@/lib/hooks/style/fonts";

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
        tool : ["react", "tailwindcss", "javascript"],
        github : "https://github.com/DwiPratamaKadek/catatan-belanja"
    },
    {
        file : '/images/p2.png', 
        link : 'https://weather-map-psi.vercel.app/', 
        desc : 'Weather Map adalah aplikasi web sederhana yang digunakan untuk mengetahui kondisi cuaca terkini di berbagai wilayah di Indonesia secara praktis dan cepat.', 
        title : "Weather Map" ,
        tool : ["react", "tailwindcss", "typescript", "Open Api"],
        github : "https://github.com/DwiPratamaKadek/weather-map"
    },
    {
        file : '/images/p3.png', 
        link : 'https://frontend-chatbot-sejarah.vercel.app/', 
        desc : 'Chatbot sejarah Indonesia adalah aplikasi yang memberikan informasi sejarah secara interaktif dan mudah dipahami. Teknologi ini membantu pengguna belajar tentang tokoh, peristiwa, dan kerajaan Indonesia dengan lebih menarik.', 
        title : "Chat Bot Sejarah" ,
        tool : ["react", "tailwindcss", "typescript", "Api Gemini", "python"],
        github: "https://github.com/DwiPratamaKadek/beckend-chatbot-sejarah"

    },
     {
        file : '/images/pos_postman.png', 
        link : 'https://github.com/DwiPratamaKadek/pos-cafeShop-be-express-ts/tree/main', 
        desc : 'Kafe Shop POS adalah sistem Point of Sale yang dirancang untuk membantu operasional kafe secara digital dan terstruktur. Sistem ini menyediakan berbagai fitur utama yang mendukung proses transaksi, pengelolaan stok, pencatatan kasir, serta manajemen pengguna dan akses. Dengan sistem ini, pemilik maupun staf kafe dapat bekerja lebih efisien, mengurangi kesalahan manual, dan meningkatkan akurasi data operasional.', 
        title : "Kafe Shop POS Backend" ,
        tool : ["express", "docker", "typescript", "postgresql"],
        github: "https://github.com/DwiPratamaKadek/pos-cafeShop-be-express-ts/tree/main"

    },
    
]

gsap.registerPlugin(ScrollTrigger)

export default function ProjectSections() {
    
    return (
        <>
            <section className="flex flex-wrap justify-center gap-5 my-10 mx-5">
                {linkProject.map((items) => (
                    <div key={items.title} className={`${azeretMono.className} border border-gray-300 shadow-sm rounded-xl max-w-3xl`}>
                        <div className="flex flex-col md:flex-wrap gap-5 p-5 items-center"> 
                            <Image src={items.file} alt={items.title} width={350} height={250} className="flex-shrink-0 flex object-cover w-full h-auto"></Image>
                            <div >
                                <h2 className="font-bold text-xl">{items.title}</h2>
                                <p className="font-thin text-sm mt-2 leading-relaxed">{items.desc}</p>
                                <div className="flex flex-wrap gap-2 my-2">
                                    {items.tool.map((tool) => (
                                        <span key={tool} className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">{tool}</span>
                                    ))}
                                </div>
                                <div className="flex gap-2 mt-3">
                                    <Link href={items.link} className="rounded-full bg-blue-900 text-xs px-2.5 py-1 text-white">See Project</Link>
                                    <Link href={items.github} className="rounded-full border border-blue-600 text-blue-600 bg-transparent text-xs px-2.5 py-1 ">See Code </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}