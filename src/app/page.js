import Hero from '@/components/Hero';
export const metadata ={
  title:'Home | Beta to Alpha',
  description:'WElCome to Beta to Alpha',
};
export default function Home(){
  
  return(
    <div>
      {/*Hero section*/}
      <Hero/>
      <h1  className="text-3xl font-bold">WElcome to beta to alpha</h1>
      <p className="mt-4 text-gray-400">This is a crash curse on next js and payload cmss</p>

    </div>
  );
}