"use client";

import React from 'react';
import { ShieldCheck, Award, Leaf, Users, CheckCircle } from 'lucide-react';

export default function CorporateTrustBar() {
  const partners = [
    { name: 'Inisiatif Bank Sampah Nasional', tag: 'Suplai Limbah Terverifikasi' },
    { name: 'Aliansi Pengrajin Kriya Lestari', tag: 'Jaminan Upah Adil (SDG 8)' },
    { name: 'Konsorsium ESG Indonesia', tag: 'Standar Audit POJK 51 / GRI' },
    { name: 'Asosiasi Daur Ulang Plastik (ADUPI)', tag: 'Standar Mutu Sirkular' },
    { name: 'Forum CSR & Keberlanjutan BUMN', tag: 'Mitra Pengadaan Berdampak' },
  ];

  return (
    <section className="w-full bg-[#1a3626] text-white py-10 border-y border-[#5c8770]/30 relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Label & Verification Highlights */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#f3c44c] font-bold block mb-1">
              EKOSISTEM PENGADAAN B2B TERSTANDARISASI
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Dipercaya untuk Pengadaan Eco-Merch Berkelanjutan & Audit-Ready ESG
            </h3>
          </div>

          {/* 3 Quick Value Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#f3c44c] shrink-0" />
              <span>100% Residu Lokal Terlacak</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#f3c44c] shrink-0" />
              <span>Upah Adil Pengrajin (SDG 8)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#f3c44c] shrink-0" />
              <span>Sertifikasi Audit POJK 51 & GRI</span>
            </div>
          </div>
        </div>

        {/* Partners & Ecosystem Network Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((partner, idx) => (
            <div 
              key={idx}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#f3c44c] hover:shadow-[4px_4px_0px_#f3c44c] hover:-translate-x-0.5 hover:-translate-y-0.5 p-4 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#f3c44c] font-bold">0{idx + 1}</span>
                <Leaf size={14} className="text-[#5c8770] group-hover:text-[#f3c44c] transition-colors" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1 leading-snug group-hover:text-[#f3c44c] transition-colors">
                  {partner.name}
                </h4>
                <p className="text-[10px] text-white/60 font-mono">
                  {partner.tag}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
