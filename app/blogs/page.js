import Link from "next/link"
import { Button } from "@/components/ui/button"
import BlogHero from "@/components/myComponents/BlogHero"
import TrendingBlog from "@/components/myComponents/TrendingBlog"

const page = () => {
  return (
    <div >
      <BlogHero />
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-4">
        <div className="bg-secondary backdrop:blur-lg border border-dashed border-primary flex flex-col items-center gap-2 p-2 md:gap-4 md:p-4 rounded-full">
          <h2 className="scroll-m-20 border-b pb-2 text-xl md:text-3xl font-semibold tracking-tight first:mt-0">Create Your Own Blog</h2>
          <Link href="/blogs/new">
            <Button variant="default">Create New Blog</Button>
          </Link>
        </div>
        <TrendingBlog />
      </div>
    </div>
  )
}

export default page