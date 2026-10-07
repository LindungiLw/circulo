"use client";

import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Users, LineChart, Recycle, Box, Sprout, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f2] flex flex-col font-sans overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      {/* Top right arcs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] border-[40px] border-[#f3c44c] rounded-full opacity-30 pointer-events-none"></div>
      <div className="absolute -top-[300px] -right-20 w-[700px] h-[700px] border-[60px] border-[#5c8770] rounded-full opacity-20 pointer-events-none"></div>
      
      {/* Bottom left arcs */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border-[40px] border-[#f3c44c] rounded-full opacity-40 pointer-events-none z-0"></div>
      
      {/* Navigation */}
      <nav className="w-full px-8 py-6 z-50 relative">
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
            <Link href="/dashboard" className="bg-[#f3c44c] text-[#1a3626] px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#e3b43c] transition-colors shadow-sm">
              Coba Dashboard <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full pt-10 pb-20 px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="pr-0 md:pr-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8efe9] text-[#5c8770] font-semibold text-xs mb-8 border border-[#5c8770]/20">
              <img src="/logo.png" alt="icon" className="w-4 h-4 object-contain" /> 
              B2B Eco-Merch Aggregator & Impact Supply Chain
            </div>
            
            <h1 className="text-5xl md:text-[64px] font-bold text-[#1a3626] leading-[1.1] mb-6 tracking-tight">
              Ubah Limbah<br />Menjadi <span className="text-[#5c8770]">Eco-Merch</span><br />B2B Premium<span className="text-[#f3c44c]">.</span>
            </h1>
            
            <p className="text-lg text-[#4a5f52] mb-10 max-w-[480px] leading-relaxed">
              Satu solusi untuk sourcing eco-merch berkualitas, custom sesuai kebutuhan, pengiriman yang andal, dan dampak yang terukur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/dashboard" className="bg-[#1a3626] text-white px-8 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#12261b] transition-colors shadow-md">
                Mulai Kolaborasi <ArrowRight size={18} />
              </Link>
              <button className="bg-transparent border border-[#1a3626] text-[#1a3626] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#1a3626]/5 transition-colors">
                Lihat Katalog
              </button>
            </div>

            {/* Feature lists bottom */}
            <div className="flex flex-wrap gap-8 items-center border-t border-[#1a3626]/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="text-[#5c8770]"><ShieldCheck size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a3626]">Produk Eco-Merch</h4>
                  <p className="text-xs text-[#5c8770]">Dari material daur ulang</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#5c8770]"><Users size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a3626]">Dukung Pengrajin Lokal</h4>
                  <p className="text-xs text-[#5c8770]">Pemberdayaan ekonomi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#5c8770]"><LineChart size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a3626]">Laporan ESG Terukur</h4>
                  <p className="text-xs text-[#5c8770]">Data nyata, dampak nyata</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Live Impact Card */}
          <div className="relative mt-10 lg:mt-0">
             
             {/* Main Card */}
             <div className="bg-white rounded-3xl p-6 shadow-2xl shadow-[#1a3626]/10 border border-gray-100 relative">
               
               {/* Card Header */}
               <div className="flex justify-between items-center mb-6">
                 <div className="flex items-center gap-2 text-[#1a3626] font-bold">
                   <div className="w-2 h-2 rounded-full bg-[#5c8770]"></div>
                   Live Impact
                 </div>
                 <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                   <LineChart size={12} /> Update real-time
                 </div>
               </div>

               {/* Metrics Grid inside card */}
               <div className="grid grid-cols-2 gap-4 mb-4">
                 
                 {/* Card 1 */}
                 <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-start mb-2">
                     <div className="w-10 h-10 bg-[#e8efe9] rounded-full flex items-center justify-center text-[#1a3626]">
                       <Recycle size={18} />
                     </div>
                     <span className="text-[10px] text-gray-300">°</span>
                   </div>
                   <h4 className="text-[11px] font-semibold text-[#1a3626] mb-1">Plastic Diverted</h4>
                   <p className="text-xl font-bold text-[#1a3626] mb-1">12,450 <span className="text-xs font-semibold">KG</span></p>
                   <p className="text-[10px] text-gray-500 mb-1">≈ 562 botol plastik</p>
                   <p className="text-[10px] text-[#5c8770] font-bold flex items-center gap-1"><ArrowUpRight size={10} strokeWidth={3}/> 12%</p>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-start mb-2">
                     <div className="w-10 h-10 bg-[#e8efe9] rounded-full flex items-center justify-center text-[#1a3626]">
                       <Users size={18} />
                     </div>
                     <span className="text-[10px] text-gray-300">°</span>
                   </div>
                   <h4 className="text-[11px] font-semibold text-[#1a3626] mb-1">Local Makers</h4>
                   <p className="text-xl font-bold text-[#1a3626] mb-1">120+</p>
                   <p className="text-[10px] text-gray-500 mb-1">pengrajin lokal</p>
                   <p className="text-[10px] text-[#5c8770] font-bold flex items-center gap-1"><ArrowUpRight size={10} strokeWidth={3}/> 8%</p>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-start mb-2">
                     <div className="w-10 h-10 bg-[#e8efe9] rounded-full flex items-center justify-center text-[#1a3626]">
                       <Box size={18} />
                     </div>
                   </div>
                   <h4 className="text-[11px] font-semibold text-[#1a3626] mb-1">Corporate Orders</h4>
                   <p className="text-xl font-bold text-[#1a3626] mb-1">85</p>
                   <p className="text-[10px] text-gray-500 mb-1">pesanan perusahaan</p>
                   <p className="text-[10px] text-[#5c8770] font-bold flex items-center gap-1"><ArrowUpRight size={10} strokeWidth={3}/> 15%</p>
                 </div>

                 {/* Card 4 - Green Highlight */}
                 <div className="bg-[#e8efe9] border border-[#5c8770]/20 rounded-2xl p-4 shadow-sm flex flex-col justify-between relative overflow-hidden group cursor-pointer">
                   <div className="w-10 h-10 bg-[#5c8770] rounded-full flex items-center justify-center text-white mb-2">
                     <Sprout size={18} />
                   </div>
                   <h4 className="text-[11px] font-bold text-[#1a3626] mb-1">ESG Impact Ready</h4>
                   <p className="text-[10px] text-[#4a5f52] leading-tight pr-4">Laporan dampak tersedia untuk setiap transaksi</p>
                   <ArrowRight size={14} className="text-[#5c8770] absolute bottom-4 right-4 group-hover:translate-x-1 transition-transform" />
                 </div>
               </div>

               {/* Bottom Image Banner inside the card */}
               <div className="w-full h-44 rounded-2xl overflow-hidden relative mt-2">
                 {/* Fallback image from Unsplash representing eco-merch */}
                 <img src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800" alt="Eco Merchandise" className="w-full h-full object-cover" />
                 
                 {/* Dark overlay for better text readability */}
                 <div className="absolute inset-0 bg-[#1a3626]/20"></div>

                 {/* Floating CTA over image */}
                 <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg w-36">
                   <p className="text-[10px] font-bold text-[#1a3626] leading-tight mb-3">Dari Sampah Lokal Menuju Produk Bernilai</p>
                   <div className="w-6 h-6 rounded-full border border-[#f3c44c] flex items-center justify-center text-[#f3c44c]">
                     <ArrowRight size={12} />
                   </div>
                 </div>
                 
                 {/* Watermark Logo */}
                 <div className="absolute bottom-4 left-4 flex flex-col items-center opacity-80">
                   <img src="/logo.png" alt="Circulo" className="w-8 h-8 mb-1 drop-shadow-md" />
                   <span className="text-white font-bold text-xs drop-shadow-md">Circulo</span>
                 </div>
               </div>

             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
