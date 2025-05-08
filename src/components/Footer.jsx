"use client";
import {motion} from 'framer-motion';
export default function Footer(){
    return(
        <motion.footer className="bg-gray-800 text-white py-4 mt-auto w-full text-center"
        initial={{opacity:0}}
        animate={{opacity:1}
}
        transition={{delay:0.5,duration:0.8}}>
           © {new Date().getFullYear()} Beta to Alpha 🚀 | Built with ❤️ and Next.js  
        </motion.footer>
       
    )
}