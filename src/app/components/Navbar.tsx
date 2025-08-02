"use client"

import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }

    const menuItems = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/projects", label: "Projects"},
        {href: "/blogs", label: "Blogs"},
        {href: "/contact", label: "Contact"},
    ]
  return (
      <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50'>
        <div className='container max-w-7xl mx-auto px-4'>
          {/* desktop menu */}
          <div className='flex items-center justify-between h-16'>
             <Link href="/" className='text-xl font-bold text-primary'>Devfolio</Link>

             {/* desktop menus */}
             <div className='hidden md:flex items-center space-x-8'>
              {
                menuItems.map((item) => (
                  <Link key={item.href} href={item.href} className='hover:text-primary transition-colors'>{item.label}</Link>
                ))
              }
             </div>
          </div>

          {/* mobile menu */}
          <div>
          </div>

        </div>
      </nav>
  )
}

export default Navbar
