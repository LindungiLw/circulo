"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  Calculator, 
  Building2
} from 'lucide-react';
import SolutionsDropdown from './SolutionsDropdown';
import MobileMenu from './MobileMenu';
import ImpactCalculatorModal from '../modals/ImpactCalculatorModal';
import ClientLoginModal from '../modals/ClientLoginModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple scroll spy
      const sections = ['solusi', 'dampak', 'katalog'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`w-full px-4 sm:px-8 z-40 fixed top-0 left-0 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'py-3.5 bg-[#f8f7f2]/95 backdrop-blur-md border-b border-[#1a3626]/10 shadow-xs' 
            : 'py-5 sm:py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 text-2xl font-black text-[#1a3626] group">
            <img src="/logo.png" alt="Circulo Logo" className="w-8 h-8 object-contain transition-transform group-hover:rotate-12 duration-300" />
            <span className="tracking-tight">Circulo</span>
          </Link>

          {/* Desktop Center Menu Links */}
          <div className="hidden lg:flex items-center gap-8 text-[#1a3626] font-semibold text-sm">
            
            {/* Dropdown: Solusi B2B */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
            >
              <button
                type="button"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className={`flex items-center gap-1.5 py-1 transition-colors hover:text-[#5c8770] ${
                  isSolutionsOpen || activeSection === 'solusi' ? 'text-[#5c8770]' : ''
                }`}
                aria-expanded={isSolutionsOpen}
              >
                Solusi B2B
                <ChevronDown size={15} className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180 text-[#5c8770]' : ''}`} />
              </button>
              
              <SolutionsDropdown 
                isOpen={isSolutionsOpen} 
                onClose={() => setIsSolutionsOpen(false)} 
              />
            </div>

            {/* Link: Dampak ESG */}
            <a 
              href="#dampak" 
              className={`py-1 transition-colors hover:text-[#5c8770] ${
                activeSection === 'dampak' ? 'text-[#5c8770] font-black border-b-2 border-[#5c8770]' : ''
              }`}
            >
              Dampak ESG
            </a>

            {/* Link: Katalog Produk */}
            <a 
              href="#katalog" 
              className={`py-1 transition-colors hover:text-[#5c8770] ${
                activeSection === 'katalog' ? 'text-[#5c8770] font-black border-b-2 border-[#5c8770]' : ''
              }`}
            >
              Katalog
            </a>

            {/* Interactive Feature: ESG Simulator Button */}
            <button
              type="button"
              onClick={() => setIsCalculatorOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#1a3626]/20 text-xs font-bold text-[#1a3626] hover:border-[#1a3626] hover:bg-[#e8efe9]/50 transition-all shadow-2xs"
            >
              <Calculator size={13} className="text-[#5c8770]" />
              Kalkulator ESG
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/login"
              className="text-[#1a3626] font-bold text-xs sm:text-sm hover:text-[#5c8770] transition-colors px-2 py-1 flex items-center gap-1.5"
            >
              <Building2 size={16} />
              Masuk Klien
            </Link>

            <Link 
              href="/dashboard" 
              className="bg-[#f3c44c] text-[#1a3626] px-5 sm:px-6 py-2.5 rounded-none font-extrabold text-xs sm:text-sm flex items-center gap-2 hover:bg-[#e3b43c] transition-colors shadow-xs"
            >
              Coba Dashboard <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setIsCalculatorOpen(true)}
              className="sm:hidden p-2 text-[#1a3626] hover:bg-gray-200 border border-[#1a3626]/10"
              aria-label="Kalkulator ESG"
            >
              <Calculator size={18} />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-[#1a3626] hover:bg-gray-200 transition-colors"
              aria-label="Buka menu navigasi"
            >
              <Menu size={26} />
            </button>
          </div>

        </div>
      </nav>

      {/* Responsive Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* Interactive ESG Impact Simulator Modal */}
      <ImpactCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* B2B Client Login Modal */}
      <ClientLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}
