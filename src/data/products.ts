export interface Product {
  id: string;
  name: string;
  category: 'Semua' | 'Tas & Pouch' | 'Alat Kantor' | 'Aksesoris & ID' | 'Paket VIP';
  description: string;
  image: string;
  badge?: string;
  material: string;
  minOrder: string;
  impactMetric: string;
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
    name: 'Eco Tote Bag Daur Ulang',
    category: 'Tas & Pouch',
    description: 'Terbuat dari 100% serat daur ulang botol plastik PET (rPET) berdaya tahan tinggi.',
    image: '/Produk/Tote Bag.png',
    badge: 'Best Seller',
    material: 'Serat rPET & Benang Daur Ulang',
    minOrder: '50 pcs',
    impactMetric: '≈ 8 botol plastik / unit',
  },
  {
    id: 'notebook',
    name: 'Notebook Recycled Paper',
    category: 'Alat Kantor',
    description: 'Kertas daur ulang bebas klorin dengan cover kokoh berserat biomassa alami.',
    image: '/Produk/Notebook.png',
    badge: 'Favorit Korporat',
    material: 'Kertas Daur Ulang & Serat Alami',
    minOrder: '50 pcs',
    impactMetric: '0.25 kg CO₂ tereduksi / unit',
  },
  {
    id: 'gift-set',
    name: 'Eco Corporate Gift Set',
    category: 'Paket VIP',
    description: 'Paket hampers onboarding & event terpadu dalam box packaging ramah lingkungan.',
    image: '/Produk/Gift Set.png',
    badge: 'Paket Lengkap',
    material: 'Kombinasi Eco-Items & Box Daur Ulang',
    minOrder: '20 box',
    impactMetric: '1.10 kg CO₂ tereduksi / set',
  },
  {
    id: 'lanyard',
    name: 'Lanyard & ID Holder',
    category: 'Aksesoris & ID',
    description: 'Tali anyaman rPET halus dengan holder ID card berbahan plastik cacah terdaur ulang.',
    image: '/Produk/Lanyard.png',
    badge: 'Event Essential',
    material: 'Tali Anyaman rPET & Plastik HDPE',
    minOrder: '100 pcs',
    impactMetric: '≈ 3 botol plastik / unit',
  },
  {
    id: 'laptop-sleeve',
    name: 'Laptop Sleeve Upcycled',
    category: 'Tas & Pouch',
    description: 'Pelindung laptop empuk dari residu kain tekstil konveksi dengan finishing jahitan presisi.',
    image: '/Produk/Laptop Sleeve.png',
    badge: 'Kualitas Premium',
    material: 'Limbah Tekstil Upcycled & Busa rPET',
    minOrder: '30 pcs',
    impactMetric: '0.35 kg limbah kain / unit',
  },
  {
    id: 'desk-organizer',
    name: 'Desk Organizer Recycled',
    category: 'Alat Kantor',
    description: 'Wadah meja modular dari komposit plastik daur ulang dan residu biomassa padat.',
    image: '/Produk/Desk Organizer.png',
    badge: 'Desain Modular',
    material: 'Komposit Plastik HDPE & Biomassa',
    minOrder: '25 pcs',
    impactMetric: '0.30 kg plastik padat / unit',
  },
  {
    id: 'drawstring-bag',
    name: 'Drawstring Bag (Tas Serut)',
    category: 'Tas & Pouch',
    description: 'Tas serut praktis untuk seminar & perlengkapan outdoor berbahan kain daur ulang.',
    image: '/Produk/Drawstring Bag.png',
    badge: 'Populer Event',
    material: 'Kain Upcycled & Tali Katun Daur Ulang',
    minOrder: '50 pcs',
    impactMetric: '0.15 kg residu kain / unit',
  },
  {
    id: 'card-holder',
    name: 'Eco Card Holder Minimalis',
    category: 'Aksesoris & ID',
    description: 'Dompet kartu elegan bermotif terrazzo dari lelehan plastik botol daur ulang.',
    image: '/Produk/Card Holder.png',
    badge: 'Aksen Terrazzo',
    material: 'Plastik Daur Ulang HDPE',
    minOrder: '50 pcs',
    impactMetric: '0.08 kg residu plastik / unit',
  },
  {
    id: 'keychain',
    name: 'Gantungan Kunci Terrazzo',
    category: 'Aksesoris & ID',
    description: 'Keychain kustom logo bermotif unik hasil cetak tutup botol plastik daur ulang.',
    image: '/Produk/Keychain.png',
    badge: 'Souvenir Eksklusif',
    material: 'Plastik Tutup Botol HDPE',
    minOrder: '100 pcs',
    impactMetric: '≈ 2 botol plastik / unit',
  },
  {
    id: 'pencil-case',
    name: 'Pencil Case / Pouch Serbaguna',
    category: 'Tas & Pouch',
    description: 'Tempat alat tulis dan kabel portabel dari limbah kanvas dengan resleting tahan lama.',
    image: '/Produk/Pencil Case.png',
    badge: 'Multifungsi',
    material: 'Limbah Kanvas & Logam Daur Ulang',
    minOrder: '50 pcs',
    impactMetric: '0.12 kg limbah kanvas / unit',
  },
];
