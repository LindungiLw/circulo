"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  PackageOpen, 
  ClipboardList, 
  FileSignature, 
  Settings, 
  Bell, 
  ArrowLeft,
  LogOut,
  Menu,
  X,
  ExternalLink,
  ShieldCheck,
  Check
} from 'lucide-react';
import DashboardOverview from './components/DashboardOverview';
import DashboardKatalog from './components/DashboardKatalog';
import DashboardOrders from './components/DashboardOrders';
import DashboardESG from './components/DashboardESG';
import DashboardSettings from './components/DashboardSettings';

type TabType = 'dashboard' | 'katalog' | 'pesanan' | 'esg' | 'pengaturan';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Sync with URL hash on mount & hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as TabType;
      const validTabs: TabType[] = ['dashboard', 'katalog', 'pesanan', 'esg', 'pengaturan'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    window.location.hash = tab;
    setMobileSidebarOpen(false);
  };

  const navItems = [
    {
      id: 'dashboard' as TabType,
      label: 'Impact Dashboard',
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'katalog' as TabType,
      label: 'Katalog Produk',
      icon: PackageOpen,
      badge: '10 Item',
    },
    {
      id: 'pesanan' as TabType,
      label: 'Pesanan Saya',
      icon: ClipboardList,
      badge: '2 Aktif',
      badgeColor: 'bg-[#f3c44c] text-[#1a3626]',
    },
    {
      id: 'esg' as TabType,
      label: 'Laporan ESG',
      icon: FileSignature,
      badge: 'Verified',
      badgeColor: 'bg-[#5c8770] text-white',
    },
    {
      id: 'pengaturan' as TabType,
      label: 'Pengaturan',
      icon: Settings,
      badge: null,
    },
  ];

  return (
    <div className="flex w-full min-h-screen bg-[#f8f7f2] font-sans antialiased text-[#1a3626]">
      
      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div 
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 sm:w-72 bg-[#1a3626] text-white flex flex-col justify-between transition-transform duration-300 ease-in-out border-r border-[#1a3626] overflow-y-auto ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Brand Logo & Close for Mobile */}
          <div className="p-6 pb-8 border-b border-white/10 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img src="/logo.png" alt="Circulo Logo" className="w-8 h-8 object-contain" />
              <div>
                <span className="text-xl font-black text-white tracking-tight block leading-none">
                  Circulo
                </span>
                <span className="text-[10px] font-mono text-[#f3c44c] uppercase tracking-wider font-bold">
                  B2B Client Portal
                </span>
              </div>
            </Link>

            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden text-white/70 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="p-4 space-y-1.5">
            <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
              Menu Utama Portal
            </div>

            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  type="button"
                  className={`w-full flex items-center justify-between px-3.5 py-3 text-xs font-bold transition-all cursor-pointer rounded-none text-left ${
                    isActive
                      ? 'bg-white text-[#1a3626] shadow-sm font-extrabold'
                      : 'text-white/75 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={17} className={isActive ? 'text-[#1a3626]' : 'text-white/70'} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span 
                      className={`text-[10px] font-mono px-2 py-0.5 font-bold ${
                        item.badgeColor || (isActive ? 'bg-[#1a3626] text-white' : 'bg-white/20 text-white')
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <div className="p-3 bg-white/5 border border-white/10 text-xs">
            <span className="text-[10px] font-mono text-[#f3c44c] block uppercase font-bold mb-0.5">
              Akun Klien Terverifikasi
            </span>
            <p className="font-bold text-white text-xs truncate">PT Danareksa (Persero)</p>
            <p className="text-[11px] text-white/60 truncate">PIC: Arya Pratama</p>
          </div>

          <div className="flex flex-col gap-1 text-xs">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              <ArrowLeft size={14} /> Kembali ke Web Utama
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 px-3 py-2 text-red-300 hover:text-red-200 hover:bg-white/5 transition-colors"
            >
              <LogOut size={14} /> Keluar Portal
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-1.5 text-[#1a3626] hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
            >
              <Menu size={22} />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-gray-500 font-mono">
                <span>Portal</span>
                <span>/</span>
                <span className="text-[#1a3626] font-bold capitalize truncate">{activeTab}</span>
              </div>
              <h1 className="text-base sm:text-2xl font-black text-[#1a3626] tracking-tight truncate">
                {activeTab === 'dashboard' && 'Impact Dashboard'}
                {activeTab === 'katalog' && 'Katalog Produk'}
                {activeTab === 'pesanan' && 'Pesanan Saya'}
                {activeTab === 'esg' && 'Laporan ESG'}
                {activeTab === 'pengaturan' && 'Pengaturan Akun'}
              </h1>
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4">
            
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 border border-gray-200 hover:border-[#1a3626] text-gray-600 hover:text-[#1a3626] transition-colors relative cursor-pointer"
                title="Notifikasi"
              >
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#f3c44c] rounded-full" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 max-w-[calc(100vw-2rem)] bg-white border-2 border-[#1a3626] shadow-xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a3626]">
                      Notifikasi Terbaru
                    </h4>
                    <span className="text-[10px] font-mono bg-[#f8f7f2] px-2 py-0.5 text-gray-600">
                      2 Baru
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-[#f8f7f2] border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[#1a3626]">PO-064 Lolos QC</span>
                        <span className="text-[10px] text-gray-400">2 jam lalu</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">500 unit Seminar Kit siap dikirim.</p>
                    </div>
                    <div className="p-2.5 bg-[#f8f7f2] border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[#1a3626]">Sertifikat Emisi Q3 Terbit</span>
                        <span className="text-[10px] text-gray-400">1 hari lalu</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">Sertifikat No: ESG-CIR-2026-8812 siap diunduh.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar Pill */}
            <div className="hidden sm:flex items-center gap-3 pl-2 border-l border-gray-200">
              <div className="w-9 h-9 bg-[#1a3626] text-white flex items-center justify-center font-bold text-xs">
                DN
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#1a3626] block leading-none">
                  PT Danareksa (Persero)
                </span>
                <span className="text-[11px] text-gray-500">
                  Arya Pratama (Lead)
                </span>
              </div>
            </div>

            {/* Back to Website Button */}
            <Link
              href="/"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f8f7f2] hover:bg-[#1a3626] text-[#1a3626] hover:text-white border border-gray-300 hover:border-[#1a3626] text-xs font-bold transition-all"
            >
              Lihat Web <ExternalLink size={12} />
            </Link>

          </div>

        </header>

        {/* Tab Content Render */}
        <main className="flex-1 p-3.5 sm:p-6 lg:p-10 max-w-7xl mx-auto w-full pb-24 lg:pb-10">
          {activeTab === 'dashboard' && (
            <DashboardOverview onNavigateTab={handleSelectTab} />
          )}
          {activeTab === 'katalog' && (
            <DashboardKatalog />
          )}
          {activeTab === 'pesanan' && (
            <DashboardOrders />
          )}
          {activeTab === 'esg' && (
            <DashboardESG />
          )}
          {activeTab === 'pengaturan' && (
            <DashboardSettings />
          )}
        </main>

        {/* Mobile Sticky Bottom Navigation Bar */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-2 py-1.5 flex items-center justify-around shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                type="button"
                className={`flex flex-col items-center justify-center flex-1 py-1 px-1 transition-all cursor-pointer ${
                  isActive ? 'text-[#1a3626]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <div className="relative">
                  <Icon size={19} className={isActive ? 'text-[#1a3626]' : 'text-gray-400'} />
                  {item.badge && (
                    <span className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-[#5c8770]" />
                  )}
                </div>
                <span className={`text-[10px] mt-0.5 tracking-tight ${
                  isActive ? 'font-black text-[#1a3626]' : 'font-medium'
                }`}>
                  {item.id === 'dashboard' ? 'Ringkasan' : item.id === 'esg' ? 'ESG' : item.label.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </nav>

      </div>

    </div>
  );
}
