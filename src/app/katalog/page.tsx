"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from '@/data/products';
import { ArrowRight, Search, SlidersHorizontal, ArrowLeft, Recycle, FileCheck, CheckCircle2 } from 'lucide-react';

export default function KatalogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = activeCategory === 'Semua' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8f7f2] flex flex-col font-sans overflow-x-hidden relative">
      
      {/* Decorative Organic Arcs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[15%] -left-[10%] w-[700px] h-[700px] border-[100px] border-[#d8e3dc]/40 rounded-full"></div>
        <div className="absolute top-[30%] -right-[15%] w-[850px] h-[850px] border-[90px] border-[#f4e8c1]/40 rounded-full"></div>
      </div>

      <Navbar />

      <main className="flex-1 w-full pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1a3626]/10">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <Link href="/" className="hover:text-[#1a3626] font-bold">Beranda</Link>
              <span>/</span>
              <span className="text-[#1a3626] font-bold">Katalog Eco-Merchandise</span>
            </div>
            <Link 
              href="/" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a3626] hover:text-[#5c8770] transition-colors"
            >
              <ArrowLeft size={14} /> Kembali ke Beranda
            </Link>
          </div>

          {/* Catalog Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-3xl sm:text-5xl font-black text-[#1a3626] tracking-tight leading-tight mb-4">
              Eco-Merchandise Siap Kustom & Terverifikasi ESG
            </h1>
            <p className="text-sm sm:text-base text-[#4a5f52] leading-relaxed">
              Jelajahi 10 varian produk merchandise berkelanjutan Circulo yang diproduksi dari residu limbah plastik, tekstil industri, dan serat biomassa terverifikasi oleh 120+ maker lokal.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white border-2 border-[#1a3626] p-4 sm:p-6 mb-10 shadow-sm flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berdasarkan nama produk atau material (contoh: rPET, biomassa, kertas)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#f8f7f2] border border-[#1a3626]/20 text-xs sm:text-sm text-[#1a3626] font-medium placeholder-gray-400 focus:outline-none focus:border-[#1a3626]"
              />
            </div>

            {/* Product Counter */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1a3626] shrink-0">
              <span className="px-3 py-2 bg-[#e8efe9] border border-[#5c8770]/30">
                {filteredProducts.length} Produk Ditemukan
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
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
                  className={`px-4 py-2.5 text-xs font-bold transition-all cursor-pointer rounded-none border ${
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

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-[#1a3626]/20 p-12 text-center my-12">
              <p className="text-base font-bold text-[#1a3626] mb-1">Tidak ada produk yang cocok dengan pencarian Anda.</p>
              <p className="text-xs text-gray-500 mb-4">Coba gunakan kata kunci lain atau pilih kategori Semua.</p>
              <button
                type="button"
                onClick={() => { setActiveCategory('Semua'); setSearchQuery(''); }}
                className="px-4 py-2 bg-[#1a3626] text-white text-xs font-bold"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white border border-[#1a3626]/15 hover:border-[#1a3626] rounded-none p-5 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Frame Gambar Produk dengan border tegas & latar lembut */}
                    <div className="w-full aspect-square bg-neutral-100 mb-4 overflow-hidden rounded-none relative border border-[#1a3626]/10">
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

                    {/* Metadata */}
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

                    <h3 className="text-base font-extrabold text-[#1a3626] mb-1.5 group-hover:text-[#5c8770] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#4a5f52] mb-4 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Footer Card */}
                  <div className="pt-3 border-t border-[#1a3626]/10 flex flex-col gap-3 mt-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[10px] font-mono uppercase text-gray-400">Jejak Dampak ESG</span>
                      <span className="font-bold text-[#1a3626] text-[11px]">{product.impactMetric}</span>
                    </div>
                    <Link 
                      href="/dashboard"
                      className="w-full py-2 bg-[#f8f7f2] hover:bg-[#1a3626] text-[#1a3626] hover:text-white border border-[#1a3626]/20 hover:border-[#1a3626] text-xs font-bold flex items-center justify-center gap-1.5 transition-all text-center"
                    >
                      Kustomisasi & Pesan <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Procurement Perks */}
          <div className="mt-16 bg-[#1a3626] text-white p-8 sm:p-12 border-2 border-[#1a3626]">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-8 h-8 bg-[#5c8770]/30 border border-[#5c8770]/50 flex items-center justify-center text-[#f3c44c] mb-3">
                  <Recycle size={18} />
                </div>
                <h4 className="text-sm font-bold mb-1">100% Material Limbah Terverifikasi</h4>
                <p className="text-xs text-white/70 leading-relaxed">Setiap produk memiliki rantai lacak sumber limbah plastik botol rPET, tekstil konveksi, atau biomassa serat lokal.</p>
              </div>

              <div>
                <div className="w-8 h-8 bg-[#5c8770]/30 border border-[#5c8770]/50 flex items-center justify-center text-[#f3c44c] mb-3">
                  <FileCheck size={18} />
                </div>
                <h4 className="text-sm font-bold mb-1">Laporan Audit ESG Per Batch</h4>
                <p className="text-xs text-white/70 leading-relaxed">Unduh sertifikat kuantitatif konversi kg limbah dan reduksi emisi karbon untuk dimasukkan ke Sustainability Report perusahaan.</p>
              </div>

              <div>
                <div className="w-8 h-8 bg-[#5c8770]/30 border border-[#5c8770]/50 flex items-center justify-center text-[#f3c44c] mb-3">
                  <CheckCircle2 size={18} />
                </div>
                <h4 className="text-sm font-bold mb-1">Kustom Logo & Warna Brand</h4>
                <p className="text-xs text-white/70 leading-relaxed">Konsultasi warna identitas korporat, teknik sablon ramah lingkungan (water-based ink), dan bordir presisi.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Corporate B2B Footer */}
      <Footer />

    </div>
  );
}
