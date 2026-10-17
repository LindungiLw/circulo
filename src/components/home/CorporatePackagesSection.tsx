"use client";

import React, { useState } from 'react';
import { Package, Users, Award, Check, ArrowRight, Clock, Layers, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CorporatePackagesSection() {
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

  const packages = [
    {
      id: 'onboarding-kit',
      name: 'Corporate Onboarding & Welcome Kit',
      subtitle: 'Solusi Karyawan Baru & Internal Engagement',
      tag: 'FAVORIT TIM HR',
      badgeColor: 'bg-[#1a3626] text-white',
      minOrder: '50 Paket',
      leadTime: '10 - 14 Hari',
      description: 'Menyambut karyawan baru dengan budaya ramah lingkungan sejak hari pertama bekerja.',
      items: [
        'Eco Tote Bag rPET (Bahan 8 botol daur ulang)',
        'Notebook Recycled Paper dengan logo deboss',
        'Lanyard & ID Holder motif terrazzo daur ulang',
        'Pulpen bambu alami ramah lingkungan',
        'Custom Welcome Card dari kertas benih (seed paper)',
      ],
      impact: '≈ 12 botol plastik & 0.45 kg emisi CO₂ tereduksi / paket',
      isPopular: true,
    },
    {
      id: 'summit-pack',
      name: 'MICE & Annual Summit Pack',
      subtitle: 'Konferensi, Seminar Massal & Expo ESG',
      tag: 'KAPASITAS SKALA BESAR',
      badgeColor: 'bg-[#5c8770] text-white',
      minOrder: '200 - 10.000 Paket',
      leadTime: '14 - 21 Hari (Skalabel)',
      description: 'Pengadaan seminar kit skala besar dengan kapasitas agregator terdesentralisasi bebas bottleneck.',
      items: [
        'Drawstring Bag Upcycled garmen lokal',
        'Reusable Event Nametag dari plastik cacah',
        'Gantungan kunci terrazzo kustom logo',
        'Buku panduan sirkularitas event digital (QR Code)',
        'Sertifikat reduksi jejak karbon untuk panitia',
      ],
      impact: 'Kapasitas agregasi hingga 15.000 paket / bulan',
      isPopular: false,
    },
    {
      id: 'vip-giftset',
      name: 'Executive VIP & Year-End Hampers',
      subtitle: 'Apresiasi Mitra Strategis & Direksi',
      tag: 'EKSKLUSIF & CO-CREATION',
      badgeColor: 'bg-[#f3c44c] text-[#1a3626]',
      minOrder: '25 Paket',
      leadTime: '14 - 21 Hari',
      description: 'Hampers akhir tahun elegan bernilai seni tinggi yang mencerminkan komitmen kepemimpinan hijau.',
      items: [
        'Recycled Modular Desk Organizer premium',
        'Upcycled Laptop Sleeve dengan busa empuk rPET',
        'Hardbox kemasan daur ulang bermotif serat alam',
        'Plakat mini sertifikasi dampak atas nama penerima',
        'Kartu cerita pengrajin lokal (Artisan Story Card)',
      ],
      impact: '1.10 kg CO₂e tereduksi & 4 jam upah layak pengrajin / set',
      isPopular: false,
    },
  ];

  return (
    <section className="w-full py-24 bg-white border-b border-[#1a3626]/15 relative z-10 scroll-mt-20" id="paket-korporat">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3626] tracking-tight leading-tight mb-4">
            Pilihan Paket Merchandise <span className="text-[#5c8770]">Siap Kustomisasi</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4a5f52] leading-relaxed">
            Didesain khusus untuk berbagai skenario korporat—mulai dari program orientasi SDM, konferensi skala nasional, hingga suvenir eksklusif akhir tahun.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id)}
                className={`bg-white border-2 flex flex-col justify-between transition-all duration-300 relative cursor-pointer group ${
                  isSelected 
                    ? 'border-[#1a3626] shadow-[8px_8px_0px_#1a3626] -translate-x-1 -translate-y-1' 
                    : 'border-[#1a3626]/20 hover:border-[#1a3626] hover:shadow-[8px_8px_0px_#1a3626] hover:-translate-x-1 hover:-translate-y-1'
                }`}
              >
                {/* Top Tag */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 uppercase tracking-wider ${pkg.badgeColor}`}>
                        {pkg.tag}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 bg-[#f3c44c] text-[#1a3626] flex items-center gap-1">
                          <CheckCircle2 size={11} /> Dipilih
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-gray-500 font-bold">
                      Min. {pkg.minOrder}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1a3626] mb-1 leading-snug group-hover:text-[#5c8770] transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-xs font-mono text-[#5c8770] font-bold uppercase mb-3">
                    {pkg.subtitle}
                  </p>
                  <p className="text-xs text-[#4a5f52] leading-relaxed mb-5">
                    {pkg.description}
                  </p>

                  {/* Lead Time & Specs */}
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-600 pb-4 border-b border-gray-100 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#5c8770]" /> {pkg.leadTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Layers size={13} className="text-[#5c8770]" /> Custom Pantone
                    </span>
                  </div>

                  {/* Items Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider font-bold">
                      Item Termasuk:
                    </p>
                    {pkg.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#e8efe9] text-[#1a3626] flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="text-xs text-[#1a3626] leading-tight font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer with Impact & CTA */}
                <div className="p-6 pt-4 bg-[#f8f7f2] border-t border-[#1a3626]/10 mt-auto">
                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase text-gray-400 block mb-0.5">
                      Jejak Dampak Terverifikasi:
                    </span>
                    <span className="text-xs font-bold text-[#1a3626]">
                      {pkg.impact}
                    </span>
                  </div>

                  <Link
                    href="/dashboard"
                    className={`w-full py-3 text-xs font-extrabold flex items-center justify-center gap-2 transition-all ${
                      isSelected
                        ? 'bg-[#1a3626] hover:bg-[#12261b] text-white shadow-xs'
                        : 'bg-white group-hover:bg-[#1a3626] text-[#1a3626] group-hover:text-white border border-[#1a3626]/20 group-hover:border-[#1a3626]'
                    }`}
                  >
                    {isSelected ? 'Ajukan Penawaran Paket Ini' : 'Pilih Paket Ini'} <ArrowRight size={14} />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
