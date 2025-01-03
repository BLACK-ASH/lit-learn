import Link from "next/link"
import { Button } from "@/components/ui/button"

const page = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <h4 className="scroll-m-20 max-md:text-center text-xl font-semibold tracking-tight">This page is under development</h4>
      <Link href="/">
        <Button variant="default">Go Back Home</Button>
      </Link>
    </div>
  )
}

export default page