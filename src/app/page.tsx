"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Users, LineChart, Recycle, Box, Sprout, ArrowUpRight } from 'lucide-react';
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
    <div className="min-h-screen bg-[#f8f7f2] flex flex-col font-sans overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] border-[1px] border-[#1a3626]/10 rounded-full"></div>
        <div className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] border-[1px] border-[#1a3626]/10 rounded-full"></div>
        
        {/* Right side colored arcs */}
        <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] border-[120px] border-[#d8e3dc] rounded-full opacity-70"></div>
        <div className="absolute top-[15%] -right-[20%] w-[1100px] h-[1100px] border-[100px] border-[#f4e8c1] rounded-full opacity-80"></div>
      </div>
      
      {/* Navigation */}
      <nav className={`w-full px-8 z-50 sticky top-0 transition-all duration-300 ease-in-out ${isScrolled ? 'py-4 bg-[#f8f7f2] border-b border-[#1a3626]/5 shadow-sm' : 'py-6 bg-transparent border-b border-transparent'}`}>
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
      <section className="w-full pt-10 pb-20 px-8 relative z-10">
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
                    <textPath href="#curve" startOffset="10%">
                      From Waste to Value
                    </textPath>
                  </text>
                  {/* Yellow decorative dots placed perfectly along the radius */}
                  <circle cx="22" cy="92" r="1.2" fill="#f3c44c" />
                  <circle cx="1" cy="53" r="1.2" fill="#f3c44c" />
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

    </div>
  );
}
