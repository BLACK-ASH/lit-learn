import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex gap-8 py-16 flex-col-reverse md:flex-row items-center">
      <div className="flex flex-col gap-6 max-md:items-center flex-1">
        <h1 className="scroll-m-20 max-md:text-center text-primary text-4xl font-extrabold tracking-tight lg:text-5xl">
          Explore the World of English Literature.
        </h1>
        <h4 className="scroll-m-20 max-md:text-center text-xl font-semibold tracking-tight">
          Dive into lessons, blogs, and tests curated just for you.
        </h4>
        <div className="flex gap-6 mt-4">
          <Link href="/notes">
            <Button className="text-lg px-6 py-4 font-semibold" variant="default">
              Start Learning
            </Button>
          </Link>
          <Link href="/blogs">
            <Button className="text-lg px-6 py-4 font-semibold text-primary border-primary" variant="outline">
              Explore Blogs
            </Button>
          </Link>
        </div>
      </div>

      <div className="h-[200px] w-full md:w-[35%] bg-slate-900 text-white text-center items-center justify-center hidden md:block">
        <p className="text-lg">Photo</p>
      </div>
    </div>
  );
};

export default Hero;
