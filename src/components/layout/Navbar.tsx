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
      const sections = ['solusi', 'dampak', 'mengapa-circulo', 'katalog', 'paket-korporat'];
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
            ? 'py-3.5 bg-[#f8f7f2]/95 backdrop-blur-md border-b-2 border-[#1a3626] shadow-[0_4px_0px_#1a3626]' 
            : 'py-5 sm:py-6 bg-transparent border-b-2 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 text-2xl font-black text-[#1a3626] group px-2 py-1 border-2 border-transparent hover:border-[#1a3626] hover:bg-white hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <img src="/logo.png" alt="Circulo Logo" className="w-8 h-8 object-contain transition-transform group-hover:rotate-12 duration-300" />
            <span className="tracking-tight">Circulo</span>
          </Link>

          {/* Desktop Center Menu Links */}
          <div className="hidden lg:flex items-center gap-2 text-[#1a3626] font-semibold text-xs xl:text-sm">
            
            {/* Dropdown: Solusi B2B */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
            >
              <button
                type="button"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 border-2 transition-all cursor-pointer ${
                  isSolutionsOpen || activeSection === 'solusi' 
                    ? 'border-[#1a3626] bg-white text-[#1a3626] font-extrabold shadow-[3px_3px_0px_#1a3626] -translate-x-0.5 -translate-y-0.5' 
                    : 'border-transparent hover:border-[#1a3626] hover:bg-white hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5'
                }`}
                aria-expanded={isSolutionsOpen}
              >
                Solusi B2B
                <ChevronDown size={14} className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180 text-[#5c8770]' : ''}`} />
              </button>
              
              <SolutionsDropdown 
                isOpen={isSolutionsOpen} 
                onClose={() => setIsSolutionsOpen(false)} 
              />
            </div>

            {/* Link: Dampak ESG */}
            <a 
              href="#dampak" 
              className={`px-3 py-1.5 border-2 transition-all cursor-pointer ${
                activeSection === 'dampak' 
                  ? 'border-[#1a3626] bg-white text-[#1a3626] font-extrabold shadow-[3px_3px_0px_#1a3626] -translate-x-0.5 -translate-y-0.5' 
                  : 'border-transparent hover:border-[#1a3626] hover:bg-white hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5'
              }`}
            >
              Dampak ESG
            </a>

            {/* Link: Keunggulan */}
            <a 
              href="#mengapa-circulo" 
              className={`px-3 py-1.5 border-2 transition-all cursor-pointer ${
                activeSection === 'mengapa-circulo' 
                  ? 'border-[#1a3626] bg-white text-[#1a3626] font-extrabold shadow-[3px_3px_0px_#1a3626] -translate-x-0.5 -translate-y-0.5' 
                  : 'border-transparent hover:border-[#1a3626] hover:bg-white hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5'
              }`}
            >
              Keunggulan
            </a>

            {/* Link: Katalog Produk */}
            <a 
              href="#katalog" 
              className={`px-3 py-1.5 border-2 transition-all cursor-pointer ${
                activeSection === 'katalog' 
                  ? 'border-[#1a3626] bg-white text-[#1a3626] font-extrabold shadow-[3px_3px_0px_#1a3626] -translate-x-0.5 -translate-y-0.5' 
                  : 'border-transparent hover:border-[#1a3626] hover:bg-white hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5'
              }`}
            >
              Katalog
            </a>

            {/* Link: Paket Pengadaan */}
            <a 
              href="#paket-korporat" 
              className={`px-3 py-1.5 border-2 transition-all cursor-pointer ${
                activeSection === 'paket-korporat' 
                  ? 'border-[#1a3626] bg-white text-[#1a3626] font-extrabold shadow-[3px_3px_0px_#1a3626] -translate-x-0.5 -translate-y-0.5' 
                  : 'border-transparent hover:border-[#1a3626] hover:bg-white hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5'
              }`}
            >
              Paket Pengadaan
            </a>

            {/* Interactive Feature: ESG Simulator Button */}
            <button
              type="button"
              onClick={() => setIsCalculatorOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#1a3626] text-xs font-bold text-[#1a3626] shadow-[3px_3px_0px_#1a3626] hover:shadow-[4px_4px_0px_#f3c44c] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer ml-1"
            >
              <Calculator size={13} className="text-[#5c8770]" />
              Kalkulator ESG
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="text-[#1a3626] font-bold text-xs sm:text-sm px-3.5 py-2 border-2 border-[#1a3626] bg-white shadow-[3px_3px_0px_#1a3626] hover:shadow-[5px_5px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all flex items-center gap-1.5"
            >
              <Building2 size={16} />
              Masuk Klien
            </Link>

            <Link 
              href="/dashboard" 
              className="bg-[#f3c44c] text-[#1a3626] border-2 border-[#1a3626] px-5 sm:px-6 py-2 rounded-none font-extrabold text-xs sm:text-sm flex items-center gap-2 hover:bg-[#e3b43c] shadow-[4px_4px_0px_#1a3626] hover:shadow-[6px_6px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
            >
              Coba Dashboard <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setIsCalculatorOpen(true)}
              className="sm:hidden p-2 text-[#1a3626] bg-white hover:bg-gray-100 border-2 border-[#1a3626] shadow-[3px_3px_0px_#1a3626] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              aria-label="Kalkulator ESG"
            >
              <Calculator size={18} />
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-[#1a3626] bg-white hover:bg-gray-100 border-2 border-[#1a3626] shadow-[3px_3px_0px_#1a3626] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              aria-label="Buka menu navigasi"
            >
              <Menu size={22} />
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
