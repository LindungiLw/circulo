export interface Product {
  id: string;
  sku: string;
  name: string;
  category: 'Semua' | 'Tas & Pouch' | 'Alat Kantor' | 'Aksesoris & ID' | 'Paket VIP';
  description: string;
  image: string;
  badge?: string;
  material: string;
  minOrder: string;
  impactMetric: string;
  // Financial Data from Matrix
  cogsVariabel: number;
  artisanWage: number;
  wasteBankShare: number;
  priceTier1: number; // < 500
  priceTier2: number; // 500 - 1.999
  priceTier3: number; // 2.000 - 4.999
  priceTier4: number; // >= 5.000
  // Detailed ESG Metrics
  wasteDivertedKg: number;
  co2ReductionKg: number;
  bottlesEquivalent?: number;
  waterSavedL: number;
}

export const PRODUCT_CATEGORIES = [
  'Semua',
  'Tas & Pouch',
  'Alat Kantor',
  'Aksesoris & ID',
  'Paket VIP',
] as const;

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'tote-bag',
    sku: 'P01',
    name: 'Eco Tote Bag Daur Ulang',
    category: 'Tas & Pouch',
    description: 'Terbuat dari 100% serat daur ulang botol plastik PET (rPET) berdaya tahan tinggi.',
    image: '/Produk/Tote Bag.png',
    badge: 'Best Seller',
    material: 'Serat rPET & Benang Daur Ulang',
    minOrder: '50 pcs',
    impactMetric: '≈ 8 botol plastik / unit',
    artisanWage: 15000,
    wasteBankShare: 12000,
    cogsVariabel: 34000,
    priceTier1: 48000,
    priceTier2: 45000,
    priceTier3: 42500,
    priceTier4: 40000,
    wasteDivertedKg: 0.18,
    co2ReductionKg: 0.45,
    bottlesEquivalent: 8,
    waterSavedL: 60,
  },
  {
    id: 'laptop-sleeve',
    sku: 'P02',
    name: 'Laptop Sleeve / Pouch Daur Ulang',
    category: 'Tas & Pouch',
    description: 'Pelindung laptop empuk dari residu kain tekstil konveksi dengan finishing jahitan presisi.',
    image: '/Produk/Laptop Sleeve.png',
    badge: 'Kualitas Premium',
    material: 'Limbah Tekstil Upcycled & Busa rPET',
    minOrder: '30 pcs',
    impactMetric: '0.35 kg limbah kain / unit',
    artisanWage: 25000,
    wasteBankShare: 20000,
    cogsVariabel: 55000,
    priceTier1: 80000,
    priceTier2: 75000,
    priceTier3: 71000,
    priceTier4: 67000,
    wasteDivertedKg: 0.35,
    co2ReductionKg: 0.85,
    waterSavedL: 110,
  },
  {
    id: 'lanyard',
    sku: 'P03',
    name: 'Lanyard & ID Holder Daur Ulang',
    category: 'Aksesoris & ID',
    description: 'Tali anyaman rPET halus dengan holder ID card berbahan plastik cacah terdaur ulang.',
    image: '/Produk/Lanyard.png',
    badge: 'Event Essential',
    material: 'Tali Anyaman rPET & Plastik HDPE',
    minOrder: '100 pcs',
    impactMetric: '≈ 3 botol plastik / unit',
    artisanWage: 8000,
    wasteBankShare: 6000,
    cogsVariabel: 18000,
    priceTier1: 27000,
    priceTier2: 25000,
    priceTier3: 23500,
    priceTier4: 22000,
    wasteDivertedKg: 0.06,
    co2ReductionKg: 0.15,
    bottlesEquivalent: 3,
    waterSavedL: 15,
  },
  {
    id: 'notebook',
    sku: 'P04',
    name: 'Notebook Recycled Paper',
    category: 'Alat Kantor',
    description: 'Kertas daur ulang bebas klorin dengan cover kokoh berserat biomassa alami.',
    image: '/Produk/Notebook.png',
    badge: 'Favorit Korporat',
    material: 'Kertas Daur Ulang & Serat Alami',
    minOrder: '50 pcs',
    impactMetric: '0.25 kg CO₂ tereduksi / unit',
    artisanWage: 8000,
    wasteBankShare: 7000,
    cogsVariabel: 19200,
    priceTier1: 33000,
    priceTier2: 30000,
    priceTier3: 28500,
    priceTier4: 27000,
    wasteDivertedKg: 0.20,
    co2ReductionKg: 0.25,
    waterSavedL: 40,
  },
  {
    id: 'card-holder',
    sku: 'P05',
    name: 'Card Holder / Wallet Upcycled',
    category: 'Aksesoris & ID',
    description: 'Dompet kartu elegan bermotif terrazzo dari lelehan plastik botol daur ulang.',
    image: '/Produk/Card Holder.png',
    badge: 'Aksen Terrazzo',
    material: 'Plastik Daur Ulang HDPE',
    minOrder: '50 pcs',
    impactMetric: '0.08 kg residu plastik / unit',
    artisanWage: 10000,
    wasteBankShare: 7000,
    cogsVariabel: 21100,
    priceTier1: 35000,
    priceTier2: 32000,
    priceTier3: 30500,
    priceTier4: 29000,
    wasteDivertedKg: 0.08,
    co2ReductionKg: 0.18,
    waterSavedL: 20,
  },
  {
    id: 'drawstring-bag',
    sku: 'P06',
    name: 'Drawstring Bag Upcycled',
    category: 'Tas & Pouch',
    description: 'Tas serut praktis untuk seminar & perlengkapan outdoor berbahan kain daur ulang.',
    image: '/Produk/Drawstring Bag.png',
    badge: 'Populer Event',
    material: 'Kain Upcycled & Tali Katun Daur Ulang',
    minOrder: '50 pcs',
    impactMetric: '0.15 kg residu kain / unit',
    artisanWage: 12000,
    wasteBankShare: 9000,
    cogsVariabel: 26900,
    priceTier1: 41000,
    priceTier2: 38000,
    priceTier3: 36000,
    priceTier4: 34000,
    wasteDivertedKg: 0.15,
    co2ReductionKg: 0.35,
    waterSavedL: 45,
  },
  {
    id: 'pencil-case',
    sku: 'P07',
    name: 'Pencil Case Upcycled',
    category: 'Tas & Pouch',
    description: 'Tempat alat tulis dan kabel portabel dari limbah kanvas dengan resleting tahan lama.',
    image: '/Produk/Pencil Case.png',
    badge: 'Multifungsi',
    material: 'Limbah Kanvas & Logam Daur Ulang',
    minOrder: '50 pcs',
    impactMetric: '0.12 kg limbah kanvas / unit',
    artisanWage: 10000,
    wasteBankShare: 7000,
    cogsVariabel: 21200,
    priceTier1: 35000,
    priceTier2: 32000,
    priceTier3: 30500,
    priceTier4: 29000,
    wasteDivertedKg: 0.12,
    co2ReductionKg: 0.28,
    waterSavedL: 35,
  },
  {
    id: 'keychain',
    sku: 'P08',
    name: 'Keychain Recycled Plastic',
    category: 'Aksesoris & ID',
    description: 'Gantungan kunci kustom logo bermotif unik hasil cetak tutup botol plastik daur ulang.',
    image: '/Produk/Keychain.png',
    badge: 'Souvenir Eksklusif',
    material: 'Plastik Tutup Botol HDPE',
    minOrder: '100 pcs',
    impactMetric: '≈ 2 botol plastik / unit',
    artisanWage: 4000,
    wasteBankShare: 3000,
    cogsVariabel: 9650,
    priceTier1: 17000,
    priceTier2: 15000,
    priceTier3: 14000,
    priceTier4: 13000,
    wasteDivertedKg: 0.04,
    co2ReductionKg: 0.10,
    bottlesEquivalent: 2,
    waterSavedL: 10,
  },
  {
    id: 'desk-organizer',
    sku: 'P09',
    name: 'Desk Organizer Recycled Material',
    category: 'Alat Kantor',
    description: 'Wadah meja modular dari komposit plastik daur ulang dan residu biomassa padat.',
    image: '/Produk/Desk Organizer.png',
    badge: 'Desain Modular',
    material: 'Komposit Plastik HDPE & Biomassa',
    minOrder: '25 pcs',
    impactMetric: '0.30 kg plastik padat / unit',
    artisanWage: 12000,
    wasteBankShare: 10000,
    cogsVariabel: 28300,
    priceTier1: 43000,
    priceTier2: 40000,
    priceTier3: 38000,
    priceTier4: 36000,
    wasteDivertedKg: 0.30,
    co2ReductionKg: 0.65,
    waterSavedL: 70,
  },
  {
    id: 'gift-set',
    sku: 'P10',
    name: 'Eco Corporate Gift Set (custom combo)',
    category: 'Paket VIP',
    description: 'Paket hampers onboarding & event terpadu dalam box packaging ramah lingkungan.',
    image: '/Produk/Gift Set.png',
    badge: 'Paket Lengkap',
    material: 'Kombinasi Eco-Items & Box Daur Ulang',
    minOrder: '20 box',
    impactMetric: '1.10 kg CO₂ tereduksi / set',
    artisanWage: 18000,
    wasteBankShare: 15000,
    cogsVariabel: 45000,
    priceTier1: 65000,
    priceTier2: 60000,
    priceTier3: 57000,
    priceTier4: 54000,
    wasteDivertedKg: 0.45,
    co2ReductionKg: 1.10,
    bottlesEquivalent: 15,
    waterSavedL: 140,
  },
];

// Helper to get unit price by quantity
export function getProductPriceByQty(product: Product, qty: number): number {
  if (qty >= 5000) return product.priceTier4;
  if (qty >= 2000) return product.priceTier3;
  if (qty >= 500) return product.priceTier2;
  return product.priceTier1;
}

// Helper to get tier label
export function getTierLabel(qty: number): string {
  if (qty >= 5000) return 'Tier 4 (≥5.000 unit)';
  if (qty >= 2000) return 'Tier 3 (2.000–4.999 unit)';
  if (qty >= 500) return 'Tier 2 (500–1.999 unit)';
  return 'Tier 1 (<500 unit)';
}
