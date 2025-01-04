import Link from "next/link"
import { Button } from "@/components/ui/button"
import BlogHero from "@/components/myComponents/BlogHero"

const page = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <BlogHero />
    </div>
  )
}

export default page