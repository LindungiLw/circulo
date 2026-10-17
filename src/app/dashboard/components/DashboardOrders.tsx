"use client";

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  FileText, 
  ArrowRight,
  X,
  Clock,
  Search,
  MapPin,
  ShieldCheck,
  Copy,
  Check,
  Download,
  Package,
  Layers,
  Sparkles,
  QrCode,
  Truck,
  Building2,
  FileSpreadsheet
} from 'lucide-react';
import { getOrders, OrderItem } from '@/services/orderService';

const ORDERS_LIST: OrderItem[] = [
  {
    id: 'PO-CIR-2026-081',
    productName: 'Eco Lanyard & ID Holder (rPET)',
    qty: '2.000 Unit',
    poDate: '28 Sep 2026',
    estDelivery: '18 Nov 2026',
    status: 'Dalam Produksi',
    progress: 65,
    craftPartner: 'Sentra Anyam Tasikmalaya',
    invoiceAmount: 'Rp 36.000.000',
    steps: [
      { title: 'Persetujuan Desain & PO', date: '28 Sep 2026', done: true },
      { title: 'Penyortiran Serat rPET', date: '04 Okt 2026', done: true },
      { title: 'Produksi Anyaman & Jahit', date: '10 Okt 2026', done: true, current: true },
      { title: 'Inspeksi Mutu QC', date: 'Est. 12 Nov 2026', done: false },
      { title: 'Pengiriman Logistik', date: 'Est. 18 Nov 2026', done: false },
    ],
  },
  {
    id: 'PO-CIR-2026-064',
    productName: 'Seminar Kit Delegate (Pouch & Notebook)',
    qty: '500 Unit',
    poDate: '15 Sep 2026',
    estDelivery: '25 Okt 2026',
    status: 'Inspeksi QC',
    progress: 88,
    craftPartner: 'Sentra Upcycle Sukabumi',
    invoiceAmount: 'Rp 42.500.000',
    steps: [
      { title: 'Persetujuan Desain & PO', date: '15 Sep 2026', done: true },
      { title: 'Pemilahan Residu Kain & Kertas', date: '20 Sep 2026', done: true },
      { title: 'Produksi & Finishing Kriya', date: '02 Okt 2026', done: true },
      { title: 'Pemeriksaan Mutu & Labelling', date: '12 Okt 2026', done: true, current: true },
      { title: 'Pengiriman Logistik', date: 'Est. 25 Okt 2026', done: false },
    ],
  },
  {
    id: 'PO-CIR-2026-042',
    productName: 'Executive Gift Set VIP',
    qty: '100 Box',
    poDate: '25 Agu 2026',
    estDelivery: '02 Okt 2026',
    status: 'Terkirim',
    progress: 100,
    craftPartner: 'Sentra Kriya Daur Ulang Sleman',
    invoiceAmount: 'Rp 27.500.000',
    steps: [
      { title: 'Persetujuan Desain & PO', date: '25 Agu 2026', done: true },
      { title: 'Pemilihan Kayu Daur Ulang', date: '30 Agu 2026', done: true },
      { title: 'Produksi & Custom Packaging', date: '14 Sep 2026', done: true },
      { title: 'Verifikasi QC & Sertifikat ESG', date: '28 Sep 2026', done: true },
      { title: 'Pesanan Selesai & Diterima', date: '02 Okt 2026', done: true },
    ],
  },
  {
    id: 'PO-CIR-2026-019',
    productName: 'Eco Tote Bag rPET Custom',
    qty: '1.500 Unit',
    poDate: '10 Jul 2026',
    estDelivery: '14 Sep 2026',
    status: 'Terkirim',
    progress: 100,
    craftPartner: 'Komunitas Kriya Bandung',
    invoiceAmount: 'Rp 45.000.000',
    steps: [
      { title: 'Persetujuan Desain & PO', date: '10 Jul 2026', done: true },
      { title: 'Pengolahan Botol Plastik Bekas', date: '18 Jul 2026', done: true },
      { title: 'Pemotongan & Jahit', date: '15 Agu 2026', done: true },
      { title: 'Pemeriksaan Mutu QC', date: '05 Sep 2026', done: true },
      { title: 'Pesanan Selesai & Diterima', date: '14 Sep 2026', done: true },
    ],
  },
];

const PRODUCT_IMAGE_FALLBACKS: Record<string, string> = {
  'PO-CIR-2026-081': '/Produk/Lanyard.png',
  'PO-CIR-2026-064': '/Produk/Notebook.png',
  'PO-CIR-2026-042': '/Produk/Gift Set.png',
  'PO-CIR-2026-019': '/Produk/Tote Bag.png',
};

function getProductImage(order: OrderItem): string {
  if (PRODUCT_IMAGE_FALLBACKS[order.id]) return PRODUCT_IMAGE_FALLBACKS[order.id];
  const name = order.productName.toLowerCase();
  if (name.includes('lanyard')) return '/Produk/Lanyard.png';
  if (name.includes('tote')) return '/Produk/Tote Bag.png';
  if (name.includes('notebook') || name.includes('seminar') || name.includes('pouch')) return '/Produk/Notebook.png';
  if (name.includes('gift') || name.includes('vip')) return '/Produk/Gift Set.png';
  if (name.includes('organizer')) return '/Produk/Desk Organizer.png';
  if (name.includes('sleeve') || name.includes('laptop')) return '/Produk/Laptop Sleeve.png';
  return '/Produk/Tote Bag.png';
}

export default function DashboardOrders() {
  const [orders, setOrders] = useState<OrderItem[]>(ORDERS_LIST);
  const [filterStatus, setFilterStatus] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    getOrders().then((data) => {
      if (data && data.length > 0) {
        setOrders(data);
      }
    });
  }, []);

  const handleCopyPo = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredOrders = orders.filter((o) => {
    const matchesFilter = filterStatus === 'Semua' || o.status === filterStatus;
    const matchesSearch = 
      o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.craftPartner.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadgeConfig = (status: OrderItem['status']) => {
    switch (status) {
      case 'Dalam Produksi':
        return {
          wrapper: 'bg-amber-50 text-amber-900 border-amber-300',
          dot: 'bg-amber-500 animate-pulse',
          label: 'Dalam Produksi',
        };
      case 'Inspeksi QC':
        return {
          wrapper: 'bg-blue-50 text-blue-900 border-blue-300',
          dot: 'bg-blue-500 animate-pulse',
          label: 'Inspeksi QC Dua Tahap',
        };
      case 'Terkirim':
        return {
          wrapper: 'bg-emerald-50 text-emerald-900 border-emerald-300',
          dot: 'bg-emerald-600',
          label: 'Terkirim & Diterima',
        };
      default:
        return {
          wrapper: 'bg-gray-50 text-gray-800 border-gray-300',
          dot: 'bg-gray-400',
          label: status,
        };
    }
  };

  const getCurrentStepInfo = (order: OrderItem) => {
    const currentStep = order.steps.find(s => s.current);
    if (currentStep) {
      const idx = order.steps.indexOf(currentStep) + 1;
      return { stepNum: idx, total: order.steps.length, title: currentStep.title };
    }
    if (order.progress === 100) {
      return { stepNum: order.steps.length, total: order.steps.length, title: 'Pesanan Selesai & Terverifikasi' };
    }
    return { stepNum: 1, total: order.steps.length, title: order.steps[0]?.title || 'Persetujuan Desain' };
  };

  // KPI Calculations
  const totalVolume = '4.100 Unit';
  const totalNilai = 'Rp 151.000.000';
  const activeCount = orders.filter(o => o.status !== 'Terkirim').length;
  const completedCount = orders.filter(o => o.status === 'Terkirim').length;

  return (
    <div className="space-y-6">
      
      {/* 1. Header with Breadcrumb & Export Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#1a3626] text-[#f3c44c] text-[10px] font-mono font-bold mb-1.5">
            <ShieldCheck size={12} /> B2B SUPPLY CHAIN TRACKER
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#1a3626] tracking-tight">
            Manajemen Pesanan & Rantai Pasok
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Pelacakan transparan dua tahap (Two-Stage QC), verifikasi sentra pengrajin daerah, dan jadwal logistik.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => alert('Mengekspor Rekap PO (Excel) untuk audit korporat...')}
            className="px-3.5 py-2 bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#1a3626] text-[#1a3626] text-xs font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <FileSpreadsheet size={14} className="text-[#5c8770]" />
            <span>Ekspor Rekap PO</span>
          </button>
        </div>
      </div>

      {/* 2. Top Summary KPI Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white border border-gray-200 p-3.5 sm:p-4 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-mono text-gray-400 uppercase font-semibold">Total Pengadaan</span>
            <Package size={15} className="text-[#5c8770]" />
          </div>
          <div className="text-base sm:text-xl font-black text-[#1a3626]">
            {orders.length} Kontrak PO
          </div>
          <div className="text-[10px] text-gray-500 mt-1 font-mono">
            Volume: <strong className="text-gray-800">{totalVolume}</strong>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-3.5 sm:p-4 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-mono text-gray-400 uppercase font-semibold">Nilai Pengadaan (YTD)</span>
            <Building2 size={15} className="text-[#5c8770]" />
          </div>
          <div className="text-base sm:text-xl font-black text-[#1a3626]">
            {totalNilai}
          </div>
          <div className="text-[10px] text-[#5c8770] font-bold mt-1 font-mono">
            POJK 51 & GRI Ready
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-3.5 sm:p-4 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-mono text-gray-400 uppercase font-semibold">Produksi & QC Aktif</span>
            <Layers size={15} className="text-amber-600" />
          </div>
          <div className="text-base sm:text-xl font-black text-amber-800">
            {activeCount} Batch Berjalan
          </div>
          <div className="text-[10px] text-gray-500 mt-1 font-mono">
            Tasikmalaya & Sukabumi
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-3.5 sm:p-4 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-mono text-gray-400 uppercase font-semibold">Selesai & Terkirim</span>
            <Truck size={15} className="text-emerald-700" />
          </div>
          <div className="text-base sm:text-xl font-black text-emerald-800">
            {completedCount} Batch Tuntas
          </div>
          <div className="text-[10px] text-emerald-700 font-bold mt-1 font-mono">
            100% On-Time Delivery
          </div>
        </div>
      </div>

      {/* 3. Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center bg-white p-3 border border-gray-200 shadow-xs">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari ID PO, nama merchandise, sentra kriya..."
            className="w-full pl-9 pr-4 py-2 bg-[#f8f7f2] border border-gray-200 text-xs text-[#1a3626] placeholder:text-gray-400 focus:outline-none focus:border-[#1a3626]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black cursor-pointer"
            >
              <X size={13} />
            </button>
          )}
        </div>

        {/* Filter Pills with Counters */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap">
          {[
            { id: 'Semua', label: 'Semua', count: orders.length },
            { id: 'Dalam Produksi', label: 'Dalam Produksi', count: orders.filter(o => o.status === 'Dalam Produksi').length },
            { id: 'Inspeksi QC', label: 'Inspeksi QC', count: orders.filter(o => o.status === 'Inspeksi QC').length },
            { id: 'Terkirim', label: 'Terkirim', count: orders.filter(o => o.status === 'Terkirim').length },
          ].map((st) => {
            const isActive = filterStatus === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setFilterStatus(st.id)}
                className={`px-3 py-1.5 text-xs font-bold transition-all cursor-pointer border whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#1a3626] text-white border-[#1a3626] shadow-xs'
                    : 'bg-[#f8f7f2] text-gray-600 border-gray-200 hover:border-gray-400'
                }`}
              >
                <span>{st.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-none font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                }`}>
                  {st.count}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* 4. Redesigned Orders List */}
      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="p-8 text-center bg-white border border-gray-200">
            <Package size={32} className="mx-auto text-gray-300 mb-2" />
            <h4 className="text-xs font-bold text-gray-600">Tidak ada pesanan yang sesuai filter</h4>
            <button
              onClick={() => { setFilterStatus('Semua'); setSearchQuery(''); }}
              className="mt-3 px-3 py-1.5 bg-[#1a3626] text-white text-xs font-bold cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          filteredOrders.map((order) => {
            const badgeCfg = getStatusBadgeConfig(order.status);
            const stepInfo = getCurrentStepInfo(order);
            const isDelivered = order.status === 'Terkirim';

            return (
              <div
                key={order.id}
                className="bg-white border-2 border-gray-200 hover:border-[#1a3626] transition-all shadow-xs hover:shadow-[4px_4px_0px_#1a3626] overflow-hidden"
              >
                {/* Top Card Strip: PO Header & Status */}
                <div className="bg-[#f8f7f2] px-4 sm:px-6 py-2.5 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-black text-[#1a3626] text-xs">
                        {order.id}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleCopyPo(order.id, e)}
                        className="text-gray-400 hover:text-[#1a3626] transition-colors cursor-pointer p-0.5"
                        title="Salin Nomor PO"
                      >
                        {copiedId === order.id ? (
                          <Check size={12} className="text-emerald-700" />
                        ) : (
                          <Copy size={12} />
                        )}
                      </button>
                    </div>

                    <span className="text-gray-300">•</span>
                    <span className="text-[11px] text-gray-500 font-mono">
                      PO Diterbitkan: <strong className="text-gray-700 font-sans">{order.poDate}</strong>
                    </span>
                  </div>

                  {/* Status Pill with Pulsing Indicator */}
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border text-[11px] font-bold ${badgeCfg.wrapper}`}>
                    <span className={`w-2 h-2 rounded-full ${badgeCfg.dot}`} />
                    <span>{badgeCfg.label}</span>
                  </div>
                </div>

                {/* Main Card Grid: Visual, Specs, Progress, Action */}
                <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                  
                  {/* Left Column: Product Thumbnail & Details (5 cols) */}
                  <div className="lg:col-span-5 flex items-start gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f8f7f2] border border-gray-200 p-1.5 shrink-0 overflow-hidden relative">
                      <img
                        src={getProductImage(order)}
                        alt={order.productName}
                        className="w-full h-full object-contain"
                      />
                      {isDelivered && (
                        <span className="absolute bottom-1 right-1 bg-emerald-600 text-white p-0.5 rounded-full" title="Telah Terkirim">
                          <Check size={10} strokeWidth={3} />
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5 min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#1a3626] leading-snug truncate">
                        {order.productName}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-[#5c8770] font-semibold">
                        <MapPin size={13} className="shrink-0 text-[#1a3626]" />
                        <span className="truncate">{order.craftPartner}</span>
                      </div>

                      <div className="flex items-center gap-4 text-xs font-mono pt-0.5">
                        <span className="text-gray-500">
                          Volume: <strong className="text-[#1a3626] font-bold">{order.qty}</strong>
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-500">
                          Nilai: <strong className="text-[#1a3626] font-bold">{order.invoiceAmount}</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Visual Milestone Progress (4 cols) */}
                  <div className="lg:col-span-4 bg-[#f8f7f2] border border-gray-200 p-3 sm:p-3.5 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">
                        Tahap {stepInfo.stepNum} dari {stepInfo.total}
                      </span>
                      <span className="font-mono font-black text-[#1a3626] text-xs">
                        {order.progress}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 h-2 border border-gray-300 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          isDelivered ? 'bg-emerald-600' : 'bg-[#1a3626]'
                        }`}
                        style={{ width: `${order.progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] gap-2 pt-0.5">
                      <span className="font-bold text-[#1a3626] truncate max-w-[65%]">
                        {stepInfo.title}
                      </span>
                      <span className="text-gray-500 font-mono text-[10px] flex items-center gap-1 shrink-0">
                        <Clock size={11} className="text-[#5c8770]" />
                        <span>{order.estDelivery}</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Action Buttons Suite (3 cols) */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center justify-end gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setSelectedOrder(order)}
                      className="flex-1 lg:w-full py-2.5 px-4 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-extrabold flex items-center justify-center gap-2 border border-[#1a3626] transition-all cursor-pointer shadow-xs"
                    >
                      <span>Lacak Rantai Pasok</span>
                      <ArrowRight size={13} />
                    </button>

                    <div className="flex items-center gap-1.5 w-auto lg:w-full">
                      <button
                        type="button"
                        onClick={() => alert(`Mengunduh dokumen invoice resmi untuk ${order.id}...`)}
                        className="flex-1 py-2 px-3 bg-white hover:bg-gray-50 text-[#1a3626] text-xs font-bold border border-gray-300 hover:border-[#1a3626] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        title="Unduh Invoice Resmi"
                      >
                        <FileText size={13} className="text-[#5c8770]" />
                        <span className="hidden sm:inline">Invoice</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => alert(`Menampilkan Sertifikat Traceability QR Code untuk batch ${order.id}...`)}
                        className="p-2 bg-white hover:bg-gray-50 text-[#1a3626] border border-gray-300 hover:border-[#1a3626] transition-colors cursor-pointer"
                        title="Verifikasi QR Traceability"
                      >
                        <QrCode size={15} />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })
        )}
      </div>

      {/* 5. Clean & Detailed Supply Chain Tracking Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-xl border-2 border-[#1a3626] shadow-xl overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-[#1a3626] text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center border border-white/20">
                  <Package size={20} className="text-[#f3c44c]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#f3c44c] font-bold block uppercase tracking-wider">
                    Audit Rantai Pasok Terintegrasi
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {selectedOrder.id} — {selectedOrder.productName}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="text-white/70 hover:text-white p-1 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1">
              
              {/* Order Meta Pills */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-[#f8f7f2] border border-gray-200 text-xs font-mono">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-sans">Volume Pesanan:</span>
                  <strong className="text-[#1a3626] text-xs">{selectedOrder.qty}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-sans">Nilai Kontrak:</span>
                  <strong className="text-[#1a3626] text-xs">{selectedOrder.invoiceAmount}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-sans">Est. Pengiriman:</span>
                  <strong className="text-[#1a3626] text-xs">{selectedOrder.estDelivery}</strong>
                </div>
              </div>

              {/* Partner Highlight */}
              <div className="p-3 bg-[#e8efe9] border border-[#5c8770]/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#1a3626]" />
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono block">Sentra Pengrajin Diberdayakan:</span>
                    <strong className="text-[#1a3626] font-bold">{selectedOrder.craftPartner}</strong>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold bg-[#1a3626] text-[#f3c44c] px-2 py-0.5">
                  Fair Wage SDG 8
                </span>
              </div>

              {/* 5-Step Timeline Tracker */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a3626] mb-3 flex items-center justify-between">
                  <span>Tahapan Produksi & Two-Stage QC</span>
                  <span className="text-[10px] font-mono text-[#5c8770] font-bold">
                    Progress: {selectedOrder.progress}%
                  </span>
                </h4>

                <div className="space-y-3 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gray-200">
                  {selectedOrder.steps.map((st, i) => (
                    <div key={i} className="flex items-start gap-3 relative z-10">
                      <div
                        className={`w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 ${
                          st.done
                            ? 'bg-[#1a3626] text-[#f3c44c]'
                            : st.current
                            ? 'bg-[#f3c44c] text-[#1a3626] ring-2 ring-[#1a3626]'
                            : 'border border-gray-300 text-gray-400 bg-white'
                        }`}
                      >
                        {st.done ? <Check size={13} strokeWidth={3} /> : i + 1}
                      </div>

                      <div className="flex-1 p-2.5 bg-[#f8f7f2] border border-gray-200">
                        <div className="flex justify-between items-center text-xs">
                          <span className={`font-bold ${st.current ? 'text-[#1a3626]' : 'text-gray-800'}`}>
                            {st.title}
                          </span>
                          <span className="text-[10px] font-mono text-gray-400">{st.date}</span>
                        </div>
                        {st.current && (
                          <div className="mt-1 text-[11px] text-[#5c8770] font-semibold flex items-center gap-1">
                            <Sparkles size={11} /> Sedang berlangsung dalam fasilitas perajin binaan.
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-3.5 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => alert(`Mengunduh berkas dossier audit untuk pesanan ${selectedOrder.id}...`)}
                className="text-xs font-bold text-[#1a3626] hover:text-[#5c8770] flex items-center gap-1.5 cursor-pointer"
              >
                <Download size={13} /> Unduh Berkas Audit (PDF)
              </button>

              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="px-5 py-2 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-bold uppercase cursor-pointer"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
