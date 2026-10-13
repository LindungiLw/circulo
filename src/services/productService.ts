import { db, isFirebaseConfigured } from '@/lib/firebase';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { PRODUCTS_DATA, Product } from '@/data/products';

// Fetch products from Firestore or fallback to PRODUCTS_DATA
export async function getProducts(): Promise<Product[]> {
  if (isFirebaseConfigured() && db) {
    try {
      const productsCol = collection(db, 'products');
      const snapshot = await getDocs(productsCol);
      if (!snapshot.empty) {
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];
      }
    } catch (error) {
      console.warn('Could not read products from Firestore, using static list:', error);
    }
  }

  return PRODUCTS_DATA;
}

// Seed all 10 products into Firestore
export async function seedProductsToFirestore(): Promise<boolean> {
  if (!isFirebaseConfigured() || !db) return false;

  try {
    for (const product of PRODUCTS_DATA) {
      await setDoc(doc(db, 'products', product.id), product);
    }
    return true;
  } catch (error) {
    console.error('Failed to seed products to Firestore:', error);
    return false;
  }
}
