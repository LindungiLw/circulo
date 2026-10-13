import { db, isFirebaseConfigured } from '@/lib/firebase';
import { getDoc, setDoc, doc } from 'firebase/firestore';

export interface CompanyProfile {
  name: string;
  npwp: string;
  address: string;
  picName: string;
  picEmail: string;
  picPhone: string;
  notifications: {
    waQC: boolean;
    emailInvoice: boolean;
    monthlyESG: boolean;
  };
}

export const DEFAULT_COMPANY_PROFILE: CompanyProfile = {
  name: 'PT Danareksa (Persero)',
  npwp: '01.234.567.8-012.000',
  address: 'Jl. Ganesha 2, Lot B1, Deltamas, Pasirranji, Central Cikarang, Bekasi Regency, West Java 17530',
  picName: 'Arya Pratama',
  picEmail: 'procurement@danareksa.co.id',
  picPhone: '+62 811-2345-6789',
  notifications: {
    waQC: true,
    emailInvoice: true,
    monthlyESG: true,
  },
};

const LOCAL_STORAGE_COMPANY_KEY = 'circulo_company_profile';

// Fetch company profile from Firestore or local storage/default
export async function getCompanyProfile(): Promise<CompanyProfile> {
  if (isFirebaseConfigured() && db) {
    try {
      const companyDoc = await getDoc(doc(db, 'companies', 'danareksa'));
      if (companyDoc.exists()) {
        return companyDoc.data() as CompanyProfile;
      }
    } catch (error) {
      console.warn('Could not read company profile from Firestore:', error);
    }
  }

  try {
    const cached = localStorage.getItem(LOCAL_STORAGE_COMPANY_KEY);
    if (cached) return JSON.parse(cached);
  } catch {}

  return DEFAULT_COMPANY_PROFILE;
}

// Update company profile
export async function updateCompanyProfile(profile: CompanyProfile): Promise<{ success: boolean; source: 'firebase' | 'local' }> {
  // Try Firebase
  if (isFirebaseConfigured() && db) {
    try {
      await setDoc(doc(db, 'companies', 'danareksa'), profile, { merge: true });
      return { success: true, source: 'firebase' };
    } catch (error) {
      console.warn('Could not update Firestore company profile:', error);
    }
  }

  // Fallback local
  try {
    localStorage.setItem(LOCAL_STORAGE_COMPANY_KEY, JSON.stringify(profile));
  } catch {}

  return { success: true, source: 'local' };
}
