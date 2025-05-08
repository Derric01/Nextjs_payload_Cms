import Image from "next/image";

export default function Hero(){
    return(
        
        <section className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Welcome to Beta to Alpha 🚀</h1>
            <Image
                src="/next.svg"
                alt="next.js logo"
                width={150}
                height={150}
                className="mx-auto"
                />
                <p className="mt-4 text-grey-400"> Your crash course to Next.js mastery! </p>
        </section>
        
    )
}