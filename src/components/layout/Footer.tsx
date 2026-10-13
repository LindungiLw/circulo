"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#13281c] text-white border-t border-white/10 font-sans">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img src="/logo.png" alt="Circulo Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-white tracking-tight">Circulo</span>
            </Link>

            <p className="text-sm text-white/65 leading-relaxed max-w-sm">
              Platform agregator merchandise korporat ramah lingkungan yang memberdayakan pengrajin lokal dan mendukung pencapaian target ESG perusahaan.
            </p>

            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#f3c44c] hover:text-[#ffd666] transition-colors"
              >
                Masuk Portal Klien <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Solusi B2B */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider">
              Solusi B2B
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/#solusi" className="hover:text-white transition-colors">
                  Kustom Merchandise Ramah Lingkungan
                </Link>
              </li>
              <li>
                <Link href="/#dampak" className="hover:text-white transition-colors">
                  Program Daur Ulang Closed-Loop
                </Link>
              </li>
              <li>
                <Link href="/#dampak" className="hover:text-white transition-colors">
                  Laporan Dampak & Sertifikasi ESG
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Portal Dashboard Klien
                </Link>
              </li>
            </ul>
          </div>

          {/* Katalog Produk */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider">
              Koleksi
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/katalog" className="hover:text-white transition-colors">
                  Eco Tote Bag
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-white transition-colors">
                  Recycled Notebook
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-white transition-colors">
                  VIP Eco Gift Set
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-white transition-colors">
                  Lanyard & ID Holder
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="text-[#f3c44c] hover:text-[#ffd666] font-medium transition-colors">
                  Lihat Semua Produk →
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak & Lokasi */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider">
              Kontak Pengadaan
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#5c8770] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Jl. Ganesha 2, Lot B1, Deltamas, Pasirranji, Central Cikarang, Bekasi Regency, West Java 17530
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#5c8770] shrink-0" />
                <a href="mailto:procurement@circulo.id" className="hover:text-white transition-colors">
                  procurement@circulo.id
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#5c8770] shrink-0" />
                <span>+62 812-9876-2026</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 Circulo Indonesia. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
