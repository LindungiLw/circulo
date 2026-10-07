"use client";

import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Navigation */}
      <nav className="w-full bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 text-2xl font-bold text-primary">
            <img src="/logo.png" alt="Circulo Logo" className="w-8 h-8 object-contain" />
            <span>Circulo</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            <a href="#solusi" className="hover:text-primary transition-colors">Solusi B2B</a>
            <a href="#dampak" className="hover:text-primary transition-colors">Dampak ESG</a>
            <a href="#katalog" className="hover:text-primary transition-colors">Katalog</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="hidden md:block text-primary font-semibold hover:underline">
              Masuk Klien
            </Link>
            <Link href="/dashboard" className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-[#152e1e] transition-colors shadow-md">
              Coba Dashboard <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-20 px-8 bg-gradient-to-b from-primary/5 to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 md:p-12 shape-recycled-alt shadow-soft border-2 border-primary/20 border-dashed relative z-10">
            <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full transform scale-110 -z-10"></div>
            <div className="inline-flex items-center gap-2 px-4 py-2 shape-recycled bg-secondary/20 text-yellow-800 font-semibold text-sm mb-6 border border-secondary/30">
              <Leaf size={16} /> Mendukung SDG 8: Decent Work & Economic Growth
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Ubah Limbah Menjadi <span className="text-primary">Eco-Merch B2B</span> Premium.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Circulo adalah agregator rantai pasok berkelanjutan pertama yang menjembatani korporat dengan pengrajin daur ulang lokal, lengkap dengan laporan dampak ESG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard" className="bg-primary text-white px-8 py-3.5 shape-recycled font-semibold text-lg flex items-center justify-center gap-2 hover:bg-[#152e1e] transition-transform hover:scale-105 shadow-soft">
                Mulai Kolaborasi
              </Link>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-3.5 shape-recycled-alt font-semibold text-lg hover:border-primary hover:text-primary transition-colors">
                Lihat Katalog
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full transform -skew-y-12 scale-110 -z-10"></div>
            <div className="bg-white p-8 shape-recycled shadow-soft border-2 border-primary/20 relative">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="text-primary" /> Laporan Dampak (Live Preview)
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 shape-recycled-alt border border-slate-200 border-dashed flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 shape-recycled flex items-center justify-center text-primary"><TrendingUp size={24} /></div>
                  <div>
                    <p className="text-sm text-slate-500">Plastik Terdiversi</p>
                    <p className="text-lg font-bold text-slate-900">12,450 kg</p>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 shape-recycled-alt border border-slate-200 border-dashed flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 shape-recycled flex items-center justify-center text-yellow-700"><Users size={24} /></div>
                  <div>
                    <p className="text-sm text-slate-500">Pengrajin Berdaya</p>
                    <p className="text-lg font-bold text-slate-900">120+ Orang (UMKM)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary text-white shape-recycled text-sm font-medium flex items-center justify-between">
                <span>Siap untuk Sustainability Report (ESG)</span>
                <CheckCircle2 size={20} className="text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="solusi" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Solusi Pengadaan Ramah Lingkungan Satu Pintu</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16">Kami tidak hanya memproduksi merchandise, tapi mengelola ekosistem yang terintegrasi dari bank sampah hingga ke tangan Anda.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 shape-recycled bg-slate-50 border-2 border-primary/20 border-dashed text-left hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 bg-primary text-white shape-recycled-alt flex items-center justify-center mb-6 shadow-md transform -rotate-3">
                <Leaf size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Recycled & Berkualitas</h3>
              <p className="text-slate-600 leading-relaxed">Mengalihkan sampah plastik dari TPA menjadi produk fungsional dengan kontrol kualitas setara pabrik.</p>
            </div>

            <div className="p-8 shape-recycled-alt bg-slate-50 border-2 border-secondary/30 border-dashed text-left hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 bg-secondary text-primary shape-recycled flex items-center justify-center mb-6 shadow-md transform rotate-3">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pemberdayaan Sosial</h3>
              <p className="text-slate-600 leading-relaxed">Memberikan akses pasar B2B berskala besar dengan kepastian upah yang adil bagi pengrajin lokal marjinal.</p>
            </div>

            <div className="p-8 shape-recycled bg-slate-50 border-2 border-primary/20 border-dashed text-left hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 bg-slate-900 text-white shape-recycled-alt flex items-center justify-center mb-6 shadow-md transform -rotate-2">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Audit-Ready ESG Report</h3>
              <p className="text-slate-600 leading-relaxed">Setiap pesanan dilengkapi dengan laporan metrik terverifikasi untuk kebutuhan Sustainability Report perusahaan Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="mt-auto bg-slate-900 text-slate-300 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-2xl font-bold text-white">
            <img src="/logo.png" alt="Circulo Logo" className="w-8 h-8 object-contain brightness-0 invert" />
            <span>Circulo</span>
          </div>
          <p className="text-sm">© 2026 Circulo. B2B Eco-Merch Aggregator.</p>
          <div className="flex gap-4">
            <Link href="/dashboard" className="text-secondary hover:text-white transition-colors font-medium">
              Masuk Dashboard Klien &rarr;
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
