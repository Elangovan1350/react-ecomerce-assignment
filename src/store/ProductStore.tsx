import { create } from "zustand";
interface IUseStoreProduct {
  products: Iproduct[];
  getProducts: (products: Iproduct[]) => void;
}
export interface Iproduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Irating;
}

export interface Irating {
  rate: number;
  count: number;
}
export const useStoreProducts = create<IUseStoreProduct>((set) => ({
  products: [],
  getProducts: (products) => set((state) => ({ ...state, products })),
}));
