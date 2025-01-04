import { Search } from 'lucide-react'
import React from 'react'

const BlogHero = () => {
    return (
        <div className="h-fit py-4 lg:py-20 overflow-hidden relative m-0 p-0 w-full flex flex-col gap-8 items-center justify-center ">
            <img className='w-full  -z-10 absolute top-0' src="ThemeImage.svg" alt="" />
            <div className='bg-background'>
                <h1 className="lg:text-8xl md:text-5xl text-3xl font-bold text-primary text-center lg:py-3 py-2 lg:px-20 px-10">BLOGS</h1>
            </div>
            <div className='flex gap-4 items-center bg-background border border-primary w-[80%] px-4 md:w-1/2  rounded-full'>
                <Search className='text-primary size-4 md:size-6 lg:size-8' />
                <input className=' rounded-full text-primary flex-1 bg-transparent m-1 lg:p-3 outline-none' type="text" placeholder='Search Blogs' />
            </div>
        </div>
    )
}

export default BlogHero