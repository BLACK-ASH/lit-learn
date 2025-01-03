"use client"
import React, { useState, useEffect } from 'react'
import { Home, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ModeToggle } from '../mode-toggle'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true); // Set client-side render flag
  }, []);

  let navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "PYQs", path: "/pyqs" },
    { name: "Notes", path: "/notes" },
    { name: "Profile", path: "/profile" },
  ]

  if (!isClient) {
    return null; // Render nothing during SSR
  }

  return (
    <nav className="flex text-primary justify-between items-center sm:m-1 sm:rounded fixed top-0 left-0 w-full bg-background/75 backdrop-blur  py-4 px-4 md:px-20 lg:px-40">
      <p className="font-bold  text-3xl">LitLearn</p>

      <div className='flex gap-4 items-center'>
        <div className="hidden md:flex gap-4 items-center">
          <ul className="flex gap-4">
            {navLinks.map((link, index) => (
              <li className={pathname === link.path ? "font-bold underline" : "hover:underline"} key={index}>
                <Link href={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <div className='hidden md:flex'>
          <ModeToggle />
        </div>

        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="hover:cursor-pointer h-8 w-8" />
            </SheetTrigger>
            <SheetContent side="left" >
              <SheetHeader>
                <div className='flex gap-4 items-center'>
                  <ModeToggle />
                </div>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className='flex flex-col space-y-2'>
                <Button variant="ghost" className="w-full">
                  <Link href="/">
                    <SheetClose asChild>
                      <div className={`flex items-center text-primary text-xl ${pathname === "/" ? "underline font-bold" : ""}`}>
                        <Home className="mr-2 h-10 w-10" />
                        <p>Home</p>
                      </div>
                    </SheetClose>
                  </Link>
                </Button>

                <Button variant="ghost" className="w-full">
                  <Link href="/blog">
                    <SheetClose asChild>
                      <div className={`flex items-center text-primary text-xl ${pathname === "/blog" ? "underline font-bold" : ""}`}>
                        <p>Blog</p>
                      </div>
                    </SheetClose>
                  </Link>
                </Button>

                <Button variant="ghost" className="w-full">
                  <Link href="/pyqs">
                    <SheetClose asChild>
                      <div className={`flex items-center text-primary text-xl ${pathname === "/pyqs" ? "underline font-bold" : ""}`}>
                        <p>PYQs</p>
                      </div>
                    </SheetClose>
                  </Link>
                </Button>

                <Button variant="ghost" className="w-full">
                  <Link href="/notes">
                    <SheetClose asChild>
                      <div className={`flex items-center text-primary text-xl ${pathname === "/notes" ? "underline font-bold" : ""}`}>
                        <p>Notes</p>
                      </div>
                    </SheetClose>
                  </Link>
                </Button>

                <Button variant="ghost" className="w-full">
                  <Link href="/profile">
                    <SheetClose asChild>
                      <div className={`flex items-center text-primary text-xl ${pathname === "/profile" ? "underline font-bold" : ""}`}>
                        <p>Profile</p>
                      </div>
                    </SheetClose>
                  </Link>
                </Button>

              </div>

            </SheetContent>
          </Sheet>
        </div>

      </div>



    </nav >
  );
};

export default Navbar;
