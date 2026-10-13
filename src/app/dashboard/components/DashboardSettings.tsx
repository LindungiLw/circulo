"use client";

import React, { useState } from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Bell, 
  UserCheck, 
  Save, 
  Check, 
  Lock,
  Plus
} from 'lucide-react';

export default function DashboardSettings() {
  const [companyName, setCompanyName] = useState('PT Danareksa (Persero)');
  const [npwp, setNpwp] = useState('01.234.567.8-012.000');
  const [address, setAddress] = useState('Jl. Ganesha 2, Lot B1, Deltamas, Pasirranji, Central Cikarang, Bekasi Regency, West Java 17530');
  const [picName, setPicName] = useState('Arya Pratama');
  const [picEmail, setPicEmail] = useState('procurement@danareksa.co.id');
  const [picPhone, setPicPhone] = useState('+62 811-2345-6789');

  const [notifWA, setNotifWA] = useState(true);
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifMonthly, setNotifMonthly] = useState(true);

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      alert('Pengaturan profil perusahaan dan preferensi pengadaan berhasil disimpan.');
    }, 1200);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h2 className="text-2xl font-black text-[#1a3626] tracking-tight">Pengaturan & Akun Korporat</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Kelola profil penagihan, alamat pengiriman barang, notifikasi produksi, dan akses tim pengadaan.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={isSaved}
          className="px-6 py-2.5 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
        >
          {isSaved ? <Check size={14} /> : <Save size={14} />}
          {isSaved ? 'Tersimpan!' : 'Simpan Perubahan'}
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Section 1: Profil Perusahaan & Alamat */}
        <div className="bg-white border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100">
            <Building2 size={18} className="text-[#5c8770]" />
            <h3 className="text-base font-bold text-[#1a3626]">Identitas Entitas & Alamat Penagihan</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                Nama Resmi Perusahaan
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-xs text-[#1a3626] font-medium focus:outline-none focus:border-[#1a3626]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                NPWP Perusahaan (Faktur Pajak)
              </label>
              <input
                type="text"
                value={npwp}
                onChange={(e) => setNpwp(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-xs text-[#1a3626] font-mono focus:outline-none focus:border-[#1a3626]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                Alamat Kantor & Titik Pengiriman Utama
              </label>
              <textarea
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-xs text-[#1a3626] leading-relaxed focus:outline-none focus:border-[#1a3626]"
              />
              <p className="text-[11px] text-gray-400 mt-1">
                Alamat ini digunakan untuk tujuan surat jalan PO dan sertifikat dampak lingkungan batch.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Kontak PIC Pengadaan */}
        <div className="bg-white border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100">
            <UserCheck size={18} className="text-[#5c8770]" />
            <h3 className="text-base font-bold text-[#1a3626]">Kontak Person in Charge (PIC) Pengadaan</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                Nama Lengkap PIC
              </label>
              <input
                type="text"
                value={picName}
                onChange={(e) => setPicName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-xs text-[#1a3626] font-medium focus:outline-none focus:border-[#1a3626]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                Alamat Email Kantor
              </label>
              <input
                type="email"
                value={picEmail}
                onChange={(e) => setPicEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-xs text-[#1a3626] font-medium focus:outline-none focus:border-[#1a3626]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                No. WhatsApp / Telepon
              </label>
              <input
                type="text"
                value={picPhone}
                onChange={(e) => setPicPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-xs text-[#1a3626] font-medium focus:outline-none focus:border-[#1a3626]"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Preferensi Notifikasi */}
        <div className="bg-white border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100">
            <Bell size={18} className="text-[#5c8770]" />
            <h3 className="text-base font-bold text-[#1a3626]">Preferensi Update & Notifikasi</h3>
          </div>

          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifWA}
                onChange={(e) => setNotifWA(e.target.checked)}
                className="mt-1 w-4 h-4 text-[#1a3626] border-gray-300 focus:ring-[#1a3626]"
              />
              <div>
                <span className="text-xs font-bold text-[#1a3626] block">
                  Notifikasi WhatsApp saat Batch Pesanan Masuk Tahap QC
                </span>
                <span className="text-[11px] text-gray-500">
                  Dapatkan foto dokumentasi hasil kurasi pengrajin sebelum barang dikemas.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifEmail}
                onChange={(e) => setNotifEmail(e.target.checked)}
                className="mt-1 w-4 h-4 text-[#1a3626] border-gray-300 focus:ring-[#1a3626]"
              />
              <div>
                <span className="text-xs font-bold text-[#1a3626] block">
                  Salinan Digital Invoice & Surat Jalan via Email
                </span>
                <span className="text-[11px] text-gray-500">
                  Otomatis dikirim ke procurement@danareksa.co.id begitu pesanan siap dikirim.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifMonthly}
                onChange={(e) => setNotifMonthly(e.target.checked)}
                className="mt-1 w-4 h-4 text-[#1a3626] border-gray-300 focus:ring-[#1a3626]"
              />
              <div>
                <span className="text-xs font-bold text-[#1a3626] block">
                  Ringkasan Laporan Dampak ESG Bulanan
                </span>
                <span className="text-[11px] text-gray-500">
                  Kompilasi rekapitulasi data emisi karbon Scope 3 dan keterlibatan pengrajin setiap akhir bulan.
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Section 4: Tim & Pengguna Terdaftar */}
        <div className="bg-white border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <Shield size={18} className="text-[#5c8770]" />
              <h3 className="text-base font-bold text-[#1a3626]">Akses Anggota Tim Korporat</h3>
            </div>
            <button
              type="button"
              onClick={() => alert('Undangan anggota tim baru dapat diajukan ke admin sistem Circulo.')}
              className="text-xs font-bold text-[#5c8770] hover:text-[#1a3626] flex items-center gap-1 cursor-pointer"
            >
              <Plus size={14} /> Tambah Anggota
            </button>
          </div>

          <div className="divide-y divide-gray-100 text-xs">
            {[
              { name: 'Arya Pratama', email: 'procurement@danareksa.co.id', role: 'Lead Procurement (Admin)', active: true },
              { name: 'Siti Rahmawati', email: 'sustainability@danareksa.co.id', role: 'ESG Specialist (Editor)', active: true },
              { name: 'Budi Hartono', email: 'finance@danareksa.co.id', role: 'Finance Officer (Viewer)', active: true },
            ].map((member, i) => (
              <div key={i} className="py-3 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#1a3626]">{member.name}</h4>
                  <span className="text-gray-500 text-[11px]">{member.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono bg-[#f8f7f2] border border-gray-200 px-2 py-0.5 text-gray-700">
                    {member.role}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" title="Aktif" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </form>

    </div>
  );
}
