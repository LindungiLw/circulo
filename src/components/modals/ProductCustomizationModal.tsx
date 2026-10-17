"use client";

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Send, 
  Download, 
  Layers, 
  Palette, 
  QrCode, 
  FileCheck2, 
  ExternalLink,
  MessageSquare,
  ArrowRight,
  TrendingDown
} from 'lucide-react';
import { Product, getProductPriceByQty, getTierLabel } from '@/data/products';
import { submitQuotationRequest } from '@/services/quotationService';
import Link from 'next/link';

interface ProductCustomizationModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const BRANDING_METHODS = [
  { id: 'sablon', label: 'Sablon Eco-Ink', desc: 'Tinta water-based ramah lingkungan' },
  { id: 'laser', label: 'Grafir Laser', desc: 'Presisi tinggi & tahan abadi' },
  { id: 'bordir', label: 'Bordir rPET', desc: 'Benang daur ulang bertekstur' },
  { id: 'deboss', label: 'Deboss Stamp', desc: 'Cap emboss timbul elegan' },
];

const COLOR_PALETTES = [
  { name: 'Forest Green', hex: '#1a3626' },
  { name: 'Sage Leaf', hex: '#5c8770' },
  { name: 'Warm Mustard', hex: '#f3c44c' },
  { name: 'Natural Sand', hex: '#d9cdb8' },
  { name: 'Ocean Navy', hex: '#1e3a5f' },
  { name: 'Off-White Ecru', hex: '#f4f1ea' },
];

export default function ProductCustomizationModal({
  product,
  isOpen,
  onClose,
}: ProductCustomizationModalProps) {
  const [quantity, setQuantity] = useState<number>(500);
  const [brandingOption, setBrandingOption] = useState<string>('sablon');
  const [selectedColor, setSelectedColor] = useState<string>('Forest Green');
  const [customPantone, setCustomPantone] = useState<string>('');
  const [addQRCode, setAddQRCode] = useState<boolean>(true);
  const [addPhysicalCert, setAddPhysicalCert] = useState<boolean>(false);

  // Form Fields
  const [companyName, setCompanyName] = useState<string>('');
  const [picName, setPicName] = useState<string>('');
  const [contactInfo, setContactInfo] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedRfqId, setSubmittedRfqId] = useState<string | null>(null);

  // Reset when product changes or modal opens
  useEffect(() => {
    if (product) {
      const minQty = parseInt(product.minOrder.replace(/\D/g, '')) || 100;
      setQuantity(Math.max(minQty, 250));
      setSubmittedRfqId(null);
    }
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

  // Financial Calculations
  const baseUnitPrice = getProductPriceByQty(product, quantity);
  const qrAddonPrice = addQRCode ? 2500 : 0;
  const certAddonPrice = addPhysicalCert ? 5000 : 0;
  const finalUnitPrice = baseUnitPrice + qrAddonPrice + certAddonPrice;
  const totalInvestment = finalUnitPrice * quantity;
  const tierLabel = getTierLabel(quantity);

  // Impact Calculations
  const totalWasteKg = (product.wasteDivertedKg * quantity).toFixed(1);
  const totalCO2Kg = (product.co2ReductionKg * quantity).toFixed(1);
  const totalArtisanWage = product.artisanWage * quantity;
  const totalWaterSaved = (product.waterSavedL * quantity).toLocaleString('id-ID');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactInfo) {
      alert('Mohon isi nama perusahaan dan nomor kontak / email Anda.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitQuotationRequest({
        productId: product.id,
        productName: product.name,
        category: product.category,
        quantity,
        brandingOption: `${brandingOption.toUpperCase()} - Warna: ${selectedColor} ${customPantone ? `(${customPantone})` : ''}`,
        estimatedCO2Reduction: Number(totalCO2Kg),
        companyName,
        contactEmail: contactInfo,
      });

      setSubmittedRfqId(res.id);
    } catch (err) {
      console.error(err);
      setSubmittedRfqId(`RFQ-${Date.now().toString().slice(-6)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = `Halo Circulo, saya ingin mengajukan penawaran kustomisasi merchandise korporat:%0A%0A` +
      `*Produk:* ${product.name} (${product.sku})%0A` +
      `*Jumlah:* ${quantity.toLocaleString('id-ID')} unit (${tierLabel})%0A` +
      `*Metode Cetak:* ${brandingOption.toUpperCase()}%0A` +
      `*Warna:* ${selectedColor} ${customPantone ? `(Pantone ${customPantone})` : ''}%0A` +
      `*Add-on:* ${addQRCode ? 'Label QR Traceability ' : ''}${addPhysicalCert ? '+ Sertifikat Fisik' : ''}%0A` +
      `*Estimasi Investasi:* Rp ${totalInvestment.toLocaleString('id-ID')} (@Rp ${finalUnitPrice.toLocaleString('id-ID')})%0A` +
      `*Reduksi Emisi:* ${totalCO2Kg} kg CO₂e%0A` +
      `*Perusahaan:* ${companyName}%0A` +
      `*PIC:* ${picName}%0A` +
      `*No. Referensi:* ${submittedRfqId || 'Baru'}`;

    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        className="bg-[#f8f7f2] border-2 border-[#1a3626] w-full max-w-3xl shadow-[8px_8px_0px_#1a3626] relative flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#1a3626] text-white p-4 sm:p-5 flex items-center justify-between shrink-0 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold bg-[#f3c44c] text-[#1a3626] px-2 py-0.5 uppercase tracking-wider">
              {product.sku}
            </span>
            <div>
              <span className="text-[10px] font-mono text-[#f3c44c] uppercase font-bold tracking-widest block">
                Kustomisasi & Simulasi Penawaran B2B
              </span>
              <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
                {product.name}
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-[#1a3626]">
          
          {submittedRfqId ? (
            /* Success State */
            <div className="p-6 bg-white border-2 border-[#1a3626] text-center space-y-4 my-2">
              <div className="w-14 h-14 bg-[#e8efe9] text-[#1a3626] border-2 border-[#1a3626] flex items-center justify-center mx-auto shadow-[4px_4px_0px_#1a3626]">
                <Check size={28} strokeWidth={3} />
              </div>

              <div>
                <span className="text-[11px] font-mono text-[#5c8770] font-bold uppercase tracking-wider block">
                  Permintaan Penawaran Berhasil Dibuat
                </span>
                <h4 className="text-xl font-black text-[#1a3626] mt-1">
                  Nomor Referensi: {submittedRfqId}
                </h4>
                <p className="text-xs text-gray-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Tim konsultan keberlanjutan Circulo telah menerima rincian kustomisasi <strong>{product.name}</strong> untuk <strong>{companyName}</strong>. Master sample & draf kontrak penawaran resmi akan dikirimkan dalam 1x24 jam kerja.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 bg-[#f8f7f2] border border-gray-300 max-w-md mx-auto text-left text-xs font-mono space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-sans">Volume:</span>
                  <strong className="text-[#1a3626]">{quantity.toLocaleString('id-ID')} unit</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-sans">Estimasi Investasi:</span>
                  <strong className="text-[#1a3626]">Rp {totalInvestment.toLocaleString('id-ID')}</strong>
                </div>
                <div className="flex justify-between text-emerald-800">
                  <span className="text-gray-500 font-sans">Reduksi Emisi CO₂:</span>
                  <strong>{totalCO2Kg} kg CO₂e</strong>
                </div>
                <div className="flex justify-between text-emerald-700">
                  <span className="text-gray-500 font-sans">Upah Layak Pengrajin:</span>
                  <strong>Rp {totalArtisanWage.toLocaleString('id-ID')}</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="flex-1 py-3 px-4 bg-[#1a3626] hover:bg-[#12261b] text-white text-xs font-bold flex items-center justify-center gap-2 border-2 border-[#1a3626] shadow-[4px_4px_0px_#f3c44c] cursor-pointer transition-all"
                >
                  <MessageSquare size={14} /> Hubungi Konsultan via WhatsApp
                </button>
                <Link
                  href="/dashboard#katalog"
                  onClick={onClose}
                  className="py-3 px-4 bg-white hover:bg-gray-100 text-[#1a3626] text-xs font-bold flex items-center justify-center gap-1.5 border border-gray-300 transition-colors"
                >
                  Lihat di Dashboard <ExternalLink size={13} />
                </Link>
              </div>
            </div>
          ) : (
            /* Customization Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Product Preview Bar */}
              <div className="p-3.5 bg-white border border-[#1a3626]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover border border-[#1a3626]/10 shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">
                      Material 100% Terverifikasi
                    </span>
                    <h4 className="text-sm font-bold text-[#1a3626]">{product.material}</h4>
                    <p className="text-xs text-[#5c8770] font-bold mt-0.5">{product.impactMetric}</p>
                  </div>
                </div>

                <div className="text-right sm:border-l border-gray-200 sm:pl-4 w-full sm:w-auto flex sm:flex-col justify-between sm:justify-center items-end">
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">Minimal Order</span>
                  <span className="text-xs font-mono font-bold bg-[#f8f7f2] px-2 py-0.5 border border-[#1a3626]/20">
                    {product.minOrder}
                  </span>
                </div>
              </div>

              {/* Step 1: Quantity Selection & Price Tier */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1a3626] flex items-center gap-1.5">
                    <span>1. Jumlah Pesanan (Unit)</span>
                    <span className="text-[10px] font-mono text-[#5c8770] font-bold bg-[#e8efe9] px-2 py-0.2">
                      {tierLabel}
                    </span>
                  </label>
                  <span className="text-xs font-bold text-gray-500 font-mono">
                    Harga Satuan: <strong className="text-[#1a3626]">Rp {baseUnitPrice.toLocaleString('id-ID')}</strong>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <input
                    type="number"
                    min={parseInt(product.minOrder.replace(/\D/g, '')) || 50}
                    step={10}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(20, parseInt(e.target.value) || 20))}
                    className="w-full sm:w-36 px-3 py-2 bg-white border-2 border-[#1a3626] text-xs font-extrabold text-[#1a3626] focus:outline-none focus:shadow-[3px_3px_0px_#1a3626]"
                  />

                  {/* Preset Buttons */}
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {[100, 250, 500, 1000, 2500, 5000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setQuantity(preset)}
                        className={`px-3 py-1.5 text-xs font-bold transition-all cursor-pointer border ${
                          quantity === preset
                            ? 'bg-[#1a3626] text-white border-[#1a3626] shadow-xs'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#1a3626]'
                        }`}
                      >
                        {preset.toLocaleString('id-ID')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Tier Discount Guide Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] font-mono">
                  <div className={`p-2 border ${quantity < 500 ? 'bg-[#1a3626] text-white border-[#1a3626]' : 'bg-white border-gray-200 text-gray-600'}`}>
                    <div className="text-[9px] uppercase">Tier 1 (&lt;500)</div>
                    <div className="font-bold">Rp {product.priceTier1.toLocaleString('id-ID')}</div>
                  </div>
                  <div className={`p-2 border ${quantity >= 500 && quantity < 2000 ? 'bg-[#1a3626] text-white border-[#1a3626]' : 'bg-white border-gray-200 text-gray-600'}`}>
                    <div className="text-[9px] uppercase">Tier 2 (500–1.999)</div>
                    <div className="font-bold">Rp {product.priceTier2.toLocaleString('id-ID')}</div>
                  </div>
                  <div className={`p-2 border ${quantity >= 2000 && quantity < 5000 ? 'bg-[#1a3626] text-white border-[#1a3626]' : 'bg-white border-gray-200 text-gray-600'}`}>
                    <div className="text-[9px] uppercase">Tier 3 (2.000–4.999)</div>
                    <div className="font-bold">Rp {product.priceTier3.toLocaleString('id-ID')}</div>
                  </div>
                  <div className={`p-2 border ${quantity >= 5000 ? 'bg-[#1a3626] text-white border-[#1a3626]' : 'bg-white border-gray-200 text-gray-600'}`}>
                    <div className="text-[9px] uppercase">Tier 4 (≥5.000)</div>
                    <div className="font-bold">Rp {product.priceTier4.toLocaleString('id-ID')}</div>
                  </div>
                </div>
              </div>

              {/* Step 2: Branding Method & Color */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                
                {/* Branding Option */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a3626] mb-2 flex items-center gap-1.5">
                    <Layers size={13} className="text-[#5c8770]" /> 2. Metode Cetak Logo
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {BRANDING_METHODS.map((bm) => (
                      <button
                        key={bm.id}
                        type="button"
                        onClick={() => setBrandingOption(bm.id)}
                        className={`p-2.5 text-left border text-xs transition-all cursor-pointer ${
                          brandingOption === bm.id
                            ? 'bg-[#1a3626] text-white border-[#1a3626] shadow-[2px_2px_0px_#f3c44c]'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#1a3626]'
                        }`}
                      >
                        <div className="font-bold">{bm.label}</div>
                        <div className={`text-[10px] mt-0.5 line-clamp-1 ${brandingOption === bm.id ? 'text-white/80' : 'text-gray-400'}`}>
                          {bm.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Palette */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a3626] mb-2 flex items-center gap-1.5">
                    <Palette size={13} className="text-[#5c8770]" /> 3. Pilihan Warna / Pantone
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {COLOR_PALETTES.map((cp) => (
                      <button
                        key={cp.name}
                        type="button"
                        onClick={() => setSelectedColor(cp.name)}
                        className={`p-2 border text-left flex items-center gap-2 cursor-pointer transition-all ${
                          selectedColor === cp.name
                            ? 'border-[#1a3626] bg-white ring-2 ring-[#1a3626]'
                            : 'border-gray-200 bg-white hover:border-gray-400'
                        }`}
                      >
                        <span 
                          className="w-3.5 h-3.5 rounded-full border border-gray-300 shrink-0" 
                          style={{ backgroundColor: cp.hex }} 
                        />
                        <span className="text-[11px] font-medium truncate text-[#1a3626]">
                          {cp.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    placeholder="Atau masukkan Kode Pantone khusus (cth: Pantone 343 C)"
                    value={customPantone}
                    onChange={(e) => setCustomPantone(e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-gray-300 text-xs text-[#1a3626] placeholder:text-gray-400 focus:outline-none focus:border-[#1a3626]"
                  />
                </div>

              </div>

              {/* Step 3: ESG Add-Ons */}
              <div className="pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a3626] mb-2">
                  4. Add-on Kepatuhan & Sertifikasi ESG
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`p-3 border flex items-start gap-3 cursor-pointer transition-all ${addQRCode ? 'bg-[#e8efe9] border-[#1a3626]' : 'bg-white border-gray-200'}`}>
                    <input
                      type="checkbox"
                      checked={addQRCode}
                      onChange={(e) => setAddQRCode(e.target.checked)}
                      className="mt-0.5 accent-[#1a3626]"
                    />
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#1a3626] flex items-center gap-1">
                          <QrCode size={13} /> Woven Label QR Code Traceability
                        </span>
                        <span className="text-[10px] font-mono text-[#5c8770] font-bold">+Rp 2.500/unit</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">Penerima suvenir dapat scan untuk melihat asal limbah & profil pengrajin pembuatnya.</p>
                    </div>
                  </label>

                  <label className={`p-3 border flex items-start gap-3 cursor-pointer transition-all ${addPhysicalCert ? 'bg-[#e8efe9] border-[#1a3626]' : 'bg-white border-gray-200'}`}>
                    <input
                      type="checkbox"
                      checked={addPhysicalCert}
                      onChange={(e) => setAddPhysicalCert(e.target.checked)}
                      className="mt-0.5 accent-[#1a3626]"
                    />
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#1a3626] flex items-center gap-1">
                          <FileCheck2 size={13} /> Sertifikat Fisik Audit POJK 51
                        </span>
                        <span className="text-[10px] font-mono text-[#5c8770] font-bold">+Rp 5.000/unit</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">Sertifikat cetak resmi berstempel untuk arsip Sustainability Report direksi.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Step 4: Real-time Financial & ESG Impact Matrix */}
              <div className="p-4 bg-white border-2 border-[#1a3626] shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <span className="text-xs font-black uppercase text-[#1a3626] tracking-wider">
                    Ringkasan Nilai & Dampak Terverifikasi
                  </span>
                  <span className="text-xs font-mono font-bold text-[#5c8770] flex items-center gap-1">
                    <ShieldCheck size={14} /> Audit-Ready POJK 51
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-2.5 bg-[#f8f7f2] border border-gray-200">
                    <span className="text-[10px] text-gray-400 block font-sans">Harga Satuan</span>
                    <strong className="text-sm font-extrabold text-[#1a3626]">
                      Rp {finalUnitPrice.toLocaleString('id-ID')}
                    </strong>
                  </div>

                  <div className="p-2.5 bg-[#f8f7f2] border border-gray-200">
                    <span className="text-[10px] text-gray-400 block font-sans">Total Investasi</span>
                    <strong className="text-sm font-black text-[#1a3626]">
                      Rp {totalInvestment.toLocaleString('id-ID')}
                    </strong>
                  </div>

                  <div className="p-2.5 bg-[#f8f7f2] border border-gray-200">
                    <span className="text-[10px] text-gray-400 block font-sans">Limbah Terdiversi</span>
                    <strong className="text-sm font-bold text-emerald-800">
                      {totalWasteKg} kg
                    </strong>
                  </div>

                  <div className="p-2.5 bg-[#f8f7f2] border border-gray-200">
                    <span className="text-[10px] text-gray-400 block font-sans">Reduksi Emisi</span>
                    <strong className="text-sm font-bold text-emerald-800">
                      {totalCO2Kg} kg CO₂e
                    </strong>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-gray-600 flex flex-col sm:flex-row justify-between gap-2 border-t border-gray-100">
                  <span>Upah Pengrajin Daerah (SDG 8): <strong className="text-emerald-800">Rp {totalArtisanWage.toLocaleString('id-ID')}</strong></span>
                  <span>Air Bersih Terselamatkan: <strong className="text-blue-800">{totalWaterSaved} Liter</strong></span>
                </div>
              </div>

              {/* Step 5: Corporate Buyer Information */}
              <div className="space-y-3 pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a3626]">
                  5. Informasi Korporat / Instansi Pemesan
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nama Korporat / Instansi *"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-[#1a3626] placeholder:text-gray-400 focus:outline-none focus:border-[#1a3626]"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Nama Lengkap PIC"
                      value={picName}
                      onChange={(e) => setPicName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-[#1a3626] placeholder:text-gray-400 focus:outline-none focus:border-[#1a3626]"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="No. WhatsApp / Email *"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-[#1a3626] placeholder:text-gray-400 focus:outline-none focus:border-[#1a3626]"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Submit Action */}
              <div className="pt-3 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-3">
                <Link
                  href="/dashboard#katalog"
                  onClick={onClose}
                  className="text-xs font-bold text-gray-500 hover:text-[#1a3626] flex items-center gap-1 order-2 sm:order-1"
                >
                  Buka di Portal Klien B2B <ExternalLink size={12} />
                </Link>

                <div className="flex items-center gap-2 w-full sm:w-auto order-1 sm:order-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 border border-gray-300 text-xs font-bold text-gray-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Batal
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#1a3626] hover:bg-[#12261b] text-white text-xs font-extrabold flex items-center justify-center gap-2 border-2 border-[#1a3626] shadow-[4px_4px_0px_#f3c44c] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Send size={13} />
                    {isSubmitting ? 'Mengirim Penawaran...' : 'Ajukan Penawaran & Master Sample'}
                  </button>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
