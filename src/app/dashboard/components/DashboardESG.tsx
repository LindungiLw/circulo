"use client";

import React, { useState } from 'react';
import { 
  FileSignature, 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  Award,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

export default function DashboardESG() {
  const [copied, setCopied] = useState(false);
  const [downloadingCert, setDownloadingCert] = useState(false);

  const certNumber = 'ESG-CIR-2026-8812-ID';

  const handleCopyCert = () => {
    navigator.clipboard.writeText(certNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCert = () => {
    setDownloadingCert(true);
    setTimeout(() => {
      setDownloadingCert(false);
      alert('Sertifikat Digital Emisi & Ketertelusuran (ESG-CIR-2026-8812.pdf) berhasil diunduh.');
    }, 1200);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h2 className="text-2xl font-black text-[#1a3626] tracking-tight">Audit & Sertifikasi ESG</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Data validasi metrik keberlanjutan dan dokumen pelaporan resmi untuk Sustainability Report korporat.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadCert}
            disabled={downloadingCert}
            className="px-5 py-2.5 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
          >
            <Download size={14} />
            {downloadingCert ? 'Mengunduh...' : 'Unduh Sertifikat PDF'}
          </button>
        </div>
      </div>

      {/* Main Digital Certificate Frame */}
      <div className="bg-white border-2 border-[#1a3626] p-6 sm:p-10 shadow-md relative overflow-hidden">
        {/* Subtle decorative background watermarks */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f3c44c]/10 -rotate-45 translate-x-12 -translate-y-12 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 pb-8 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a3626] text-[#f3c44c] text-xs font-mono font-bold mb-3">
              <Award size={14} /> VERIFIED CIRCULAR IMPACT CERTIFICATE
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1a3626] tracking-tight">
              Sertifikat Verifikasi Dampak Sirkular & Emisi
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Diterbitkan oleh Circulo ESG Assurance Unit untuk kepatuhan pelaporan keberlanjutan.
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[10px] font-mono text-gray-400 block uppercase">Nomor Sertifikat Resmi</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-mono text-sm font-bold text-[#1a3626] bg-[#f8f7f2] border border-gray-300 px-3 py-1">
                {certNumber}
              </span>
              <button
                onClick={handleCopyCert}
                className="p-1.5 border border-gray-300 hover:bg-gray-100 text-gray-600 transition-colors"
                title="Salin Nomor Sertifikat"
              >
                {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
              </button>
            </div>
            <span className="text-[11px] text-gray-400 block mt-1">Tanggal Terbit: 05 Oktober 2026</span>
          </div>
        </div>

        {/* Certificate Recipient & Verified Metrics */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-[#f8f7f2] border border-gray-200">
            <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">Entitas Korporat</span>
            <h4 className="text-base font-bold text-[#1a3626]">PT Danareksa (Persero)</h4>
            <p className="text-xs text-gray-500 mt-1">Divisi Pengadaan & CSR</p>
          </div>

          <div className="p-4 bg-[#f8f7f2] border border-gray-200">
            <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">Reduksi Karbon (Scope 3)</span>
            <h4 className="text-xl font-black text-[#1a3626]">3.420 kg CO₂e</h4>
            <p className="text-xs text-[#5c8770] font-semibold mt-1">Metode GHG Protocol</p>
          </div>

          <div className="p-4 bg-[#f8f7f2] border border-gray-200">
            <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">Limbah Sirkular Terdiversi</span>
            <h4 className="text-xl font-black text-[#1a3626]">1.250 kg</h4>
            <p className="text-xs text-gray-500 mt-1">Plastik PET & Tekstil</p>
          </div>

          <div className="p-4 bg-[#f8f7f2] border border-gray-200">
            <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">Pemberdayaan Fair-Wage</span>
            <h4 className="text-xl font-black text-[#1a3626]">480 Jam</h4>
            <p className="text-xs text-amber-700 font-semibold mt-1">120+ Pengrajin Kriya</p>
          </div>
        </div>

        {/* Audit Signatories */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-[#5c8770]" />
            <span>Keterangan: Valid untuk lampiran pelaporan keberlanjutan POJK 51/POJK.03/2017 & GRI Standards.</span>
          </div>
          <div className="font-mono text-[11px] text-[#1a3626] font-bold">
            Status: TERVERIFIKASI & AKTIF
          </div>
        </div>

      </div>

      {/* GRI & Standards Compliance Table */}
      <div className="bg-white border border-gray-200 p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#1a3626] mb-4">
          Pemetaan Indikator Standar Keberlanjutan (GRI Standards)
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-[#f8f7f2] border-b border-gray-200 text-[#1a3626]">
                <th className="py-3 px-4 font-bold">Kode Standar</th>
                <th className="py-3 px-4 font-bold">Parameter Pelaporan</th>
                <th className="py-3 px-4 font-bold">Metrik Terverifikasi</th>
                <th className="py-3 px-4 font-bold">Status Audit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-[#1a3626]">GRI 301-1</td>
                <td className="py-3 px-4 text-gray-600">Material yang Digunakan berdasarkan Berat/Volume</td>
                <td className="py-3 px-4 font-bold text-gray-800">1.250 kg Limbah Residu (100% Recycled Input)</td>
                <td className="py-3 px-4 text-[#5c8770] font-bold">Lolos Audit</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-[#1a3626]">GRI 305-5</td>
                <td className="py-3 px-4 text-gray-600">Pengurangan Emisi Gas Rumah Kaca (Scope 3)</td>
                <td className="py-3 px-4 font-bold text-gray-800">3.420 kg CO₂e Tereduksi vs Material Perawan</td>
                <td className="py-3 px-4 text-[#5c8770] font-bold">Lolos Audit</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-[#1a3626]">GRI 401-1</td>
                <td className="py-3 px-4 text-gray-600">Pekerjaan Layak & Standar Upah Pengrajin Kemitraan</td>
                <td className="py-3 px-4 font-bold text-gray-800">480 Jam Kerja dengan kompensasi Fair-Wage</td>
                <td className="py-3 px-4 text-[#5c8770] font-bold">Lolos Audit</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-[#1a3626]">GRI 306-4</td>
                <td className="py-3 px-4 text-gray-600">Limbah yang Dialihkan dari Pembuangan Akhir (Landfill)</td>
                <td className="py-3 px-4 font-bold text-gray-800">Diversion Rate 99.4% Tanpa Insinerasi</td>
                <td className="py-3 px-4 text-[#5c8770] font-bold">Lolos Audit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Downloadable Documents Repository */}
      <div className="bg-white border border-gray-200 p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#1a3626] mb-4">
          Dokumen Laporan & Bukti Rantai Pasok Siap Unduh
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: 'Laporan_Audit_Emisi_Q3_2026.pdf',
              desc: 'Kompilasi kalkulasi reduksi emisi karbon 4 batch pengadaan resmi.',
              size: '2.4 MB',
              date: '05 Okt 2026',
            },
            {
              name: 'Sertifikat_Traceability_Material_Batch_88.pdf',
              desc: 'Verifikasi laboratorium asal material rPET dan residu katun lokal.',
              size: '1.8 MB',
              date: '28 Sep 2026',
            },
            {
              name: 'Metrik_GRI_Index_Danareksa_2026.xlsx',
              desc: 'Tabel spreadsheet siap integrasi ke perangkat lunak ESG korporasi.',
              size: '850 KB',
              date: '02 Okt 2026',
            },
            {
              name: 'Laporan_Dampak_Pemberdayaan_Pengrajin.pdf',
              desc: 'Dokumentasi profil 120+ pengrajin kriya dan distribusi upah adil.',
              size: '1.5 MB',
              date: '15 Sep 2026',
            },
          ].map((doc, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#f8f7f2] border border-gray-200 flex items-start justify-between gap-4 hover:border-[#1a3626] transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-white border border-gray-300 flex items-center justify-center text-[#1a3626] shrink-0 mt-0.5">
                  <FileText size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1a3626] hover:underline cursor-pointer">
                    {doc.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{doc.desc}</p>
                  <span className="text-[10px] text-gray-400 mt-1 inline-block">
                    {doc.size} • Diperbarui: {doc.date}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => alert(`Mengunduh file ${doc.name}...`)}
                className="p-2 bg-white border border-gray-300 hover:border-[#1a3626] text-[#1a3626] transition-colors cursor-pointer shrink-0"
                title="Unduh File"
              >
                <Download size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
