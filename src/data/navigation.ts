import { SolutionItem, NavItem } from '@/types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Dampak ESG', href: '#dampak' },
  { label: 'Katalog Produk', href: '#katalog' },
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'custom-merch',
    title: 'Kustom Eco-Merch B2B',
    description: 'Onboarding kit, seminar kit, dan hampers VIP terbuat 100% dari limbah daur ulang dengan logo korporat Anda.',
    category: 'PENGADAAN MERCHANDISE',
    icon: 'Package',
    href: '#katalog',
  },
  {
    id: 'closed-loop',
    title: 'Program Closed-Loop Korporat',
    description: 'Kumpulkan limbah seragam bekas atau botol kantor Anda untuk disulap kembali menjadi produk fungsional perusahaan.',
    category: 'CIRCULAR WASTE MANAGEMENT',
    icon: 'Recycle',
    href: '#dampak',
  },
  {
    id: 'local-empowerment',
    title: 'Pemberdayaan 120+ Pengrajin',
    description: 'Dukung pengrajin kriya dan komunitas penjahit lokal dengan jaminan standar upah layak (fair-wage).',
    category: 'DAMPAK SOSIAL',
    icon: 'Users',
    href: '#dampak',
  },
  {
    id: 'esg-reporting',
    title: 'Audit & Pelaporan ESG Batch',
    description: 'Dapatkan sertifikat digital dan QR code jejak karbon per batch pesanan untuk laporan keberlanjutan tahunan.',
    category: 'TRANSPARANSI & KEPATUHAN',
    icon: 'FileCheck',
    href: '#dampak',
  },
];

export const PRODUCT_IMPACT_RATES = {
  totebag: { name: 'Eco Totebag (rPET)', bottlesPerUnit: 8, plasticKg: 0.18, co2Kg: 0.45, waterL: 60 },
  notebook: { name: 'Notebook Recycled Paper', bottlesPerUnit: 0, plasticKg: 0.05, co2Kg: 0.25, waterL: 40 },
  lanyard: { name: 'Lanyard & ID Holder', bottlesPerUnit: 3, plasticKg: 0.06, co2Kg: 0.15, waterL: 15 },
  giftset: { name: 'Eco Corporate Gift Set', bottlesPerUnit: 15, plasticKg: 0.45, co2Kg: 1.10, waterL: 140 },
};
