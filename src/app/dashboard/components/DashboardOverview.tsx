"use client";

import React, { useState } from 'react';
import { 
  Recycle, 
  CloudFog, 
  Users, 
  Boxes, 
  ArrowUp, 
  Download, 
  ArrowRight
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

  const datasetsMap = {
    plastik: {
      label: 'Plastik Terdiversi (kg)',
      data: [60, 140, 280, 420, 580, 750, 920, 1080, 1190, 1250],
      borderColor: '#1a3626',
      backgroundColor: 'rgba(26, 54, 38, 0.06)',
      unit: 'kg',
    },
    karbon: {
      label: 'Reduksi Karbon CO₂ (kg)',
      data: [150, 390, 780, 1200, 1680, 2150, 2600, 2980, 3250, 3420],
      borderColor: '#5c8770',
      backgroundColor: 'rgba(92, 135, 112, 0.08)',
      unit: 'kg CO₂',
    },
    jam: {
      label: 'Jam Kerja Fair-Wage (Jam)',
      data: [35, 75, 140, 210, 280, 340, 390, 430, 460, 480],
      borderColor: '#d49b20',
      backgroundColor: 'rgba(243, 196, 76, 0.1)',
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
        pointRadius: 3,
        pointHoverRadius: 5,
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
        titleFont: { size: 11, weight: 'bold' as const },
        bodyFont: { size: 11 },
        padding: 8,
        cornerRadius: 0,
        displayColors: false,
        callbacks: {
          label: (context: any) => `${context.parsed.y} ${currentDataset.unit}`,
        },
      },
    },
    scales: {
      y: {
        grid: { color: 'rgba(0,0,0,0.04)' },
        border: { display: false },
        ticks: { font: { size: 11 }, color: '#9ca3af' },
      },
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { font: { size: 11 }, color: '#9ca3af' },
      },
    },
  };

  return (
    <div className="space-y-6">
      
      {/* Sleek Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h2 className="text-xl font-bold text-[#1a3626]">Ringkasan Dampak ESG</h2>
          <p className="text-xs text-gray-500 mt-0.5">PT Danareksa (Persero) • Periode YTD 2026</p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={() => onNavigateTab('esg')}
            className="flex-1 sm:flex-initial justify-center px-3.5 py-2 bg-white hover:bg-gray-50 border border-gray-300 text-[#1a3626] text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Download size={13} /> Unduh Laporan PDF
          </button>
          <button
            onClick={() => onNavigateTab('katalog')}
            className="flex-1 sm:flex-initial justify-center px-3.5 py-2 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
          >
            Buat Pesanan <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* 4 Clean Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          {
            title: 'Plastik Terdiversi',
            value: '1,250 kg',
            trend: '+15%',
            icon: Recycle,
            metricKey: 'plastik' as const,
          },
          {
            title: 'Reduksi Karbon CO₂',
            value: '3,420 kg',
            trend: '+12%',
            icon: CloudFog,
            metricKey: 'karbon' as const,
          },
          {
            title: 'Jam Kerja Pengrajin',
            value: '480 Jam',
            trend: '+20%',
            icon: Users,
            metricKey: 'jam' as const,
          },
          {
            title: 'Total Eco-Merch',
            value: '5,000 Unit',
            trend: '4 Batch',
            icon: Boxes,
            metricKey: 'plastik' as const,
          },
        ].map((card, idx) => (
          <div
            key={idx}
            onClick={() => setActiveMetric(card.metricKey)}
            className={`bg-white border p-3.5 sm:p-5 transition-all cursor-pointer shadow-xs ${
              activeMetric === card.metricKey
                ? 'border-[#1a3626] bg-[#1a3626]/[0.02]'
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs font-medium text-gray-500 truncate">{card.title}</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#f8f7f2] border border-gray-200 flex items-center justify-center text-[#1a3626] shrink-0">
                <card.icon size={13} />
              </div>
            </div>
            <div className="text-base sm:text-2xl font-black text-[#1a3626] tracking-tight">{card.value}</div>
            <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] font-semibold text-[#5c8770] flex items-center gap-1">
              <ArrowUp size={11} /> {card.trend} <span className="hidden sm:inline">vs periode lalu</span>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Grid: Chart + Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Chart Column (8 cols) */}
        <div className="lg:col-span-8 bg-white border border-gray-200 p-4 sm:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
            <h3 className="text-sm font-bold text-[#1a3626]">Grafik Dampak Kumulatif (2026)</h3>

            <div className="flex items-center gap-1 p-0.5 bg-[#f8f7f2] border border-gray-200 w-full sm:w-auto justify-between sm:justify-start">
              <button
                type="button"
                onClick={() => setActiveMetric('plastik')}
                className={`flex-1 sm:flex-initial text-center px-3 py-1 text-xs font-bold transition-colors cursor-pointer ${
                  activeMetric === 'plastik' ? 'bg-[#1a3626] text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                Plastik
              </button>
              <button
                type="button"
                onClick={() => setActiveMetric('karbon')}
                className={`px-3 py-1 text-xs font-bold transition-colors cursor-pointer ${
                  activeMetric === 'karbon' ? 'bg-[#1a3626] text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                Emisi CO₂
              </button>
              <button
                type="button"
                onClick={() => setActiveMetric('jam')}
                className={`px-3 py-1 text-xs font-bold transition-colors cursor-pointer ${
                  activeMetric === 'jam' ? 'bg-[#1a3626] text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                Jam Kerja
              </button>
            </div>
          </div>

          <div className="h-64 w-full">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Recent Orders Column (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-gray-200 p-4 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-[#1a3626]">Status Pesanan</h3>
              <button
                onClick={() => onNavigateTab('pesanan')}
                className="text-xs font-bold text-[#5c8770] hover:text-[#1a3626]"
              >
                Semua
              </button>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'PO-081',
                  name: 'Eco Lanyard (rPET)',
                  qty: '2.000 pcs',
                  status: 'Produksi',
                  statusColor: 'bg-amber-100 text-amber-900 border-amber-300',
                  progress: 65,
                },
                {
                  id: 'PO-064',
                  name: 'Seminar Kit Delegate',
                  qty: '500 pcs',
                  status: 'QC Inspeksi',
                  statusColor: 'bg-blue-100 text-blue-900 border-blue-300',
                  progress: 88,
                },
                {
                  id: 'PO-042',
                  name: 'VIP Hampers Set',
                  qty: '100 pcs',
                  status: 'Terkirim',
                  statusColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
                  progress: 100,
                },
              ].map((order) => (
                <div key={order.id} className="p-3 bg-[#f8f7f2] border border-gray-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1a3626]">{order.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 border ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-500 mb-1.5">
                    <span>{order.id}</span>
                    <span>{order.qty}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5">
                    <div 
                      className="bg-[#1a3626] h-full" 
                      style={{ width: `${order.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('pesanan')}
            className="w-full mt-4 py-2 bg-[#f8f7f2] hover:bg-[#1a3626] text-[#1a3626] hover:text-white border border-gray-300 hover:border-[#1a3626] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            Lacak Pengiriman <ArrowRight size={13} />
          </button>
        </div>

      </div>

    </div>
  );
}
