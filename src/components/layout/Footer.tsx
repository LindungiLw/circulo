"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Recycle, 
  Users, 
  FileCheck2,
  ArrowUpRight
} from 'lucide-react';
import { CirculoLoopIcon, CirculoAuditIcon, CirculoMakersIcon } from '@/components/icons/CirculoIcons';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a3626] text-white relative z-10 border-t-4 border-[#5c8770] font-sans">
      
      {/* Top Value Assurance Banner */}
      <div className="border-b border-white/10 bg-[#142b1e]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 grid sm:grid-cols-3 gap-6">
          
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 border border-[#f3c44c]/30 bg-white/5 flex items-center justify-center shrink-0 text-[#f3c44c]">
              <CirculoLoopIcon size={20} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                100% Rantai Pasok Terlacak
              </h4>
              <p className="text-[11px] text-white/70 leading-relaxed">
                Residu botol PET, limbah tekstil konveksi, dan biomassa lokal dengan transparansi asal material.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 border border-[#f3c44c]/30 bg-white/5 flex items-center justify-center shrink-0 text-[#f3c44c]">
              <CirculoMakersIcon size={20} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                Kemitraan Fair-Wage
              </h4>
              <p className="text-[11px] text-white/70 leading-relaxed">
                Pemberdayaan langsung 120+ pengrajin kriya daerah dengan jaminan standar kompensasi adil.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 border border-[#f3c44c]/30 bg-white/5 flex items-center justify-center shrink-0 text-[#f3c44c]">
              <CirculoAuditIcon size={20} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                Sertifikat & Audit ESG
              </h4>
              <p className="text-[11px] text-white/70 leading-relaxed">
                Setiap batch pesanan dilengkapi laporan metrik reduksi emisi CO₂ untuk Sustainability Report korporat.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img src="/logo.png" alt="Circulo Logo" className="w-8 h-8 object-contain transition-transform group-hover:rotate-12 duration-300" />
              <span className="text-2xl font-black text-white tracking-tight">Circulo</span>
              <span className="text-[10px] font-mono uppercase bg-[#f3c44c] text-[#1a3626] px-2 py-0.5 font-bold">
                B2B Studio
              </span>
            </Link>

            <p className="text-xs text-white/75 leading-relaxed max-w-sm">
              Platform agregator merchandise korporat ramah lingkungan terdepan di Indonesia. Menghubungkan pengadaan perusahaan dengan komunitas pengrajin daur ulang untuk menciptakan dampak ESG terukur.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#f3c44c]">
                SDG 8: Decent Work
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#5c8770]">
                SDG 12: Responsible Consumption
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/80">
                100% Traceable ESG
              </span>
            </div>

            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#f3c44c] hover:bg-[#e3b43c] text-[#1a3626] text-xs font-black uppercase tracking-wider transition-colors"
              >
                Masuk Portal Klien <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Col 2: Solusi B2B (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-[#f3c44c] font-bold">
              SOLUSI KORPORAT
            </h5>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <a href="/#solusi" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-[#5c8770]" /> Kustom Eco-Merch B2B
                </a>
              </li>
              <li>
                <a href="/#dampak" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-[#5c8770]" /> Program Closed-Loop Kantor
                </a>
              </li>
              <li>
                <a href="/#dampak" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-[#5c8770]" /> Pemberdayaan 120+ Maker
                </a>
              </li>
              <li>
                <a href="/#dampak" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-[#5c8770]" /> Audit & Sertifikasi Emisi ESG
                </a>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors flex items-center gap-1.5 text-[#f3c44c] font-bold">
                  <ArrowRight size={12} /> Coba Dashboard Klien Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Katalog Produk (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-[#f3c44c] font-bold">
              KATALOG PRODUK
            </h5>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <Link href="/katalog" className="hover:text-white transition-colors">
                  Eco Tote Bag (rPET)
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-white transition-colors">
                  Notebook Recycled
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-white transition-colors">
                  Eco Gift Set VIP
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-white transition-colors">
                  Lanyard & ID Holder
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-white transition-colors">
                  Laptop Sleeve Upcycled
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="text-[#f3c44c] font-bold hover:underline flex items-center gap-1">
                  Semua 10 Produk <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak & Kantor (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-[#f3c44c] font-bold">
              KONTAK PENGADAAN
            </h5>
            
            <div className="space-y-3 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#5c8770] shrink-0 mt-0.5" />
                <span>
                  <strong>Circulo Hub Jakarta:</strong><br />
                  Kuningan Circular Studio, Jakarta Selatan, 12950
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#5c8770] shrink-0" />
                <a href="mailto:procurement@circulo.id" className="hover:text-white transition-colors">
                  procurement@circulo.id
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#5c8770] shrink-0" />
                <span>+62 812-9876-2026 (Konsultasi B2B)</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 bg-white/5 border border-white/10 text-[11px] text-white/70">
                <p className="font-bold text-white mb-0.5">Jam Operasional Studio</p>
                <p>Senin – Jumat: 08.30 – 17.30 WIB</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="border-t border-white/10 bg-[#12261b]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© 2026 Circulo Indonesia. Inovasi Model Bisnis Ekonomi Sirkular (BMC) B2B.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Standar Fair-Wage</a>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Ketentuan B2B</a>
            <span className="text-[#f3c44c] font-mono hidden md:inline">From Waste to Value</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
