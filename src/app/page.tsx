"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Users, LineChart, Recycle, Box, Sprout, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const transitionImages = [
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800", // Eco products
    "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800", // Crafting
    "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800"  // Reusable packaging
  ];
  
  const [currentImg, setCurrentImg] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % transitionImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      
      {/* Navigation */}
      <nav className={`w-full px-8 z-50 fixed top-0 left-0 transition-all duration-300 ease-in-out ${isScrolled ? 'py-4 bg-[#f8f7f2] border-b border-[#1a3626]/5 shadow-sm' : 'py-6 bg-transparent border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 text-2xl font-bold text-[#1a3626]">
            <img src="/logo.png" alt="Circulo Logo" className="w-8 h-8 object-contain" />
            <span>Circulo</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[#1a3626] font-medium text-sm">
            <a href="#solusi" className="flex items-center gap-1 hover:opacity-70 transition-opacity">Solusi B2B <ChevronDown size={16} /></a>
            <a href="#dampak" className="hover:opacity-70 transition-opacity">Dampak ESG</a>
            <a href="#katalog" className="hover:opacity-70 transition-opacity">Katalog</a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="hidden md:block text-[#1a3626] font-semibold text-sm hover:opacity-70">
              Masuk Klien
            </Link>
            <Link href="/dashboard" className="bg-[#f3c44c] text-[#1a3626] px-6 py-2.5 rounded-none font-bold text-sm flex items-center gap-2 hover:bg-[#e3b43c] transition-colors shadow-sm">
              Coba Dashboard <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full pt-32 pb-20 px-8 relative z-10">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Visual Composition (Circular Graphic + Overlapping Card) */}
          <div className="relative w-full h-[600px] flex items-center justify-center lg:justify-start">
             
             {/* The Donut Chart SVG Ring around the image */}
             <div className="absolute left-[-20px] w-[560px] h-[560px] z-0">
               <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                 <circle cx="50" cy="50" r="48" fill="none" stroke="#f3c44c" strokeWidth="4" strokeDasharray="60 301.59" className="opacity-90" />
                 <circle cx="50" cy="50" r="48" fill="none" stroke="#1a3626" strokeWidth="8" strokeDasharray="100 301.59" strokeDashoffset="-65" className="opacity-90" />
                 <circle cx="50" cy="50" r="48" fill="none" stroke="#5c8770" strokeWidth="2" strokeDasharray="40 301.59" strokeDashoffset="-170" className="opacity-90" />
               </svg>
             </div>

             {/* The Large Circular Image */}
             <div className="absolute left-[10px] w-[500px] h-[500px] rounded-full border-[12px] border-white shadow-2xl overflow-hidden z-10">
               <img src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800" alt="Eco Merchandise" className="w-full h-full object-cover" />
               {/* Dark overlay for contrast */}
               <div className="absolute inset-0 bg-black/5"></div>
             </div>

             {/* Curved Text SVG */}
             <div className="absolute left-[-20px] w-[560px] h-[560px] z-20 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  {/* Clockwise circle starting from bottom center, sitting outside the donut chart */}
                  <path id="curve" d="M 50 105 A 55 55 0 1 1 49.9 105" fill="transparent" />
                  <text className="text-[4px] font-bold fill-[#5c8770] tracking-[0.3em] uppercase">
                    <textPath href="#curve" startOffset="20%">
                      From Waste to Value
                    </textPath>
                  </text>
                  {/* Yellow decorative dots placed perfectly along the radius */}
                  <circle cx="1" cy="74" r="1.2" fill="#f3c44c" />
                  <circle cx="3" cy="23" r="1.2" fill="#f3c44c" />
                </svg>
             </div>

             {/* Live Impact Card (Overlapping on the right) */}
             <div className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 bg-white rounded-3xl p-5 shadow-[0_20px_50px_rgba(26,54,38,0.1)] border border-gray-100 z-30 w-[380px]">

               {/* Metrics Grid inside card */}
               <div className="grid grid-cols-2 gap-3 mb-3">
                 
                 {/* Card 1 */}
                 <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-start mb-2">
                     <div className="w-8 h-8 bg-[#e8efe9] rounded-full flex items-center justify-center text-[#1a3626]">
                       <Recycle size={16} />
                     </div>
                   </div>
                   <h4 className="text-[10px] font-semibold text-[#1a3626] mb-1">Plastik Terdiversi</h4>
                   <p className="text-lg font-bold text-[#1a3626] mb-1">12,450 <span className="text-[10px] font-semibold">kg</span></p>
                   <p className="text-[9px] text-gray-500 mb-1">≈ 562 botol plastik</p>
                   <p className="text-[9px] text-[#5c8770] font-bold flex items-center gap-1"><ArrowUpRight size={10} strokeWidth={3}/> 12%</p>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-start mb-2">
                     <div className="w-8 h-8 bg-[#e8efe9] rounded-full flex items-center justify-center text-[#1a3626]">
                       <Users size={16} />
                     </div>
                   </div>
                   <h4 className="text-[10px] font-semibold text-[#1a3626] mb-1">Local Makers</h4>
                   <p className="text-lg font-bold text-[#1a3626] mb-1">120+</p>
                   <p className="text-[9px] text-gray-500 mb-1">pengrajin lokal</p>
                   <p className="text-[9px] text-[#5c8770] font-bold flex items-center gap-1"><ArrowUpRight size={10} strokeWidth={3}/> 8%</p>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-start mb-2">
                     <div className="w-8 h-8 bg-[#e8efe9] rounded-full flex items-center justify-center text-[#1a3626]">
                       <Box size={16} />
                     </div>
                   </div>
                   <h4 className="text-[10px] font-semibold text-[#1a3626] mb-1">Pesanan Korporat</h4>
                   <p className="text-lg font-bold text-[#1a3626] mb-1">85</p>
                   <p className="text-[9px] text-gray-500 mb-1">pesanan perusahaan</p>
                   <p className="text-[9px] text-[#5c8770] font-bold flex items-center gap-1"><ArrowUpRight size={10} strokeWidth={3}/> 15%</p>
                 </div>

                 {/* Card 4 - Green Highlight */}
                 <div className="bg-[#e8efe9] border border-[#5c8770]/20 rounded-2xl p-4 shadow-sm flex flex-col justify-between relative overflow-hidden group cursor-pointer">
                   <div className="w-8 h-8 bg-[#5c8770] rounded-full flex items-center justify-center text-white mb-2">
                     <Sprout size={16} />
                   </div>
                   <h4 className="text-[10px] font-bold text-[#1a3626] mb-1">ESG Impact Ready</h4>
                   <p className="text-[9px] text-[#4a5f52] leading-tight pr-4">Laporan dampak tersedia untuk setiap transaksi</p>
                   <ArrowRight size={12} className="text-[#5c8770] absolute bottom-3 right-3 group-hover:translate-x-1 transition-transform" />
                 </div>
               </div>
               
               {/* Small Bottom Image in Card */}
               <div className="w-full h-24 rounded-xl overflow-hidden relative mt-1 flex bg-[#f8f7f2]">
                 <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=400" alt="Crafting" className="w-1/2 h-full object-cover" />
                 <div className="w-1/2 p-3 flex flex-col justify-center">
                    <p className="text-[9px] font-bold text-[#1a3626] leading-tight mb-2">Dari Sampah Lokal Menuju Produk Bernilai</p>
                    <div className="w-5 h-5 rounded-full border border-[#5c8770] flex items-center justify-center text-[#5c8770]">
                      <ArrowRight size={10} />
                    </div>
                 </div>
               </div>

             </div>
          </div>
          
          {/* RIGHT: Text Content & Carousel */}
          <div className="pl-0 lg:pl-16 z-20 flex flex-col justify-center h-full">
            <h1 className="text-5xl md:text-[64px] font-extrabold text-[#1a3626] leading-[1.1] mb-6 tracking-tight">
              Ubah Limbah<br />Menjadi <span className="text-[#5c8770]">Eco-Merch</span><br />B2B Premium<span className="text-[#f3c44c]">.</span>
            </h1>
            
            <p className="text-lg text-[#4a5f52] mb-10 max-w-[480px] leading-relaxed">
              Satu solusi untuk sourcing eco-merch berkualitas, custom sesuai kebutuhan, pengiriman yang andal, dan dampak yang terukur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/dashboard" className="bg-[#1a3626] text-white px-8 py-3.5 rounded-none font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#12261b] transition-colors shadow-md">
                Mulai Kolaborasi <ArrowRight size={18} />
              </Link>
              <button className="bg-transparent border border-[#1a3626] text-[#1a3626] px-8 py-3.5 rounded-none font-semibold text-sm hover:bg-[#1a3626]/5 transition-colors">
                Lihat Katalog
              </button>
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
      </section>

      {/* Impact & Materials Section */}
      <section className="w-full py-28 bg-[#fbf9f4] border-t border-[#1a3626]/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
           {/* Section Header - Editorial Asymmetrical Grid */}
           <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 mb-16 border-b border-[#1a3626]/15">
             <div className="lg:col-span-7">
               <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#1a3626]/5 border border-[#1a3626]/15 text-[#1a3626] text-xs font-mono tracking-wider uppercase mb-5">
                 <span className="w-2 h-2 rounded-full bg-[#3d7a5a] animate-pulse"></span>
                 Dampak Terverifikasi & Rantai Pasok
               </div>
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3626] tracking-tight leading-[1.15]">
                 Menciptakan Nilai Baru <br className="hidden sm:inline" />
                 dari Residu & Sampah.
               </h2>
             </div>
             <div className="lg:col-span-5 flex flex-col justify-between">
               <p className="text-[#3b4e42] text-base sm:text-lg leading-relaxed mb-5">
                 Circulo tidak sekadar memproduksi merchandise korporat, melainkan merekayasa ulang rantai pasok material sisa menjadi aset bernilai tinggi dengan transparansi rantai pasok yang terverifikasi.
               </p>
               <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-[#1a3626]">
                 <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#3d7a5a]" /> 100% Traceable ESG</span>
                 <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#3d7a5a]" /> Fair-Wage Standard</span>
                 <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#3d7a5a]" /> Zero Toxic Dyes</span>
               </div>
             </div>
           </div>
           
           {/* Impact Ledger Bar */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#1a3626]/15 bg-white shadow-sm mb-20 divide-y sm:divide-y-0 sm:divide-x divide-[#1a3626]/15">
             {/* Stat 1 */}
             <div className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#f4f8f5] transition-colors border-b sm:border-b-0">
               <div className="flex justify-between items-start mb-4">
                 <span className="text-[11px] font-mono tracking-wider text-[#4a5f52] uppercase">[ 01 / DIVERSI ]</span>
                 <span className="w-2 h-2 rounded-full bg-[#3d7a5a]"></span>
               </div>
               <div>
                 <div className="flex items-baseline gap-1 text-[#1a3626] font-black text-4xl sm:text-5xl tracking-tight mb-2">
                   12.4<span className="text-xl sm:text-2xl font-bold text-[#3d7a5a]">Ton</span>
                 </div>
                 <p className="text-sm font-bold text-[#1a3626]">Limbah Terdiversi</p>
                 <p className="text-xs text-[#526a5c] mt-1 leading-snug">Diselamatkan dari TPA & ekosistem lautan nasional.</p>
               </div>
             </div>

             {/* Stat 2 */}
             <div className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#faf6f0] transition-colors border-b sm:border-b-0">
               <div className="flex justify-between items-start mb-4">
                 <span className="text-[11px] font-mono tracking-wider text-[#4a5f52] uppercase">[ 02 / KOMUNITAS ]</span>
                 <span className="w-2 h-2 rounded-full bg-[#a36934]"></span>
               </div>
               <div>
                 <div className="flex items-baseline gap-1 text-[#1a3626] font-black text-4xl sm:text-5xl tracking-tight mb-2">
                   120<span className="text-2xl sm:text-3xl font-bold text-[#a36934]">+</span>
                 </div>
                 <p className="text-sm font-bold text-[#1a3626]">Pengrajin Lokal</p>
                 <p className="text-xs text-[#526a5c] mt-1 leading-snug">Diberdayakan secara ekonomi dengan upah layak (fair-wage).</p>
               </div>
             </div>

             {/* Stat 3 */}
             <div className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#f4f8f5] transition-colors border-b sm:border-b-0">
               <div className="flex justify-between items-start mb-4">
                 <span className="text-[11px] font-mono tracking-wider text-[#4a5f52] uppercase">[ 03 / KORPORAT ]</span>
                 <span className="w-2 h-2 rounded-full bg-[#3d7a5a]"></span>
               </div>
               <div>
                 <div className="flex items-baseline gap-1 text-[#1a3626] font-black text-4xl sm:text-5xl tracking-tight mb-2">
                   85<span className="text-2xl sm:text-3xl font-bold text-[#3d7a5a]">+</span>
                 </div>
                 <p className="text-sm font-bold text-[#1a3626]">Mitra Korporat</p>
                 <p className="text-xs text-[#526a5c] mt-1 leading-snug">Perusahaan nasional beralih ke pengadaan berkelanjutan.</p>
               </div>
             </div>

             {/* Stat 4 */}
             <div className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#faf8f2] transition-colors">
               <div className="flex justify-between items-start mb-4">
                 <span className="text-[11px] font-mono tracking-wider text-[#4a5f52] uppercase">[ 04 / AUDIT ESG ]</span>
                 <span className="w-2 h-2 rounded-full bg-[#3d7a5a]"></span>
               </div>
               <div>
                 <div className="flex items-baseline gap-1 text-[#1a3626] font-black text-4xl sm:text-5xl tracking-tight mb-2">
                   100<span className="text-2xl sm:text-3xl font-bold text-[#3d7a5a]">%</span>
                 </div>
                 <p className="text-sm font-bold text-[#1a3626]">Terlacak & Transparan</p>
                 <p className="text-xs text-[#526a5c] mt-1 leading-snug">Data jejak karbon & validasi QR code per batch produk.</p>
               </div>
             </div>
           </div>

           {/* Material Specimen Transformation Grid */}
           <div className="mb-4">
             <div className="flex items-center justify-between mb-8">
               <div>
                 <p className="text-xs font-mono uppercase tracking-widest text-[#4a5f52] mb-1">ARSITEKTUR MATERIAL</p>
                 <h3 className="text-2xl sm:text-3xl font-bold text-[#1a3626]">3 Alur Pengolahan Limbah Circulo</h3>
               </div>
               <span className="hidden md:inline-block text-xs font-mono text-[#526a5c] bg-white px-3 py-1.5 border border-[#1a3626]/10">
                 STANDAR CIRCULAR ECONOMY INDONESIA
               </span>
             </div>

             <div className="grid lg:grid-cols-3 gap-8">
               {/* Specimen 1: Polymer Stream */}
               <div className="bg-[#f2f7f4] border border-[#2d5a3e]/25 p-8 flex flex-col justify-between relative group hover:border-[#2d5a3e]/50 hover:shadow-lg transition-all">
                 <div className="absolute top-0 right-0 bg-[#2d5a3e] text-white text-[10px] font-mono px-3 py-1 font-semibold tracking-wider">
                   STREAM 01
                 </div>
                 <div>
                   <div className="flex items-center gap-3 mb-6">
                     <div className="w-12 h-12 bg-white border border-[#2d5a3e]/30 flex items-center justify-center text-[#2d5a3e] shadow-xs">
                       <Recycle size={24} />
                     </div>
                     <div>
                       <span className="text-[11px] font-mono text-[#3d7a5a] uppercase font-bold tracking-wider">Polimer Daur Ulang</span>
                       <h4 className="text-xl font-bold text-[#1a3626]">Plastik PET & HDPE</h4>
                     </div>
                   </div>

                   <p className="text-sm text-[#3b4e42] leading-relaxed mb-6">
                     Limbah botol air mineral dan kemasan plastik sekali pakai disortir teliti, dicacah menjadi flakes murni, lalu diekstrusi menjadi serat benang kain berkekuatan tinggi (rPET).
                   </p>

                   {/* Process Flow Mini */}
                   <div className="p-3.5 bg-white/80 border border-[#2d5a3e]/15 mb-6 text-xs text-[#2d5a3e]">
                     <p className="font-mono text-[10px] text-gray-500 uppercase mb-1">Tahap Transformasi:</p>
                     <p className="font-semibold text-[#1a3626]">Botol Bekas → Flakes Bersih → Benang Tenun rPET</p>
                   </div>
                 </div>

                 <div className="pt-6 border-t border-[#2d5a3e]/20">
                   <p className="text-[11px] font-mono text-[#4a5f52] uppercase tracking-wider mb-2.5">Keluaran Produk B2B:</p>
                   <div className="flex flex-wrap gap-2 mb-4">
                     <span className="px-2.5 py-1 bg-white text-xs font-medium text-[#1a3626] border border-[#2d5a3e]/20">Eco Totebag</span>
                     <span className="px-2.5 py-1 bg-white text-xs font-medium text-[#1a3626] border border-[#2d5a3e]/20">Pouch Laptop</span>
                     <span className="px-2.5 py-1 bg-white text-xs font-medium text-[#1a3626] border border-[#2d5a3e]/20">Lanyard ID</span>
                   </div>
                   <div className="text-[11px] text-[#2d5a3e] font-semibold flex items-center gap-1.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3e]"></span>
                     Mereduksi 70% emisi karbon vs plastik virgin
                   </div>
                 </div>
               </div>

               {/* Specimen 2: Fiber Stream */}
               <div className="bg-[#faf5ee] border border-[#a86e3b]/30 p-8 flex flex-col justify-between relative group hover:border-[#a86e3b]/60 hover:shadow-lg transition-all">
                 <div className="absolute top-0 right-0 bg-[#a86e3b] text-white text-[10px] font-mono px-3 py-1 font-semibold tracking-wider">
                   STREAM 02
                 </div>
                 <div>
                   <div className="flex items-center gap-3 mb-6">
                     <div className="w-12 h-12 bg-white border border-[#a86e3b]/35 flex items-center justify-center text-[#a86e3b] shadow-xs">
                       <Layers size={24} />
                     </div>
                     <div>
                       <span className="text-[11px] font-mono text-[#a86e3b] uppercase font-bold tracking-wider">Serat Tekstil Residu</span>
                       <h4 className="text-xl font-bold text-[#1a3626]">Kain Perca & Garmen</h4>
                     </div>
                   </div>

                   <p className="text-sm text-[#3b4e42] leading-relaxed mb-6">
                     Sisa potongan konveksi industri garmen lokal dipilah manual berdasarkan pigmen asli, lalu dipintal dan ditenun kembali oleh mitra pengrajin tanpa pewarna kimia beracun.
                   </p>

                   {/* Process Flow Mini */}
                   <div className="p-3.5 bg-white/80 border border-[#a86e3b]/20 mb-6 text-xs text-[#a86e3b]">
                     <p className="font-mono text-[10px] text-gray-500 uppercase mb-1">Tahap Transformasi:</p>
                     <p className="font-semibold text-[#1a3626]">Perca Pabrik → Sortir Warna Alami → Tenun Upcycle</p>
                   </div>
                 </div>

                 <div className="pt-6 border-t border-[#a86e3b]/25">
                   <p className="text-[11px] font-mono text-[#4a5f52] uppercase tracking-wider mb-2.5">Keluaran Produk B2B:</p>
                   <div className="flex flex-wrap gap-2 mb-4">
                     <span className="px-2.5 py-1 bg-white text-xs font-medium text-[#1a3626] border border-[#a86e3b]/25">Kaos Acara Organik</span>
                     <span className="px-2.5 py-1 bg-white text-xs font-medium text-[#1a3626] border border-[#a86e3b]/25">Bucket Hat</span>
                     <span className="px-2.5 py-1 bg-white text-xs font-medium text-[#1a3626] border border-[#a86e3b]/25">Pouch Upcycled</span>
                   </div>
                   <div className="text-[11px] text-[#a86e3b] font-semibold flex items-center gap-1.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#a86e3b]"></span>
                     Hemat 2.400 liter air per kg kain daur ulang
                   </div>
                 </div>
               </div>

               {/* Specimen 3: Cellulose Stream */}
               <div className="bg-[#f4f7ee] border border-[#5d7742]/30 p-8 flex flex-col justify-between relative group hover:border-[#5d7742]/60 hover:shadow-lg transition-all">
                 <div className="absolute top-0 right-0 bg-[#5d7742] text-white text-[10px] font-mono px-3 py-1 font-semibold tracking-wider">
                   STREAM 03
                 </div>
                 <div>
                   <div className="flex items-center gap-3 mb-6">
                     <div className="w-12 h-12 bg-white border border-[#5d7742]/35 flex items-center justify-center text-[#5d7742] shadow-xs">
                       <Sprout size={24} />
                     </div>
                     <div>
                       <span className="text-[11px] font-mono text-[#5d7742] uppercase font-bold tracking-wider">Selulosa & Serat Alam</span>
                       <h4 className="text-xl font-bold text-[#1a3626]">Kertas & Biomassa</h4>
                     </div>
                   </div>

                   <p className="text-sm text-[#3b4e42] leading-relaxed mb-6">
                     Arsip dokumen kantor afkir dikombinasikan dengan serat pelepah pinang dan sabut kelapa, diproses menjadi lembaran pulp padat yang kuat, tahan air, dan estetis.
                   </p>

                   {/* Process Flow Mini */}
                   <div className="p-3.5 bg-white/80 border border-[#5d7742]/20 mb-6 text-xs text-[#5d7742]">
                     <p className="font-mono text-[10px] text-gray-500 uppercase mb-1">Tahap Transformasi:</p>
                     <p className="font-semibold text-[#1a3626]">Arsip Kantor + Serat Alam → Pulping Komposit → Pencetakan Presisi</p>
                   </div>
                 </div>

                 <div className="pt-6 border-t border-[#5d7742]/25">
                   <p className="text-[11px] font-mono text-[#4a5f52] uppercase tracking-wider mb-2.5">Keluaran Produk B2B:</p>
                   <div className="flex flex-wrap gap-2 mb-4">
                     <span className="px-2.5 py-1 bg-white text-xs font-medium text-[#1a3626] border border-[#5d7742]/25">Agenda Eco Hardcover</span>
                     <span className="px-2.5 py-1 bg-white text-xs font-medium text-[#1a3626] border border-[#5d7742]/25">Kemasan Gift Set</span>
                     <span className="px-2.5 py-1 bg-white text-xs font-medium text-[#1a3626] border border-[#5d7742]/25">ID Tag Biodegradable</span>
                   </div>
                   <div className="text-[11px] text-[#5d7742] font-semibold flex items-center gap-1.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#5d7742]"></span>
                     100% Biodegradable & dapat dikomposkan alami
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Product Catalog Section */}
           <div className="mt-28 pt-20 border-t border-[#1a3626]/15">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
               <div className="max-w-xl">
                 <p className="text-xs font-mono uppercase tracking-widest text-[#4a5f52] mb-1">KOLEKSI PENGADAAN B2B</p>
                 <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3626] mb-3">Katalog Eco-Merch Siap Kustom</h2>
                 <p className="text-[#4a5f52] text-sm sm:text-base">Berbagai pilihan merchandise korporat yang dapat dikustomisasi logo & warna, terbuat 100% dari residu limbah terverifikasi.</p>
               </div>
               <Link href="/katalog" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2d5a3e] font-bold hover:text-[#1a3626] transition-colors pb-1 border-b-2 border-[#2d5a3e]">
                 Lihat Semua Katalog <ArrowRight size={15} />
               </Link>
             </div>

             {/* Grid 6 Products */}
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* Product 1 */}
               <div className="group cursor-pointer">
                 <div className="w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden rounded-none relative">
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-[#1a3626] z-10 rounded-none border border-[#1a3626]/10">Best Seller</div>
                   <img src="/images/eco_tote_bag.jpg" alt="Tote Bag" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <h4 className="text-lg font-bold text-[#1a3626] mb-1">Eco Tote Bag Daur Ulang</h4>
                 <p className="text-sm text-[#4a5f52]">Dari limbah botol PET (rPET)</p>
               </div>

               {/* Product 2 */}
               <div className="group cursor-pointer">
                 <div className="w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden rounded-none relative">
                   <img src="/images/eco_notebook.jpg" alt="Notebook" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <h4 className="text-lg font-bold text-[#1a3626] mb-1">Notebook Recycled Paper</h4>
                 <p className="text-sm text-[#4a5f52]">Kertas daur ulang & cover serat alam</p>
               </div>

               {/* Product 3 */}
               <div className="group cursor-pointer">
                 <div className="w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden rounded-none relative">
                   <img src="/images/eco_gift_set.jpg" alt="Corporate Gift Set" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <h4 className="text-lg font-bold text-[#1a3626] mb-1">Eco Corporate Gift Set</h4>
                 <p className="text-sm text-[#4a5f52]">Custom combo untuk onboarding/event</p>
               </div>

               {/* Product 4 */}
               <div className="group cursor-pointer">
                 <div className="w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden rounded-none relative">
                   <img src="/images/eco_lanyard.jpg" alt="Lanyard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <h4 className="text-lg font-bold text-[#1a3626] mb-1">Lanyard & ID Holder</h4>
                 <p className="text-sm text-[#4a5f52]">Tali rPET & Holder plastik daur ulang</p>
               </div>

               {/* Product 5 */}
               <div className="group cursor-pointer">
                 <div className="w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden rounded-none relative">
                   <img src="/images/eco_laptop_sleeve.jpg" alt="Laptop Sleeve" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <h4 className="text-lg font-bold text-[#1a3626] mb-1">Laptop Sleeve Upcycled</h4>
                 <p className="text-sm text-[#4a5f52]">Dari sisa kain tekstil premium</p>
               </div>

               {/* Product 6 */}
               <div className="group cursor-pointer">
                 <div className="w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden rounded-none relative">
                   <img src="/images/eco_desk_organizer.jpg" alt="Desk Organizer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <h4 className="text-lg font-bold text-[#1a3626] mb-1">Desk Organizer Recycled</h4>
                 <p className="text-sm text-[#4a5f52]">Komposit biomassa & limbah plastik</p>
               </div>
             </div>
             
             <div className="mt-8 flex justify-center md:hidden">
               <Link href="/katalog" className="bg-[#1a3626] text-white px-8 py-3 rounded-none font-bold text-sm w-full text-center hover:bg-[#2a4a37] transition-colors">
                 Lihat Semua Katalog
               </Link>
             </div>
           </div>
           
        </div>
      </section>

    </div>
  );
}
