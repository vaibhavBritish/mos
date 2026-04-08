"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(37,99,235,0.07)] py-3 !border-primary/10" 
          : "bg-transparent py-6"
      }`}
    >
      {isScrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      )}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-ink">
        <Link href="/" className="flex items-center group transition-transform hover:scale-[1.02] duration-300">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={200}
            height={100}
            className="object-contain h-20 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About Us</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/contact" className="nav-link">Contact Us</Link>
          
          <Link
            href="#consultation"
            className="bg-primary text-white ml-2 px-7 py-2.5 rounded-md text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Request Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle (Simplified) */}
        <div className="md:hidden">
          <button className="text-primary p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
