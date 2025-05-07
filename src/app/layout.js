import Link from 'next/link';
import './globals.css';


export const metadata ={
  title:"Beta to Alpha",
  description :"crash course on next.js",
}

export default function RootLayout({children}){
  return(
    <html lang='en'>
      <body className='font-sans'>
        <nav className='bg-gray-900 text-white p-4 flex gap-6'>
          <Link href="/">Home</Link>
          <Link href="about">About</Link>
          <Link href="contact">Contact</Link>
        </nav>
      </body>
    </html>
  )
}