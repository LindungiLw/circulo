"use client";

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  UserCheck, 
  Bell, 
  Shield, 
  Save, 
  Check, 
  Plus,
  Database,
  Cloud,
  CheckCircle2,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { isFirebaseConfigured } from '@/lib/firebase';
import { getCompanyProfile, updateCompanyProfile, CompanyProfile } from '@/services/companyService';
import { seedAllInitialData } from '@/services/seedService';

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
  const [isSeeding, setIsSeeding] = useState(false);
  const [firebaseActive, setFirebaseActive] = useState(false);

  useEffect(() => {
    setFirebaseActive(isFirebaseConfigured());

    // Load saved profile
    getCompanyProfile().then((profile) => {
      setCompanyName(profile.name);
      setNpwp(profile.npwp);
      setAddress(profile.address);
      setPicName(profile.picName);
      setPicEmail(profile.picEmail);
      setPicPhone(profile.picPhone);
      if (profile.notifications) {
        setNotifWA(profile.notifications.waQC);
        setNotifEmail(profile.notifications.emailInvoice);
        setNotifMonthly(profile.notifications.monthlyESG);
      }
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);

    const payload: CompanyProfile = {
      name: companyName,
      npwp,
      address,
      picName,
      picEmail,
      picPhone,
      notifications: {
        waQC: notifWA,
        emailInvoice: notifEmail,
        monthlyESG: notifMonthly,
      },
    };

    const res = await updateCompanyProfile(payload);
    setTimeout(() => {
      setIsSaved(false);
      const target = res.source === 'firebase' ? 'Firebase Cloud Firestore' : 'Penyimpanan Lokal';
      alert(`Pengaturan profil berhasil disimpan ke ${target}.`);
    }, 800);
  };

  const handleSeedFirebase = async () => {
    setIsSeeding(true);
    const result = await seedAllInitialData();
    setIsSeeding(false);
    alert(result.message);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#1a3626]">Pengaturan Akun & Database</h2>
          <p className="text-xs text-gray-500 mt-0.5">Kelola data profil perusahaan dan status integrasi Firebase.</p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={isSaved}
          className="px-5 py-2 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
        >
          {isSaved ? <Check size={13} /> : <Save size={13} />}
          {isSaved ? 'Tersimpan' : 'Simpan'}
        </button>
      </div>

      {/* Database Connection Status Card */}
      <div className="bg-white border border-gray-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className={`w-8 h-8 flex items-center justify-center shrink-0 ${firebaseActive ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
            <Database size={16} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-[#1a3626]">Status Database Firebase Firestore</h4>
              <span className={`text-[10px] font-mono px-2 py-0.2 font-bold ${firebaseActive ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}>
                {firebaseActive ? 'TERKONEKSI' : 'MODE FALLBACK / LOKAL'}
              </span>
            </div>
            <p className="text-[11px] text-gray-500 mt-0.5">
              {firebaseActive 
                ? 'Website terhubung ke Cloud Firestore. Data tersinkronisasi otomatis.'
                : 'Kunci Firebase belum diatur di .env.local. Sistem menggunakan data lokal yang aman tanpa risiko error.'
              }
            </p>
          </div>
        </div>

        {firebaseActive && (
          <button
            type="button"
            onClick={handleSeedFirebase}
            disabled={isSeeding}
            className="px-3.5 py-1.5 bg-[#f8f7f2] hover:bg-[#1a3626] text-[#1a3626] hover:text-white border border-gray-300 hover:border-[#1a3626] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <RefreshCw size={12} className={isSeeding ? 'animate-spin' : ''} />
            {isSeeding ? 'Mengisi Data...' : 'Inisialisasi Data Firestore'}
          </button>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-5">
        
        {/* Profil Perusahaan */}
        <div className="bg-white border border-gray-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
            <Building2 size={16} className="text-[#5c8770]" />
            <h3 className="text-sm font-bold text-[#1a3626]">Profil Perusahaan</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Nama Perusahaan
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-[#1a3626] focus:outline-none focus:border-[#1a3626]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                NPWP
              </label>
              <input
                type="text"
                value={npwp}
                onChange={(e) => setNpwp(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-[#1a3626] font-mono focus:outline-none focus:border-[#1a3626]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Alamat Kantor & Pengiriman
              </label>
              <textarea
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-[#1a3626] focus:outline-none focus:border-[#1a3626]"
              />
            </div>
          </div>
        </div>

        {/* Kontak PIC */}
        <div className="bg-white border border-gray-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
            <UserCheck size={16} className="text-[#5c8770]" />
            <h3 className="text-sm font-bold text-[#1a3626]">Kontak PIC Pengadaan</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Nama PIC
              </label>
              <input
                type="text"
                value={picName}
                onChange={(e) => setPicName(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-[#1a3626] focus:outline-none focus:border-[#1a3626]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={picEmail}
                onChange={(e) => setPicEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-[#1a3626] focus:outline-none focus:border-[#1a3626]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Telepon / WhatsApp
              </label>
              <input
                type="text"
                value={picPhone}
                onChange={(e) => setPicPhone(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-[#1a3626] focus:outline-none focus:border-[#1a3626]"
              />
            </div>
          </div>
        </div>

        {/* Notifikasi & Tim */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          <div className="bg-white border border-gray-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
              <Bell size={16} className="text-[#5c8770]" />
              <h3 className="text-sm font-bold text-[#1a3626]">Notifikasi</h3>
            </div>

            <div className="space-y-2.5 text-xs">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifWA}
                  onChange={(e) => setNotifWA(e.target.checked)}
                  className="w-4 h-4 text-[#1a3626] border-gray-300 focus:ring-[#1a3626]"
                />
                <span className="text-gray-700">Update produksi via WhatsApp</span>
              </label>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifEmail}
                  onChange={(e) => setNotifEmail(e.target.checked)}
                  className="w-4 h-4 text-[#1a3626] border-gray-300 focus:ring-[#1a3626]"
                />
                <span className="text-gray-700">Salinan invoice & surat jalan via Email</span>
              </label>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifMonthly}
                  onChange={(e) => setNotifMonthly(e.target.checked)}
                  className="w-4 h-4 text-[#1a3626] border-gray-300 focus:ring-[#1a3626]"
                />
                <span className="text-gray-700">Rekapitulasi emisi Scope 3 bulanan</span>
              </label>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#5c8770]" />
                <h3 className="text-sm font-bold text-[#1a3626]">Akses Tim</h3>
              </div>
              <button
                type="button"
                onClick={() => alert('Undangan tim diajukan ke admin.')}
                className="text-xs font-bold text-[#5c8770] hover:text-[#1a3626] flex items-center gap-0.5 cursor-pointer"
              >
                <Plus size={13} /> Tambah
              </button>
            </div>

            <div className="divide-y divide-gray-100 text-xs">
              {[
                { name: 'Arya Pratama', role: 'Admin', email: 'procurement@danareksa.co.id' },
                { name: 'Siti Rahmawati', role: 'Editor', email: 'sustainability@danareksa.co.id' },
                { name: 'Budi Hartono', role: 'Viewer', email: 'finance@danareksa.co.id' },
              ].map((member, i) => (
                <div key={i} className="py-2 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#1a3626]">{member.name}</span>
                    <span className="text-gray-400 text-[11px] block">{member.email}</span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#f8f7f2] border border-gray-200 px-2 py-0.5 text-gray-700">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </form>

    </div>
  );
}
