"use client";

import React, { useState } from 'react';
import { X, Lock, Building2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ClientLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientLoginModal({ isOpen, onClose }: ClientLoginModalProps) {
  const [email, setEmail] = useState('procurement@perusahaan.co.id');
  const [password, setPassword] = useState('••••••••••••');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#f8f7f2] border-2 border-[#1a3626] w-full max-w-md shadow-2xl relative rounded-none p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#1a3626]/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#e8efe9] border border-[#5c8770]/30 flex items-center justify-center text-[#1a3626]">
              <Building2 size={20} />
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-wider uppercase text-[#5c8770] font-bold">
                PORTAL KLIEN B2B
              </div>
              <h3 className="text-xl font-black text-[#1a3626]">Masuk Akun Perusahaan</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-[#1a3626] hover:bg-gray-200 transition-colors"
            aria-label="Tutup modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Demo Notification Badge */}
        <div className="bg-[#e8efe9] border border-[#5c8770]/30 p-3 mb-5 flex items-start gap-2.5 text-xs text-[#1a3626]">
          <ShieldCheck size={18} className="text-[#5c8770] shrink-0 mt-0.5" />
          <p className="leading-snug">
            <strong>Akses Demo BMC:</strong> Anda dapat langsung masuk tanpa kata sandi untuk menjelajahi prototipe Portal Pengadaan & Laporan ESG.
          </p>
        </div>

        {/* Form Fields */}
        <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-[#1a3626] uppercase tracking-wider mb-1">
              Email Korporat
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#1a3626]/20 text-xs text-[#1a3626] font-medium focus:outline-none focus:border-[#1a3626]"
              placeholder="nama@perusahaan.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#1a3626] uppercase tracking-wider mb-1">
              Kata Sandi
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#1a3626]/20 text-xs text-[#1a3626] font-medium focus:outline-none focus:border-[#1a3626]"
              placeholder="Kata sandi"
            />
          </div>
        </form>

        {/* Action Button */}
        <Link
          href="/dashboard"
          onClick={onClose}
          className="w-full py-3 bg-[#1a3626] hover:bg-[#12261b] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          Masuk ke Dashboard Klien <ArrowRight size={14} />
        </Link>

        <div className="mt-4 text-center space-y-1.5">
          <Link 
            href="/login" 
            onClick={onClose} 
            className="block text-xs font-bold text-[#1a3626] hover:text-[#5c8770] hover:underline"
          >
            Buka Halaman Login Penuh Portal Klien →
          </Link>
          <p className="text-[11px] text-gray-500">
            Belum menjadi mitra Circulo?{' '}
            <a href="#katalog" onClick={onClose} className="text-[#5c8770] font-bold hover:underline">
              Jelajahi Katalog
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
