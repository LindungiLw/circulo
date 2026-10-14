"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Users, LineChart, Recycle, Box, Sprout, ArrowUpRight, CheckCircle2, Layers, Building2, ArrowUp, Sparkles, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LottiePlayer from '@/components/animations/LottiePlayer';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from '@/data/products';

export default function LandingPage() {
  const transitionImages = [
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800", // Eco products
    "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800", // Crafting
    "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800"  // Reusable packaging
  ];
  
  const [currentImg, setCurrentImg] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const filteredProducts = activeCategory === 'Semua' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  const displayedProducts = filteredProducts.slice(0, 6);

  // Scroll tracking for parallax and circular progress
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          setScrollY(current);
          const total = document.documentElement.scrollHeight - window.innerHeight;
          setScrollProgress(total > 0 ? (current / total) * 100 : 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for scroll-reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const targets = document.querySelectorAll('.scroll-reveal');
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % transitionImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f7f2] flex flex-col font-sans overflow-x-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] border-[1px] border-[#1a3626]/10 rounded-full"></div>
        <div className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] border-[1px] border-[#1a3626]/10 rounded-full"></div>
        
        {/* Right side colored arcs */}
        <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] border-[120px] border-[#d8e3dc] rounded-full opacity-70"></div>
        <div className="absolute top-[15%] -right-[20%] w-[1100px] h-[1100px] border-[100px] border-[#f4e8c1] rounded-full opacity-80"></div>
      </div>
      
      {/* Modular Interactive Navbar */}
      <Navbar />

      {/* Hero Section / Solusi B2B */}
      <section id="solusi" className="w-full pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-10 overflow-hidden">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Visual Composition (Circular Graphic + Overlapping Card) */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 h-[460px] sm:h-[520px] lg:h-[600px] flex items-center justify-center lg:justify-start">
             
             {/* The Donut Chart SVG Ring around the image */}
             <div className="absolute w-[330px] h-[330px] sm:w-[440px] sm:h-[440px] lg:w-[560px] lg:h-[560px] lg:-left-5 z-0 pointer-events-none">
               <svg viewBox="0 0 100 100" className="w-full h-full transition-transform duration-100 ease-out" style={{ transform: `rotate(${-90 + scrollY * 0.12}deg)` }}>
                 <circle cx="50" cy="50" r="48" fill="none" stroke="#f3c44c" strokeWidth="4" strokeDasharray="60 301.59" className="opacity-90" />
                 <circle cx="50" cy="50" r="48" fill="none" stroke="#1a3626" strokeWidth="8" strokeDasharray="100 301.59" strokeDashoffset="-65" className="opacity-90" />
                 <circle cx="50" cy="50" r="48" fill="none" stroke="#5c8770" strokeWidth="2" strokeDasharray="40 301.59" strokeDashoffset="-170" className="opacity-90" />
               </svg>
             </div>

             {/* The Large Circular Image */}
             <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full border-8 lg:border-[12px] border-white shadow-2xl overflow-hidden z-10 lg:absolute lg:left-2.5">
               <img src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800" alt="Eco Merchandise" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/5"></div>
             </div>

             {/* Curved Text SVG */}
             <div className="absolute w-[330px] h-[330px] sm:w-[440px] sm:h-[440px] lg:w-[560px] lg:h-[560px] lg:-left-5 z-20 pointer-events-none overflow-hidden transition-transform duration-100 ease-out" style={{ transform: `rotate(${scrollY * 0.08}deg)` }}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="curve" d="M 8 50 A 42 42 0 0 1 92 50" fill="transparent" />
                  <text className="text-[3.8px] font-bold fill-[#5c8770] tracking-[0.25em] uppercase" textAnchor="middle">
                    <textPath href="#curve" startOffset="50%">
                      From Waste to Value
                    </textPath>
                  </text>
                  <circle cx="24" cy="22" r="1.2" fill="#f3c44c" />
                  <circle cx="76" cy="22" r="1.2" fill="#f3c44c" />
                </svg>
             </div>

             {/* Live Impact Card (Overlapping on the right on desktop, at bottom on mobile) */}
             <div className="absolute bottom-0 lg:top-1/2 lg:-translate-y-1/2 right-auto lg:-right-16 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(26,54,38,0.12)] border border-gray-100 z-30 w-[92%] sm:w-[350px] lg:w-[380px]">

               {/* Metrics Grid inside card */}
               <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                 
                 {/* Card 1 */}
                 <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                     <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#e8efe9] rounded-full flex items-center justify-center text-[#1a3626]">
                       <Recycle size={15} />
                     </div>
                   </div>
                   <h4 className="text-[9px] sm:text-[10px] font-semibold text-[#1a3626] mb-0.5">Plastik Terdiversi</h4>
                   <p className="text-base sm:text-lg font-bold text-[#1a3626] mb-0.5">12,450 <span className="text-[9px] sm:text-[10px] font-semibold">kg</span></p>
                   <p className="text-[8px] sm:text-[9px] text-gray-500 mb-0.5">≈ 562 botol plastik</p>
                   <p className="text-[8px] sm:text-[9px] text-[#5c8770] font-bold flex items-center gap-1"><ArrowUpRight size={10} strokeWidth={3}/> 12%</p>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                     <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#e8efe9] rounded-full flex items-center justify-center text-[#1a3626]">
                       <Users size={15} />
                     </div>
                   </div>
                   <h4 className="text-[9px] sm:text-[10px] font-semibold text-[#1a3626] mb-0.5">Local Makers</h4>
                   <p className="text-base sm:text-lg font-bold text-[#1a3626] mb-0.5">120+</p>
                   <p className="text-[8px] sm:text-[9px] text-gray-500 mb-0.5">pengrajin lokal</p>
                   <p className="text-[8px] sm:text-[9px] text-[#5c8770] font-bold flex items-center gap-1"><ArrowUpRight size={10} strokeWidth={3}/> 8%</p>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                     <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#e8efe9] rounded-full flex items-center justify-center text-[#1a3626]">
                       <Box size={15} />
                     </div>
                   </div>
                   <h4 className="text-[9px] sm:text-[10px] font-semibold text-[#1a3626] mb-0.5">Pesanan Korporat</h4>
                   <p className="text-base sm:text-lg font-bold text-[#1a3626] mb-0.5">85</p>
                   <p className="text-[8px] sm:text-[9px] text-gray-500 mb-0.5">pesanan perusahaan</p>
                   <p className="text-[8px] sm:text-[9px] text-[#5c8770] font-bold flex items-center gap-1"><ArrowUpRight size={10} strokeWidth={3}/> 15%</p>
                 </div>

                 {/* Card 4 - Green Highlight */}
                 <div className="bg-[#e8efe9] border border-[#5c8770]/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col justify-between relative overflow-hidden group cursor-pointer">
                   <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#5c8770] rounded-full flex items-center justify-center text-white mb-1.5 sm:mb-2">
                     <Sprout size={15} />
                   </div>
                   <h4 className="text-[9px] sm:text-[10px] font-bold text-[#1a3626] mb-0.5">ESG Impact Ready</h4>
                   <p className="text-[8px] sm:text-[9px] text-[#4a5f52] leading-tight pr-4">Laporan dampak tersedia</p>
                   <ArrowRight size={11} className="text-[#5c8770] absolute bottom-2.5 right-2.5 group-hover:translate-x-1 transition-transform" />
                 </div>
               </div>
               
               {/* Small Bottom Image in Card */}
               <div className="w-full h-20 sm:h-24 rounded-lg sm:rounded-xl overflow-hidden relative mt-1 flex bg-[#f8f7f2]">
                 <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=400" alt="Crafting" className="w-1/2 h-full object-cover" />
                 <div className="w-1/2 p-2.5 sm:p-3 flex flex-col justify-center">
                    <p className="text-[8px] sm:text-[9px] font-bold text-[#1a3626] leading-tight mb-1.5">Dari Sampah Lokal Menuju Produk Bernilai</p>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-[#5c8770] flex items-center justify-center text-[#5c8770]">
                      <ArrowRight size={9} />
                    </div>
                 </div>
               </div>

             </div>
          </div>
          
          {/* RIGHT: Text Content & Carousel */}
          <div className="pl-0 lg:pl-16 z-20 flex flex-col justify-center h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-extrabold text-[#1a3626] leading-[1.15] mb-5 tracking-tight">
              Ubah Limbah<br />Menjadi <span className="text-[#5c8770]">Eco-Merch</span><br />B2B Premium<span className="text-[#f3c44c]">.</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-[#4a5f52] mb-8 max-w-[480px] leading-relaxed">
              Satu solusi untuk sourcing eco-merch berkualitas, custom sesuai kebutuhan, pengiriman yang andal, dan dampak yang terukur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <Link href="/dashboard" className="w-full sm:w-auto bg-[#1a3626] text-white px-7 py-3.5 rounded-none font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#12261b] transition-colors shadow-md">
                Mulai Kolaborasi <ArrowRight size={16} />
              </Link>
              <Link href="/katalog" className="w-full sm:w-auto bg-transparent border border-[#1a3626] text-[#1a3626] px-7 py-3.5 rounded-none font-semibold text-xs sm:text-sm hover:bg-[#1a3626]/5 transition-colors flex items-center justify-center">
                Lihat Katalog
              </Link>
            </div>

            {/* Feature lists bottom */}
            <div className="flex flex-wrap gap-10 items-center border-t border-[#1a3626]/10 pt-8 mb-10">
              <div className="flex items-center gap-3">
                <div className="text-[#5c8770]"><ShieldCheck size={28} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1a3626]">Produk Eco-Merch</h4>
                  <p className="text-[13px] text-[#5c8770]">Dari material daur ulang</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#5c8770]"><Users size={28} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1a3626]">Dukung Pengrajin Lokal</h4>
                  <p className="text-[13px] text-[#5c8770]">Pemberdayaan ekonomi</p>
                </div>
              </div>
            </div>

            {/* Auto-Transitioning Photo Carousel */}
            <div className="w-full max-w-[480px] h-[200px] relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              {transitionImages.map((src, index) => (
                <img 
                  key={index}
                  src={src} 
                  alt="Gallery" 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImg ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              {/* Overlay Gradient for Carousel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 text-white z-10">
                <p className="text-sm font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f3c44c]"></span> Portofolio Circulo
                </p>
              </div>
            </div>

          </div>
          
        </div>

        {/* Scroll Cue Button linking Hero to Circular Transition */}
        <div className="flex justify-center mt-12 sm:mt-16 relative z-20">
          <a 
            href="#transisi-sirkular" 
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/90 hover:bg-white backdrop-blur-md border border-[#1a3626]/20 hover:border-[#1a3626] rounded-full text-xs font-mono font-bold text-[#1a3626] transition-all shadow-xs hover:shadow-md group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#5c8770] animate-ping"></span>
            <span>Jelajahi Siklus Transformasi Sirkular</span>
            <div className="w-6 h-6 rounded-full bg-[#1a3626] text-white flex items-center justify-center group-hover:translate-y-1 transition-transform">
              <ChevronDown size={13} />
            </div>
          </a>
        </div>
      </section>

      {/* SIGNATURE CIRCULAR TRANSITION SECTION (Between Hero & Impact) */}
      <section id="transisi-sirkular" className="w-full relative z-20 bg-[#1a3626] text-white py-14 overflow-hidden border-y-4 border-[#f3c44c]">
        
        {/* Decorative Grid Overlay & Ambient Glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f3c44c_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#5c8770]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#f3c44c]/15 blur-3xl pointer-events-none"></div>

        {/* Marquee Track 1 (Left to Right / Infinite Loop) */}
        <div className="relative w-full overflow-hidden mb-6 py-2 border-b border-white/10">
          <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-mono tracking-widest uppercase font-bold flex items-center gap-8 text-[#f8f7f2]">
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

        {/* Center Interactive Transition Cards */}
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
            
            {/* Transition Milestone 1 */}
            <div className="bg-[#12261b] border border-white/10 p-5 rounded-none hover:border-[#f3c44c]/50 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#f3c44c] uppercase tracking-wider font-bold bg-[#f3c44c]/10 px-2 py-0.5 border border-[#f3c44c]/20">
                  Fase 01 Input
                </span>
                <span className="text-xs font-mono text-gray-400">Bank Sampah</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-[#f3c44c] transition-colors mb-1">
                Limbah Disortir & Dicuci
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Plastik botol PET, tekstil sisa garmen, dan serat alami divalidasi kualitasnya sebelum diproduksi.
              </p>
            </div>

            {/* Center Dynamic Spinning Emblem */}
            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="relative w-24 h-24 flex items-center justify-center mb-3">
                {/* Outer Rotating Ring */}
                <div 
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#f3c44c] transition-transform duration-100 ease-out"
                  style={{ transform: `rotate(${scrollY * 0.25}deg)` }}
                ></div>
                {/* Inner Icon */}
                <div className="w-16 h-16 rounded-full bg-[#f3c44c] text-[#1a3626] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Recycle size={28} className="transition-transform duration-100 ease-out" style={{ transform: `rotate(${-scrollY * 0.25}deg)` }} />
                </div>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#f3c44c] font-bold">
                TRANSFORMASI SIRKULAR
              </span>
              <p className="text-[11px] text-gray-300 mt-0.5">
                Mengubah Beban Menjadi Aset Bernilai
              </p>
            </div>

            {/* Transition Milestone 2 */}
            <div className="bg-[#12261b] border border-white/10 p-5 rounded-none hover:border-[#5c8770]/60 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#5c8770] uppercase tracking-wider font-bold bg-[#5c8770]/10 px-2 py-0.5 border border-[#5c8770]/30">
                  Fase 02 Output
                </span>
                <span className="text-xs font-mono text-gray-400">B2B Ready</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-[#5c8770] transition-colors mb-1">
                Merchandise & Laporan ESG
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Produk berstandar ekspor siap kirim, lengkap dengan metrik jejak karbon dan sertifikat dampak.
              </p>
            </div>

          </div>
        </div>

        {/* Marquee Track 2 (Right to Left / Reverse Infinite Loop) */}
        <div className="relative w-full overflow-hidden mt-6 py-2 border-t border-white/10">
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

      {/* Impact & Materials Section */}
      <section id="dampak" className="w-full py-24 relative z-10 overflow-hidden scroll-mt-16">
        {/* Decorative Background Rings & Arcs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] border-[100px] border-[#d8e3dc]/40 rounded-full"></div>
          <div className="absolute top-[35%] -right-[15%] w-[900px] h-[900px] border-[90px] border-[#f4e8c1]/50 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Section Header with Featured Motion Story (Scene.json) */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 scroll-reveal">
            {/* Left: Text & Key Highlights */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a3626]/5 border border-[#1a3626]/10 w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-[#5c8770] animate-ping"></span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#1a3626]">
                  Jejak Transformasi Sirkular
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3626] leading-[1.15] mb-4 tracking-tight">
                Menciptakan Nilai Baru<br />dari <span className="text-[#5c8770]">Limbah Lokal</span>
              </h2>

              <p className="text-sm sm:text-base text-[#4a5f52] leading-relaxed mb-6">
                Mengelola rantai pasok berdampak yang memberdayakan pengrajin lokal dan menyelamatkan lingkungan. Mengubah residu plastik botol, serat biomassa, dan potongan tekstil menjadi produk merchandise bernilai ekonomi tinggi.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1a3626]/10">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#5c8770] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#1a3626]">Material Terverifikasi</h5>
                    <p className="text-[11px] text-gray-500">Bank sampah & agregator daur ulang tersertifikasi</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#5c8770] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#1a3626]">Upah Layak Berkelanjutan</h5>
                    <p className="text-[11px] text-gray-500">Pemberdayaan 120+ pengrajin daerah (SDG 8)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Featured Lottie Motion Frame (Scene.json) */}
            <div className="lg:col-span-6">
              <div className="bg-white border-2 border-[#1a3626] rounded-none p-3 sm:p-4 shadow-[0_12px_36px_rgba(26,54,38,0.08)] relative group hover:border-[#5c8770] transition-colors">
                
                {/* Frame Header Bar */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#1a3626]/10 text-[10px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f3c44c] animate-pulse"></span>
                    <span className="font-bold text-[#1a3626] uppercase tracking-wider">Motion Story: Transformasi Sirkular</span>
                  </div>
                  <span className="text-gray-400 font-semibold">Scene.json • 60 FPS</span>
                </div>

                {/* The Lottie Canvas Frame */}
                <div className="w-full aspect-[4/3] bg-neutral-900 rounded-none overflow-hidden relative border border-[#1a3626]/10 flex items-center justify-center">
                  <LottiePlayer animationPath="/animations/Scene.json" />
                </div>

                {/* Frame Footer Caption */}
                <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span className="truncate pr-2">Visualisasi: Dari Sampah Lokal Menuju Nilai Kehidupan</span>
                  <span className="text-[#1a3626] font-bold shrink-0">Circulo Motion</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stats Cards - Clean, Square & Minimal */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 scroll-reveal">
            {/* Stat 1 */}
            <div className="bg-white border border-[#1a3626]/10 rounded-none p-6 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e8efe9] rounded-none border border-[#5c8770]/20 flex items-center justify-center text-[#1a3626] mb-4">
                <Recycle size={22} />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#1a3626] tracking-tight mb-1">
                12.4<span className="text-xl font-bold text-[#5c8770]">Ton</span>
              </p>
              <h4 className="text-sm font-bold text-[#1a3626]">Limbah Terdiversi</h4>
              <p className="text-xs text-gray-500 mt-1">Dari TPA dan ekosistem lautan</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-[#1a3626]/10 rounded-none p-6 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#fdf5df] rounded-none border border-[#f3c44c]/30 flex items-center justify-center text-[#1a3626] mb-4">
                <Users size={22} />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#1a3626] tracking-tight mb-1">
                120<span className="text-2xl font-bold text-[#f3c44c]">+</span>
              </p>
              <h4 className="text-sm font-bold text-[#1a3626]">Pengrajin Lokal</h4>
              <p className="text-xs text-gray-500 mt-1">Diberdayakan secara ekonomi</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-[#1a3626]/10 rounded-none p-6 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e8efe9] rounded-none border border-[#5c8770]/20 flex items-center justify-center text-[#1a3626] mb-4">
                <Box size={22} />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#1a3626] tracking-tight mb-1">
                85<span className="text-2xl font-bold text-[#5c8770]">+</span>
              </p>
              <h4 className="text-sm font-bold text-[#1a3626]">Mitra Korporat</h4>
              <p className="text-xs text-gray-500 mt-1">Beralih ke eco-merchandise</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white border border-[#1a3626]/10 rounded-none p-6 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e8efe9] rounded-none border border-[#5c8770]/20 flex items-center justify-center text-[#5c8770] mb-4">
                <Sprout size={22} />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#1a3626] tracking-tight mb-1">
                100<span className="text-2xl font-bold text-[#5c8770]">%</span>
              </p>
              <h4 className="text-sm font-bold text-[#1a3626]">Terlacak & Transparan</h4>
              <p className="text-xs text-gray-500 mt-1">Laporan ESG komprehensif</p>
            </div>
          </div>

          {/* 3 Material Transformation Cards - Square & Concise */}
          <div className="mb-4">
            <div className="grid md:grid-cols-3 gap-8 scroll-reveal">
              {/* Material 1: Plastik PET & HDPE */}
              <div className="bg-white border border-[#1a3626]/10 rounded-none p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-[#e8efe9] rounded-none border border-[#5c8770]/20 flex items-center justify-center text-[#1a3626] mb-4 group-hover:scale-105 transition-transform">
                    <Recycle size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a3626] mb-2">Plastik PET & HDPE</h4>
                  <p className="text-sm text-[#4a5f52] leading-relaxed mb-4">
                    Limbah botol dan kemasan plastik disortir lalu diproses menjadi benang kain daur ulang (rPET).
                  </p>

                  <div className="w-full h-44 rounded-none overflow-hidden relative mb-4 bg-gray-100 border border-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=600" 
                      alt="Plastik PET Daur Ulang" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute bottom-2.5 left-2.5 bg-white/95 px-2.5 py-1 text-[11px] font-bold text-[#1a3626] border border-[#1a3626]/10 rounded-none shadow-xs">
                      rPET Yarn & Pellets
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1a3626]/10">
                  <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Menjadi Produk</p>
                  <p className="font-semibold text-sm text-[#1a3626]">Totebag, Pouch, & Lanyard</p>
                </div>
              </div>

              {/* Material 2: Kain Perca & Tekstil */}
              <div className="bg-white border border-[#1a3626]/10 rounded-none p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-[#fdf5df] rounded-none border border-[#f3c44c]/30 flex items-center justify-center text-[#1a3626] mb-4 group-hover:scale-105 transition-transform">
                    <Box size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a3626] mb-2">Kain Perca & Tekstil</h4>
                  <p className="text-sm text-[#4a5f52] leading-relaxed mb-4">
                    Sisa potongan industri garmen lokal disortir warna dan dirajut kembali tanpa pewarna kimia tambahan.
                  </p>

                  <div className="w-full h-44 rounded-none overflow-hidden relative mb-4 bg-gray-100 border border-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600" 
                      alt="Kain Perca Tekstil" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute bottom-2.5 left-2.5 bg-white/95 px-2.5 py-1 text-[11px] font-bold text-[#1a3626] border border-[#1a3626]/10 rounded-none shadow-xs">
                      Upcycled Fabric
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1a3626]/10">
                  <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Menjadi Produk</p>
                  <p className="font-semibold text-sm text-[#1a3626]">Kaos Acara, Topi, & Selimut</p>
                </div>
              </div>

              {/* Material 3: Kertas & Biomassa */}
              <div className="bg-white border border-[#1a3626]/10 rounded-none p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-[#e8efe9] rounded-none border border-[#5c8770]/20 flex items-center justify-center text-[#1a3626] mb-4 group-hover:scale-105 transition-transform">
                    <Sprout size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a3626] mb-2">Kertas & Biomassa</h4>
                  <p className="text-sm text-[#4a5f52] leading-relaxed mb-4">
                    Limbah kertas kantor dan serat alam (pelepah pinang, sabut kelapa) dicetak menjadi bahan komposit padat.
                  </p>

                  <div className="w-full h-44 rounded-none overflow-hidden relative mb-4 bg-gray-100 border border-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=600" 
                      alt="Kertas dan Biomassa" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute bottom-2.5 left-2.5 bg-white/95 px-2.5 py-1 text-[11px] font-bold text-[#1a3626] border border-[#1a3626]/10 rounded-none shadow-xs">
                      Natural Fiber Pulp
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1a3626]/10">
                  <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Menjadi Produk</p>
                  <p className="font-semibold text-sm text-[#1a3626]">Agenda, Packaging, & Nametag</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rantai Pasok Sirkular Terintegrasi (4 Langkah Supply Chain) */}
          <div className="mt-28 pt-20 border-t border-[#1a3626]/15 scroll-reveal">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3626] leading-tight mb-4 tracking-tight">
                Rantai Pasok Sirkular Terintegrasi
              </h2>
              <p className="text-sm sm:text-base text-[#4a5f52] leading-relaxed">
                Alur pengadaan <em>asset-light</em> empat tahap yang menghubungkan bank sampah daerah, pengrajin lokal, standardisasi mutu B2B, hingga laporan keberlanjutan korporasi.
              </p>
            </div>

            {/* 4 Steps Flow Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Bank Sampah Daerah',
                  subtitle: 'Suplai Bahan Terpilah',
                  desc: 'Penyortiran limbah plastik botol PET, residu tekstil garmen, dan serat biomassa dengan standar kebersihan ketat.',
                  tag: 'Input Bahan Terverifikasi',
                  icon: Recycle,
                  badgeColor: 'bg-[#1a3626] text-white',
                },
                {
                  step: '02',
                  title: 'Komunitas Pengrajin',
                  subtitle: 'Produksi & Upah Adil',
                  desc: 'Pembuatan kriya handcrafted oleh 120+ pengrajin lokal dengan jaminan kompensasi fair-wage berkelanjutan (SDG 8).',
                  tag: 'Pemberdayaan Daerah',
                  icon: Users,
                  badgeColor: 'bg-[#5c8770] text-white',
                },
                {
                  step: '03',
                  title: 'Fasilitas QC Circulo',
                  subtitle: 'Two-Stage Quality Control',
                  desc: 'Standardisasi master sample sebelum produksi dan inspeksi fisik produk jadi sebelum diberi segel resmi Passed QC.',
                  tag: 'Standar Mutu B2B',
                  icon: ShieldCheck,
                  badgeColor: 'bg-[#f3c44c] text-[#1a3626]',
                },
                {
                  step: '04',
                  title: 'Klien Korporat B2B',
                  subtitle: 'Distribusi & Laporan ESG',
                  desc: 'Pengiriman tepat waktu ke kantor atau event MICE, dilengkapi Impact Report terverifikasi untuk laporan tahunan.',
                  tag: 'Audit-Ready ESG',
                  icon: Building2,
                  badgeColor: 'bg-[#1a3626] text-[#f3c44c]',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#1a3626]/15 hover:border-[#1a3626] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 ${item.badgeColor}`}>
                        Langkah {item.step}
                      </span>
                      <div className="w-9 h-9 bg-[#f8f7f2] border border-[#1a3626]/10 flex items-center justify-center text-[#1a3626] group-hover:bg-[#1a3626] group-hover:text-white transition-colors">
                        <item.icon size={18} />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#1a3626] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-mono uppercase text-[#5c8770] font-bold mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#4a5f52] leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
                    <span className="font-mono text-gray-500 font-semibold">{item.tag}</span>
                    <span className="text-[#1a3626] font-bold">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

           {/* Product Catalog Section */}
           <div id="katalog" className="mt-28 pt-20 border-t border-[#1a3626]/15 scroll-mt-20">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
               <div className="max-w-xl">
                 <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3626] mb-3">Katalog Eco-Merch Siap Kustom</h2>
                 <p className="text-[#4a5f52] text-sm sm:text-base">Pilihan merchandise korporat yang dapat dikustomisasi logo & warna, terbuat 100% dari residu limbah terverifikasi.</p>
               </div>
               <Link 
                 href="/katalog" 
                 className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a3626] hover:text-[#5c8770] transition-colors pb-1 border-b-2 border-[#1a3626] uppercase tracking-wider shrink-0"
               >
                 Lihat Semua ({PRODUCTS_DATA.length} Koleksi) <ArrowRight size={14} />
               </Link>
             </div>

             {/* Category Filter Tabs */}
             <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-[#1a3626]/10">
               {PRODUCT_CATEGORIES.map((cat) => {
                 const isActive = activeCategory === cat;
                 const count = cat === 'Semua' 
                   ? PRODUCTS_DATA.length 
                   : PRODUCTS_DATA.filter(p => p.category === cat).length;
                 return (
                   <button
                     key={cat}
                     type="button"
                     onClick={() => setActiveCategory(cat)}
                     className={`px-4 py-2 text-xs font-bold transition-all cursor-pointer rounded-none border ${
                       isActive
                         ? 'bg-[#1a3626] text-white border-[#1a3626] shadow-xs'
                         : 'bg-white text-[#1a3626] border-[#1a3626]/20 hover:border-[#1a3626] hover:bg-[#e8efe9]/50'
                     }`}
                   >
                     {cat} <span className={`ml-1 text-[10px] font-mono ${isActive ? 'text-[#f3c44c]' : 'text-gray-400'}`}>({count})</span>
                   </button>
                 );
               })}
             </div>

             {/* Dynamic Product Grid (Maksimal 6 Produk agar rapi) */}
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {displayedProducts.map((product) => (
                 <div 
                   key={product.id} 
                   className="bg-white border border-[#1a3626]/15 hover:border-[#1a3626] rounded-none p-5 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                 >
                   <div>
                     {/* Product Image Frame */}
                      <div className="w-full aspect-[4/3] bg-neutral-100 mb-4 overflow-hidden rounded-none relative border border-[#1a3626]/10">
                        {product.badge && (
                          <div className="absolute top-3 left-3 bg-[#1a3626] text-[#f3c44c] text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 z-20 border border-[#f3c44c]/30 shadow-xs">
                            {product.badge}
                          </div>
                        )}
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>

                      {/* Meta & Titles */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-mono text-[#1a3626] font-bold uppercase tracking-wider bg-[#1a3626]/5 px-2 py-0.5 border border-[#1a3626]/10">
                            {product.category}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="text-[10px] font-mono text-gray-500">
                            {product.material.split('&')[0]}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#1a3626] font-bold bg-[#f8f7f2] px-2 py-0.5 border border-[#1a3626]/15 whitespace-nowrap">
                          Min. {product.minOrder}
                        </span>
                      </div>

                      <h4 className="text-lg font-extrabold text-[#1a3626] mb-1 group-hover:text-[#5c8770] transition-colors leading-snug">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#4a5f52] mb-3 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Bottom Impact & Action Footer */}
                    <div className="pt-3 border-t border-[#1a3626]/10 flex items-center justify-between mt-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-gray-400 block">Jejak Dampak ESG</span>
                        <span className="text-xs font-bold text-[#1a3626]">{product.impactMetric}</span>
                      </div>
                      <Link 
                        href="/dashboard"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a3626] hover:text-white hover:bg-[#1a3626] group/btn px-3 py-1.5 bg-[#f8f7f2] border border-[#1a3626]/15 hover:border-[#1a3626] transition-all"
                      >
                        Kustomisasi <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                   </div>
                 </div>
               ))}
             </div>
             


             {/* Bottom Quote Banner */}
             <div className="mt-12 p-6 sm:p-8 bg-[#1a3626] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[#1a3626]">
               <div>
                 <h4 className="text-lg font-bold mb-1">Butuh Katalog PDF Lengkap atau Pesanan Khusus?</h4>
                 <p className="text-xs text-white/70">Tim konsultan keberlanjutan kami siap membantu penyesuaian warna Pantone & sertifikasi audit ESG perusahaan Anda.</p>
               </div>
               <Link 
                 href="/dashboard" 
                 className="shrink-0 bg-[#f3c44c] hover:bg-[#e3b43c] text-[#1a3626] font-extrabold text-xs px-6 py-3 transition-colors flex items-center gap-2"
               >
                 Ajukan Penawaran Korporat <ArrowRight size={15} />
               </Link>
             </div>
           </div>
           
        </div>
      </section>

      {/* Corporate B2B Footer */}
      <Footer />

    </div>
  );
}
