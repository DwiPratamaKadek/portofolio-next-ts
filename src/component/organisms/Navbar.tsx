    'use client';

    import Link from "next/link";
    import { useState } from "react";
    import { usePathname } from "next/navigation";

    import { robotoMono } from "@/lib/hooks/style/fonts";


    const label = [
        {href : '/', label : 'index,'},
        {href : '/about', label : 'About,'},
        {href : '/contact', label : 'Contanct,'},
        {href : '/project', label : 'Project'},
    ]


    export default function Navbar (){
        const pathName = usePathname()
        const [isOpen, setIsOpen] = useState(false)

         
        console.log(pathName)

        return (
            <nav className={`${robotoMono.className} relative flex justify-around items-center p-4 shadow-sm rounded-b-xl `}>
                {/* Logo */}
                <div>
                    <h1>K.Dwi</h1>
                </div>
                {/* Bagian Routs  */}
                {/* Tampila Dekstop */}
                <ul className='hidden md:flex gap-1'>
                    {label.map((items) => (
                        <li key={items.label} className={pathName === items.href ? 'text-black' : 'text-gray-400'} >
                            <Link 
                            href={items.href} 
                            className="hover:text-black transition-colors duration-300">
                                {items.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Tampilan Mobile */}
                <button className="md:hidden flex flex-col gap-1" onClick={() => setIsOpen(!isOpen)}>
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                </button>
                {isOpen && (
                    <ul className="absolute top-full right-0 bg-white text-black shadow-md rounded-lg p-4 flex flex-col gap-2">
                        {label.map((items) => (
                            <li key={items.label} className={pathName === items.href ? 'text-black' : 'text-gray-400'}>
                                <Link 
                                href={items.href} 
                                onClick={() => setIsOpen(false)}
                                className="hover:text-black transition-colors duration-300">
                                    {items.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        )
    };