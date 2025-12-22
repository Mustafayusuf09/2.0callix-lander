'use client';

import React from 'react';

const NavLink: React.FC<{ children: React.ReactNode; hasDropdown?: boolean }> = ({ children, hasDropdown }) => (
  <a href="#" className="flex items-center gap-1 text-[13px] font-medium text-secondary hover:text-primary transition-colors px-4 group whitespace-nowrap">
    {children}
    {hasDropdown && (
      <svg className="w-3.5 h-3.5 text-tertiary group-hover:text-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    )}
  </a>
);

import { ShimmerButton } from './ShimmerButton';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-[100] bg-black backdrop-blur-xl border-b border-steel/50">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center group cursor-pointer shrink-0">
          <span className="text-[22px] font-bold tracking-tighter text-primary lowercase">
            callix<span className="text-brand-blue">.</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center mx-auto">
          <NavLink hasDropdown>Product</NavLink>
          <NavLink hasDropdown>Solutions</NavLink>
          <NavLink>How it works</NavLink>
          <NavLink>Why callix?</NavLink>
          <NavLink>FAQ’S</NavLink>
        </div>

        <div className="flex items-center gap-6 shrink-0">
          <a href="#" className="text-[12px] font-semibold text-secondary hover:text-primary transition-colors">
            Log in
          </a>
          <ShimmerButton
            className="shadow-2xl font-dm-sans"
            background="black"
            shimmerColor="#FFFFFF"
            shimmerSize="0.1em"
            borderRadius="100px"
          >
            <span className="text-white font-bold text-[13px] relative z-10">Book Demo</span>
          </ShimmerButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;