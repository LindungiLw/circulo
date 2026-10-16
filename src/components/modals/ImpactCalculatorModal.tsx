"use client";

import React, { useState } from 'react';
import { X, Calculator, ArrowRight, Check, Download } from 'lucide-react';
import { PRODUCT_IMPACT_RATES } from '@/data/navigation';
import Link from 'next/link';

interface ImpactCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImpactCalculatorModal({ isOpen, onClose }: ImpactCalculatorModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<keyof typeof PRODUCT_IMPACT_RATES>('totebag');
  const [quantity, setQuantity] = useState<number>(500);

  if (!isOpen) return null;

  const currentRate = PRODUCT_IMPACT_RATES[selectedProduct];
  const bottles = currentRate.bottlesPerUnit * quantity;
  const plastic = (currentRate.plasticKg * quantity).toFixed(1);
  const co2 = (currentRate.co2Kg * quantity).toFixed(1);
  const water = (currentRate.waterL * quantity).toLocaleString('id-ID');
  const artisanHours = Math.round(quantity * 0.4);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#f8f7f2] border-2 border-[#1a3626] w-full max-w-2xl shadow-[10px_10px_0px_#1a3626] relative rounded-none p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#1a3626]/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#e8efe9] border border-[#5c8770]/30 flex items-center justify-center text-[#1a3626]">
              <Calculator size={20} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#1a3626]">Kalkulator Dampak Lingkungan</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-[#1a3626] hover:bg-gray-200 transition-colors"
            aria-label="Tutup modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-5 mb-8">
          <div>
            <label className="block text-xs font-bold text-[#1a3626] uppercase tracking-wider mb-2">
              Pilih Jenis Merchandise:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(Object.keys(PRODUCT_IMPACT_RATES) as Array<keyof typeof PRODUCT_IMPACT_RATES>).map((key) => {
                const prod = PRODUCT_IMPACT_RATES[key];
                const active = selectedProduct === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedProduct(key)}
                    className={`p-3 text-left border-2 text-xs font-bold transition-all ${
                      active 
                        ? 'border-[#1a3626] bg-[#1a3626] text-white shadow-[3px_3px_0px_#f3c44c] -translate-x-0.5 -translate-y-0.5' 
                        : 'border-[#1a3626]/20 bg-white text-[#1a3626] hover:border-[#1a3626] hover:shadow-[3px_3px_0px_#1a3626]'
                    }`}
                  >
                    {prod.name.split(' (')[0]}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-[#1a3626] uppercase tracking-wider">
                Jumlah Pesanan (Pcs):
              </label>
              <span className="text-sm font-extrabold text-[#1a3626] bg-white px-3 py-1 border border-[#1a3626]/20">
                {quantity.toLocaleString('id-ID')} Pcs
              </span>
            </div>
            <input 
              type="range" 
              min={50} 
              max={5000} 
              step={50}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 accent-[#1a3626] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
              <span>50 pcs</span>
              <span>1.000 pcs</span>
              <span>2.500 pcs</span>
              <span>5.000 pcs</span>
            </div>
          </div>
        </div>

        {/* Real-time Impact Metrics Card */}
        <div className="bg-white border border-[#1a3626]/20 p-5 mb-6">
          <p className="text-[11px] font-mono tracking-wider text-[#5c8770] uppercase font-bold mb-3">
            ESTIMASI DAMPAK ESG TERVERIFIKASI
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-[#f8f7f2] border border-[#1a3626]/10">
              <p className="text-2xl font-black text-[#1a3626]">{bottles.toLocaleString('id-ID')}</p>
              <p className="text-[10px] text-gray-600 font-semibold mt-0.5">Botol PET Terdiversi</p>
            </div>
            <div className="p-3 bg-[#f8f7f2] border border-[#1a3626]/10">
              <p className="text-2xl font-black text-[#1a3626]">{plastic} <span className="text-xs">kg</span></p>
              <p className="text-[10px] text-gray-600 font-semibold mt-0.5">Limbah Padat Terkelola</p>
            </div>
            <div className="p-3 bg-[#f8f7f2] border border-[#1a3626]/10">
              <p className="text-2xl font-black text-[#1a3626]">{co2} <span className="text-xs">kg</span></p>
              <p className="text-[10px] text-gray-600 font-semibold mt-0.5">Reduksi Emisi Karbon</p>
            </div>
            <div className="p-3 bg-[#f8f7f2] border border-[#1a3626]/10">
              <p className="text-2xl font-black text-[#1a3626]">{artisanHours} <span className="text-xs">Jam</span></p>
              <p className="text-[10px] text-gray-600 font-semibold mt-0.5">Dukungan Pengrajin</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end items-center">
          <button 
            type="button" 
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-gray-600 hover:text-black hover:bg-gray-200 transition-colors text-center"
          >
            Tutup
          </button>
          <Link
            href="/dashboard"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#f3c44c] hover:bg-[#e2b43b] text-[#1a3626] text-xs font-extrabold flex items-center justify-center gap-2 border-2 border-[#1a3626] shadow-[3px_3px_0px_#1a3626] hover:shadow-[5px_5px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            Lanjutkan ke Pemesanan <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
