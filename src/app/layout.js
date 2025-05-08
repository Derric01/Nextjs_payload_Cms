
import './globals.css';
import Navbar from '@/components/Navbar';
//import Link from 'next/link';


export const metadata ={
  title:"Beta to Alpha",
  description :"crash course on next.js",
}

export default function RootLayout({children}){
  return(
    <html lang='en'>
      
      <body className='font-sans bg-black text-white'>
        <Navbar/>
        <main className='p-6'>{children}</main>
      </body>
    </html>
  );
}