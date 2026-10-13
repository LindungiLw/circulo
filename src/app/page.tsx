"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Users, LineChart, Recycle, Box, Sprout, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from '@/data/products';

export default function LandingPage() {
  const transitionImages = [
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800", // Eco products
    "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800", // Crafting
    "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800"  // Reusable packaging
  ];
  
  const [currentImg, setCurrentImg] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const filteredProducts = activeCategory === 'Semua' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  const displayedProducts = filteredProducts.slice(0, 6);

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
      <section id="solusi" className="w-full pt-32 pb-20 px-8 relative z-10 scroll-mt-10">
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
             <div className="absolute left-[-20px] w-[560px] h-[560px] z-20 pointer-events-none overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Clockwise upper semicircle arc along top */}
                  <path id="curve" d="M 8 50 A 42 42 0 0 1 92 50" fill="transparent" />
                  <text className="text-[3.8px] font-bold fill-[#5c8770] tracking-[0.25em] uppercase" textAnchor="middle">
                    <textPath href="#curve" startOffset="50%">
                      From Waste to Value
                    </textPath>
                  </text>
                  {/* Yellow decorative dots on top curve */}
                  <circle cx="24" cy="22" r="1.2" fill="#f3c44c" />
                  <circle cx="76" cy="22" r="1.2" fill="#f3c44c" />
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
      <section id="dampak" className="w-full py-24 relative z-10 overflow-hidden scroll-mt-16">
        {/* Decorative Background Rings & Arcs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] border-[100px] border-[#d8e3dc]/40 rounded-full"></div>
          <div className="absolute top-[35%] -right-[15%] w-[900px] h-[900px] border-[90px] border-[#f4e8c1]/50 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a3626] leading-tight mb-4 tracking-tight">
              Menciptakan Nilai Baru<br />dari <span className="text-[#5c8770]">Limbah Lokal</span>
            </h2>
            <p className="text-base text-[#4a5f52] leading-relaxed">
              Mengelola rantai pasok berdampak yang memberdayakan pengrajin lokal dan menyelamatkan lingkungan.
            </p>
          </div>

          {/* 4 Stats Cards - Clean, Square & Minimal */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
            <div className="grid md:grid-cols-3 gap-8">
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
                     <div className="w-full aspect-[4/3] bg-[#f8f7f2] mb-4 overflow-hidden rounded-none relative border border-[#1a3626]/10 flex items-center justify-center p-4">
                       {product.badge && (
                         <div className="absolute top-3 left-3 bg-[#1a3626] text-[#f3c44c] text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 z-10 border border-[#f3c44c]/30 rounded-none">
                           {product.badge}
                         </div>
                       )}
                       <span className="absolute top-3 right-3 text-[10px] font-mono text-gray-500 font-semibold bg-white/80 px-2 py-0.5 border border-gray-200">
                         Min. {product.minOrder}
                       </span>
                       <img 
                         src={product.image} 
                         alt={product.name} 
                         className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm" 
                       />
                     </div>

                     {/* Meta & Titles */}
                     <div className="flex items-center gap-2 mb-1">
                       <span className="text-[10px] font-mono text-[#5c8770] font-bold uppercase tracking-wider">
                         {product.category}
                       </span>
                       <span className="text-gray-300">•</span>
                       <span className="text-[10px] font-mono text-gray-500">
                         {product.material.split('&')[0]}
                       </span>
                     </div>

                     <h4 className="text-lg font-extrabold text-[#1a3626] mb-1 group-hover:text-[#5c8770] transition-colors">
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
                       className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a3626] hover:text-[#5c8770] group/btn px-2.5 py-1.5 bg-[#f8f7f2] border border-[#1a3626]/10 hover:border-[#1a3626] transition-all"
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
