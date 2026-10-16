"use client";

import React, { useState } from 'react';
import { Quote, Building2, CheckCircle2, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ClientTestimonialsSection() {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);

  const caseStudies = [
    {
      company: 'Bank Syariah Nasional & ESG Summit',
      role: 'Head of Corporate Sustainability',
      project: 'Pengadaan 2.500 Seminar Kit Berkelanjutan',
      quote: 'Circulo mengubah total paradigma suvenir event kami. Biasanya suvenir seminar berakhir terbuang, tetapi seminar kit rPET ini dipuji para delegasi dan laporannya langsung kami lampirkan di Sustainability Report tahunan.',
      metrics: [
        { label: 'Botol Terdiversi', val: '20.000+' },
        { label: 'CO₂e Terhindar', val: '1.125 kg' },
        { label: 'Pengrajin Terlibat', val: '35 Orang' },
      ],
      tag: 'FINANCIAL & BANKING',
    },
    {
      company: 'BUMN Telekomunikasi & Digital',
      role: 'VP Procurement & General Affairs',
      project: 'Annual Employee Onboarding Kit (1.200 Paket)',
      quote: 'Kualitas Two-Stage QC Circulo sangat terbukti. Dari 1.200 notebook dan lanyard terrazzo yang kami terima, tingkat akurasi cetak logo mencapai 100% tanpa ada satu pun unit cacat. Rantai pasoknya sangat profesional.',
      metrics: [
        { label: 'Zero Virgin Plastic', val: '100%' },
        { label: 'Limbah Kain Perca', val: '420 kg' },
        { label: 'Akurasi Spesifikasi', val: '99.8%' },
      ],
      tag: 'BUMN & TELEKOMUNIKASI',
    },
    {
      company: 'Perusahaan Energi Terbarukan',
      role: 'Corporate Communications Director',
      project: 'VIP Year-End Hampers & Desk Organizer (350 Set)',
      quote: 'Kombinasi nilai estetika tinggi dan cerita pengrajin lokal pada setiap item hampers membuat mitra direksi kami sangat terkesan. Nilai sosial SDG 8 yang diusung Circulo sangat autentik.',
      metrics: [
        { label: 'Komposit Biomassa', val: '105 kg' },
        { label: 'Jam Kerja Layak', val: '1.400 Jam' },
        { label: 'Kepuasan Penerima', val: '4.9 / 5.0' },
      ],
      tag: 'ENERGI & RENEWABLES',
    },
  ];

  return (
    <section className="w-full py-24 bg-[#fcfbf7] border-b border-[#1a3626]/15 relative z-10 scroll-mt-20" id="testimoni-studi-kasus">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3626] tracking-tight leading-tight mb-4">
            Studi Kasus & <span className="text-[#5c8770]">Cerita Dampak Nyata</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4a5f52] leading-relaxed">
            Bagaimana organisasi terkemuka bertransformasi meninggalkan suvenir konvensional dan beralih ke rantai pasok sirkular yang terukur bersama Circulo.
          </p>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => {
            const isSelected = selectedCaseIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedCaseIdx(idx)}
                className={`bg-white border-2 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isSelected 
                    ? 'border-[#1a3626] shadow-[8px_8px_0px_#1a3626] -translate-x-1 -translate-y-1' 
                    : 'border-[#1a3626]/20 hover:border-[#1a3626] hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-1 hover:-translate-y-1'
                }`}
              >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                  <span className="text-[10px] font-mono font-bold text-[#5c8770] uppercase tracking-wider bg-[#e8efe9] px-2.5 py-1">
                    {cs.tag}
                  </span>
                  <Quote size={20} className="text-[#f3c44c]" />
                </div>

                <h3 className="text-base font-extrabold text-[#1a3626] mb-1">
                  {cs.company}
                </h3>
                <p className="text-xs font-mono text-gray-500 mb-4">
                  {cs.role} • <span className="text-[#1a3626] font-semibold">{cs.project}</span>
                </p>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#4a5f52] leading-relaxed italic mb-6">
                  &ldquo;{cs.quote}&rdquo;
                </p>
              </div>

              {/* Verified Metrics Footer */}
              <div className="pt-4 border-t border-gray-100 bg-[#f8f7f2] -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 p-4 sm:p-5 mt-4">
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider block mb-2 font-bold">
                  Dampak Tervalidasi Batch Ini:
                </span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-white p-2 border border-[#1a3626]/20 hover:border-[#1a3626] hover:shadow-[2px_2px_0px_#1a3626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                      <span className="text-xs sm:text-sm font-black text-[#1a3626] block">
                        {m.val}
                      </span>
                      <span className="text-[9px] text-gray-500 block leading-tight mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
