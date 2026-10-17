"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Users, LineChart, Recycle, Box, Sprout, ArrowUpRight, CheckCircle2, Layers, Building2, ArrowUp, Sparkles, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from '@/data/products';
import {
  CorporateTrustBar,
  ImpactCalculatorSection,
  WhyCirculoSection,
  ImpactDossierSection,
  CorporatePackagesSection,
  ClientTestimonialsSection,
} from '@/components/home';

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
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedMaterialIdx, setSelectedMaterialIdx] = useState<number | null>(null);
  const [selectedStepIdx, setSelectedStepIdx] = useState<number | null>(null);

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
             <div className="absolute w-[330px] h-[330px] sm:w-[440px] sm:h-[440px] lg:w-[560px] lg:h-[560px] lg:-left-5 z-20 pointer-events-none overflow-visible transition-transform duration-100 ease-out" style={{ transform: `rotate(${scrollY * 0.08}deg)` }}>
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path id="curve" d="M 1 50 A 49 49 0 0 1 99 50" fill="transparent" />
                  <text className="text-[3.8px] font-bold fill-[#5c8770] tracking-[0.25em] uppercase" textAnchor="middle">
                    <textPath href="#curve" startOffset="50%">
                      From Waste to Value
                    </textPath>
                  </text>
                  <circle cx="13" cy="18.5" r="1.2" fill="#f3c44c" />
                  <circle cx="87" cy="18.5" r="1.2" fill="#f3c44c" />
                </svg>
             </div>

             {/* Live Impact Card (Overlapping on the right on desktop, at bottom on mobile) */}
             <div className="absolute bottom-0 lg:top-1/2 lg:-translate-y-1/2 right-auto lg:-right-16 bg-white rounded-none p-4 sm:p-5 border-2 border-[#1a3626] shadow-none hover:shadow-[5px_5px_0px_#1a3626] transition-shadow duration-300 z-30 w-[92%] sm:w-[350px] lg:w-[380px] cursor-default">

               {/* Metrics Grid inside card */}
               <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                 
                 {/* Card 1 */}
                 <div className="bg-[#fcfbf7] border-2 border-[#1a3626]/20 hover:border-[#1a3626] rounded-none p-3 sm:p-4 shadow-none hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer">
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
                 <div className="bg-[#fcfbf7] border-2 border-[#1a3626]/20 hover:border-[#1a3626] rounded-none p-3 sm:p-4 shadow-none hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer">
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
                 <div className="bg-[#fcfbf7] border-2 border-[#1a3626]/20 hover:border-[#1a3626] rounded-none p-3 sm:p-4 shadow-none hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer">
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
                 <div className="bg-[#e8efe9] border-2 border-[#5c8770]/40 hover:border-[#1a3626] rounded-none p-3 sm:p-4 shadow-none hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between relative overflow-hidden group cursor-pointer">
                   <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#5c8770] rounded-full flex items-center justify-center text-white mb-1.5 sm:mb-2">
                     <Sprout size={15} />
                   </div>
                   <h4 className="text-[9px] sm:text-[10px] font-bold text-[#1a3626] mb-0.5">ESG Impact Ready</h4>
                   <p className="text-[8px] sm:text-[9px] text-[#4a5f52] leading-tight pr-4">Laporan dampak tersedia</p>
                   <ArrowRight size={11} className="text-[#5c8770] absolute bottom-2.5 right-2.5 group-hover:translate-x-1 transition-transform" />
                 </div>
               </div>
               
               {/* Small Bottom Image in Card */}
               <div className="w-full h-20 sm:h-24 rounded-none overflow-hidden relative mt-1 flex bg-[#f8f7f2] border-2 border-[#1a3626]/20 hover:border-[#1a3626] shadow-none hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer">
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
              <Link 
                href="/dashboard" 
                className="w-full sm:w-auto bg-[#1a3626] text-white px-7 py-3.5 rounded-none font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#12261b] border-2 border-[#1a3626] shadow-none hover:shadow-[5px_5px_0px_#f3c44c] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Mulai Kolaborasi <ArrowRight size={16} />
              </Link>
              <Link 
                href="/katalog" 
                className="w-full sm:w-auto bg-white border-2 border-[#1a3626] text-[#1a3626] px-7 py-3.5 rounded-none font-bold text-xs sm:text-sm hover:bg-[#f8f7f2] shadow-none hover:shadow-[5px_5px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center"
              >
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
            <div className="w-full max-w-[480px] h-[200px] relative rounded-none overflow-hidden border-2 border-[#1a3626] shadow-none hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300">
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
 
      {/* Corporate Trust & Ecosystem Partners Bar */}
      <CorporateTrustBar />

      {/* Interactive ESG Impact Simulator Section */}
      <ImpactCalculatorSection />

      {/* Impact & Materials Section */}
      <section id="dampak" className="w-full py-24 relative z-10 overflow-hidden scroll-mt-16">
        {/* Decorative Background Rings & Arcs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] border-[100px] border-[#d8e3dc]/40 rounded-full"></div>
          <div className="absolute top-[35%] -right-[15%] w-[900px] h-[900px] border-[90px] border-[#f4e8c1]/50 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a3626] leading-tight mb-4 tracking-tight">
              Menciptakan Nilai Baru<br />dari <span className="text-[#5c8770]">Limbah Lokal</span>
            </h2>
            <p className="text-base text-[#4a5f52] leading-relaxed">
              Mengelola rantai pasok berdampak yang memberdayakan pengrajin lokal dan menyelamatkan lingkungan.
            </p>
          </div>

          {/* 4 Stats Cards - Clean, Square & Minimal */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 scroll-reveal">
            {/* Stat 1 */}
            <div className="bg-white border-2 border-[#1a3626]/20 hover:border-[#1a3626] rounded-none p-6 shadow-none hover:shadow-[5px_5px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer">
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
            <div className="bg-white border-2 border-[#1a3626]/20 hover:border-[#1a3626] rounded-none p-6 shadow-none hover:shadow-[5px_5px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer">
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
            <div className="bg-white border-2 border-[#1a3626]/20 hover:border-[#1a3626] rounded-none p-6 shadow-none hover:shadow-[5px_5px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer">
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
            <div className="bg-white border-2 border-[#1a3626]/20 hover:border-[#1a3626] rounded-none p-6 shadow-none hover:shadow-[5px_5px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer">
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
              <div 
                onClick={() => setSelectedMaterialIdx(0)}
                className={`bg-white border-2 rounded-none p-6 transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  selectedMaterialIdx === 0
                    ? 'border-[#1a3626] shadow-[8px_8px_0px_#1a3626] -translate-x-1 -translate-y-1'
                    : 'border-[#1a3626]/15 hover:border-[#1a3626] hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-1 hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="w-12 h-12 bg-[#e8efe9] rounded-none border border-[#5c8770]/20 flex items-center justify-center text-[#1a3626] mb-4 group-hover:scale-105 transition-transform">
                    <Recycle size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a3626] mb-2 group-hover:text-[#5c8770] transition-colors">Plastik PET & HDPE</h4>
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
              <div 
                onClick={() => setSelectedMaterialIdx(1)}
                className={`bg-white border-2 rounded-none p-6 transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  selectedMaterialIdx === 1
                    ? 'border-[#1a3626] shadow-[8px_8px_0px_#1a3626] -translate-x-1 -translate-y-1'
                    : 'border-[#1a3626]/15 hover:border-[#1a3626] hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-1 hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="w-12 h-12 bg-[#fdf5df] rounded-none border border-[#f3c44c]/30 flex items-center justify-center text-[#1a3626] mb-4 group-hover:scale-105 transition-transform">
                    <Box size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a3626] mb-2 group-hover:text-[#5c8770] transition-colors">Kain Perca & Tekstil</h4>
                  <p className="text-sm text-[#4a5f52] leading-relaxed mb-4">
                    Sisa potongan industri garmen lokal disortir warna dan dirajut kembali tanpa pewarna kimia tambahan.
                  </p>

                  <div className="w-full h-44 rounded-none overflow-hidden relative mb-4 bg-gray-100 border border-gray-100">
                    <img 
                      src="/kain.png" 
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
              <div 
                onClick={() => setSelectedMaterialIdx(2)}
                className={`bg-white border-2 rounded-none p-6 transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  selectedMaterialIdx === 2
                    ? 'border-[#1a3626] shadow-[8px_8px_0px_#1a3626] -translate-x-1 -translate-y-1'
                    : 'border-[#1a3626]/15 hover:border-[#1a3626] hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-1 hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="w-12 h-12 bg-[#e8efe9] rounded-none border border-[#5c8770]/20 flex items-center justify-center text-[#1a3626] mb-4 group-hover:scale-105 transition-transform">
                    <Sprout size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a3626] mb-2 group-hover:text-[#5c8770] transition-colors">Kertas & Biomassa</h4>
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
              ].map((item, idx) => {
                const isSelected = selectedStepIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedStepIdx(idx)}
                    className={`bg-white border-2 p-6 transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                      isSelected
                        ? 'border-[#1a3626] shadow-[8px_8px_0px_#1a3626] -translate-x-1 -translate-y-1'
                        : 'border-[#1a3626]/15 hover:border-[#1a3626] hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-1 hover:-translate-y-1'
                    }`}
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
              );
            })}
          </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Differentiation: Why Circulo vs Conventional */}
      <WhyCirculoSection />

      {/* Product Catalog Section */}
      <section id="katalog" className="w-full py-24 bg-white border-b border-[#1a3626]/15 scroll-mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
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
               {displayedProducts.map((product) => {
                 const isSelected = selectedProductId === product.id;
                 return (
                   <div 
                     key={product.id} 
                     onClick={() => setSelectedProductId(product.id)}
                     className={`bg-white border-2 rounded-none p-5 transition-all duration-300 group flex flex-col justify-between cursor-pointer ${
                       isSelected
                         ? 'border-[#1a3626] shadow-[8px_8px_0px_#1a3626] -translate-x-1 -translate-y-1'
                         : 'border-[#1a3626]/15 hover:border-[#1a3626] hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-1 hover:-translate-y-1'
                     }`}
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
                          <span className="text-[10px] font-mono text-[#f3c44c] font-bold uppercase bg-[#1a3626] px-1.5 py-0.5">
                            {product.sku}
                          </span>
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
                      <p className="text-xs text-[#4a5f52] mb-2 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-baseline justify-between text-xs py-1.5 px-2 bg-[#f8f7f2] border border-[#1a3626]/10 mb-3">
                        <span className="font-extrabold text-[#1a3626]">
                          Rp {product.priceTier4.toLocaleString('id-ID')} <span className="text-[10px] text-gray-500 font-normal">– Rp {product.priceTier1.toLocaleString('id-ID')}</span>
                        </span>
                        <span className="text-[10px] font-mono text-emerald-800 font-bold">
                          Upah: Rp {(product.artisanWage / 1000).toFixed(0)}k
                        </span>
                      </div>
                    </div>

                    {/* Bottom Impact & Action Footer */}
                    <div className="pt-3 border-t border-[#1a3626]/10 flex items-center justify-between mt-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-gray-400 block">Jejak Dampak ESG</span>
                        <span className="text-xs font-bold text-[#1a3626]">{product.impactMetric}</span>
                      </div>
                      <Link 
                        href="/dashboard"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a3626] hover:text-white hover:bg-[#1a3626] group/btn px-3.5 py-1.5 bg-[#f8f7f2] border-2 border-[#1a3626]/20 hover:border-[#1a3626] hover:shadow-[3px_3px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                      >
                        Kustomisasi <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                   </div>
                 </div>
               );
             })}
             </div>
             


             {/* Bottom Quote Banner */}
             <div className="mt-12 p-6 sm:p-8 bg-[#1a3626] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[#1a3626] shadow-none hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300">
               <div>
                 <h4 className="text-lg font-bold mb-1">Butuh Katalog PDF Lengkap atau Pesanan Khusus?</h4>
                 <p className="text-xs text-white/70">Tim konsultan keberlanjutan kami siap membantu penyesuaian warna Pantone & sertifikasi audit ESG perusahaan Anda.</p>
               </div>
               <Link 
                 href="/dashboard" 
                 className="shrink-0 bg-[#f3c44c] hover:bg-[#e3b43c] text-[#1a3626] font-extrabold text-xs px-6 py-3.5 border-2 border-[#1a3626] shadow-none hover:shadow-[5px_5px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-2"
               >
                 Ajukan Penawaran Korporat <ArrowRight size={15} />
               </Link>
             </div>
           </div>
        </section>

      {/* 5. Audit-Ready Impact Dossier & QR Traceability */}
      <ImpactDossierSection />

      {/* 6. Corporate B2B Solution Packages */}
      <CorporatePackagesSection />

      {/* 7. Client Testimonials & Case Studies */}
      <ClientTestimonialsSection />

      {/* Corporate B2B Footer */}
      <Footer />

    </div>
  );
}
