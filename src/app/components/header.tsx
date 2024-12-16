'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
        <header className="text-[#FFFFFF] body-font bg-[#043873]">
        <div className='hidden sm:block'>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center mb-4 md:mb-0">
      <Image 
            src={'/Logo Icon.png'}
            alt='logo'
            width={37}
            height={29}
      />
      <span className="ml-3 text-xl">whitepace</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Products</a>
      <a className="mr-5 hover:text-gray-900">Solutions</a>
      <a className="mr-5 hover:text-gray-900">Resources</a>
      <a className="mr-14 hover:text-gray-900">Pricing</a>
    </nav>
    <button className="inline-flex items-center bg-[#FFE492] border-0 py-1 px-3 focus:outline-none text-[#043873] rounded text-base mt-4 md:mt-0">
      Login
    </button>
  </div>
  </div>
  <div className="sm:hidden  flex items-center justify-right p-5 ">
        <button
          aria-label="Menu"
          className="p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-1 bg-white mb-1 transition-transform duration-300" />
          <span className="block w-6 h-1 bg-white mb-1 transition-transform duration-300" />
          <span className="block w-6 h-1 bg-white transition-transform duration-300" />
        </button>
      </div>
      {/* Sliding Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white shadow-lg z-10 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 bg-[#043873] text-[#FFFFFF]">
          <Link href="/" className="text-base font-medium font-poppins transition-colors" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/" className="text-base font-medium font-poppins transition-colors" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link href="/" className="text-base font-medium font-poppins transition-colors" onClick={() => setMenuOpen(false)}>Resources</Link>
          <Link href="/" className="text-base font-medium font-poppins transition-colors" onClick={() => setMenuOpen(false)}>Pricing</Link>
        </div>
      </div>
</header>

    </div>
  )
}

export default Header