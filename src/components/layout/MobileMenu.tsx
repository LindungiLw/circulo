"use client";

import React from 'react';
import { X, ArrowRight, Calculator, Building2, Package, Recycle, Users, FileCheck } from 'lucide-react';
import Link from 'next/link';
import { SOLUTIONS_DATA } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalculator: () => void;
  onOpenLogin: () => void;
}

export default function MobileMenu({ 
  isOpen, 
  onClose, 
  onOpenCalculator,
  onOpenLogin 
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-[#f8f7f2] border-l-2 border-[#1a3626] p-6 shadow-2xl overflow-y-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#1a3626]/10 mb-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Circulo Logo" className="w-6 h-6 object-contain" />
              <span className="text-xl font-extrabold text-[#1a3626]">Circulo</span>
            </div>
            <button 
              onClick={onClose}
              className="p-1 text-gray-500 hover:text-[#1a3626] hover:bg-gray-200 transition-colors"
              aria-label="Tutup menu navigasi"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 mb-6">
            <p className="text-[10px] font-mono tracking-widest text-[#5c8770] uppercase font-bold">
              NAVIGASI UTAMA
            </p>
            
            <a 
              href="#dampak" 
              onClick={onClose}
              className="block py-2 text-base font-bold text-[#1a3626] hover:text-[#5c8770] transition-colors border-b border-gray-200/60"
            >
              Dampak ESG & Rantai Pasok
            </a>
            
            <a 
              href="#katalog" 
              onClick={onClose}
              className="block py-2 text-base font-bold text-[#1a3626] hover:text-[#5c8770] transition-colors border-b border-gray-200/60"
            >
              Katalog Eco-Merchandise
            </a>

            {/* Impact Calculator Trigger */}
            <button
              onClick={() => {
                onClose();
                onOpenCalculator();
              }}
              className="w-full text-left py-2.5 flex items-center justify-between text-sm font-extrabold text-[#1a3626] hover:text-[#5c8770] transition-colors border-b border-gray-200/60"
            >
              <span className="flex items-center gap-2">
                <Calculator size={16} className="text-[#5c8770]" />
                Kalkulator Dampak ESG
              </span>
              <span className="text-[10px] font-mono uppercase bg-[#e8efe9] px-2 py-0.5 text-[#1a3626] font-bold">
                Simulasi
              </span>
            </button>
          </div>

          {/* Solusi B2B Quick List */}
          <div className="space-y-3 mb-6">
            <p className="text-[10px] font-mono tracking-widest text-[#5c8770] uppercase font-bold">
              SOLUSI KORPORAT
            </p>
            {SOLUTIONS_DATA.slice(0, 3).map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={onClose}
                className="p-3 bg-white border border-[#1a3626]/10 block hover:border-[#1a3626] transition-all"
              >
                <p className="text-xs font-bold text-[#1a3626]">{item.title}</p>
                <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">{item.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#1a3626]/10 space-y-3">
          <Link
            href="/login"
            onClick={onClose}
            className="w-full py-3 bg-transparent border border-[#1a3626] text-[#1a3626] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#1a3626]/5 transition-colors"
          >
            <Building2 size={16} /> Masuk Akun Klien
          </Link>
          
          <Link
            href="/dashboard"
            onClick={onClose}
            className="w-full py-3 bg-[#f3c44c] hover:bg-[#e2b43b] text-[#1a3626] font-black text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            Buka Dashboard Demo <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
