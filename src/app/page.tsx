'use client';

import Hero from "../component/pages/home/Hero";
import HorizontalSection from "../component/pages/home/HorizontalSection";

// const link = [
//         {href : 'https://github.com/DwiPratamaKadek',alt : 'github', src : '/icon/github.png', name: 'DwiPratamaKadek'},
//         {href : 'https://www.linkedin.com/in/dwi-pratama-923a3b34a/',alt : 'Linkd', src : '/icon/linkedin.png', name: 'ka.dwip'},
//         {href : 'mailto:dwipratamaikadek@gmail.com',alt : 'email', src : '/icon/email.png', name: 'dwipratamaikadek@gmail.com'},
//     ]

export default function Home() {

  return (
    <main className="w-full">
      <Hero/> 
      <HorizontalSection/>
    </main>
  );

}
