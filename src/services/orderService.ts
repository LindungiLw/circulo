import { db, isFirebaseConfigured } from '@/lib/firebase';
import { collection, getDocs, setDoc, doc, query, orderBy } from 'firebase/firestore';

export interface OrderItem {
  id: string;
  productName: string;
  qty: string;
  poDate: string;
  estDelivery: string;
  status: 'Dalam Produksi' | 'Inspeksi QC' | 'Terkirim';
  progress: number;
  craftPartner: string;
  invoiceAmount: string;
  steps: {
    title: string;
    date: string;
    done: boolean;
    current?: boolean;
  }[];
}

export const DEFAULT_ORDERS: OrderItem[] = [
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

// Fetch orders from Firestore or fallback to default
export async function getOrders(): Promise<OrderItem[]> {
  if (isFirebaseConfigured() && db) {
    try {
      const ordersCol = collection(db, 'orders');
      const snapshot = await getDocs(ordersCol);
      if (!snapshot.empty) {
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as OrderItem[];
      }
    } catch (error) {
      console.warn('Could not read orders from Firestore, using default:', error);
    }
  }

  return DEFAULT_ORDERS;
}

// Seed default orders to Firestore
export async function seedOrdersToFirestore(): Promise<boolean> {
  if (!isFirebaseConfigured() || !db) return false;

  try {
    for (const order of DEFAULT_ORDERS) {
      await setDoc(doc(db, 'orders', order.id), order);
    }
    return true;
  } catch (error) {
    console.error('Failed to seed orders to Firestore:', error);
    return false;
  }
}
