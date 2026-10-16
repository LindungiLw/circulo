"use client";

import React from 'react';
import { Package, Recycle, Users, FileCheck, ArrowRight } from 'lucide-react';
import { SOLUTIONS_DATA } from '@/data/navigation';
import Link from 'next/link';

interface SolutionsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SolutionsDropdown({ isOpen, onClose }: SolutionsDropdownProps) {
  if (!isOpen) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Package': return <Package size={18} className="text-[#1a3626]" />;
      case 'Recycle': return <Recycle size={18} className="text-[#5c8770]" />;
      case 'Users': return <Users size={18} className="text-[#a36934]" />;
      case 'FileCheck': return <FileCheck size={18} className="text-[#5c8770]" />;
      default: return <Package size={18} className="text-[#1a3626]" />;
    }
  };

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-[540px] bg-[#f8f7f2] border-2 border-[#1a3626] shadow-[6px_6px_0px_#1a3626] p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
      onMouseLeave={onClose}
    >
      <div className="flex items-center justify-between pb-3 border-b border-[#1a3626]/10 mb-4">
        <span className="text-[11px] font-mono tracking-wider uppercase text-[#1a3626] font-bold flex items-center gap-2">
          <span className="w-1.5 h-3 bg-[#5c8770]"></span>
          EKOSISTEM SOLUSI B2B CIRCULO
        </span>
        <span className="text-[10px] text-gray-500 font-mono">
          Enterprise Ready
        </span>
      </div>

      {/* Grid 2x2 of Solutions */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {SOLUTIONS_DATA.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={onClose}
            className="p-3 bg-white border-2 border-[#1a3626]/15 hover:border-[#1a3626] hover:shadow-[4px_4px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all group block cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 bg-[#f8f7f2] border border-[#1a3626]/10 flex items-center justify-center">
                {getIcon(item.icon)}
              </div>
              <span className="text-[9px] font-mono tracking-wider uppercase text-gray-500 font-bold">
                {item.category.split(' ')[0]}
              </span>
            </div>
            <h5 className="text-xs font-bold text-[#1a3626] group-hover:text-[#5c8770] transition-colors mb-1">
              {item.title}
            </h5>
            <p className="text-[11px] text-gray-600 line-clamp-2 leading-snug">
              {item.description}
            </p>
          </a>
        ))}
      </div>

      {/* Bottom Promo Strip */}
      <div className="pt-3 border-t border-[#1a3626]/10 flex items-center justify-between text-xs">
        <p className="text-gray-600 text-[11px]">
          Ingin konsultasi pengadaan bulk kustom?
        </p>
        <Link
          href="/dashboard"
          onClick={onClose}
          className="font-bold text-[#1a3626] hover:text-[#5c8770] flex items-center gap-1 text-[11px]"
        >
          Buka Portal Demo <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
