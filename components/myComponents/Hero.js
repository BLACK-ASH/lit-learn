import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className='flex gap-2 py-16 '>
      <div className='flex flex-col gap-6 max-md:items-center  flex-1'>
        <h1 className="scroll-m-20 max-md:text-center text-primary text-4xl font-extrabold tracking-tight lg:text-5xl ">Explore the World of English Literature.</h1>
        <h4 className="scroll-m-20 max-md:text-center text-xl font-semibold tracking-tight">Dive into lessons, blogs, and tests curated just for you.</h4>
        <div className='flex gap-4 '>
          <Link href="/notes"><Button className="w-32" variant="default">Start Learning</Button></Link>
          <Link href="/blogs"><Button className="w-32 text-primary border-primary" variant="outline">Learn More</Button></Link>
        </div>
      </div>
      <div className='h-[200px] w-[35%] text-white text-center bg-slate-900 hidden md:block'>
        Photo
      </div>
    </div>
  )
}

export default Hero