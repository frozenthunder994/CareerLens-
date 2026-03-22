'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Stories', href: '/stories' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 h-20 z-[100] transition-all duration-300 ${
      scrolled ? 'bg-[#f5f2ec]/88 backdrop-blur-md border-b border-[#e2dbd3]' : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto h-full px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="w-3 h-3 rounded-full bg-[#c94a2a] relative">
            <div className="absolute inset-0 rounded-full bg-[#c94a2a] animate-pulse-dot"></div>
          </div>
          <span className="font-syne text-2xl font-bold text-[#1a0a0a]">CareerLens AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-lg font-medium transition-all ${
                pathname === link.href 
                  ? 'text-[#c94a2a] border-b-[1.5px] border-[#c94a2a] pb-0.5' 
                  : 'text-[#8a7a72] hover:text-[#1a0a0a]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {user ? (
            <>
              <Link href="/dashboard" className="text-lg font-medium text-[#1a0a0a] hover:text-[#c94a2a] transition-all">Dashboard</Link>
              <button 
                onClick={() => logout()}
                className="btn-ghost text-lg px-6 py-2.5"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/signin" className="btn-ghost text-lg px-6 py-2.5">Sign In</Link>
              <Link href="/signup" className="btn-primary text-lg px-8 py-2.5 bg-[#1a0a0a] hover:bg-[#2d1515] text-white">Get Started Free</Link>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,74,42,0.4); }
          50%     { box-shadow: 0 0 0 5px rgba(201,74,42,0); }
        }
        .animate-pulse-dot {
          animation: pulse-dot 3s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
}
