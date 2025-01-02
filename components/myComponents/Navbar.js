"use client"
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); 
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true); // Set client-side render flag
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false)

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
    <nav className="flex text-primary justify-between items-center sm:m-1 sm:rounded fixed top-0 left-0 w-full bg-white/75 backdrop-blur  py-4 px-4 md:px-20 lg:px-40">
      <p className="font-bold  text-3xl">LitLearn</p>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4">

        <ul className="flex gap-4">
          {navLinks.map((link, index) => (
            <li className={pathname === link.path ? "font-bold underline" : ""} key={index}>
              <Link href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X className="w-8  h-8  text-primary" /> : <Menu className="w-8  h-8  text-primary" />}
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white rounded-b-lg">
          <div className="flex flex-col items-center">
            {navLinks.map((link, index) => (
              <Link href={link.path} key={index} className={`${pathname === link.path ? "font-bold underline" : ""} w-full text-lg text-center py-2`} onClick={closeMenu}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
