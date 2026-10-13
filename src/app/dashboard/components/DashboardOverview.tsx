"use client";

import React, { useState } from 'react';
import { 
  Recycle, 
  CloudFog, 
  Users, 
  Boxes, 
  ArrowUp, 
  Download, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles
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

interface DashboardOverviewProps {
  onNavigateTab: (tab: 'dashboard' | 'katalog' | 'pesanan' | 'esg' | 'pengaturan') => void;
}

export default function DashboardOverview({ onNavigateTab }: DashboardOverviewProps) {
  const [activeMetric, setActiveMetric] = useState<'plastik' | 'karbon' | 'jam'>('plastik');
  const [downloading, setDownloading] = useState(false);

  // Chart datasets according to selected metric
  const datasetsMap = {
    plastik: {
      label: 'Plastik Terdiversi (kg)',
      data: [60, 140, 280, 420, 580, 750, 920, 1080, 1190, 1250],
      borderColor: '#1a3626',
      backgroundColor: 'rgba(26, 54, 38, 0.08)',
      unit: 'kg',
    },
    karbon: {
      label: 'Reduksi Karbon CO₂ (kg)',
      data: [150, 390, 780, 1200, 1680, 2150, 2600, 2980, 3250, 3420],
      borderColor: '#5c8770',
      backgroundColor: 'rgba(92, 135, 112, 0.12)',
      unit: 'kg CO₂',
    },
    jam: {
      label: 'Jam Kerja Fair-Wage (Jam)',
      data: [35, 75, 140, 210, 280, 340, 390, 430, 460, 480],
      borderColor: '#d49b20',
      backgroundColor: 'rgba(243, 196, 76, 0.15)',
      unit: 'Jam',
    },
  };

  const currentDataset = datasetsMap[activeMetric];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt'],
    datasets: [
      {
        fill: true,
        label: currentDataset.label,
        data: currentDataset.data,
        borderColor: currentDataset.borderColor,
        backgroundColor: currentDataset.backgroundColor,
        tension: 0.35,
        borderWidth: 2,
        pointBackgroundColor: currentDataset.borderColor,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1a3626',
        titleFont: { size: 12, weight: 'bold' as const },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 0,
        displayColors: false,
        callbacks: {
          label: (context: any) => `${context.parsed.y} ${currentDataset.unit}`,
        },
      },
    },
    scales: {
      y: {
        grid: { color: 'rgba(0,0,0,0.05)' },
        border: { display: false },
        ticks: { font: { size: 11 }, color: '#6b7280' },
      },
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { font: { size: 11 }, color: '#6b7280' },
      },
    },
  };

  const handleDownloadReport = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert('Sertifikat & Laporan ESG Resmi (PT Danareksa - Q3 2026.pdf) berhasil diunduh.');
    }, 1200);
  };

  return (
    <div className="space-y-8">
      
      {/* Welcome Banner */}
      <div className="bg-[#1a3626] text-white p-6 sm:p-8 border border-[#1a3626] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase bg-[#f3c44c] text-[#1a3626] px-2.5 py-0.5 font-bold mb-3">
            Status Akun: Klien B2B Aktif
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ringkasan Dampak ESG PT Danareksa
          </h2>
          <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Data dampak sirkular terverifikasi dari pengadaan merchandise kantor dan paket kegiatan korporat hingga Oktober 2026.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            onClick={handleDownloadReport}
            disabled={downloading}
            className="px-5 py-2.5 bg-[#f3c44c] hover:bg-[#e5b338] text-[#1a3626] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Download size={14} />
            {downloading ? 'Memproses PDF...' : 'Unduh ESG Report'}
          </button>
          <button
            onClick={() => onNavigateTab('katalog')}
            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
          >
            Katalog Produk <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* 4 Primary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          {
            title: 'Plastik Terdiversi',
            value: '1,250 kg',
            sub: '≈ 31.250 botol PET',
            trend: '+15% bulan ini',
            icon: Recycle,
            metricKey: 'plastik' as const,
            accent: 'border-l-4 border-l-[#1a3626]',
          },
          {
            title: 'Reduksi Jejak Karbon',
            value: '3,420 kg CO₂',
            sub: 'Scope 3 Emission offset',
            trend: '+12% bulan ini',
            icon: CloudFog,
            metricKey: 'karbon' as const,
            accent: 'border-l-4 border-l-[#5c8770]',
          },
          {
            title: 'Jam Kerja Pengrajin',
            value: '480 Jam',
            sub: 'Standar upah layak regional',
            trend: '+20% vs kuartal lalu',
            icon: Users,
            metricKey: 'jam' as const,
            accent: 'border-l-4 border-l-[#f3c44c]',
          },
          {
            title: 'Total Eco-Merch Diterima',
            value: '5,000 Unit',
            sub: '4 batch pengadaan resmi',
            trend: '100% lulus audit QC',
            icon: Boxes,
            metricKey: 'plastik' as const,
            accent: 'border-l-4 border-l-[#1a3626]',
          },
        ].map((card, idx) => (
          <div
            key={idx}
            onClick={() => setActiveMetric(card.metricKey)}
            className={`bg-white border border-gray-200 p-5 transition-all hover:border-[#1a3626] shadow-xs cursor-pointer ${card.accent}`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-500">{card.title}</span>
              <div className="w-8 h-8 bg-[#f8f7f2] border border-gray-200 flex items-center justify-center text-[#1a3626]">
                <card.icon size={16} />
              </div>
            </div>
            <div className="text-2xl font-black text-[#1a3626] mb-1">{card.value}</div>
            <div className="text-[11px] text-gray-500 mb-2">{card.sub}</div>
            <div className="text-[11px] font-bold text-[#5c8770] flex items-center gap-1">
              <ArrowUp size={12} /> {card.trend}
            </div>
          </div>
        ))}
      </div>

      {/* Middle Grid: Interactive Chart + Active Orders Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Chart Column (8 cols) */}
        <div className="lg:col-span-8 bg-white border border-gray-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-base font-bold text-[#1a3626]">Grafik Akumulasi Dampak Lingkungan (YTD 2026)</h3>
                <p className="text-xs text-gray-500 mt-0.5">Pilih metrik di bawah untuk meninjau data historis.</p>
              </div>

              {/* Metric Tab Toggle */}
              <div className="flex items-center gap-1.5 p-1 bg-[#f8f7f2] border border-gray-200">
                <button
                  type="button"
                  onClick={() => setActiveMetric('plastik')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                    activeMetric === 'plastik' ? 'bg-[#1a3626] text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Plastik
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMetric('karbon')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                    activeMetric === 'karbon' ? 'bg-[#1a3626] text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Emisi CO₂
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMetric('jam')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                    activeMetric === 'jam' ? 'bg-[#1a3626] text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Jam Kerja
                </button>
              </div>
            </div>

            <div className="h-72 w-full">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#5c8770]" />
              Data telah diaudit independen dan sesuai kaidah GHG Protocol.
            </span>
            <button
              onClick={() => onNavigateTab('esg')}
              className="font-bold text-[#1a3626] hover:text-[#5c8770] flex items-center gap-1"
            >
              Lihat Detail Audit ESG <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Recent Orders Column (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-gray-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <h3 className="text-base font-bold text-[#1a3626]">Status Pesanan Terbaru</h3>
              <button
                onClick={() => onNavigateTab('pesanan')}
                className="text-xs font-bold text-[#5c8770] hover:text-[#1a3626] transition-colors"
              >
                Lihat Semua
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 'PO-CIR-2026-081',
                  name: 'Eco Lanyard & ID Holder',
                  qty: '2.000 unit',
                  status: 'Dalam Produksi',
                  statusColor: 'bg-amber-100 text-amber-900 border-amber-300',
                  progress: 65,
                },
                {
                  id: 'PO-CIR-2026-064',
                  name: 'Seminar Kit Delegate',
                  qty: '500 unit',
                  status: 'Inspeksi QC',
                  statusColor: 'bg-blue-100 text-blue-900 border-blue-300',
                  progress: 88,
                },
                {
                  id: 'PO-CIR-2026-042',
                  name: 'Corporate Hampers VIP',
                  qty: '100 unit',
                  status: 'Terkirim',
                  statusColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
                  progress: 100,
                },
              ].map((order) => (
                <div key={order.id} className="p-3.5 bg-[#f8f7f2] border border-gray-200">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 block">{order.id}</span>
                      <h4 className="text-xs font-bold text-[#1a3626]">{order.name}</h4>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 border ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </div>

                  <div className="text-[11px] text-gray-600 mb-2">Jumlah: {order.qty}</div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 h-1.5 overflow-hidden">
                    <div 
                      className="bg-[#1a3626] h-full transition-all duration-500" 
                      style={{ width: `${order.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() => onNavigateTab('katalog')}
              className="w-full py-2.5 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              Buat Pesanan Baru <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* Lower Highlights: Transparency & Traceability */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 p-5 flex items-start gap-4">
          <div className="w-10 h-10 bg-[#1a3626]/10 text-[#1a3626] flex items-center justify-center shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1a3626] mb-1">Ketertelusuran Batch 100%</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Seluruh bahan rPET dan limbah katun dilacak asal usul lokasinya dari mitra daur ulang berlisensi.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-5 flex items-start gap-4">
          <div className="w-10 h-10 bg-[#1a3626]/10 text-[#1a3626] flex items-center justify-center shrink-0">
            <Users size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1a3626] mb-1">120+ Pengrajin Kriya Daerah</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Memberdayakan kelompok perajin lokal di Jawa Barat dan Yogyakarta dengan standar upah layak adil.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-5 flex items-start gap-4">
          <div className="w-10 h-10 bg-[#1a3626]/10 text-[#1a3626] flex items-center justify-center shrink-0">
            <Calendar size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1a3626] mb-1">Audit Emisi Periodik</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Kompilasi otomatis metrik keberlanjutan siap pakai untuk Sustainability Report tahunan korporasi.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
