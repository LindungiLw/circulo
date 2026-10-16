"use client";

import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyCirculoSection() {
  const comparisons = [
    {
      aspect: 'Asal Material & Sirkularitas',
      conventional: 'Menggunakan plastik baru (virgin plastic) atau poliester impor yang menambah timbunan limbah baru.',
      circulo: '100% limbah lokal terpilah (botol rPET, residu tekstil garmen, biomassa) bersumber langsung dari bank sampah daerah.',
      benefit: 'Mencegah ribuan kg sampah berakhir di TPA & lautan',
    },
    {
      aspect: 'Dampak Sosial & Kesejahteraan (SDG 8)',
      conventional: 'Rantai pasok buruh pabrik terpusat berupah murah tanpa nilai pemberdayaan sosial yang nyata.',
      circulo: 'Bermitra dengan 120+ pengrajin lokal marjinal dengan jaminan upah layak (fair wage) dan peningkatan keterampilan.',
      benefit: 'Pertumbuhan ekonomi inklusif daerah terpencil',
    },
    {
      aspect: 'Pelaporan & Bukti Audit ESG',
      conventional: 'Nol data jejak karbon. Korporat tidak bisa mempertanggungjawabkan pengadaan di laporan keberlanjutan.',
      circulo: 'Setiap batch pesanan dilengkapi Impact Dossier audit-ready dan QR code traceability sesuai POJK 51 & GRI Standards.',
      benefit: 'Siap dilampirkan langsung pada Sustainability Report',
    },
    {
      aspect: 'Quality Control & Jaminan Bebas Cacat',
      conventional: 'Inspeksi acak di akhir produksi; resiko tinggi warna meleset, jahitan lepas, atau cacat massal.',
      circulo: 'Two-Stage Quality Control: pembuatan master sample fisik sebelum produksi massal + inspeksi 100% sebelum segel lolos QC.',
      benefit: 'Tingkat akurasi spesifikasi korporat di atas 99.4%',
    },
    {
      aspect: 'Manajemen Pengadaan B2B',
      conventional: 'Repot mengurus banyak vendor terpisah untuk bahan, sablon, kemasan, sertifikat, dan logistik ekspedisi.',
      circulo: 'One-stop aggregator terpadu: konsultasi desain, approval sampel, packaging ramah lingkungan, hingga kargo nasional.',
      benefit: 'Hemat waktu tim procurement hingga 60%',
    },
  ];

  return (
    <section className="w-full py-24 bg-white border-b border-[#1a3626]/15 relative z-10 scroll-mt-20" id="mengapa-circulo">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3626] tracking-tight leading-tight mb-4">
            Mengapa Memilih Circulo Dibandingkan <span className="text-[#5c8770]">Vendor Konvensional?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4a5f52] leading-relaxed">
            Bukan sekadar suvenir atau merchandise promosi, melainkan investasi reputasi brand, kepatuhan tata kelola ESG, dan pemberdayaan ekonomi sirkular riil.
          </p>
        </div>

        {/* Comparison Table / Cards Container */}
        <div className="border-2 border-[#1a3626] bg-[#f8f7f2] shadow-none hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden mb-12">
          
          {/* Header Row on Desktop */}
          <div className="hidden lg:grid grid-cols-12 bg-[#1a3626] text-white p-5 font-mono text-xs uppercase font-bold tracking-wider">
            <div className="col-span-3 text-[#f3c44c]">Parameter Penilaian</div>
            <div className="col-span-4 text-red-300 flex items-center gap-2">
              <ShieldAlert size={14} /> Vendor Percetakan Konvensional
            </div>
            <div className="col-span-5 text-[#f3c44c] flex items-center gap-2">
              <ShieldCheck size={14} /> Circulo B2B Eco-Merch Ecosystem
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-[#1a3626]/15">
            {comparisons.map((row, idx) => (
              <div 
                key={idx}
                className="grid lg:grid-cols-12 p-6 lg:p-6 gap-4 lg:gap-6 bg-white hover:bg-[#fcfbf7] transition-colors items-center"
              >
                {/* Parameter Column */}
                <div className="lg:col-span-3">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                    Kriteria 0{idx + 1}
                  </span>
                  <h4 className="text-base font-extrabold text-[#1a3626] leading-snug">
                    {row.aspect}
                  </h4>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-[#5c8770] bg-[#e8efe9] px-2 py-0.5 border border-[#5c8770]/20">
                    {row.benefit}
                  </span>
                </div>

                {/* Conventional Vendor Column */}
                <div className="lg:col-span-4 bg-red-50/60 lg:bg-transparent p-4 lg:p-0 border border-red-200 lg:border-none">
                  <span className="lg:hidden text-[11px] font-mono font-bold text-red-700 uppercase flex items-center gap-1.5 mb-2">
                    <X size={14} className="text-red-500" /> Vendor Konvensional:
                  </span>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={12} strokeWidth={3} />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {row.conventional}
                    </p>
                  </div>
                </div>

                {/* Circulo Column */}
                <div className="lg:col-span-5 bg-[#e8efe9]/50 lg:bg-[#e8efe9]/40 p-4 lg:p-4 border border-[#5c8770]/30">
                  <span className="lg:hidden text-[11px] font-mono font-bold text-[#1a3626] uppercase flex items-center gap-1.5 mb-2">
                    <Check size={14} className="text-[#5c8770]" /> Solusi Circulo:
                  </span>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1a3626] text-[#f3c44c] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#1a3626] leading-relaxed">
                      {row.circulo}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="bg-[#1a3626] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#1a3626] shadow-none hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300">
          <div className="max-w-xl">
            <h4 className="text-lg sm:text-xl font-bold mb-1.5">
              Siap Mengalihkan Rantai Pasok Suvenir Perusahaan Anda?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Dapatkan konsultasi gratis desain master sample dan simulasi kalkulasi dampak ESG resmi untuk kebutuhan event atau pengadaan internal.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="shrink-0 bg-[#f3c44c] hover:bg-[#e2b43b] text-[#1a3626] font-extrabold text-xs px-7 py-3.5 border-2 border-[#1a3626] shadow-none hover:shadow-[5px_5px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            Mulai Konsultasi Pengadaan <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
