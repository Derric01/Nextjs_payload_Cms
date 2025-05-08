'use client';
import Link from 'next/link';


export default function Navbar(){
    return(
        <nav className='bg-gray-900 text-white p-4 flex gap-6'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}