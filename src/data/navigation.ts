import { SolutionItem, NavItem } from '@/types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Dampak ESG', href: '#dampak' },
  { label: 'Katalog Produk', href: '#katalog' },
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'custom-merch',
    title: 'Kustom Eco-Merch',
    description: 'Seminar & onboarding kit dari 100% daur ulang limbah terverifikasi.',
    category: 'PENGADAAN',
    icon: 'Package',
    href: '#katalog',
  },
  {
    id: 'closed-loop',
    title: 'Closed-Loop Kantor',
    description: 'Daur ulang limbah seragam & botol kantor menjadi aset perusahaan baru.',
    category: 'SIRKULARITAS',
    icon: 'Recycle',
    href: '#dampak',
  },
  {
    id: 'local-empowerment',
    title: '120+ Maker Lokal',
    description: 'Pemberdayaan pengrajin kriya daerah berstandar upah layak (fair-wage).',
    category: 'DAMPAK SOSIAL',
    icon: 'Users',
    href: '#dampak',
  },
  {
    id: 'esg-reporting',
    title: 'Sertifikasi Audit ESG',
    description: 'Metrik reduksi emisi karbon & pelaporan jejak limbah per batch pesanan.',
    category: 'AUDIT & ESG',
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
