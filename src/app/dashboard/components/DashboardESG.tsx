"use client";

import React, { useState } from 'react';
import { 
  Download, 
  ShieldCheck, 
  FileText, 
  Award,
  Copy,
  Check
} from 'lucide-react';

export default function DashboardESG() {
  const [copied, setCopied] = useState(false);
  const certNumber = 'ESG-CIR-2026-8812-ID';

  const handleCopyCert = () => {
    navigator.clipboard.writeText(certNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#1a3626]">Audit & Sertifikasi ESG</h2>
          <p className="text-xs text-gray-500 mt-0.5">Validasi metrik keberlanjutan resmi untuk laporan korporat.</p>
        </div>

        <button
          onClick={() => alert('Mengunduh Sertifikat ESG Resmi...')}
          className="w-full sm:w-auto justify-center px-4 py-2 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-bold flex items-center gap-2 cursor-pointer transition-colors"
        >
          <Download size={13} /> Unduh Sertifikat PDF
        </button>
      </div>

      {/* Clean Digital Certificate */}
      <div className="bg-white border-2 border-[#1a3626] p-4 sm:p-8 shadow-xs">
        
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-5 sm:pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#1a3626] text-[#f3c44c] text-[10px] font-mono font-bold mb-2">
              <Award size={12} /> VERIFIED ESG IMPACT
            </div>
            <h3 className="text-base sm:text-xl font-black text-[#1a3626]">
              Sertifikat Verifikasi Dampak Sirkular & Emisi
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">PT Danareksa (Persero) • Terbit: 05 Oktober 2026</p>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-2 bg-[#f8f7f2] border border-gray-300 px-3 py-1.5 w-full sm:w-auto shrink-0">
            <span className="font-mono text-xs font-bold text-[#1a3626]">{certNumber}</span>
            <button
              onClick={handleCopyCert}
              className="text-gray-500 hover:text-black cursor-pointer p-1"
              title="Salin Nomor Sertifikat"
            >
              {copied ? <Check size={13} className="text-green-600" /> : <Copy size={13} />}
            </button>
          </div>
        </div>

        {/* 4 Verified Metric Columns */}
        <div className="py-5 sm:py-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3 sm:p-3.5 bg-[#f8f7f2] border border-gray-200">
            <span className="text-[10px] font-mono text-gray-500 block">Reduksi Emisi (Scope 3)</span>
            <h4 className="text-base sm:text-lg font-black text-[#1a3626] mt-0.5">3.420 kg CO₂e</h4>
          </div>

          <div className="p-3 sm:p-3.5 bg-[#f8f7f2] border border-gray-200">
            <span className="text-[10px] font-mono text-gray-500 block">Limbah Terdiversi</span>
            <h4 className="text-base sm:text-lg font-black text-[#1a3626] mt-0.5">1.250 kg</h4>
          </div>

          <div className="p-3 sm:p-3.5 bg-[#f8f7f2] border border-gray-200">
            <span className="text-[10px] font-mono text-gray-500 block">Jam Kerja Fair-Wage</span>
            <h4 className="text-base sm:text-lg font-black text-[#1a3626] mt-0.5">480 Jam</h4>
          </div>

          <div className="p-3 sm:p-3.5 bg-[#f8f7f2] border border-gray-200">
            <span className="text-[10px] font-mono text-gray-500 block">Status Audit</span>
            <h4 className="text-xs sm:text-sm font-bold text-[#5c8770] mt-1 flex items-center gap-1">
              <ShieldCheck size={14} /> Terverifikasi
            </h4>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 text-[11px] text-gray-400">
          Sesuai standar POJK 51/POJK.03/2017 & GHG Protocol Scope 3.
        </div>

      </div>

      {/* GRI Index Table */}
      <div className="bg-white border border-gray-200 p-5 shadow-xs">
        <h3 className="text-sm font-bold text-[#1a3626] mb-3">
          Indikator Pelaporan (GRI Standards)
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-[#f8f7f2] border-b border-gray-200 text-[#1a3626]">
                <th className="py-2.5 px-3 font-bold">Standar</th>
                <th className="py-2.5 px-3 font-bold">Parameter</th>
                <th className="py-2.5 px-3 font-bold">Nilai Terverifikasi</th>
                <th className="py-2.5 px-3 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-[#1a3626]">GRI 301-1</td>
                <td className="py-2.5 px-3 text-gray-600">Material Input Daur Ulang</td>
                <td className="py-2.5 px-3 font-bold text-gray-800">1.250 kg (100% Recycled)</td>
                <td className="py-2.5 px-3 text-[#5c8770] font-bold">Lolos Audit</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-[#1a3626]">GRI 305-5</td>
                <td className="py-2.5 px-3 text-gray-600">Pengurangan Emisi Gas Rumah Kaca</td>
                <td className="py-2.5 px-3 font-bold text-gray-800">3.420 kg CO₂e Tereduksi</td>
                <td className="py-2.5 px-3 text-[#5c8770] font-bold">Lolos Audit</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-[#1a3626]">GRI 401-1</td>
                <td className="py-2.5 px-3 text-gray-600">Pemberdayaan & Upah Layak Pengrajin</td>
                <td className="py-2.5 px-3 font-bold text-gray-800">480 Jam Kerja Fair-Wage</td>
                <td className="py-2.5 px-3 text-[#5c8770] font-bold">Lolos Audit</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-[#1a3626]">GRI 306-4</td>
                <td className="py-2.5 px-3 text-gray-600">Pengalihan dari Tempat Pembuangan Akhir</td>
                <td className="py-2.5 px-3 font-bold text-gray-800">99.4% Diversion Rate</td>
                <td className="py-2.5 px-3 text-[#5c8770] font-bold">Lolos Audit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Documents Repository (Clean List) */}
      <div className="bg-white border border-gray-200 p-5 shadow-xs">
        <h3 className="text-sm font-bold text-[#1a3626] mb-3">
          Dokumen Laporan Siap Unduh
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { name: 'Laporan_Audit_Emisi_Q3_2026.pdf', size: '2.4 MB', date: '05 Okt 2026' },
            { name: 'Sertifikat_Traceability_Material_Batch_88.pdf', size: '1.8 MB', date: '28 Sep 2026' },
            { name: 'Metrik_GRI_Index_Danareksa_2026.xlsx', size: '850 KB', date: '02 Okt 2026' },
            { name: 'Laporan_Dampak_Pengrajin_2026.pdf', size: '1.5 MB', date: '15 Sep 2026' },
          ].map((doc, idx) => (
            <div
              key={idx}
              className="p-3 bg-[#f8f7f2] border border-gray-200 flex items-center justify-between gap-3 hover:border-[#1a3626] transition-colors"
            >
              <div className="flex items-center gap-2.5 truncate">
                <FileText size={16} className="text-[#1a3626] shrink-0" />
                <div className="truncate">
                  <h4 className="text-xs font-bold text-[#1a3626] truncate">{doc.name}</h4>
                  <span className="text-[10px] text-gray-400">{doc.size} • {doc.date}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => alert(`Mengunduh ${doc.name}...`)}
                className="p-1.5 bg-white border border-gray-300 hover:border-[#1a3626] text-[#1a3626] transition-colors cursor-pointer shrink-0"
                title="Unduh Dokumen"
              >
                <Download size={13} />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
