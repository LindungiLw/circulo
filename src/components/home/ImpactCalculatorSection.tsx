"use client";

import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, Recycle, Users, Sprout, Droplets, Check, FileText } from 'lucide-react';
import Link from 'next/link';
import { PRODUCT_IMPACT_RATES } from '@/data/navigation';

export default function ImpactCalculatorSection() {
  const [selectedProduct, setSelectedProduct] = useState<keyof typeof PRODUCT_IMPACT_RATES>('totebag');
  const [quantity, setQuantity] = useState<number>(500);

  const currentRate = PRODUCT_IMPACT_RATES[selectedProduct];
  const bottles = currentRate.bottlesPerUnit * quantity;
  const plastic = (currentRate.plasticKg * quantity).toFixed(1);
  const co2 = (currentRate.co2Kg * quantity).toFixed(1);
  const water = (currentRate.waterL * quantity).toLocaleString('id-ID');
  const artisanHours = Math.round(quantity * 0.4);

  const quickPills = [100, 250, 500, 1000, 2500, 5000];

  return (
    <section className="w-full py-20 bg-[#f8f7f2] border-b border-[#1a3626]/15 relative z-10 scroll-mt-20" id="kalkulator-dampak">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3626] tracking-tight leading-tight mb-4">
            Hitung Estimasi Kontribusi <span className="text-[#5c8770]">ESG Perusahaan Anda</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4a5f52] leading-relaxed">
            Sesuaikan volume pengadaan merchandise perusahaan Anda dan lihat langsung estimasi reduksi jejak karbon, pengalihan limbah, serta jam kerja layak pengrajin lokal (SDG 8).
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white border-2 border-[#1a3626] shadow-[8px_8px_0px_#1a3626] p-6 sm:p-10 max-w-5xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Product Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#1a3626] uppercase tracking-wider mb-3">
                  1. Pilih Kategori Eco-Merchandise:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(Object.keys(PRODUCT_IMPACT_RATES) as Array<keyof typeof PRODUCT_IMPACT_RATES>).map((key) => {
                    const prod = PRODUCT_IMPACT_RATES[key];
                    const active = selectedProduct === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedProduct(key)}
                        className={`p-3 text-left border-2 text-xs font-bold transition-all cursor-pointer flex flex-col justify-between h-20 ${
                          active 
                            ? 'border-[#1a3626] bg-[#1a3626] text-white shadow-[4px_4px_0px_#f3c44c] -translate-x-0.5 -translate-y-0.5' 
                            : 'border-[#1a3626]/20 bg-[#fcfbf7] text-[#1a3626] hover:border-[#1a3626] hover:bg-white hover:shadow-[4px_4px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5'
                        }`}
                      >
                        <span className="leading-snug">{prod.name.split(' (')[0]}</span>
                        <span className={`text-[10px] font-mono ${active ? 'text-[#f3c44c]' : 'text-gray-500'}`}>
                          {key === 'totebag' ? 'Serat rPET' : key === 'notebook' ? 'Daur Kertas' : key === 'lanyard' ? 'Anyam rPET' : 'Multi-Item'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Slider & Presets */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono font-bold text-[#1a3626] uppercase tracking-wider">
                    2. Estimasi Jumlah Pesanan:
                  </label>
                  <span className="text-base sm:text-lg font-black text-[#1a3626] bg-[#f8f7f2] px-4 py-1 border border-[#1a3626]/20">
                    {quantity.toLocaleString('id-ID')} <span className="text-xs font-semibold text-gray-500">Unit</span>
                  </span>
                </div>

                <input 
                  type="range" 
                  min={50} 
                  max={5000} 
                  step={50}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 accent-[#1a3626] cursor-pointer"
                  aria-label="Jumlah pesanan merchandise"
                />

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                  <span className="text-[11px] text-gray-400 font-mono self-center mr-1">Preset:</span>
                  {quickPills.map((pill) => (
                    <button
                      key={pill}
                      type="button"
                      onClick={() => setQuantity(pill)}
                      className={`px-2.5 py-1 text-[11px] font-mono font-bold border transition-all cursor-pointer ${
                        quantity === pill 
                          ? 'bg-[#1a3626] text-white border-[#1a3626] shadow-[2px_2px_0px_#f3c44c]' 
                          : 'bg-white text-[#1a3626] border-[#1a3626]/20 hover:border-[#1a3626] hover:shadow-[2px_2px_0px_#1a3626]'
                      }`}
                    >
                      {pill.toLocaleString('id-ID')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Note on Traceability */}
              <div className="p-3 bg-[#e8efe9] border border-[#5c8770]/30 text-xs text-[#1a3626] flex items-center gap-3">
                <FileText size={18} className="text-[#5c8770] shrink-0" />
                <p className="leading-relaxed">
                  Setiap pesanan di atas <strong>100 unit</strong> otomatis disertai sertifikat <strong>Impact Dossier resmi</strong> yang dapat dilampirkan langsung pada Sustainability Report (SR) OJK perusahaan Anda.
                </p>
              </div>

            </div>

            {/* Right Column: Output Metrics Display (5 cols) */}
            <div className="lg:col-span-5 bg-[#1a3626] text-white p-6 sm:p-7 border border-[#1a3626] flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#f3c44c] font-bold">
                    HASIL ESTIMASI AUDIT-READY
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f3c44c] animate-pulse"></span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  
                  {/* Metric 1 */}
                  <div className="bg-white/5 border border-white/10 hover:border-[#f3c44c] hover:shadow-[3px_3px_0px_#f3c44c] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all p-3.5 cursor-pointer">
                    <div className="flex items-center gap-1.5 text-[#f3c44c] mb-1">
                      <Recycle size={15} />
                      <span className="text-[10px] font-mono uppercase text-white/70">Botol Terdiversi</span>
                    </div>
                    <p className="text-2xl font-black text-white">{bottles.toLocaleString('id-ID')}</p>
                    <p className="text-[10px] text-white/50">Botol PET dari laut/TPA</p>
                  </div>

                  {/* Metric 2 */}
                  <div className="bg-white/5 border border-white/10 hover:border-[#f3c44c] hover:shadow-[3px_3px_0px_#f3c44c] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all p-3.5 cursor-pointer">
                    <div className="flex items-center gap-1.5 text-[#5c8770] mb-1">
                      <Sprout size={15} />
                      <span className="text-[10px] font-mono uppercase text-white/70">Limbah Padat</span>
                    </div>
                    <p className="text-2xl font-black text-white">{plastic} <span className="text-xs font-semibold">kg</span></p>
                    <p className="text-[10px] text-white/50">Residu lokal terkelola</p>
                  </div>

                  {/* Metric 3 */}
                  <div className="bg-white/5 border border-white/10 hover:border-[#f3c44c] hover:shadow-[3px_3px_0px_#f3c44c] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all p-3.5 cursor-pointer">
                    <div className="flex items-center gap-1.5 text-[#f3c44c] mb-1">
                      <Sparkles size={15} />
                      <span className="text-[10px] font-mono uppercase text-white/70">Reduksi Karbon</span>
                    </div>
                    <p className="text-2xl font-black text-white">{co2} <span className="text-xs font-semibold">kg</span></p>
                    <p className="text-[10px] text-white/50">Emisi CO₂ terhindarkan</p>
                  </div>

                  {/* Metric 4 */}
                  <div className="bg-white/5 border border-white/10 hover:border-[#f3c44c] hover:shadow-[3px_3px_0px_#f3c44c] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all p-3.5 cursor-pointer">
                    <div className="flex items-center gap-1.5 text-[#5c8770] mb-1">
                      <Users size={15} />
                      <span className="text-[10px] font-mono uppercase text-white/70">Dampak SDG 8</span>
                    </div>
                    <p className="text-2xl font-black text-white">{artisanHours} <span className="text-xs font-semibold">Jam</span></p>
                    <p className="text-[10px] text-white/50">Upah layak bagi maker</p>
                  </div>

                </div>

                <div className="flex items-center justify-between text-xs text-white/70 pb-4 border-b border-white/10 mb-5">
                  <span className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Droplets size={14} className="text-blue-400" /> Air Bersih Terhemat:
                  </span>
                  <span className="font-bold text-white">{water} Liter</span>
                </div>
              </div>

              {/* Action Button */}
              <Link 
                href="/dashboard"
                className="w-full py-3.5 bg-[#f3c44c] hover:bg-[#e2b43b] text-[#1a3626] font-extrabold text-xs flex items-center justify-center gap-2 border-2 border-[#1a3626] shadow-[4px_4px_0px_#1a3626] hover:shadow-[6px_6px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all group"
              >
                Ajukan Penawaran dengan Estimasi Ini
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
