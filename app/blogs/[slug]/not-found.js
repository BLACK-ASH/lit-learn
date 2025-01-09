import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-6">The Blog you are looking for does not exist.</p>
            <Link href="/blogs">
                <Button variant="default">Go Back Blog</Button>
            </Link>
        </div>
    )
}