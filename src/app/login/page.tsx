"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff
} from 'lucide-react';
import { CirculoPassIcon } from '@/components/icons/CirculoIcons';

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

    setTimeout(() => {
      router.push('/dashboard');
    }, 700);
  };

  const handleQuickDemoLogin = () => {
    setEmail('procurement@lestarihijau.co.id');
    setPassword('demo-enterprise-2026');
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      router.push('/dashboard');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f2] flex flex-col justify-between font-sans relative overflow-hidden">
      
      {/* Decorative Organic Circular Arcs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[15%] -left-[10%] w-[650px] h-[650px] border-[90px] border-[#d8e3dc]/40 rounded-full"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[750px] h-[750px] border-[90px] border-[#f4e8c1]/40 rounded-full"></div>
      </div>



      {/* Main Content: Clean Focused Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 relative z-10">
        <div className="w-full max-w-[440px] bg-white border-2 border-[#1a3626] p-5 sm:p-10 shadow-xl">
          
          {/* Brand & Back Navigation inside card */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#1a3626]/10">
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="Circulo Logo" className="w-7 h-7 object-contain transition-transform group-hover:rotate-12 duration-300" />
              <span className="text-lg font-black text-[#1a3626] tracking-tight">Circulo</span>
              <span className="text-[9px] font-mono uppercase bg-[#1a3626]/5 text-[#1a3626] px-1.5 py-0.5 border border-[#1a3626]/10 font-bold">
                B2B
              </span>
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-[#1a3626] transition-colors"
            >
              <ArrowLeft size={13} /> Beranda
            </Link>
          </div>

          {/* Card Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-black text-[#1a3626] tracking-tight mb-1.5">
              Masuk Portal Klien
            </h1>
            <p className="text-xs text-gray-500">
              Akses modul pengadaan & pelaporan dampak ESG
            </p>
          </div>

          {/* Quick Demo Access Button (No text walls, just 1 clean action button) */}
          <div className="mb-6">
            <button
              type="button"
              onClick={handleQuickDemoLogin}
              disabled={isLoading}
              className="w-full py-2.5 px-3 bg-[#e8efe9] hover:bg-[#d8e6da] text-[#1a3626] border border-[#5c8770] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <CirculoPassIcon size={16} className="text-[#1a3626]" />
              {isLoading ? 'Mengautentikasi Demo...' : 'Masuk Demo Juri (PT Lestari Hijau)'}
            </button>
          </div>

          {/* Clean Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="relative bg-white px-3 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
              atau email akun
            </span>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-4 p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
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
                  className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#1a3626]/20 text-xs text-[#1a3626] font-medium placeholder-gray-400 focus:outline-none focus:border-[#1a3626] focus:ring-1 focus:ring-[#1a3626]"
                />
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-[#1a3626] uppercase tracking-wider">
                  Kata Sandi
                </label>
                <a href="#" className="text-[11px] font-semibold text-[#5c8770] hover:underline">
                  Lupa sandi?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi"
                  required
                  className="w-full pl-9 pr-9 py-2.5 bg-white border border-[#1a3626]/20 text-xs text-[#1a3626] font-medium placeholder-gray-400 focus:outline-none focus:border-[#1a3626] focus:ring-1 focus:ring-[#1a3626]"
                />
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
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
                'Memverifikasi...'
              ) : (
                <>
                  Masuk ke Portal <ArrowRight size={14} />
                </>
              )}
            </button>
          </form>

          {/* Clean Helper Footer */}
          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              Belum terdaftar sebagai mitra?{' '}
              <Link href="/#katalog" className="font-bold text-[#5c8770] hover:text-[#1a3626]">
                Ajukan Kemitraan
              </Link>
            </p>
          </div>

        </div>
      </main>

      {/* Minimal Bottom Bar */}
      <footer className="w-full py-4 px-6 text-center text-[11px] text-gray-400 relative z-10">
        © 2026 Circulo Indonesia
      </footer>

    </div>
  );
}
