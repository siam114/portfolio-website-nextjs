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
    <div>
      navbar
    </div>
  )
}

export default Navbar
