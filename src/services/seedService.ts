import { seedProductsToFirestore } from './productService';
import { seedOrdersToFirestore } from './orderService';
import { updateCompanyProfile, DEFAULT_COMPANY_PROFILE } from './companyService';
import { isFirebaseConfigured } from '@/lib/firebase';

export async function seedAllInitialData(): Promise<{ success: boolean; message: string }> {
  if (!isFirebaseConfigured()) {
    return {
      success: false,
      message: 'Kunci konfigurasi Firebase belum terpasang di .env.local. Silakan masukkan variabel NEXT_PUBLIC_FIREBASE_* terlebih dahulu.',
    };
  }

  try {
    const productsOk = await seedProductsToFirestore();
    const ordersOk = await seedOrdersToFirestore();
    const companyOk = await updateCompanyProfile(DEFAULT_COMPANY_PROFILE);

    if (productsOk && ordersOk && companyOk.success) {
      return {
        success: true,
        message: 'Berhasil mengunggah 10 produk, 4 riwayat pesanan korporat, dan profil perusahaan ke Firebase Firestore!',
      };
    } else {
      return {
        success: false,
        message: 'Terjadi kendala saat melakukan seeding data ke Firebase. Periksa izin Firestore Security Rules Anda.',
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message: `Error seeding: ${error.message || error}`,
    };
  }
}
