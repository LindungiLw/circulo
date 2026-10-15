'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Recycle, Sparkles, ShieldCheck, Users, Box, Sprout, ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CircularBoomSectionProps {
  scrollY: number;
}

export default function CircularBoomSection({ scrollY }: CircularBoomSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isBoomed, setIsBoomed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBoomed(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="transisi-sirkular" 
      className="w-full relative z-20 bg-[#1a3626] text-white py-20 sm:py-28 overflow-hidden border-y-4 border-[#f3c44c]"
    >
      {/* Background Ambience & Radial Dot Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f3c44c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#5c8770]/25 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#f3c44c]/20 blur-3xl pointer-events-none"></div>

      {/* Top Infinite Marquee Ticker */}
      <div className="relative w-full overflow-hidden mb-12 sm:mb-16 py-2.5 border-b border-white/10">
        <div className="animate-marquee whitespace-nowrap text-xs font-mono tracking-widest uppercase font-bold flex items-center gap-8 text-[#f8f7f2]">
          <span className="flex items-center gap-2"><Recycle size={15} className="text-[#f3c44c] animate-spin-slow" /> EKONOMI SIRKULAR TERINTEGRASI</span>
          <span className="text-[#f3c44c]">•</span>
          <span>DARI BANK SAMPAH DAERAH HINGGA KORPORAT B2B</span>
          <span className="text-[#f3c44c]">•</span>
          <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#5c8770]" /> STANDAR MUTU DUA TAHAP</span>
          <span className="text-[#f3c44c]">•</span>
          <span>100% LIMBAH TERLACAK & TERUKUR</span>
          <span className="text-[#f3c44c]">•</span>
          <span className="flex items-center gap-2"><Sparkles size={14} className="text-[#f3c44c]" /> LAPORAN ESG AUDIT-READY</span>
          <span className="text-[#f3c44c]">•</span>
          <span>120+ PENGRAJIN LOKAL DIBERDAYAKAN</span>
          <span className="text-[#f3c44c]">•</span>
          <span>ZERO LANDFILL COMMITMENT</span>
          <span className="text-[#f3c44c]">•</span>
          {/* Duplicate for seamless infinite loop */}
          <span className="flex items-center gap-2"><Recycle size={15} className="text-[#f3c44c] animate-spin-slow" /> EKONOMI SIRKULAR TERINTEGRASI</span>
          <span className="text-[#f3c44c]">•</span>
          <span>DARI BANK SAMPAH DAERAH HINGGA KORPORAT B2B</span>
          <span className="text-[#f3c44c]">•</span>
          <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#5c8770]" /> STANDAR MUTU DUA TAHAP</span>
          <span className="text-[#f3c44c]">•</span>
          <span>100% LIMBAH TERLACAK & TERUKUR</span>
          <span className="text-[#f3c44c]">•</span>
          <span className="flex items-center gap-2"><Sparkles size={14} className="text-[#f3c44c]" /> LAPORAN ESG AUDIT-READY</span>
          <span className="text-[#f3c44c]">•</span>
          <span>120+ PENGRAJIN LOKAL DIBERDAYAKAN</span>
          <span className="text-[#f3c44c]">•</span>
          <span>ZERO LANDFILL COMMITMENT</span>
          <span className="text-[#f3c44c]">•</span>
        </div>
      </div>

      {/* THE BOOOM CENTERSTAGE */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* 1. Kinetic Staggered Headline (The Word Slam) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-[#f3c44c]/30 mb-4 rounded-none">
            <span className="w-2 h-2 rounded-full bg-[#f3c44c] animate-ping"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#f3c44c]">
              Titik Balik Sirkular • Circulo Motion
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight uppercase">
            <span 
              className={`inline-block mr-3 text-white transition-all ${
                isBoomed ? 'animate-word-slam [animation-delay:100ms]' : 'opacity-0 translate-y-6'
              }`}
            >
              Ubah Limbah
            </span>
            <span 
              className={`inline-block mr-3 text-[#5c8770] transition-all ${
                isBoomed ? 'animate-word-slam [animation-delay:250ms]' : 'opacity-0 translate-y-6'
              }`}
            >
              Menjadi
            </span>
            <span 
              className={`inline-block text-[#f3c44c] underline decoration-4 decoration-[#f3c44c]/40 underline-offset-8 transition-all ${
                isBoomed ? 'animate-word-slam [animation-delay:400ms]' : 'opacity-0 translate-y-6'
              }`}
            >
              Nilai Baru!
            </span>
          </h2>

          <p 
            className={`text-sm sm:text-base text-gray-300 mt-5 max-w-xl mx-auto leading-relaxed transition-all duration-700 ${
              isBoomed ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-4'
            }`}
          >
            Saat limbah lokal disortir dengan presisi, diberdayakan bersama pengrajin daerah, dan distandarisasi untuk kebutuhan B2B Anda.
          </p>
        </div>

        {/* 2. The Central Core + Shockwaves + Satellite Metric Badges */}
        <div className="relative min-h-[380px] sm:min-h-[460px] flex items-center justify-center my-6">
          
          {/* Concentric Shockwave Expanding Rings (Triggered on Scroll) */}
          {isBoomed && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] rounded-full border-2 border-[#f3c44c]/70 animate-shockwave-1"></div>
              <div className="w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] rounded-full border-2 border-[#5c8770]/60 animate-shockwave-2"></div>
              <div className="w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] rounded-full border border-white/40 animate-shockwave-3"></div>
            </div>
          )}

          {/* Central Blast Emblem Core (Scales from 165% to 100% with deceleration punch) */}
          <div 
            className={`relative z-20 flex flex-col items-center justify-center text-center transition-all ${
              isBoomed ? 'animate-boom-punch' : 'scale-75 opacity-0'
            }`}
          >
            {/* Spinning Golden Dashed Border Ring */}
            <div 
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-dashed border-[#f3c44c] flex items-center justify-center p-3 shadow-[0_0_50px_rgba(243,196,76,0.3)] bg-[#12261b]"
              style={{ transform: `rotate(${scrollY * 0.2}deg)` }}
            >
              {/* Inner Glowing Core */}
              <div 
                className="w-full h-full rounded-full bg-gradient-to-tr from-[#1a3626] to-[#285239] border border-[#f3c44c]/40 flex flex-col items-center justify-center text-center shadow-inner group hover:scale-105 transition-transform"
                style={{ transform: `rotate(${-scrollY * 0.2}deg)` }}
              >
                <Recycle size={38} className="text-[#f3c44c] mb-1 animate-spin-slow" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white font-extrabold">
                  CIRCULO
                </span>
                <span className="text-[8px] font-mono text-[#5c8770] font-bold">
                  100% UPCYCLED
                </span>
              </div>
            </div>

            <div className="mt-4 bg-[#12261b]/90 border border-white/10 px-4 py-1.5 shadow-md">
              <span className="text-xs font-mono uppercase tracking-widest text-[#f3c44c] font-bold">
                SIKLUS SIRKULAR AKTIF
              </span>
            </div>
          </div>

          {/* 4 Satellite Metric Badges Flying In (Jitter Keyframe Model) */}
          <div className="absolute inset-0 pointer-events-none">
            
            {/* Satellite 1: Top Left */}
            <div 
              className={`absolute top-2 left-2 sm:top-6 sm:left-8 pointer-events-auto transition-all ${
                isBoomed ? 'animate-badge-fly [animation-delay:400ms]' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-[#12261b] border-2 border-[#5c8770] p-3 sm:p-4 shadow-xl hover:border-[#f3c44c] transition-colors max-w-[210px] sm:max-w-[240px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 bg-[#5c8770] text-white flex items-center justify-center shrink-0">
                    <Recycle size={13} />
                  </div>
                  <span className="text-[9px] font-mono uppercase text-[#f3c44c] font-bold">Input Bahan</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-white">12.4 Ton</h4>
                <p className="text-[10px] sm:text-[11px] text-gray-300 leading-snug">Limbah plastik & kain garmen terselamatkan dari TPA.</p>
              </div>
            </div>

            {/* Satellite 2: Top Right */}
            <div 
              className={`absolute top-2 right-2 sm:top-6 sm:right-8 pointer-events-auto transition-all ${
                isBoomed ? 'animate-badge-fly [animation-delay:550ms]' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-[#12261b] border-2 border-[#f3c44c] p-3 sm:p-4 shadow-xl hover:border-white transition-colors max-w-[210px] sm:max-w-[240px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 bg-[#f3c44c] text-[#1a3626] flex items-center justify-center shrink-0">
                    <Users size={13} />
                  </div>
                  <span className="text-[9px] font-mono uppercase text-[#f3c44c] font-bold">Dampak Sosial</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-white">120+ Pengrajin</h4>
                <p className="text-[10px] sm:text-[11px] text-gray-300 leading-snug">Kompensasi fair-wage berkelanjutan bagi kriya lokal.</p>
              </div>
            </div>

            {/* Satellite 3: Bottom Left */}
            <div 
              className={`absolute bottom-2 left-2 sm:bottom-6 sm:left-8 pointer-events-auto transition-all ${
                isBoomed ? 'animate-badge-fly [animation-delay:700ms]' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-[#12261b] border-2 border-white/20 p-3 sm:p-4 shadow-xl hover:border-[#5c8770] transition-colors max-w-[210px] sm:max-w-[240px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 bg-[#1a3626] border border-white/30 text-white flex items-center justify-center shrink-0">
                    <Box size={13} />
                  </div>
                  <span className="text-[9px] font-mono uppercase text-[#5c8770] font-bold">Kemitraan B2B</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-white">85+ Korporat</h4>
                <p className="text-[10px] sm:text-[11px] text-gray-300 leading-snug">Perusahaan beralih ke merchandise ramah lingkungan.</p>
              </div>
            </div>

            {/* Satellite 4: Bottom Right */}
            <div 
              className={`absolute bottom-2 right-2 sm:bottom-6 sm:right-8 pointer-events-auto transition-all ${
                isBoomed ? 'animate-badge-fly [animation-delay:850ms]' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-[#12261b] border-2 border-[#5c8770] p-3 sm:p-4 shadow-xl hover:border-[#f3c44c] transition-colors max-w-[210px] sm:max-w-[240px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 bg-[#5c8770] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck size={13} />
                  </div>
                  <span className="text-[9px] font-mono uppercase text-[#f3c44c] font-bold">ESG Audit</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-white">100% Terlacak</h4>
                <p className="text-[10px] sm:text-[11px] text-gray-300 leading-snug">Dilengkapi sertifikat dampak resmi untuk laporan tahunan.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Action Button to Next Section */}
        <div className="flex justify-center mt-8">
          <Link
            href="#dampak"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f3c44c] hover:bg-white text-[#1a3626] font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md group cursor-pointer"
          >
            <span>Lihat Data & Transformasi Bahan</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Bottom Reverse Marquee Ticker */}
      <div className="relative w-full overflow-hidden mt-12 sm:mt-16 py-2.5 border-t border-white/10">
        <div className="animate-marquee-reverse whitespace-nowrap text-xs font-mono tracking-widest uppercase font-semibold flex items-center gap-8 text-[#a3b899]">
          <span>100% UPCYCLED RESIDUE</span>
          <span className="text-[#f3c44c]">•</span>
          <span>SDG 8 PEKERJAAN LAYAK & PERTUMBUHAN EKONOMI</span>
          <span className="text-[#f3c44c]">•</span>
          <span>SDG 12 KONSUMSI & PRODUKSI BERTANGGUNG JAWAB</span>
          <span className="text-[#f3c44c]">•</span>
          <span>PENYORTIRAN BERSIH BEBAS KIMIA BERBAHAYA</span>
          <span className="text-[#f3c44c]">•</span>
          <span>CUSTOM LOGO & CORPORATE IDENTITY</span>
          <span className="text-[#f3c44c]">•</span>
          {/* Duplicate for seamless infinite loop */}
          <span>100% UPCYCLED RESIDUE</span>
          <span className="text-[#f3c44c]">•</span>
          <span>SDG 8 PEKERJAAN LAYAK & PERTUMBUHAN EKONOMI</span>
          <span className="text-[#f3c44c]">•</span>
          <span>SDG 12 KONSUMSI & PRODUKSI BERTANGGUNG JAWAB</span>
          <span className="text-[#f3c44c]">•</span>
          <span>PENYORTIRAN BERSIH BEBAS KIMIA BERBAHAYA</span>
          <span className="text-[#f3c44c]">•</span>
          <span>CUSTOM LOGO & CORPORATE IDENTITY</span>
          <span className="text-[#f3c44c]">•</span>
        </div>
      </div>

    </section>
  );
}
