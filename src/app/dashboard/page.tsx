"use client";

import React from 'react';
import { 
  LayoutDashboard, PackageOpen, ClipboardList, FileSignature, Settings, 
  Bell, Recycle, CloudFog, Users, Boxes, ArrowUp, Download 
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Dashboard() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt'],
    datasets: [
      {
        fill: true,
        label: 'Plastik Terdiversi (kg)',
        data: [0, 50, 120, 250, 300, 450, 600, 850, 1050, 1250],
        borderColor: '#1f3d29', // New primary color
        backgroundColor: 'rgba(31, 61, 41, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { border: { display: false } },
      x: { grid: { display: false }, border: { display: false } },
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r border-slate-200 p-8 h-screen sticky top-0 flex flex-col">
        <div className="flex items-center gap-3 text-2xl font-bold text-primary mb-12">
          <img src="/logo.png" alt="Circulo Logo" className="w-10 h-10 object-contain" />
          <span>Circulo</span>
        </div>
        
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-primary/10 text-primary font-medium transition-colors">
              <LayoutDashboard size={20} /> Impact Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-2xl text-slate-500 hover:bg-primary/10 hover:text-primary font-medium transition-colors">
              <PackageOpen size={20} /> Katalog Produk
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-2xl text-slate-500 hover:bg-primary/10 hover:text-primary font-medium transition-colors">
              <ClipboardList size={20} /> Pesanan Saya
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-2xl text-slate-500 hover:bg-primary/10 hover:text-primary font-medium transition-colors">
              <FileSignature size={20} /> Laporan ESG
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-2xl text-slate-500 hover:bg-primary/10 hover:text-primary font-medium transition-colors">
              <Settings size={20} /> Pengaturan
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Dashboard Keberlanjutan</h1>
            <p className="text-slate-500 mt-1">Pantau metrik ESG dan status pesanan Eco-Merch Anda.</p>
          </div>
          <div className="flex items-center gap-6">
            <Bell className="text-slate-500 cursor-pointer hover:text-primary transition-colors" size={22} />
            <div className="flex items-center gap-4">
              <img src="https://ui-avatars.com/api/?name=PT+XYZ&background=1f3d29&color=fff" alt="Avatar" className="rounded-full w-10 h-10 border-2 border-primary/20" />
              <div>
                <h4 className="text-sm font-semibold text-slate-900">PT Danareksa (Persero)</h4>
                <p className="text-xs text-slate-500">Klien Korporat</p>
              </div>
            </div>
          </div>
        </header>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { title: 'Plastik Terdiversi', value: '1,250 kg', inc: '+15% bulan ini', icon: Recycle },
            { title: 'Reduksi Jejak Karbon', value: '3,420 kg CO₂', inc: '+12% bulan ini', icon: CloudFog },
            { title: 'Jam Kerja Pengrajin', value: '480 Jam', inc: '+20% (SDG 8)', icon: Users },
            { title: 'Total Eco-Merch', value: '5,000 Unit', inc: '3 Batch Pesanan', icon: Boxes },
          ].map((metric, i) => (
            <div key={i} className="bg-white border-2 border-slate-200 border-dashed shape-recycled p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shape-recycled-alt bg-primary/10 text-primary flex items-center justify-center transform rotate-2">
                  <metric.icon size={24} />
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">{metric.title}</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</h3>
              <span className="text-xs font-bold text-primary flex items-center gap-1">
                <ArrowUp size={14}/> {metric.inc}
              </span>
            </div>
          ))}
        </div>

        {/* Charts & Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border-2 border-slate-200 border-dashed shape-recycled-alt p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Grafik Dampak Lingkungan (YTD)</h2>
            <Line options={chartOptions} data={chartData} height={100} />
          </div>

          <div className="bg-white border-2 border-slate-200 border-dashed shape-recycled p-6 shadow-soft">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Status Pesanan</h2>
              <a href="#" className="text-sm text-primary font-semibold hover:underline">Lihat Semua</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center p-4 border border-slate-200 shape-recycled">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Lanyard Daur Ulang</h4>
                  <p className="text-xs text-slate-500">2,000 unit • 12 Nov 2026</p>
                </div>
                <span className="px-3 py-1.5 shape-recycled-alt text-xs font-bold bg-secondary/20 text-yellow-800">Produksi</span>
              </div>
              <div className="flex justify-between items-center p-4 border border-slate-200 shape-recycled-alt">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Seminar Kit Delegate</h4>
                  <p className="text-xs text-slate-500">500 unit • 20 Okt 2026</p>
                </div>
                <span className="px-3 py-1.5 shape-recycled text-xs font-bold bg-blue-100 text-blue-800">Inspeksi QC</span>
              </div>
              <div className="flex justify-between items-center p-4 border border-slate-200 shape-recycled">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Corporate Hampers</h4>
                  <p className="text-xs text-slate-500">100 unit • 1 Okt 2026</p>
                </div>
                <span className="px-3 py-1.5 shape-recycled-alt text-xs font-bold bg-primary/20 text-primary">Terkirim</span>
              </div>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="mt-6 bg-gradient-to-br from-primary to-[#101f14] shape-recycled-alt p-8 text-white flex flex-col md:flex-row justify-between items-center shadow-lg border-2 border-primary/50">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Sertifikat Dampak & Laporan ESG</h2>
            <p className="text-sm opacity-90 max-w-md">Unduh laporan kuantitatif yang divalidasi untuk Sustainability Report perusahaan Anda secara instan.</p>
          </div>
          <button className="bg-secondary text-primary px-6 py-3 shape-recycled font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-md" onClick={() => alert('Mengunduh PDF ESG Report...')}>
            <Download size={18} /> Unduh ESG Report
          </button>
        </div>

      </main>
    </div>
  );
}
