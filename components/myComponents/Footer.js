import React from 'react'
import Link from 'next/link'

const Footer = () => {
    let navLinks = [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "PYQs", path: "/pyqs" },
        { name: "Notes", path: "/notes" },
        { name: "Profile", path: "/profile" },
    ]

    return (
        <footer className='bg-purple-300 p-4 flex flex-col items-center justify-center' >
            <ul className="flex gap-4 ">
                {navLinks.map((link, index) => (
                    <li className='hover:underline' key={index}>
                        <Link href={link.path}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='flex justify-between bg-purple-300 py-4 px-4 md:px-20 lg:px-40 items-center'>

                <div>
                    © 2024 <a target='_blank' href="https://github.com/BLACK-ASH/lit-learn">Blackash</a>. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer