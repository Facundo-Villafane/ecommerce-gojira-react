import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "productsGojira", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall prod items
export const getAllProductsGojira = async () => {
  const items = await getDocs(
    query(collection(firestore, "productsGojira"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
