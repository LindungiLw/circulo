"use client";

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  FileText, 
  ArrowRight,
  X,
  Clock
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

export default function DashboardOrders() {
  const [orders, setOrders] = useState<OrderItem[]>(ORDERS_LIST);
  const [filterStatus, setFilterStatus] = useState<string>('Semua');
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);

  useEffect(() => {
    getOrders().then((data) => {
      if (data && data.length > 0) {
        setOrders(data);
      }
    });
  }, []);

  const filteredOrders = orders.filter((o) => {
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
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#1a3626]">Manajemen Pesanan</h2>
          <p className="text-xs text-gray-500 mt-0.5">Pantau status produksi dan jadwal pengiriman.</p>
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap">
          {['Semua', 'Dalam Produksi', 'Inspeksi QC', 'Terkirim'].map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer border whitespace-nowrap shrink-0 ${
                filterStatus === st
                  ? 'bg-[#1a3626] text-white border-[#1a3626]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-3">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white border border-gray-200 p-4 sm:p-5 hover:border-[#1a3626] transition-all shadow-xs"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-5">
              
              <div className="space-y-1.5 lg:max-w-md">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#1a3626]">
                    {order.id}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 border ${getStatusBadge(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#1a3626]">{order.productName}</h3>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>Jumlah: <strong className="text-gray-800">{order.qty}</strong></span>
                  <span>Nilai: <strong className="text-gray-800">{order.invoiceAmount}</strong></span>
                </div>
              </div>

              <div className="flex-1 lg:max-w-xs space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">Progress:</span>
                  <span className="font-bold text-[#1a3626]">{order.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5">
                  <div
                    className="bg-[#1a3626] h-full"
                    style={{ width: `${order.progress}%` }}
                  />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                  <Clock size={12} className="text-[#5c8770]" />
                  <span>Target: {order.estDelivery}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                <button
                  type="button"
                  onClick={() => setSelectedOrder(order)}
                  className="flex-1 sm:flex-initial justify-center px-3.5 py-2 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Lacak <ArrowRight size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => alert(`Mengunduh dokumen ${order.id}...`)}
                  className="p-2 border border-gray-300 hover:border-[#1a3626] text-gray-600 hover:text-[#1a3626] transition-colors cursor-pointer"
                  title="Unduh Invoice"
                >
                  <FileText size={15} />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Clean Tracking Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg border-2 border-[#1a3626] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-[92vh] flex flex-col">
            
            <div className="bg-[#1a3626] text-white p-4 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] font-mono text-[#f3c44c] font-bold block uppercase">
                  Detail Pesanan
                </span>
                <h3 className="text-sm font-bold">{selectedOrder.id} — {selectedOrder.productName}</h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-white/70 hover:text-white cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 sm:p-5 space-y-5 overflow-y-auto flex-1">
              
              <div className="grid grid-cols-3 gap-2 p-3 bg-[#f8f7f2] border border-gray-200 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px]">Volume:</span>
                  <strong className="text-[#1a3626]">{selectedOrder.qty}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Nilai PO:</span>
                  <strong className="text-[#1a3626]">{selectedOrder.invoiceAmount}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Est. Kirim:</span>
                  <strong className="text-[#1a3626]">{selectedOrder.estDelivery}</strong>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a3626] mb-3">
                  Tahapan Produksi
                </h4>
                <div className="space-y-3">
                  {selectedOrder.steps.map((st, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          st.done
                            ? 'bg-[#1a3626] text-white'
                            : 'border border-gray-300 text-gray-400 bg-white'
                        }`}
                      >
                        {st.done ? <CheckCircle2 size={12} /> : i + 1}
                      </div>
                      <div className="flex-1 flex justify-between items-center text-xs">
                        <span className={`font-semibold ${st.current ? 'text-[#5c8770]' : 'text-[#1a3626]'}`}>
                          {st.title}
                        </span>
                        <span className="text-[11px] text-gray-400">{st.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="p-3 bg-gray-50 border-t border-gray-200 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-1.5 bg-[#1a3626] text-white text-xs font-bold uppercase"
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
