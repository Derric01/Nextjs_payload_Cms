'use client';
import Link from 'next/link';
import {motion} from 'framer-motion';


export default function Navbar(){
    return(
        <motion.nav className='bg-gray-900 text-white p-4 flex gap-6'
            initial={{y:-80,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.7,ease:'easeOut'}}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </motion.nav>
    );
}