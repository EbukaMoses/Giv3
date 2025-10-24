
'use client'
import React from 'react'
import Link from 'next/link'
import Container from '@/ui/Container'
import Button from '@/ui/Button'

const Navbar = () => {
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className='sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'>
      <Container className='max-w-screen-2xl w-full py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Link href="/" className='flex items-center space-x-2 group'>
            <div className='w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 shadow-lg group-hover:shadow-xl'>
              <span className='text-white font-bold text-xl'>G</span>
            </div>
            <span className='text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300'>
              Giv<span className='text-orange-500'>3</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          {/* <div className='hidden md:flex items-center space-x-8'>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 relative group'
              >
                {item.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300'></span>
              </Link>
            ))}
          </div> */}

          {/* Actions */}
          <div className='flex items-center space-x-4'>
            <Link
              href="/dashboard"
              className='hidden sm:flex items-center text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 relative group'
            >
              Dashboard
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300'></span>
            </Link>

            <div className='hidden sm:block'>
              <Button
                title="Connect Wallet"
                path="/"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              />
            </div>

            {/* Mobile Menu Button */}
            <button className='md:hidden p-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-gray-100 transition-all duration-300'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className='md:hidden mt-4 pt-4 border-t border-gray-200'>
          <div className='flex flex-col space-y-3'>
            {/* {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-700 hover:text-orange-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300'
              >
                {item.name}
              </Link>
            ))} */}
            <Link
              href="/dashboard"
              className='text-gray-700 hover:text-orange-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300'
            >
              Dashboard
            </Link>
            <div className='pt-2'>
              <Button
                title="Connect Wallet"
                path="/"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar