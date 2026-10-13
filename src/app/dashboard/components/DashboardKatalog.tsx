"use client";

import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  X, 
  Send,
  Boxes,
  Leaf
} from 'lucide-react';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES, Product } from '@/data/products';
import { submitQuotationRequest } from '@/services/quotationService';

export default function DashboardKatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quotationQty, setQuotationQty] = useState<number>(100);
  const [brandingOption, setBrandingOption] = useState<'sablon' | 'laser' | 'bordir'>('sablon');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.material.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenQuotation = (product: Product) => {
    setSelectedProduct(product);
    setRequestSubmitted(false);
    const parsedQty = parseInt(product.minOrder.replace(/\D/g, '')) || 100;
    setQuotationQty(parsedQty);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setRequestSubmitted(false);
  };

  const handleSubmitQuotation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;
    setRequestSubmitted(true);

    try {
      const res = await submitQuotationRequest({
        productId: selectedProduct.id,
        productName: selectedProduct.name,
        category: selectedProduct.category,
        quantity: quotationQty,
        brandingOption,
        estimatedCO2Reduction: parseFloat((quotationQty * 0.45).toFixed(1)),
        companyName: 'PT Danareksa (Persero)',
        contactEmail: 'procurement@danareksa.co.id',
      });

      handleCloseModal();
      const storageLocation = res.source === 'firebase' ? 'Cloud Firestore Firebase' : 'Database Lokal';
      alert(`Permintaan penawaran untuk ${selectedProduct.name} (${quotationQty} unit) berhasil disimpan ke ${storageLocation} (ID: ${res.id}). Tim Circulo akan segera menghubungi Anda.`);
    } catch (err) {
      console.error(err);
      handleCloseModal();
      alert(`Permintaan penawaran telah diajukan.`);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#1a3626]">Katalog Produk B2B</h2>
          <p className="text-xs text-gray-500 mt-0.5">Pilihan merchandise ramah lingkungan siap kustom.</p>
        </div>

        <span className="text-xs font-mono font-bold bg-white border border-gray-200 px-3 py-1.5 text-gray-700">
          {PRODUCTS_DATA.length} Produk
        </span>
      </div>

      {/* Controls: Search & Category */}
      <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari produk atau material..."
            className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 text-xs text-[#1a3626] placeholder:text-gray-400 focus:outline-none focus:border-[#1a3626]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
            >
              <X size={13} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#1a3626] text-white border-[#1a3626]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-white border border-gray-200 p-6">
          <Boxes size={32} className="mx-auto text-gray-300 mb-2" />
          <p className="text-xs font-bold text-gray-600">Tidak ada produk ditemukan</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('Semua'); }}
            className="mt-3 px-3 py-1.5 bg-[#1a3626] text-white text-xs font-bold"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 hover:border-[#1a3626] transition-all flex flex-col justify-between shadow-xs group"
            >
              <div>
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-[#f8f7f2] relative border-b border-gray-100 flex items-center justify-center p-4 overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 bg-[#1a3626] text-[#f3c44c] text-[10px] font-mono uppercase font-bold px-2 py-0.5 z-10">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-gray-500 bg-white/90 px-2 py-0.5 border border-gray-200">
                    Min. {product.minOrder}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="p-4 space-y-2">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block">
                      {product.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#1a3626] mt-0.5">
                      {product.name}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                    <span className="text-gray-500 truncate max-w-[55%]">{product.material}</span>
                    <span className="font-bold text-[#5c8770]">{product.impactMetric}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 pt-0">
                <button
                  type="button"
                  onClick={() => handleOpenQuotation(product)}
                  className="w-full py-2 bg-[#f8f7f2] hover:bg-[#1a3626] text-[#1a3626] hover:text-white border border-gray-300 hover:border-[#1a3626] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  Ajukan Penawaran <ArrowRight size={12} />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Clean Quotation Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg border-2 border-[#1a3626] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            <div className="bg-[#1a3626] text-white p-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#f3c44c] font-bold block uppercase">
                  Pengadaan Korporat
                </span>
                <h3 className="text-sm font-bold">{selectedProduct.name}</h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-white/70 hover:text-white cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmitQuotation} className="p-5 space-y-4">
              
              <div className="flex items-center gap-3 p-2.5 bg-[#f8f7f2] border border-gray-200">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-12 h-12 object-contain bg-white border border-gray-200 p-1 shrink-0"
                />
                <div className="text-xs">
                  <div className="font-bold text-[#1a3626]">{selectedProduct.name}</div>
                  <div className="text-gray-500">{selectedProduct.material}</div>
                  <div className="font-bold text-[#5c8770]">{selectedProduct.impactMetric}</div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Jumlah Pesanan (Unit)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={20}
                    step={10}
                    value={quotationQty}
                    onChange={(e) => setQuotationQty(Math.max(20, parseInt(e.target.value) || 20))}
                    className="w-28 px-3 py-1.5 border border-gray-300 text-xs font-bold text-[#1a3626] focus:outline-none focus:border-[#1a3626]"
                  />
                  <div className="flex gap-1 text-xs">
                    {[100, 250, 500, 1000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setQuotationQty(preset)}
                        className={`px-2.5 py-1.5 border text-xs font-semibold cursor-pointer ${
                          quotationQty === preset ? 'bg-[#1a3626] text-white border-[#1a3626]' : 'border-gray-200 bg-white'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Metode Cetak Logo
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'sablon', label: 'Sablon Eco-Ink' },
                    { id: 'laser', label: 'Grafir Laser' },
                    { id: 'bordir', label: 'Bordir rPET' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setBrandingOption(opt.id as any)}
                      className={`p-2 border text-center cursor-pointer transition-colors ${
                        brandingOption === opt.id
                          ? 'border-[#1a3626] bg-[#1a3626] text-white font-bold'
                          : 'border-gray-200 bg-white text-gray-600'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#f8f7f2] border border-gray-200 text-xs flex items-center justify-between">
                <span className="text-gray-500">Estimasi Reduksi Emisi:</span>
                <span className="font-bold text-[#1a3626]">
                  {(quotationQty * 0.45).toFixed(1)} kg CO₂e
                </span>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-gray-300 text-xs font-bold text-gray-600 hover:bg-gray-50 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={requestSubmitted}
                  className="px-5 py-2 bg-[#1a3626] hover:bg-[#254d36] text-white text-xs font-bold uppercase flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Send size={12} />
                  {requestSubmitted ? 'Mengirim...' : 'Kirim Penawaran'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
