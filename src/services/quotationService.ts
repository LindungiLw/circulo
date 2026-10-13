import { db, isFirebaseConfigured } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy } from 'firebase/firestore';

export interface QuotationRequest {
  id?: string;
  productId: string;
  productName: string;
  category: string;
  quantity: number;
  brandingOption: string;
  estimatedCO2Reduction: number;
  companyName: string;
  contactEmail: string;
  status: 'Menunggu Review' | 'Diproses' | 'Disetujui';
  createdAt?: any;
}

const LOCAL_STORAGE_KEY = 'circulo_local_quotations';

// Save quotation to Firebase (fallback to localStorage if not configured)
export async function submitQuotationRequest(data: Omit<QuotationRequest, 'status'>): Promise<{ success: boolean; id: string; source: 'firebase' | 'local' }> {
  const newQuotation: QuotationRequest = {
    ...data,
    status: 'Menunggu Review',
  };

  // 1. Try Firebase Firestore
  if (isFirebaseConfigured() && db) {
    try {
      const docRef = await addDoc(collection(db, 'quotations'), {
        ...newQuotation,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: docRef.id, source: 'firebase' };
    } catch (error) {
      console.warn('Failed to save quotation to Firestore, falling back to local storage:', error);
    }
  }

  // 2. Local fallback
  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    const generatedId = `QUO-${Date.now().toString().slice(-6)}`;
    const record = {
      ...newQuotation,
      id: generatedId,
      createdAt: new Date().toISOString(),
    };
    existing.unshift(record);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
    return { success: true, id: generatedId, source: 'local' };
  } catch (e) {
    return { success: true, id: `QUO-${Date.now().toString().slice(-6)}`, source: 'local' };
  }
}

// Fetch all quotations (for admin or review)
export async function getQuotationRequests(): Promise<QuotationRequest[]> {
  if (isFirebaseConfigured() && db) {
    try {
      const q = query(collection(db, 'quotations'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as QuotationRequest[];
    } catch (error) {
      console.warn('Failed to fetch from Firestore, checking local storage:', error);
    }
  }

  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}
