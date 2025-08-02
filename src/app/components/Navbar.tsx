"use client"

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
      <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50'>navbar</nav>
  )
}

export default Navbar
