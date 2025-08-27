import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
    ]
    
    return (
        <nav className='flex fixed top-0 w-full justify-center items-center py-4 bg-white'>
            <div className='flex justify-between items-center max-w-3xl w-full mx-auto px-10 py-2 rounded-3xl bg-neutral-100 '>
                {navLinks.map((link) => (
                    <Link href={link.path} key={link.name}>
                        <p className='text-neutral-900 hover:text-neutral-700 font-medium'>
                            {link.name}
                        </p>
                    </Link>
                ))}
            </div>
        </nav>
    )
}