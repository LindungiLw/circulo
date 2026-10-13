"use client";

import React, { useState } from 'react';
import { 
  ClipboardList, 
  Truck, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Download, 
  ArrowRight,
  ExternalLink,
  X,
  MapPin,
  Users,
  ShieldCheck
} from 'lucide-react';

interface OrderItem {
  id: string;
  productName: string;
  qty: string;
  poDate: string;
  estDelivery: string;
  status: 'Dalam Produksi' | 'Inspeksi QC' | 'Terkirim';
  progress: number;
  craftPartner: string;
  location: string;
  traceabilityBatch: string;
  invoiceAmount: string;
  steps: {
    title: string;
    date: string;
    done: boolean;
    current?: boolean;
  }[];
}

const ORDERS_LIST: OrderItem[] = [
  {
    id: 'PO-CIR-2026-081',
    productName: 'Eco Lanyard & ID Holder (rPET)',
    qty: '2.000 Unit',
    poDate: '28 Sep 2026',
    estDelivery: '18 Nov 2026',
    status: 'Dalam Produksi',
    progress: 65,
    craftPartner: 'Komunitas Kriya Anyam Tasikmalaya',
    location: 'Tasikmalaya, Jawa Barat',
    traceabilityBatch: 'BATCH-RPET-2026-09A',
    invoiceAmount: 'Rp 36.000.000',
    steps: [
      { title: 'PO Terbit & Approval Desain Cetak Logo', date: '28 Sep 2026', done: true },
      { title: 'Penyortiran & Pencucian Benang Daur Ulang', date: '04 Okt 2026', done: true },
      { title: 'Anyaman & Jahit Pengrajin Kriya', date: '10 Okt 2026', done: true, current: true },
      { title: 'Inspeksi Standar Mutu QC & Sertifikat ESG', date: 'Est. 12 Nov 2026', done: false },
      { title: 'Pengiriman ke Lokasi Deltamas Cikarang', date: 'Est. 18 Nov 2026', done: false },
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
    craftPartner: 'Mitra Upcycle Limbah Tekstil Sukabumi',
    location: 'Sukabumi, Jawa Barat',
    traceabilityBatch: 'BATCH-TX-2026-088',
    invoiceAmount: 'Rp 42.500.000',
    steps: [
      { title: 'PO Terbit & Approval Mockup Klien', date: '15 Sep 2026', done: true },
      { title: 'Pemisahan Residu Kain Konveksi & Kertas Daur Ulang', date: '20 Sep 2026', done: true },
      { title: 'Produksi & Finishing Kriya', date: '02 Okt 2026', done: true },
      { title: 'Inspeksi Standar Mutu QC & Packaging Daur Ulang', date: '12 Okt 2026', done: true, current: true },
      { title: 'Pengiriman ke Kantor Danareksa', date: 'Est. 25 Okt 2026', done: false },
    ],
  },
  {
    id: 'PO-CIR-2026-042',
    productName: 'Executive Corporate Gift Set VIP',
    qty: '100 Box',
    poDate: '25 Agu 2026',
    estDelivery: '02 Okt 2026',
    status: 'Terkirim',
    progress: 100,
    craftPartner: 'Sentra Kriya Daur Ulang Sleman & Bantul',
    location: 'D.I. Yogyakarta',
    traceabilityBatch: 'BATCH-VIP-2026-044',
    invoiceAmount: 'Rp 27.500.000',
    steps: [
      { title: 'PO Terbit & Approval Custom Emboss', date: '25 Agu 2026', done: true },
      { title: 'Pemilihan Kayu Daur Ulang & Material Sirkular', date: '30 Agu 2026', done: true },
      { title: 'Produksi Handcrafted & Custom Pantone Box', date: '14 Sep 2026', done: true },
      { title: 'Verifikasi QC & Penerbitan Sertifikat ESG', date: '28 Sep 2026', done: true },
      { title: 'Diterima di Kantor Danareksa (Diterima: Arya P.)', date: '02 Okt 2026', done: true },
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
    craftPartner: 'Kelompok Pengrajin Wanita Bandung',
    location: 'Bandung, Jawa Barat',
    traceabilityBatch: 'BATCH-RPET-2026-07K',
    invoiceAmount: 'Rp 45.000.000',
    steps: [
      { title: 'PO Terbit & Approval Cetak Tinta Ramah Lingkungan', date: '10 Jul 2026', done: true },
      { title: 'Pengolahan 12.000 Botol Plastik Bekas', date: '18 Jul 2026', done: true },
      { title: 'Pemotongan Bahan & Jahit', date: '15 Agu 2026', done: true },
      { title: 'Pemeriksaan Mutu & Labelling Dampak Emisi', date: '05 Sep 2026', done: true },
      { title: 'Terkirim & Selesai', date: '14 Sep 2026', done: true },
    ],
  },
];

export default function DashboardOrders() {
  const [filterStatus, setFilterStatus] = useState<string>('Semua');
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);

  const filteredOrders = ORDERS_LIST.filter((o) => {
    if (filterStatus === 'Semua') return true;
    return o.status === filterStatus;
  });

  const getStatusBadge = (status: OrderItem['status']) => {
    switch (status) {
      case 'Dalam Produksi':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Inspeksi QC':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'Terkirim':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h2 className="text-2xl font-black text-[#1a3626] tracking-tight">Manajemen & Lacak Pesanan</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Pantau status pengerjaan pengrajin daerah, jadwal pengiriman, dan dokumen surat jalan PO.
          </p>
        </div>

        {/* Filter status buttons */}
        <div className="flex flex-wrap gap-2">
          {['Semua', 'Dalam Produksi', 'Inspeksi QC', 'Terkirim'].map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setFilterStatus(st)}
              className={`px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer border ${
                filterStatus === st
                  ? 'bg-[#1a3626] text-white border-[#1a3626]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#1a3626]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table / Cards */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white border border-gray-200 p-6 hover:border-[#1a3626] transition-all shadow-xs"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              {/* Order Info */}
              <div className="space-y-2 lg:max-w-md">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold bg-[#f8f7f2] border border-gray-200 px-2 py-0.5 text-[#1a3626]">
                    {order.id}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 border ${getStatusBadge(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1a3626]">{order.productName}</h3>
                
                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-gray-500">
                  <span>Jumlah: <strong className="text-gray-800">{order.qty}</strong></span>
                  <span>Nilai PO: <strong className="text-gray-800">{order.invoiceAmount}</strong></span>
                  <span>PO Dibuat: <strong>{order.poDate}</strong></span>
                </div>
              </div>

              {/* Progress & Delivery */}
              <div className="flex-1 lg:max-w-xs space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">Progress Pengerjaan:</span>
                  <span className="font-bold text-[#1a3626]">{order.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2">
                  <div
                    className="bg-[#1a3626] h-full transition-all duration-500"
                    style={{ width: `${order.progress}%` }}
                  />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock size={13} className="text-[#5c8770]" />
                  <span>Target Kirim: <strong className="text-gray-800">{order.estDelivery}</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedOrder(order)}
                  className="px-4 py-2.5 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Lacak Detail <ArrowRight size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => alert(`Mengunduh Invoice & Surat Jalan untuk ${order.id}...`)}
                  className="p-2.5 border border-gray-300 hover:border-[#1a3626] text-gray-600 hover:text-[#1a3626] transition-colors cursor-pointer"
                  title="Unduh Dokumen PO"
                >
                  <FileText size={16} />
                </button>
              </div>

            </div>

            {/* Bottom Meta Pill */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-gray-500">
              <span className="flex items-center gap-1.5">
                <Users size={13} className="text-[#5c8770]" />
                Pengrajin: <strong className="text-gray-700">{order.craftPartner}</strong> ({order.location})
              </span>
              <span className="font-mono bg-[#1a3626]/5 px-2 py-0.5 text-[#1a3626]">
                Traceability Batch: {order.traceabilityBatch}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Order Tracking Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl border-2 border-[#1a3626] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="bg-[#1a3626] text-white p-5 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#f3c44c] font-bold block">
                  Ketertelusuran Pesanan
                </span>
                <h3 className="text-base font-bold">{selectedOrder.id} — {selectedOrder.productName}</h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Summary box */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#f8f7f2] border border-gray-200 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px]">Volume:</span>
                  <strong className="text-[#1a3626]">{selectedOrder.qty}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Status:</span>
                  <strong className="text-[#1a3626]">{selectedOrder.status}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Nilai PO:</span>
                  <strong className="text-[#1a3626]">{selectedOrder.invoiceAmount}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Est. Selesai:</span>
                  <strong className="text-[#1a3626]">{selectedOrder.estDelivery}</strong>
                </div>
              </div>

              {/* Craft Maker Partner Box */}
              <div className="p-4 border border-[#1a3626]/20 bg-[#1a3626]/5 text-xs space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#1a3626]">
                  <Users size={16} className="text-[#5c8770]" />
                  Mitra Pengrajin Daur Ulang:
                </div>
                <p className="text-gray-700">
                  {selectedOrder.craftPartner} — {selectedOrder.location}
                </p>
                <p className="text-gray-500 text-[11px]">
                  Batch ini memberdayakan 18 ibu rumah tangga dan pemuda kriya daerah dengan garansi kompensasi di atas UMR lokal.
                </p>
              </div>

              {/* Stepper Timeline */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a3626] mb-4">
                  Tahapan Rantai Pasok Sirkular
                </h4>
                <div className="space-y-4">
                  {selectedOrder.steps.map((st, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-6 h-6 rounded-none flex items-center justify-center text-xs font-bold shrink-0 ${
                            st.done
                              ? 'bg-[#1a3626] text-white'
                              : 'border-2 border-gray-300 text-gray-400 bg-white'
                          }`}
                        >
                          {st.done ? <CheckCircle2 size={14} /> : i + 1}
                        </div>
                        {i < selectedOrder.steps.length - 1 && (
                          <div className={`w-0.5 h-8 ${st.done ? 'bg-[#1a3626]' : 'bg-gray-200'}`} />
                        )}
                      </div>
                      <div className="pt-0.5">
                        <div className="flex items-center gap-2">
                          <h5 className={`text-xs font-bold ${st.current ? 'text-[#5c8770]' : 'text-[#1a3626]'}`}>
                            {st.title}
                          </h5>
                          {st.current && (
                            <span className="text-[10px] font-bold bg-[#f3c44c] text-[#1a3626] px-1.5 py-0.2">
                              Berjalan
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">{st.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer modal */}
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center shrink-0">
              <span className="text-[11px] text-gray-500 font-mono">
                ID Batch: {selectedOrder.traceabilityBatch}
              </span>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="px-5 py-2 bg-[#1a3626] text-white text-xs font-bold uppercase"
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
