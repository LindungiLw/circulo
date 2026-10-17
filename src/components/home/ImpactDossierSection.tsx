"use client";

import React, { useState } from 'react';
import { QrCode, FileCheck, ShieldCheck, Download, ExternalLink, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ImpactDossierSection() {
  const [activeTab, setActiveTab] = useState<'qr' | 'audit' | 'gri'>('qr');

  return (
    <section className="w-full py-24 bg-[#f8f7f2] border-b border-[#1a3626]/15 relative z-10 scroll-mt-20" id="sertifikasi-esg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3626] tracking-tight leading-tight mb-4">
            Sertifikasi Dampak & <span className="text-[#5c8770]">QR Traceability</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4a5f52] leading-relaxed">
            Setiap pengadaan merchandise Circulo bukan sekadar barang fisik, melainkan aset reputasi yang dilengkapi sertifikat dampak tervalidasi untuk melengkapi Sustainability Report (SR) korporasi.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Certificate Mockup (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-[#1a3626] p-6 sm:p-8 shadow-none hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              
              {/* Certificate Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b-2 border-[#1a3626]/15 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a3626] text-[#f3c44c] flex items-center justify-center font-black text-lg">
                    C
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold">
                      OFFICIAL IMPACT CERTIFICATE
                    </h4>
                    <p className="text-base font-extrabold text-[#1a3626]">
                      Circulo Sustainability Dossier
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-mono text-gray-500 block">BATCH NUMBER:</span>
                  <span className="text-xs font-mono font-extrabold text-[#1a3626] bg-[#f8f7f2] px-2 py-0.5 border border-[#1a3626]/10">
                    CRC-2026-JKT089
                  </span>
                </div>
              </div>

              {/* Certificate Body Meta */}
              <div className="bg-[#fcfbf7] border border-[#1a3626]/10 p-4 mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Klien Korporat:</span>
                    <span className="text-xs font-bold text-[#1a3626]">PT Inovasi Hijau Tbk</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Jenis Pesanan:</span>
                    <span className="text-xs font-bold text-[#1a3626]">Seminar Kit rPET</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Total Unit:</span>
                    <span className="text-xs font-bold text-[#1a3626]">1.500 Pcs</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Standar Kepatuhan:</span>
                    <span className="text-xs font-bold text-[#5c8770]">POJK 51 & GRI 301</span>
                  </div>
                </div>
              </div>

              {/* Verified Metrics Counter in Certificate */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 bg-[#e8efe9] border border-[#5c8770]/20 text-center">
                  <span className="text-lg sm:text-2xl font-black text-[#1a3626] block">12.000</span>
                  <span className="text-[10px] font-semibold text-gray-600 block mt-0.5">Botol PET Terdiversi</span>
                </div>
                <div className="p-3 bg-[#fdf5df] border border-[#f3c44c]/30 text-center">
                  <span className="text-lg sm:text-2xl font-black text-[#1a3626] block">675 <span className="text-xs">kg</span></span>
                  <span className="text-[10px] font-semibold text-gray-600 block mt-0.5">Emisi CO₂ Terpangkas</span>
                </div>
                <div className="p-3 bg-[#e8efe9] border border-[#5c8770]/20 text-center">
                  <span className="text-lg sm:text-2xl font-black text-[#1a3626] block">600 <span className="text-xs">Jam</span></span>
                  <span className="text-[10px] font-semibold text-gray-600 block mt-0.5">Upah Layak Pengrajin</span>
                </div>
              </div>

              {/* Certificate Bottom Signoff & QR Code Mock */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-5 border-t border-[#1a3626]/10 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white border-2 border-[#1a3626] p-1 flex items-center justify-center shrink-0">
                    <QrCode size={46} className="text-[#1a3626]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a3626] flex items-center gap-1">
                      <ShieldCheck size={14} className="text-[#5c8770]" /> Verified Circulo Chain
                    </p>
                    <p className="text-[10px] text-gray-500">Scan QR untuk verifikasi asal limbah & profil pengrajin</p>
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <span className="text-[9px] font-mono text-gray-400 block">DIGITALLY SIGNED</span>
                  <span className="text-xs font-mono font-bold text-[#1a3626]">Circulo ESG Verification Unit</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: 3 Key Transparency Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Feature 1 */}
            <div className="bg-white border-2 border-[#1a3626]/20 hover:border-[#1a3626] p-5 shadow-none hover:shadow-[6px_6px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e8efe9] border border-[#5c8770]/20 flex items-center justify-center text-[#1a3626] shrink-0">
                  <QrCode size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1a3626] mb-1">
                    Label QR Code Unik per Unit
                  </h4>
                  <p className="text-xs text-[#4a5f52] leading-relaxed">
                    Setiap totebag, notebook, atau lanyard dilengkapi woven label QR code. Penerima suvenir dapat langsung memindai untuk mengetahui dari mana limbah berasal dan siapa pengrajin lokal yang membuatnya.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-2 border-[#1a3626]/20 hover:border-[#1a3626] p-5 shadow-none hover:shadow-[6px_6px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#fdf5df] border border-[#f3c44c]/30 flex items-center justify-center text-[#1a3626] shrink-0">
                  <FileCheck size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1a3626] mb-1">
                    Laporan Dampak Siap Audit (PDF)
                  </h4>
                  <p className="text-xs text-[#4a5f52] leading-relaxed">
                    Selesai pengiriman, tim CSR/Sustainability Anda menerima berkas PDF resmi lengkap dengan metodologi perhitungan jejak karbon, konversi metrik limbah, dan jaminan kompensasi upah adil.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border-2 border-[#1a3626]/20 hover:border-[#1a3626] p-5 shadow-none hover:shadow-[6px_6px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e8efe9] border border-[#5c8770]/20 flex items-center justify-center text-[#1a3626] shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1a3626] mb-1">
                    Kepatuhan Regulasi POJK 51 & GRI
                  </h4>
                  <p className="text-xs text-[#4a5f52] leading-relaxed">
                    Menjawab kewajiban korporasi terbuka dan BUMN terhadap POJK 51/POJK.03/2017 mengenai Penerapan Keuangan Berkelanjutan dan standar internasional Global Reporting Initiative (GRI 301 & GRI 401).
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <Link
                href="/dashboard#esg"
                className="w-full py-3.5 bg-[#1a3626] hover:bg-[#12261b] text-white text-xs font-bold flex items-center justify-center gap-2 border-2 border-[#1a3626] shadow-none hover:shadow-[5px_5px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Lihat Contoh Dokumen di Dashboard <ArrowRight size={14} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
