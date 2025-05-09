import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import {motion} from 'framer-motion';

//import Link from 'next/link';


export const metadata ={
  title:"Beta to Alpha",
  description :"crash course on next.js",
}

export default function RootLayout({children}){
  return(
    <html lang='en' className='h-full'>
      
      <body className='font-sans bg-black text-white flex flex-col min-h-screen'>
        <Navbar/>
        <main className='flex p-6'
     //   initial={{opacity:0}}
       // animate={{opacity:1}}
        //transition={{duration:0.6}}>
        >
          {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}