"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  Lock, 
  Mail, 
  Building2, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Sparkles, 
  FileCheck2, 
  Recycle, 
  Users,
  CheckCircle2
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Harap masukkan email korporat dan kata sandi Anda.');
      return;
    }
    setErrorMessage('');
    setIsLoading(true);

    // Simulate authentication transition to dashboard
    setTimeout(() => {
      router.push('/dashboard');
    }, 800);
  };

  const handleQuickDemoLogin = () => {
    setEmail('procurement@lestarihijau.co.id');
    setPassword('demo-enterprise-2026');
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f2] flex flex-col justify-between font-sans relative overflow-hidden">
      
      {/* Decorative Background Arcs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[15%] -left-[10%] w-[700px] h-[700px] border-[100px] border-[#d8e3dc]/40 rounded-full"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] border-[100px] border-[#f4e8c1]/40 rounded-full"></div>
      </div>

      {/* Top Navbar Header */}
      <header className="w-full px-6 sm:px-12 py-6 relative z-10 flex justify-between items-center border-b border-[#1a3626]/10 bg-white/70 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Circulo Logo" className="w-8 h-8 object-contain transition-transform group-hover:rotate-12 duration-300" />
          <span className="text-2xl font-black text-[#1a3626] tracking-tight">Circulo</span>
          <span className="hidden sm:inline-block text-[11px] font-mono uppercase bg-[#1a3626]/5 text-[#1a3626] px-2 py-0.5 border border-[#1a3626]/10 ml-2">
            Client Portal
          </span>
        </Link>

        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1a3626] hover:text-[#5c8770] transition-colors"
        >
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>
      </header>

      {/* Main Content: Split Editorial Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-10 sm:py-16 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Side: Editorial Benefits & Impact Ledger */}
        <div className="lg:col-span-6 bg-[#1a3626] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl flex flex-col justify-between min-h-[560px]">
          {/* Subtle Ring Decoration */}
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full border-[40px] border-white/5 pointer-events-none"></div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-xs font-mono tracking-wider uppercase text-[#f3c44c] mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#f3c44c] animate-pulse"></span>
              PORTAL PENGADAAN & ESG ENTERPRISE
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">
              Kelola Eco-Merchandise & Pantau Jejak Dampak ESG.
            </h1>

            <p className="text-white/80 text-sm leading-relaxed mb-8">
              Satu portal terpadu untuk tim *Procurement* dan *Sustainability* korporat dalam memesan merchandise ramah lingkungan dan mengunduh laporan audit dampak terverifikasi.
            </p>

            {/* 3 Perks Checklist */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#5c8770]/30 border border-[#5c8770]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <FileCheck2 size={14} className="text-[#f3c44c]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Laporan Audit ESG Per Batch</h4>
                  <p className="text-[11px] text-white/70">Unduh metrik kg limbah terkelola & reduksi emisi CO₂ untuk laporan tahunan.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#5c8770]/30 border border-[#5c8770]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Recycle size={14} className="text-[#f3c44c]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Kustomisasi Branding & Mockup Real-time</h4>
                  <p className="text-[11px] text-white/70">Unggah logo korporat dan sesuaikan warna produk daur ulang dengan panduan desain.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#5c8770]/30 border border-[#5c8770]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Users size={14} className="text-[#f3c44c]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Transparansi Komunitas Pengrajin</h4>
                  <p className="text-[11px] text-white/70">Lacak langsung dampak ekonomi pada 120+ maker lokal berstandar fair-wage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Footer */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
            <span>Dipercaya 85+ Korporat Mitra</span>
            <span className="font-bold text-[#f3c44c]">100% Traceable ESG</span>
          </div>
        </div>

        {/* Right Side: Corporate Login Form */}
        <div className="lg:col-span-6 bg-white border-2 border-[#1a3626] p-8 sm:p-10 shadow-xl relative">
          
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a3626] tracking-tight mb-2">
              Masuk Akun Perusahaan
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Akses portal klien Circulo untuk mengelola katalog pesanan korporat.
            </p>
          </div>

          {/* Quick Demo Access Box (For BMC Competition Judges) */}
          <div className="bg-[#f8f7f2] border-2 border-[#5c8770] p-4 mb-6 relative">
            <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-[#1a3626]">
              <Sparkles size={16} className="text-[#f3c44c]" />
              <span>Akses Demo Juri / Evaluator BMC</span>
            </div>
            <p className="text-[11px] text-gray-600 mb-3 leading-snug">
              Ingin langsung menguji dashboard tanpa registrasi? Klik tombol di bawah untuk masuk otomatis sebagai klien demo.
            </p>
            <button
              type="button"
              onClick={handleQuickDemoLogin}
              disabled={isLoading}
              className="w-full py-2.5 bg-[#e8efe9] hover:bg-[#d5e4d7] text-[#1a3626] border border-[#5c8770] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {isLoading ? 'Sedang Memproses Akses Demo...' : (
                <>
                  <Building2 size={15} className="text-[#5c8770]" />
                  Masuk Instan sebagai PT Lestari Hijau (Akun Demo)
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="relative bg-white px-3 text-[11px] font-mono text-gray-500 uppercase">
              atau gunakan kredensial akun
            </span>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {errorMessage}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#1a3626] uppercase tracking-wider mb-1.5">
                Email Korporat
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@perusahaan.co.id"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#1a3626]/20 text-xs text-[#1a3626] font-medium placeholder-gray-400 focus:outline-none focus:border-[#1a3626] focus:ring-1 focus:ring-[#1a3626]"
                />
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-[#1a3626] uppercase tracking-wider">
                  Kata Sandi
                </label>
                <a href="#" className="text-[11px] font-semibold text-[#5c8770] hover:underline">
                  Lupa kata sandi?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi"
                  required
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#1a3626]/20 text-xs text-[#1a3626] font-medium placeholder-gray-400 focus:outline-none focus:border-[#1a3626] focus:ring-1 focus:ring-[#1a3626]"
                />
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded-none border-gray-300 accent-[#1a3626] w-3.5 h-3.5"
                />
                Ingat akun di perangkat ini
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[#1a3626] hover:bg-[#12261b] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md mt-6 cursor-pointer"
            >
              {isLoading ? (
                'Memverifikasi Akun...'
              ) : (
                <>
                  Masuk ke Portal Klien <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>

          {/* Registration Assistance */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-600">
              Perusahaan Anda belum terdaftar sebagai mitra pengadaan?
            </p>
            <Link 
              href="/#katalog" 
              className="inline-flex items-center gap-1 text-xs font-bold text-[#5c8770] hover:text-[#1a3626] mt-1"
            >
              Ajukan Kemitraan Korporat <ArrowRight size={13} />
            </Link>
          </div>

        </div>

      </main>

      {/* Footer Minimal */}
      <footer className="w-full py-6 px-8 border-t border-[#1a3626]/10 text-center text-xs text-gray-500 relative z-10 bg-white/50">
        <p>© 2026 Circulo Indonesia. Platform Agregator Eco-Merchandise & Rantai Pasok Berkelanjutan.</p>
      </footer>

    </div>
  );
}
