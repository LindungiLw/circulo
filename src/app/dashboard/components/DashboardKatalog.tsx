"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  Sparkles, 
  Check, 
  X, 
  FileCheck,
  Send,
  Boxes,
  Leaf
} from 'lucide-react';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES, Product } from '@/data/products';

export default function DashboardKatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quotationQty, setQuotationQty] = useState<number>(100);
  const [brandingOption, setBrandingOption] = useState<'sablon' | 'laser' | 'bordir'>('sablon');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // Filter products
  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.material.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenQuotation = (product: Product) => {
    setSelectedProduct(product);
    setRequestSubmitted(false);
    // Parse default min order number or fallback to 100
    const parsedQty = parseInt(product.minOrder.replace(/\D/g, '')) || 100;
    setQuotationQty(parsedQty);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setRequestSubmitted(false);
  };

  const handleSubmitQuotation = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
    setTimeout(() => {
      handleCloseModal();
      alert(`Permintaan penawaran resmi untuk ${selectedProduct?.name} (${quotationQty} pcs) berhasil dikirim. Tim procurement Circulo akan menghubungi Anda dalam waktu 1x24 jam.`);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h2 className="text-2xl font-black text-[#1a3626] tracking-tight">Katalog Eco-Merch B2B</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Koleksi merchandise ramah lingkungan siap kustom dengan sertifikasi ketertelusuran material.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold bg-[#f8f7f2] border border-gray-200 px-3 py-1.5 text-[#1a3626]">
            Total {PRODUCTS_DATA.length} Produk Tersedia
          </span>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari nama produk, material, atau kategori..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 text-xs text-[#1a3626] placeholder:text-gray-400 focus:outline-none focus:border-[#1a3626]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#1a3626] text-white border-[#1a3626]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#1a3626]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white border border-gray-200 p-8">
          <Boxes size={40} className="mx-auto text-gray-300 mb-3" />
          <h4 className="text-sm font-bold text-gray-700">Tidak ada produk yang cocok</h4>
          <p className="text-xs text-gray-400 mt-1">Coba gunakan kata kunci pencarian atau kategori lain.</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('Semua'); }}
            className="mt-4 px-4 py-2 bg-[#1a3626] text-white text-xs font-bold"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 hover:border-[#1a3626] transition-all flex flex-col justify-between shadow-xs group"
            >
              <div>
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-[#f8f7f2] relative border-b border-gray-100 flex items-center justify-center p-4 overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#1a3626] text-[#f3c44c] text-[10px] font-mono uppercase font-bold px-2 py-0.5 z-10">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-gray-500 font-semibold bg-white/90 px-2 py-0.5 border border-gray-200">
                    Min. {product.minOrder}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#5c8770] font-bold block mb-1">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-[#1a3626] group-hover:text-[#5c8770] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex justify-between items-center text-gray-500">
                      <span>Bahan Baku:</span>
                      <span className="font-semibold text-gray-700 text-right text-[11px] max-w-[60%] truncate">
                        {product.material}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500">
                      <span>Dampak Terukur:</span>
                      <span className="font-bold text-[#1a3626] text-right text-[11px]">
                        {product.impactMetric}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => handleOpenQuotation(product)}
                  className="w-full py-2.5 bg-[#f8f7f2] hover:bg-[#1a3626] text-[#1a3626] hover:text-white border border-[#1a3626]/20 hover:border-[#1a3626] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  Ajukan Penawaran <ArrowRight size={13} />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Quotation & Sample Request Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-xl border-2 border-[#1a3626] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#1a3626] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#f3c44c] font-bold block">
                  Pengadaan Korporat B2B
                </span>
                <h3 className="text-base font-bold">Minta Penawaran / Sampel Produk</h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmitQuotation} className="p-6 space-y-5">
              
              {/* Product preview */}
              <div className="flex items-center gap-4 p-3 bg-[#f8f7f2] border border-gray-200">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-16 h-16 object-contain bg-white border border-gray-200 p-1 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#1a3626]">{selectedProduct.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{selectedProduct.material}</p>
                  <span className="inline-block text-[11px] font-bold text-[#5c8770] mt-1">
                    {selectedProduct.impactMetric}
                  </span>
                </div>
              </div>

              {/* Quantity Input */}
              <div>
                <label className="block text-xs font-bold text-[#1a3626] uppercase mb-1.5">
                  Jumlah Pesanan (Unit / Pcs)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={20}
                    step={10}
                    value={quotationQty}
                    onChange={(e) => setQuotationQty(Math.max(20, parseInt(e.target.value) || 20))}
                    className="flex-1 px-3 py-2 border border-gray-300 text-sm font-bold text-[#1a3626] focus:outline-none focus:border-[#1a3626]"
                  />
                  <div className="flex gap-1.5 text-xs">
                    {[100, 250, 500, 1000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setQuotationQty(preset)}
                        className={`px-2.5 py-2 border text-xs font-semibold cursor-pointer ${
                          quotationQty === preset ? 'bg-[#1a3626] text-white border-[#1a3626]' : 'border-gray-300 bg-white'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">Minimal pemesanan: {selectedProduct.minOrder}</p>
              </div>

              {/* Customization & Branding */}
              <div>
                <label className="block text-xs font-bold text-[#1a3626] uppercase mb-1.5">
                  Metode Personalisasi Logo Perusahaan
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'sablon', label: 'Sablon Eco-Ink', sub: 'Tinta water-based' },
                    { id: 'laser', label: 'Grafir Laser', sub: 'Presisi kayu/kertas' },
                    { id: 'bordir', label: 'Bordir Benang rPET', sub: 'Kain & tekstil' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setBrandingOption(opt.id as any)}
                      className={`p-2.5 border text-left cursor-pointer transition-colors ${
                        brandingOption === opt.id
                          ? 'border-[#1a3626] bg-[#1a3626]/5 font-bold text-[#1a3626]'
                          : 'border-gray-200 bg-white text-gray-600'
                      }`}
                    >
                      <div className="text-xs font-bold">{opt.label}</div>
                      <div className="text-[10px] text-gray-500">{opt.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculated Impact Estimate */}
              <div className="p-3.5 bg-[#1a3626]/5 border border-[#1a3626]/20 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#1a3626]">
                  <Leaf size={14} className="text-[#5c8770]" />
                  Estimasi Kontribusi ESG untuk {quotationQty} Unit:
                </div>
                <p className="text-gray-600 text-[11px]">
                  • Estimasi pengurangan emisi: <strong>{(quotationQty * 0.45).toFixed(1)} kg CO₂e</strong><br />
                  • Kontribusi jam kerja pengrajin lokal: <strong>{Math.ceil(quotationQty * 0.15)} jam kerja fair-wage</strong>
                </p>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-3 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={requestSubmitted}
                  className="px-6 py-2 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Send size={13} />
                  {requestSubmitted ? 'Mengirim Permintaan...' : 'Kirim Pengajuan PO'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
